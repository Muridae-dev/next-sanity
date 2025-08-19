"use client";

import { urlFor } from "@/sanity/lib/image";
import { PHOTO_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import { useEffect } from "react";

export default function ImageModal({
  photo,
  closeModal,
  nextImage,
  previousImage,
  isPreviousImage,
  isNextImage,
}: {
  photo: PHOTO_QUERYResult[number] | null;
  closeModal: () => void;
  nextImage: () => void;
  previousImage: () => void;
  isPreviousImage: boolean;
  isNextImage: boolean;
}) {
  const width = 800;
  const height = 1200;

  useEffect(() => {
    const handleKeys = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight" && isNextImage) nextImage();
      if (e.key === "ArrowLeft" && isPreviousImage) previousImage();
    };
    window.addEventListener("keydown", handleKeys);
    return () => window.removeEventListener("keydown", handleKeys);
  }, [closeModal]);

  if (!photo) return null;
  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-99 bg-black/90 flex items-center justify-center p-[24px]"
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          previousImage();
        }}
        className="modal-button --pointer font-faodu left-[12px] md:left-[64px]"
        disabled={!isPreviousImage}
      >
        {`<`}
      </button>
      {photo?.image && (
        <Image
          className=""
          src={urlFor(photo.image)
            .width(width)
            .height(height)
            .fit("crop")
            .auto("format")
            .quality(100)
            .url()}
          alt={photo.image?.alt || ""}
          width={width / 2}
          height={height / 2}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      )}
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextImage();
        }}
        className="modal-button --pointer font-faodu right-[12px] md:right-[64px]"
        disabled={!isNextImage}
      >
        {`>`}
      </button>
      <button
        onClick={closeModal}
        className="absolute h-[32px] w-[32px] text-3xl text-white cursor-pointer top-[32px] right-[32px] md:right-[64px]"
      >
        X
      </button>
    </div>
  );
}
