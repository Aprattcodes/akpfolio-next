"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import * as THREE from "three";

type Props = {
  fadeStartPx?: number;
  fadeEndPx?: number;
  baseColor?: string;
};

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const fragmentShader = `
precision mediump float;
varying vec2 vUv;
uniform float u_time;
uniform vec3 u_baseColor;
uniform float u_opacity;

// Simple hash for random noise
float rand(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  vec2 uv = vUv;

  // Layer 3 noise samples at different frequencies and speeds for depth
  float n1 = rand(uv * 180.0 + u_time * 50.0);
  float n2 = rand(uv * 240.0 - u_time * 60.0);
  float n3 = rand(uv * 320.0 + u_time * 30.0);

  // Blend the layers
  float n = (n1 + n2 + n3) / 3.0;

  // Add grain sparkle - tiny temporal flicker
  n += sin(u_time * 120.0 + n * 40.0) * 0.02;

  // Tighten contrast for more defined grain
  n = pow(clamp(n, 0.0, 1.0), 1.2);

  // Subtle vignette to keep focus on center
  float vign = smoothstep(1.2, 0.2, distance(uv, vec2(0.5)));

  // Apply grain to base color with stronger intensity
  vec3 col = u_baseColor + (n - 0.5) * 0.1;
  col *= mix(0.95, 1.05, vign);

  gl_FragColor = vec4(col, u_opacity);
}
`;

function StaticNoiseMaterial({
  fadeStartPx = 500,
  fadeEndPx = 1600,
  baseColor = "#303036",
}: Props) {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const [scrollY, setScrollY] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_baseColor: { value: new THREE.Color(baseColor) },
      u_opacity: { value: 0 },
    }),
    [baseColor]
  );

  // Listen for reduced motion preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Track scroll position
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Update opacity based on scroll position
  useEffect(() => {
    if (matRef.current) {
      let opacity = 0;

      if (scrollY < fadeStartPx) {
        // Before About section - fully transparent
        opacity = 0;
      } else if (scrollY >= fadeStartPx && scrollY < fadeEndPx) {
        // Fading in during About, fading out entering Projects
        const fadeRange = fadeEndPx - fadeStartPx;
        const progress = (scrollY - fadeStartPx) / fadeRange;

        // Fade in from 0 to 0.5, then fade out from 0.5 to 1.0
        if (progress < 0.5) {
          opacity = progress * 2; // 0 → 1 over first half
        } else {
          opacity = 1 - (progress - 0.5) * 2; // 1 → 0 over second half
        }
      } else {
        // After fadeEndPx - fully transparent
        opacity = 0;
      }

      matRef.current.uniforms.u_opacity.value = prefersReducedMotion ? 0 : opacity * 0.2;
    }
  }, [scrollY, fadeStartPx, fadeEndPx, prefersReducedMotion]);

  // Animate time uniform
  useFrame((state) => {
    if (!prefersReducedMotion && matRef.current) {
      matRef.current.uniforms.u_time.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={matRef}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

function StaticNoiseScene(props: Props) {
  const { gl } = useThree();

  useEffect(() => {
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }, [gl]);

  return (
    <>
      <OrthographicCamera makeDefault position={[0, 0, 1]} />
      <StaticNoiseMaterial {...props} />
    </>
  );
}

export default function StaticNoiseBG(props: Props) {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas gl={{ antialias: false }} dpr={[1, 2]}>
        <StaticNoiseScene {...props} />
      </Canvas>
    </div>
  );
}
