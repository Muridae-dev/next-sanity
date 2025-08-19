import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { EVENT_QUERY } from "@/sanity/lib/queries";
import { components } from "@/sanity/PortableTextComponents";
import dayjs from "dayjs";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const { data: event } = await sanityFetch({
    query: EVENT_QUERY,
    params: { slug, locale },
  });

  if (!event) {
    notFound();
  }

  return (
    <main className="relative pt-[64px] md:pt-[84px] pb-[32px]">
      <div className="flex flex-col items-center justify-center px-[12px]">
        <h1 className="text-heading w-fit h-fit pl-[12px] pr-[24px] pb-[24px] text-center">
          {event.title}
        </h1>

        <div className="h-[600px] max-h-fit overflow-hidden relative flex justify-center">
          <figure className="rounded overflow-hidden w-fit max-h-fit h-[600px] flex items-center md:max-w-[900px]">
            {event.mainImage && (
              <Image
                src={urlFor(event.mainImage)
                  .width(1600)
                  .height(800)
                  .quality(100)
                  .auto("format")
                  .url()}
                alt={event.mainImage?.alt || "Event image"}
                width={1400}
                height={800}
              />
            )}
          </figure>
        </div>

        <div className="font-bold pt-[12px]">
          {dayjs(event.eventDate).format("D MMMM YYYY")}
        </div>

        {event.body ? (
          <div className="max-w-[900px] pt-[24px] px-[8px] md:px-0 prose text-inherit pb-[12px]">
            <PortableText value={event.body} components={components} />
          </div>
        ) : null}
      </div>
    </main>
  );
}
