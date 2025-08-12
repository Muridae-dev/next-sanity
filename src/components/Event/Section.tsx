import { EVENTS_QUERY_ALLResult, EVENTS_QUERYResult } from "@/sanity/types";
import EventCard from "./Card";
import AnimatedText from "../AnimatedText";

export default function EventSection({
  title,
  events,
  cta,
}: {
  title: string;
  events: EVENTS_QUERYResult | EVENTS_QUERY_ALLResult;
  cta: string;
}) {
  return (
    <section className="pb-[48px] px-[12px]">
      <h2 className="text-center text-heading py-[8px]">
        <AnimatedText text={title} />
      </h2>
      <div className="flex flex-col pb-[32px] gap-y-[48px] md:gap-[24px] md:gap-y-[64px] md:grid md:grid-cols-3">
        {events.map((event) => {
          return <EventCard key={event._id} cta={cta} event={event} />;
        })}
      </div>
      {/* <h2 className="text-center text-heading border-y">
        <AnimatedText text="AND MORE HERE!" />
      </h2> */}
    </section>
  );
}
