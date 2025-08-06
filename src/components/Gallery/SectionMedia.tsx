"use client";

import AnimatedText from "@/components/AnimatedText";
import GalleryCard from "@/components/Gallery/Card";
import ImageModal from "@/components/ImageModal";
import { PHOTO_QUERY_ALLResult } from "@/sanity/types";
import { useState } from "react";

export default function SectionMedia({
  photos,
}: {
  photos: Record<string, PHOTO_QUERY_ALLResult>;
}) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const selectedImage =
    currentIndex !== null && currentYear !== null
      ? photos[currentYear][currentIndex]
      : null;

  return (
    <div className="w-full pb-[24px]">
      <h1 className="text-center text-heading">
        <AnimatedText text="MEDIA" />
      </h1>

      <div className="flex flex-col px-[12px] gap-[24px]">
        {Object.entries(photos)
          .sort((a, b) => b[0].localeCompare(a[0]))
          .map((yearPhotos) => (
            <section key={yearPhotos[0]}>
              <h2 className="text-card-heading pb-[12px]">
                <AnimatedText text={yearPhotos[0]} />
              </h2>
              <div className="flex flex-col md:flex-row gap-[12px]">
                {yearPhotos[1].map((photo, index) => (
                  <button
                    key={photo._id}
                    onClick={() => {
                      setCurrentYear(Number(yearPhotos[0]));
                      setCurrentIndex(index);
                    }}
                  >
                    <GalleryCard photo={photo} />
                  </button>
                ))}
              </div>
            </section>
          ))}
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
        isNextImage={
          currentIndex !== null &&
          currentYear !== null &&
          currentIndex < photos[currentYear].length - 1
        }
        isPreviousImage={currentIndex !== null && currentIndex !== 0}
      />
    </div>
  );
}
