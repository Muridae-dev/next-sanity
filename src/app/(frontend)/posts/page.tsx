import { sanityFetch } from "@/sanity/lib/live";
import { EVENTS_QUERY } from "@/sanity/lib/queries";
import { PostCard } from "@/components/PostCard";

export default async function Page() {
  const { data: posts } = await sanityFetch({ query: EVENTS_QUERY });

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <div className="flex flex-col gap-24 py-12">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    </main>
  );
}
