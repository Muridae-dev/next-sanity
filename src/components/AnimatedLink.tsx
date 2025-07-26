"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import React, { forwardRef, useRef } from "react";

interface AnimatedLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedLink = forwardRef<HTMLAnchorElement, AnimatedLinkProps>(
  ({ href, children, className, ...props }, ref) => {
    const router = useRouter();
    const pageContainerRef = useRef<HTMLElement | null>(null);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      const transitionElement = document.querySelector("#transition-element");
      if (transitionElement) {
        gsap.to(transitionElement, {
          x: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            router.push(href.toString());
          },
        });
      } else {
        router.push(href.toString());
      }
    };

    return (
      <Link
        ref={ref}
        href={href}
        onClick={handleClick}
        className={className}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

AnimatedLink.displayName = "AnimatedLink";

export default AnimatedLink;
