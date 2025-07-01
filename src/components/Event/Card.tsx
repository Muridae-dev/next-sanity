import { urlFor } from "@/sanity/lib/image";
import { components } from "@/sanity/PortableTextComponents";
import { EVENTS_QUERYResult } from "@/sanity/types";
import { PortableText } from "next-sanity";

export default function EventCard({
  event,
}: {
  event: EVENTS_QUERYResult[number];
}) {
  return (
    <div className="flex flex-col">
      <img
        className="w-full border"
        src={
          event.mainImage
            ? urlFor(event.mainImage).width(400).height(200).url()
            : ""
        }
      />

      <h3 className="px-[8px] font-faodu text-4xl pt-[4px] pb-[12px]">
        {event.title}
      </h3>
      {event.shortDescription ? (
        <div className="lg:col-span-7 px-[8px] lg:col-start-6 prose text-black pb-[12px]">
          <PortableText
            value={event.shortDescription}
            components={components}
          />
        </div>
      ) : null}

      <div className="px-[8px] text-2xl font-faodu mt-auto flex gap-[12px]">
        <span className="bg-white invert px-[10px] rounded-tr rounded-bl">
          →
        </span>{" "}
        More info
      </div>
    </div>
  );
}
