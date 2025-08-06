import { EVENTS_QUERY_ALLResult, EVENTS_QUERYResult } from "@/sanity/types";
import EventCard from "./Card";
import AnimatedText from "../AnimatedText";

export default function EventSection({
  title,
  events,
}: {
  title: string;
  events: EVENTS_QUERYResult | EVENTS_QUERY_ALLResult;
}) {
  return (
    <section>
      <h2 className="text-center text-heading pt-[8px]">
        <AnimatedText text={title} />
      </h2>
      <div className="flex flex-col px-[12px] pb-[32px] gap-[24px] md:grid md:grid-cols-3 md:gap-[24px] md:gap-y-[32px]">
        {events.map((event) => {
          return <EventCard key={event._id} event={event} />;
        })}
      </div>
      {/* <h2 className="text-center text-heading border-y">
        <AnimatedText text="AND MORE HERE!" />
      </h2> */}
    </section>
  );
}
