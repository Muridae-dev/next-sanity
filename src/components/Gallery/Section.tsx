"use client";

import GalleryCard from "./Card";
import AnimatedText from "../AnimatedText";
import { PHOTO_QUERYResult } from "@/sanity/types";
import ImageModal from "../ImageModal";
import { useState } from "react";
import AnimatedLink from "../AnimatedLink";

export default function GallerySection({
  photos,
}: {
  photos: PHOTO_QUERYResult;
}) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const selectedImage = currentIndex !== null ? photos[currentIndex] : null;

  return (
    <section className="w-full pb-[24px]">
      <h2 className="text-center text-heading border-y">
        <AnimatedText text="PHOTO GALLERY" />
      </h2>

      <div className="flex flex-col md:flex-row gap-[12px] pt-[24px] px-[12px] justify-center">
        {photos.map((photo, index) => (
          <button onClick={() => setCurrentIndex(index)} key={photo._id}>
            <GalleryCard photo={photo} />
          </button>
        ))}
      </div>
      <div className="font-faodu text-4xl text-center pt-[12px]">
        Find more images in our{" "}
        <AnimatedLink href="/media" className="underline">
          media section
        </AnimatedLink>{" "}
        or on Instagram{" "}
        <a
          className="underline"
          href="https://www.instagram.com/henningsvaer.pride/"
        >
          @henningsvær.pride
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
