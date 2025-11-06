"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import * as THREE from "three";

type Props = {
  colors?: string[];
  fadeEndPx?: number;
};

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const fragmentShader = `
precision highp float;
varying vec2 vUv;
uniform float u_time;
uniform vec2  u_res;
uniform float u_opacity;
uniform vec3  u_colors[3];

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for(int i = 0; i < 5; i++) {
    v += a * noise(p);
    p *= 2.0;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = vUv;
  vec2 p = (uv * vec2(u_res.x / u_res.y, 1.0)) * 2.0;
  float t = u_time * 0.03;

  vec2 q = vec2(
    fbm(p + vec2(0.0, t)),
    fbm(p + vec2(5.2, 1.3) - t)
  );

  vec2 r = vec2(
    fbm(p + 4.0 * q + vec2(1.7, 9.2) + 0.15 * t),
    fbm(p + 4.0 * q + vec2(8.3, 2.8) - 0.126 * t)
  );

  float f = fbm(p + 4.0 * r);

  vec3 c0 = u_colors[0];
  vec3 c1 = u_colors[1];
  vec3 c2 = u_colors[2];

  vec3 col = mix(c0, c1, smoothstep(0.25, 0.65, f));
  col = mix(col, c2, smoothstep(0.55, 0.95, f));

  float vign = smoothstep(1.2, 0.2, distance(uv, vec2(0.5)));
  col *= mix(0.9, 1.05, vign);

  float grain = noise(uv * vec2(u_res.y) * 1.5 + t * 10.0) * 0.03;
  col += grain;

  gl_FragColor = vec4(col, clamp(u_opacity, 0.0, 1.0));
}
`;

function LiquidMaterial({
  colors = ["#0ea5e9", "#8b5cf6", "#FF6F61"],
  fadeEndPx = 900,
}: Props) {
  const { size } = useThree();
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_res: { value: new THREE.Vector2(size.width, size.height) },
      u_opacity: { value: 1 },
      u_colors: { value: colors.map((c) => new THREE.Color(c)) },
    }),
    [size.width, size.height, colors]
  );

  // Check for reduced motion preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (matRef.current) {
      matRef.current.uniforms.u_res.value.set(size.width, size.height);
    }
  }, [size]);

  useFrame((state) => {
    if (!prefersReducedMotion && matRef.current) {
      const scrollY = window.scrollY;
      const fade = 1 - Math.min(scrollY / fadeEndPx, 1);
      matRef.current.uniforms.u_opacity.value = fade;
      matRef.current.uniforms.u_time.value = state.clock.getElapsedTime() * 0.8;
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

function LiquidScene(props: Props) {
  const { gl } = useThree();

  useEffect(() => {
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }, [gl]);

  return (
    <>
      <OrthographicCamera makeDefault position={[0, 0, 1]} />
      <LiquidMaterial {...props} />
    </>
  );
}

export default function HeroLiquid(props: Props) {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none will-change-transform">
      <Canvas gl={{ antialias: false }} dpr={[1, 2]} frameloop="always">
        <LiquidScene {...props} />
      </Canvas>
    </div>
  );
}
