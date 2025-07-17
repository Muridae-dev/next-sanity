"use client";

import { urlFor } from "@/sanity/lib/image";
import { components } from "@/sanity/PortableTextComponents";
import { EVENTS_QUERYResult } from "@/sanity/types";
import { PortableText } from "next-sanity";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function EventCard({
  event,
}: {
  event: EVENTS_QUERYResult[number];
}) {
  const elRef = useRef<HTMLAnchorElement>(null);

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
    <Link
      ref={elRef}
      href={`events/${event.slug?.current}`}
      className="flex flex-col opacity-0"
    >
      <img
        className="w-full rounded"
        src={
          event.mainImage
            ? urlFor(event.mainImage).width(400).height(200).url()
            : ""
        }
      />

      <h3 className="px-[8px] font-faodu text-4xl pt-[4px] pb-[12px]">
        {event.title}
      </h3>
      {event.shortDescription ? (
        <div className="lg:col-span-7 px-[8px] lg:col-start-6 prose text-inherit pb-[12px]">
          <PortableText
            value={event.shortDescription}
            components={components}
          />
        </div>
      ) : null}

      <div className="px-[8px] text-2xl font-faodu mt-auto flex gap-[12px]">
        <span className="border bg-[rgba(0,0,255,0.2)] px-[10px] rounded-tr rounded-bl">
          →
        </span>{" "}
        More info
      </div>
    </Link>
  );
}
