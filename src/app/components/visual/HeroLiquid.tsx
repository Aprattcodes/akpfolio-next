"use client";

import { useEffect, useMemo, useRef } from "react";
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
precision mediump float;
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
  const scrollYRef = useRef(0);

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_res: { value: new THREE.Vector2(size.width, size.height) },
      u_opacity: { value: 1 },
      u_colors: { value: colors.map((c) => new THREE.Color(c)) },
    }),
    [size.width, size.height, colors]
  );

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY || window.pageYOffset || 0;
    };

    // Capture initial scroll immediately
    handleScroll();

    // Also capture after a brief delay (for browser paint)
    const timeoutId = setTimeout(handleScroll, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Force initial opacity update
  useEffect(() => {
    if (matRef.current) {
      const currentScroll = scrollYRef.current || 0;
      const initialFade = Math.max(0, Math.min(1, 1 - (currentScroll / fadeEndPx)));
      matRef.current.uniforms.u_opacity.value = initialFade;
    }
  }, [fadeEndPx]);

  useEffect(() => {
    if (matRef.current) {
      matRef.current.uniforms.u_res.value.set(size.width, size.height);
    }
  }, [size]);

  useFrame((state) => {
    if (!matRef.current) return;

    // Update scroll-based opacity EVERY FRAME
    const currentScroll = scrollYRef.current || 0;
    const fade = Math.max(0, Math.min(1, 1 - (currentScroll / fadeEndPx)));
    matRef.current.uniforms.u_opacity.value = fade;

    // Update time for animation
    matRef.current.uniforms.u_time.value = state.clock.getElapsedTime() * 0.8;
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
  const { gl, invalidate } = useThree();

  useEffect(() => {
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    invalidate();
  }, [gl, invalidate]);

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
      <Canvas
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: false,
          failIfMajorPerformanceCaveat: false,
        }}
        dpr={[1, 2]}
        frameloop="always"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          touchAction: 'none',
        }}
      >
        <LiquidScene {...props} />
      </Canvas>
    </div>
  );
}
