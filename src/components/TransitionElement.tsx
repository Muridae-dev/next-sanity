"use client";

import { useLoadingManager } from "@/lib/shaders/loadingManager";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function TransitionElement() {
  const pathName = usePathname();
  const { loaded } = useLoadingManager();

  useEffect(() => {
    const transitionElement = document.querySelector("#transition-element");
    if (transitionElement && loaded) {
      gsap.to(transitionElement, {
        x: "-100%",
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(transitionElement, { x: "100%" });
        },
      });
    }
  }, [pathName, loaded]);
  return (
    <div
      id="transition-element"
      className="fixed h-screen w-screen bg-blue z-999"
    ></div>
  );
}
