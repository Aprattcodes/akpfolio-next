precision highp float;
varying vec2 vUv;
uniform float u_time;
uniform vec2  u_res;
uniform float u_opacity;
uniform vec3  u_colors[3];

// Hash function for noise
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

// Simple 2D noise
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

// Fractal Brownian Motion
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
  // Normalize coordinates
  vec2 uv = vUv;
  // Aspect-aware domain
  vec2 p = (uv * vec2(u_res.x / u_res.y, 1.0)) * 2.0;

  // Slow time scaling
  float t = u_time * 0.03;

  // Multi-layer fbm with gentle drift (liquid diffusion)
  vec2 q = vec2(
    fbm(p + vec2(0.0, t)),
    fbm(p + vec2(5.2, 1.3) - t)
  );

  vec2 r = vec2(
    fbm(p + 4.0 * q + vec2(1.7, 9.2) + 0.15 * t),
    fbm(p + 4.0 * q + vec2(8.3, 2.8) - 0.126 * t)
  );

  // Liquid diffusion field
  float f = fbm(p + 4.0 * r);

  // Color ramp across brand colors
  vec3 c0 = u_colors[0];
  vec3 c1 = u_colors[1];
  vec3 c2 = u_colors[2];

  // Two-step blend
  vec3 col = mix(c0, c1, smoothstep(0.5, 1, f));
  col = mix(col, c2, smoothstep(0.55, 0.95, f));

  // Lighter for visibility while maintaining contrast
  col *= 0.85;

  // Subtle vignetting
  float vign = smoothstep(1.2, 0.2, distance(uv, vec2(0.5)));
  col *= mix(0.92, 1.0, vign);

  // Gentle grain
  float grain = noise(uv * vec2(u_res.y) * 1.5 + t * 10.0) * 2;
  col += grain;

  // Final opacity controlled by scroll
  gl_FragColor = vec4(col, clamp(u_opacity, 0.0, 1.0));
}
