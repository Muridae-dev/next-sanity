"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { noise2D } from "@/lib/shaders/noise";

const vertexShader = /* glsl */ `
  varying vec2 vUv;
uniform float u_time;

void main() {
  vUv = uv;
  vec3 pos = position;

  gl_Position = vec4(pos, 1.0);
}
`;

const fragmentShader = /* glsl */ `
    ${noise2D}
    
    precision highp float;
    #define PI 3.1415926535897932384626433832795

    uniform float u_time;
    uniform float uCanvasHeight;
    uniform float uCanvasWidth;
    uniform sampler2D u_gradient;
    varying vec2 vUv;

    float wave_alpha(float Y, float wave_height, float offset) {
        float L = 500.0;
        float S = 2.0;
        float H = wave_height;
        float t = gl_FragCoord.x / (uCanvasWidth - 1.0);

        float x = gl_FragCoord.x;
        float wave_y = Y + sin(((x / L) + u_time * S)) * H;

        float dist = wave_y - gl_FragCoord.y;
        float alpha = dist;
        alpha = clamp(alpha, 0.0, 1.0);
        return alpha;
    }

    void main() {
        const int NUMBER_OF_WAVES = 6;
        vec3 waveColors[NUMBER_OF_WAVES + 1];

        waveColors[0] = vec3(1.0);
        waveColors[1] = vec3(1.0, 0.0, 0.0); 
        waveColors[2] = vec3(1.0, 0.5, 0.0); 
        waveColors[3] = vec3(1.0, 1.0, 0.0); 
        waveColors[4] = vec3(0.0, 0.6, 0.2); 
        waveColors[5] = vec3(0.0, 0.0, 1.0); 
        waveColors[6] = vec3(0.6, 0.0, 0.6); 

        float wave_height = 24.0;

        vec3 color = vec3(1.0);
        float alphaTotal = 0.0;

        for (int i = NUMBER_OF_WAVES; i >= 0; i--) {
            float y = 1.0 - (float(i) + 0.5) / float(NUMBER_OF_WAVES + 1);
            float alpha = wave_alpha(y * uCanvasHeight, wave_height, float(i));

            color = mix(waveColors[i], color, alpha);
            alphaTotal = mix(1.0, alphaTotal, alpha);
        }

        float distToWhite = length(color - vec3(1.0));
        float isAlmostWhite = step(distToWhite, 0.98);

        float finalAlpha = alphaTotal * (1.0 - isAlmostWhite);

        gl_FragColor = vec4(color, finalAlpha * 0.8);
    }
`;

function FullscreenShader() {
  // TODO: See if we can find what this is...
  const materialRef = useRef<any>(null);

  const uniforms = useRef({
    u_time: { value: 0 },
    uCanvasHeight: { value: 0 },
    uCanvasWidth: { value: 0 },
  });

  const { size, viewport } = useThree();

  useEffect(() => {
    uniforms.current.uCanvasWidth.value = size.width * viewport.dpr;
    uniforms.current.uCanvasHeight.value = size.height * viewport.dpr;
  }, [size, viewport]);

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
      dpr={[1, 2]}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "60vw",
        height: "60vh",
        filter: "blur(50px)",
      }}
    >
      <FullscreenShader />
    </Canvas>
  );
}
