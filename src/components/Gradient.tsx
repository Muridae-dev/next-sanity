"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ShaderMaterial } from "three";
import { useRef, useEffect } from "react";
import { noise2D, noise3D } from "@/lib/shaders/noise";
import { useGradientTexture } from "@/lib/shaders/gradientTextures";

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
    ${noise2D}
    ${noise3D}

    precision highp float;
    #define PI 3.1415926535897932384626433832795

    uniform float u_time;
    uniform float uCanvasHeight;
    uniform float uCanvasWidth;
    uniform sampler2D u_gradient;
    varying vec2 vUv;

    float wave_noise(float offset) {
        float time = u_time + offset;

        float L = 0.0015;
        float S = 0.12;
        float A = 40.0;
        float F = 0.043;

        float x = gl_FragCoord.x;
        
        float noise = 0.0;
        noise += snoise(vec2(x * (L / 1.00) + F * time, time * S * 1.00)) * A * 0.85;
        // noise += snoise(vec2(x * (L / 1.30) + F * time, time * S * 1.26)) * A * 1.15;
        // noise += snoise(vec2(x * (L / 1.86) + F * time, time * S * 1.09)) * A * 0.60;
        // noise += snoise(vec2(x * (L / 3.25) + F * time, time * S * 0.89)) * A * 0.40;

        return noise;
    }

    float background_noise(float offset) {
        float time = u_time + offset;
        
        float F = 0.11 * time;
        float L = 0.0015;
        float S = 0.01;

        float y_scale = 3.0;

        float x = gl_FragCoord.x;
        float y = gl_FragCoord.y * y_scale;

        float noise = 0.5;
        noise += snoise(vec3(x * L + F * 1.0, y * L * 1.00, time * S)) * 0.30;
        // noise += snoise(vec3(x * L + -F * 0.6, y * L * 0.85, time * S)) * 0.26;
        // noise += snoise(vec3(x * L + F * 0.8, y * L * 0.70, time * S)) * 0.22;

        return clamp(noise, 0.0, 1.0);
    }

    float smoothsteps(float t) {
        return t * t * t * (t * (6.0 * t - 15.0) + 10.0);
    }

    float calc_blur(float offset) {
        float time = u_time * 0.05 * offset;
    
        float L = 0.0018;
        float S = 0.1;
        float F = 0.034;

        float noise = snoise(vec2(gl_FragCoord.x * L + F * time, time * S));
        float t = (noise + 1.0) / 2.0;
        float exponent = 2.5;

        t = pow(t, exponent);

        float blur_amount = 130.0;
        float blur = mix(1.0, blur_amount, t);

        return blur;
    }

    float wave_alpha(float Y, float wave_height) {
        float offset = wave_height;
        float wave_y = Y + wave_noise(offset);
        float dist = wave_y - gl_FragCoord.y;
        float blur = calc_blur(offset);
        float alpha = clamp(0.5 + dist / blur, 0.0, 1.0);
        alpha = smoothsteps(alpha);

        return alpha;
    }

  void main() {
    float wave1_height = 24.0;
    float wave2_height = 32.0;
    float wave3_height = 42.0;
    float wave1_y = 1.75 * uCanvasHeight;
    float wave2_y = 1.0 * uCanvasHeight;
    float wave3_y = 0.25 * uCanvasHeight;

    float wave1_alpha = wave_alpha(wave1_y, wave1_height);
    float wave2_alpha = wave_alpha(wave2_y, wave2_height);
    float wave3_alpha = wave_alpha(wave3_y, wave3_height);

    float bg_lightness = background_noise(0.0);
    float w1_lightness = background_noise(200.0);
    float w2_lightness = background_noise(400.0);
    float w3_lightness = background_noise(600.0);

    float lightness = bg_lightness;
    lightness = mix(lightness, w1_lightness, wave1_alpha);
    lightness = mix(lightness, w2_lightness, wave2_alpha);
    lightness = mix(lightness, w3_lightness, wave3_alpha);

    gl_FragColor = texture2D(u_gradient, vec2(lightness, 0.5));
  }
`;

function FullscreenShader() {
  const materialRef = useRef<ShaderMaterial>(null);
  const { size } = useThree();

  const gradient = useGradientTexture();

  const uniforms = useRef({
    u_gradient: { value: gradient },
    u_time: { value: 0 },
    uCanvasHeight: { value: 0 },
    uCanvasWidth: { value: 0 },
  });

  useEffect(() => {
    uniforms.current.uCanvasHeight.value = size.height;
    uniforms.current.uCanvasWidth.value = size.width;
  }, [size.width, size.height]);

  useFrame(({ clock }) => {
    uniforms.current.u_time.value = clock.getElapsedTime();
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
      />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas
      orthographic
      camera={{ position: [0, 0, 1], zoom: 1 }}
      style={{ width: "100vw", height: "100%", position: "absolute" }}
    >
      <FullscreenShader />
    </Canvas>
  );
}
