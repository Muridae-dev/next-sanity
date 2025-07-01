import EventSection from "@/components/Event/Section";
import HomepageHero from "@/components/HomepageHero";
import SupportSection from "@/components/Support/Section";
import { sanityFetch } from "@/sanity/lib/live";
import { EVENTS_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const { data: events } = await sanityFetch({ query: EVENTS_QUERY });

  return (
    <>
      <HomepageHero />
      <SupportSection />

      <EventSection events={events} />

      <section></section>

      <div className="h-screen w-full gradient-background"></div>
    </>
  );
}
