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
    <main className="relative pt-[50vh] pb-[32px]">
      <div className="translate-y-[-50%] flex flex-col items-center justify-center">
        <h1 className="text-heading w-fit h-fit pl-[12px] pr-[24px] pb-[24px] text-center">
          {event.title}
        </h1>
        <div className="pt-[24px]">
          {event.body ? (
            <div className="lg:col-span-7 px-[8px] lg:col-start-6 prose text-center text-inherit pb-[12px]">
              <PortableText value={event.body} components={components} />
            </div>
          ) : null}
        </div>

        <div>
          <div className="font-bold">
            {dayjs(event.eventDate).format("D MMMM YYYY")} ❤️ Location
          </div>
        </div>
      </div>

      <div className="h-[600px] max-h-fit overflow-hidden relative flex justify-center">
        <figure className="rounded overflow-hidden w-fit max-w-[90dvw] max-h-fit h-[600px] flex items-center opacity-95">
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
    </main>
  );
}
