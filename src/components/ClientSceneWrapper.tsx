"use client";

import dynamic from "next/dynamic";

// Lazy-load your Three.js component with SSR disabled
const Scene = dynamic(() => import("@/components/Gradient"), {
  ssr: false,
});

export default function ClientSceneWrapper() {
  return <Scene />;
}
