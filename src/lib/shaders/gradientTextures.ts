import { useMemo } from "react";
import { TextureLoader } from "three";

function createGradientTexture(
  colors: string[],
  width = 256,
  height = 1
): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createLinearGradient(0, 0, width, 0);

  for (const [i, color] of colors.entries()) {
    gradient.addColorStop(i / (colors.length - 1), color);
  }

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  return canvas;
}

const gradientColors = ["#ED3B82", "#DF74F2", "#ED3B82"];

export function useGradientTexture(colors = gradientColors) {
  const canvas = useMemo(() => createGradientTexture(colors), [colors]);

  const texture = useMemo(() => {
    const tex = new TextureLoader().load(canvas.toDataURL());
    tex.minFilter = tex.magFilter = 1006;
    tex.generateMipmaps = false;
    tex.needsUpdate = true;
    return tex;
  }, [canvas]);

  return texture;
}

//linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)
