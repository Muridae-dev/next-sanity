import EventSection from "@/components/Event/Section";
import GallerySection from "@/components/Gallery/Section";
import HomepageHero from "@/components/HomepageHero";
import SupportSection from "@/components/Support/Section";
import { sanityFetch } from "@/sanity/lib/live";
import { EVENTS_QUERY, PHOTO_QUERY } from "@/sanity/lib/queries";
import { getDictionary } from "./dictionaries";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: "no" | "en" }>;
}) {
  const { locale } = await params;

  const { data: events } = await sanityFetch({
    query: EVENTS_QUERY,
    params: { locale },
  });

  const { data: photos } = await sanityFetch({ query: PHOTO_QUERY });

  const dict = await getDictionary(locale);

  return (
    <div className="relative">
      <HomepageHero />
      <SupportSection
        title={dict.support.title}
        sections={dict.support.sections}
      />

      <EventSection
        title={dict.events.title}
        cta={dict.events.cta}
        events={events}
      />
      <GallerySection
        title={dict.gallery.title}
        cta={dict.gallery.cta}
        photos={photos}
      />
    </div>
  );
}
