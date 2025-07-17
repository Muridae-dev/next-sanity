import { EVENTS_QUERYResult } from "@/sanity/types";
import EventCard from "./Card";
import AnimatedText from "../AnimatedText";

export default function EventSection({
  events,
}: {
  events: EVENTS_QUERYResult;
}) {
  return (
    <section className="gradient-background-2">
      <h2 className="font-faodu text-center text-8xl">
        <AnimatedText text="EVENTS" />
      </h2>
      <div className="grid grid-cols-3 gap-[24px] px-[12px] gap-y-[32px] pb-[32px]">
        {events.map((event) => {
          return <EventCard key={event._id} event={event} />;
        })}
      </div>
      <h2 className="font-faodu text-center text-8xl border-y">
        <AnimatedText text="AND MORE HERE!" />
      </h2>
    </section>
  );
}
