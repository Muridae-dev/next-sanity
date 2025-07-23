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
  params: Promise<{ slug: string }>;
}) {
  const { data: event } = await sanityFetch({
    query: EVENT_QUERY,
    params: await params,
  });

  if (!event) {
    notFound();
  }

  return (
    <main className="relative">
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-8xl w-fit h-fit pl-[12px] pr-[24px] font-faodu pb-[24px] text-center">
          {event.title}
        </h1>
        <div className="w-[80%] h-[400px] overflow-hidden flex items-center justify-center relative rounded">
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
        </div>
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
    </main>
  );
}
