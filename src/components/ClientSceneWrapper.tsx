"use client";

import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

const sceneMap: Record<string, any> = {
  gradients: dynamic(() => import("@/components/Gradient"), {
    ssr: false,
  }),
  flag: dynamic(() => import("@/components/Flag"), {
    ssr: false,
  }),
};

export default function ClientSceneWrapper({
  scene,
}: {
  scene: "gradients" | "flag";
}) {
  const Scene = sceneMap[scene as string];
  if (!Scene) return notFound();

  return (
    <>
      <Scene />
      {scene === "gradients" && <div className="grain-filter" />}
    </>
  );
}
