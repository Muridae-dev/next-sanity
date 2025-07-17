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

  console.log(event);

  return (
    <main className="relative">
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-8xl w-fit h-fit pl-[12px] pr-[24px] font-faodu pb-[24px] text-center uppercase">
          {event.title}
        </h1>
        <div className="w-[80%] h-[400px] overflow-hidden flex items-center justify-center relative rounded">
          <Image
            className="absolute w-full"
            width={1400}
            height={800}
            alt={event.mainImage?.alt ? event.mainImage?.alt : ""}
            src={
              event.mainImage
                ? urlFor(event.mainImage).width(800).height(800).url()
                : ""
            }
          />
        </div>
        <div className="pt-[24px]">
          {event.body ? (
            <div className="lg:col-span-7 px-[8px] lg:col-start-6 prose text-center text-black pb-[12px]">
              <PortableText value={event.body} components={components} />
            </div>
          ) : null}
        </div>

        <div>
          <div className="uppercase font-bold">
            {dayjs(event.eventDate).format("D MMMM YYYY")} ❤️ LOCATION
          </div>
        </div>
      </div>
    </main>
  );
}
