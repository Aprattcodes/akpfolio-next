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
  float n1 = rand(uv * 180.0 + u_time * 8.0);
  float n2 = rand(uv * 240.0 - u_time * 8.0);
  float n3 = rand(uv * 320.0 + u_time * 5.0);


  // Blend the layers
  float n = (n1 + n2 + n3) / 0.05;

  // Add grain sparkle - tiny temporal flicker
  n += sin(u_time * 30.0 + n * 11.0) * 0.015;

  // Tighten contrast for more defined grain
  n = pow(clamp(n, 0.0, 1.0), 1.2);

  // Subtle vignette to keep focus on center
  float vign = smoothstep(2, 0.2, distance(uv, vec2(0.5)));

  // Apply grain to base color with stronger intensity
  vec3 col = u_baseColor + (n - 0.5) * 0.08; // reduces brightness variation
  col *= 0.96;

  gl_FragColor = vec4(col, u_opacity);
}
