"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function SupportCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elRef.current) return;

    const animation = gsap.fromTo(
      elRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        delay: 0.4,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <div ref={elRef} className="p-[12px] border-r last:border-r-0">
      <h3 className="text-5xl pb-[12px] font-faodu">{title}</h3>
      {description}
    </div>
  );
}
