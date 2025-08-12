"use client";

import GalleryCard from "./Card";
import AnimatedText from "../AnimatedText";
import { PHOTO_QUERYResult } from "@/sanity/types";
import ImageModal from "../ImageModal";
import { useState } from "react";
import AnimatedLink from "../AnimatedLink";

export default function GallerySection({
  title,
  cta,
  photos,
}: {
  title: string;
  cta: string;
  photos: PHOTO_QUERYResult;
}) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const selectedImage = currentIndex !== null ? photos[currentIndex] : null;

  const splitCta = cta.split("::").filter(Boolean);

  return (
    <section className="w-full">
      <h2 className="text-center text-heading border-y">
        <AnimatedText text={title} />
      </h2>

      <div className="flex flex-col md:flex-row gap-[12px] pt-[24px] px-[12px] justify-center">
        {photos.map((photo, index) => (
          <button onClick={() => setCurrentIndex(index)} key={photo._id}>
            <GalleryCard photo={photo} />
          </button>
        ))}
      </div>

      <div className="font-chicle text-center py-[12px] text-2xl md:text-4xl md:py-[24px]">
        {splitCta[0]}
        <AnimatedLink href="/media" className="underline">
          {splitCta[1]}
        </AnimatedLink>{" "}
        {splitCta[2]}
        <a
          className="underline"
          href="https://www.instagram.com/henningsvaer.pride/"
        >
          {splitCta[3]}
        </a>
      </div>

      <ImageModal
        photo={selectedImage}
        closeModal={() => setCurrentIndex(null)}
        nextImage={() =>
          currentIndex !== null && setCurrentIndex(currentIndex + 1)
        }
        previousImage={() =>
          currentIndex !== null && setCurrentIndex(currentIndex - 1)
        }
        isNextImage={currentIndex !== null && currentIndex < photos.length - 1}
        isPreviousImage={currentIndex !== null && currentIndex !== 0}
      />
    </section>
  );
}
