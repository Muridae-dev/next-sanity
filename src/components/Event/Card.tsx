"use client";

import { components } from "@/sanity/PortableTextComponents";
import { EVENTS_QUERY_ALLResult, EVENTS_QUERYResult } from "@/sanity/types";
import { PortableText } from "next-sanity";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import AnimatedLink from "../AnimatedLink";

gsap.registerPlugin(ScrollTrigger);

export default function EventCard({
  event,
  cta,
}: {
  event: EVENTS_QUERYResult[number] | EVENTS_QUERY_ALLResult[number];
  cta: string;
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
    <AnimatedLink
      ref={elRef}
      href={`/events/${event.slug?.current}`}
      className="group flex flex-col opacity-0"
    >
      <figure className="w-full overflow-hidden flex items-center rounded">
        {event.mainImage && (
          <Image
            className="w-full"
            src={urlFor(event.mainImage)
              .width(800)
              .height(400)
              .quality(100)
              .auto("format")
              .url()}
            alt={event.mainImage?.alt || "Event image"}
            width={800}
            height={400}
          />
        )}
      </figure>

      <h3 className="px-[8px] text-card-heading pt-[8px] pb-[12px] group-hover:underline">
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

      <div className="pt-[12px] px-[8px] text-2xl font-chicle mt-auto flex gap-[12px] md:pt-0">
        <span className="border bg-[rgba(0,0,255,0.2)] px-[10px] rounded-tr rounded-bl">
          →
        </span>
        <span className="group-hover:underline">{cta}</span>
      </div>
    </AnimatedLink>
  );
}
