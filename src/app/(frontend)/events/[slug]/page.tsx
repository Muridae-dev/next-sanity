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
    <main className="flex flex-col items-center gradient-background">
      <h1 className="text-8xl w-fit h-fit pl-[12px] pr-[24px] font-faodu pb-[24px]">
        {event.title}
      </h1>
      <div className="flex max-h-[400px] w-full overflow-hidden border-y">
        <Image
          width={800}
          height={800}
          alt={event.mainImage?.alt ? event.mainImage?.alt : ""}
          src={
            event.mainImage
              ? urlFor(event.mainImage).width(800).height(800).url()
              : ""
          }
        />
        <div className="border-l">
          {event.body ? (
            <div className="lg:col-span-7 px-[8px] lg:col-start-6 prose text-black pb-[12px]">
              <PortableText value={event.body} components={components} />
            </div>
          ) : null}
        </div>
      </div>
      <div>
        <div>{dayjs(event.eventDate).format("D MMMM YYYY")} ❤️ LOCATION</div>
      </div>
    </main>
  );
}
