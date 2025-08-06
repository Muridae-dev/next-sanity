import EventSection from "@/components/Event/Section";
import GallerySection from "@/components/Gallery/Section";
import HomepageHero from "@/components/HomepageHero";
import SupportSection from "@/components/Support/Section";
import { sanityFetch } from "@/sanity/lib/live";
import { EVENTS_QUERY, PHOTO_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const { data: events } = await sanityFetch({ query: EVENTS_QUERY });
  const { data: photos } = await sanityFetch({ query: PHOTO_QUERY });

  return (
    <div className="relative">
      <HomepageHero />
      <SupportSection />

      <EventSection title={"EVENTS"} events={events} />
      <GallerySection photos={photos} />
    </div>
  );
}
