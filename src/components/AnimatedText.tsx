"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  text: string;
}

export default function AnimatedText({ text }: AnimatedTextProps) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elRef.current) return;

    const letters = gsap.utils.toArray(".letter", elRef.current);

    const animation = gsap.fromTo(
      letters,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
        ease: "back.out(1.7)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: elRef.current,
          start: "top 80%",
          // markers: true, // Uncomment to debug
        },
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <div ref={elRef} className="animated-text overflow-hidden inline-block">
      {text.split(" ").map((word, i, arr) => (
        <span
          key={i}
          className="letter inline-block transform translate-y-full opacity-0 uppercase"
        >
          {word}
          {i < arr.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </div>
  );
}
