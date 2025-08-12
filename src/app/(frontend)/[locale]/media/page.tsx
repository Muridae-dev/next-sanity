import SectionMedia from "@/components/Gallery/SectionMedia";
import { sanityFetch } from "@/sanity/lib/live";
import { PHOTO_QUERY_ALL } from "@/sanity/lib/queries";
import { PHOTO_QUERY_ALLResult } from "@/sanity/types";

export default async function Page() {
  const { data: photos } = await sanityFetch({ query: PHOTO_QUERY_ALL });

  const photosByYear = photos.reduce(
    (acc, photo) => {
      const year =
        photo.year && photo.year.year ? photo.year.year.toString() : "Unknown";
      if (!acc[year]) acc[year] = [];
      acc[year].push(photo);
      return acc;
    },
    {} as Record<string, PHOTO_QUERY_ALLResult>
  );

  return (
    <div className="relative pt-[48px] md:pt-[12px]">
      <SectionMedia photos={photosByYear} />
    </div>
  );
}
