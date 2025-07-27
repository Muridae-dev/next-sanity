"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

type MarqueeTextProps = {
  text: string;
  speed?: number;
  className?: string;
};

export default function MarqueeText({ text, speed = 150 }: MarqueeTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const inner = innerRef.current;
      if (!container || !inner) return;

      const distance = inner.offsetWidth / 2;

      const duration = distance / speed;

      gsap.set(inner, { x: 0 });
      gsap.to(inner, {
        x: -distance,
        duration,
        ease: "none",
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [speed, text]);

  return (
    <div
      className={`whitespace-nowrap font-faodu text-8xl md:text-[10rem] overflow-hidden h-[8rem] md:h-[10rem] flex items-center`}
      ref={containerRef}
    >
      <div ref={innerRef}>
        <span className="px-4 overflow-y-visible">{text}</span>
        <span className="px-4 overflow-y-visible">{text}</span>
        <span className="px-4 overflow-y-visible">{text}</span>
        <span className="px-4 overflow-y-visible">{text}</span>
        <span className="px-4 overflow-y-visible">{text}</span>
        <span className="px-4 overflow-y-visible">{text}</span>
      </div>
    </div>
  );
}
