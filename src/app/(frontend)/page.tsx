import HomepageHero from "@/components/HomepageHero";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { EVENTS_QUERY } from "@/sanity/lib/queries";
import { components } from "@/sanity/PortableTextComponents";
import { PortableText } from "next-sanity";

export default async function Page() {
  const { data: events } = await sanityFetch({ query: EVENTS_QUERY });

  console.log(events);

  return (
    <>
      <HomepageHero />
      {/* SECTION */}
      <div className="h-content w-full border-t border-b flex items-center gradient-background">
        <h2 className="text-8xl w-fit h-fit pl-[12px] pr-[24px] font-faodu">
          SUPPORTING PRIDE
        </h2>
        <div className="h-[200px] border-l overflow-hidden relative">
          <img
            className="w-full translate-y-[-55%]"
            src="/backgrounds/henningsvaer-torg.avif"
            alt="something"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 border-b gradient-background">
        <div className="p-[12px] border-r relative overflow-hidden">
          <h3 className="text-5xl pb-[12px] font-faodu">Raise your flag!</h3>
          Show your support by hanging a rainbow flag where you live.
        </div>

        <div className="p-[12px] border-r ">
          <h3 className="text-5xl pb-[12px] font-faodu">Buy our Merch</h3>
          We sell caps, shopping nets, stickers and flags. All the money goes
          directly to Henningsvær Pride. You can buy our merch at MIN
          Henningsvær or secondhand and div in Henningsvær.
        </div>

        <div className="p-[12px] ">
          <h3 className="text-5xl pb-[12px] font-faodu">
            Follow us on Instagram
          </h3>
          @henningsvaer.pride Here we share pictures and information about Pride
          week.
        </div>
      </div>

      {/* SECTION */}
      <section className="gradient-background-2">
        <h2 className="pb-[12px] font-faodu text-center text-8xl">EVENTS</h2>
        <div className="grid grid-cols-3 gap-[12px] px-[12px] gap-y-[32px] pb-[32px]">
          {events.map((event) => {
            return (
              <div key={event._id} className="flex flex-col">
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
                {event.body ? (
                  <div className="lg:col-span-7 px-[8px] lg:col-start-6 prose text-black pb-[12px]">
                    <PortableText value={event.body} components={components} />
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
          })}
        </div>
        <h2 className="pb-[12px] font-faodu text-center text-8xl border-y">
          AND MORE HERE!
        </h2>
      </section>

      <section></section>

      <div className="h-screen w-full gradient-background"></div>
    </>
  );
}
