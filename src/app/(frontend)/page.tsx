import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center relative  overflow-hidden">
      <div className="lava-rainbow">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="blob" />
        ))}
        <Image
          className="pride-flag"
          src="/icons/pride-flag.gif"
          alt="pride-flag"
          width={100}
          height={100}
        />
      </div>

      <h1 className="z-1 font-faodu text-8xl">Henningsvær Pride</h1>

      <Link className="z-1" href="/posts">
        Posts index
      </Link>
    </section>
  );
}
