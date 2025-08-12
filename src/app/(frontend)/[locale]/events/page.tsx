import EventSection from "@/components/Event/Section";
import { sanityFetch } from "@/sanity/lib/live";
import { EVENTS_QUERY_ALL } from "@/sanity/lib/queries";
import { EVENTS_QUERY_ALLResult } from "@/sanity/types";
import { getDictionary, locales } from "../dictionaries";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: locales }>;
}) {
  const { locale } = await params;
  const { data: events } = await sanityFetch({
    query: EVENTS_QUERY_ALL,
    params: { locale },
  });

  const eventsByYear = events.reduce(
    (acc, event) => {
      const year = event.year ?? "Unknown";
      if (!acc[year]) acc[year] = [];
      acc[year].push(event);
      return acc;
    },
    {} as Record<string, EVENTS_QUERY_ALLResult>
  );

  const dict = await getDictionary(locale);

  return (
    <div className="relative pt-[48px] md:pt-[12px]">
      {Object.keys(eventsByYear)
        .sort((a, b) => b.localeCompare(a))
        .map((year) => (
          <EventSection
            key={year}
            cta={dict.events.cta}
            title={year}
            events={eventsByYear[year]}
          />
        ))}
    </div>
  );
}
