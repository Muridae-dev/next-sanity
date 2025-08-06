"use client";

import { urlFor } from "@/sanity/lib/image";
import { PHOTO_QUERYResult } from "@/sanity/types";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function GalleryCard({
  photo,
}: {
  photo: PHOTO_QUERYResult[number];
}) {
  const width = 600;
  const height = 600;

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
    <div ref={elRef}>
      {photo.image && (
        <Image
          className="md:w-[300px]"
          src={urlFor(photo.image)
            .width(width)
            .height(height)
            .fit("crop")
            .auto("format")
            .quality(100)
            .url()}
          alt={photo.image?.alt || ""}
          width={width}
          height={height}
        />
      )}
    </div>
  );
}
