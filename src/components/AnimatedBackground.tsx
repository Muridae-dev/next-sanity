import Image from "next/image";

export default function AnimatedBackground() {
  return (
    <>
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
      <div className="grain-background"></div>
    </>
  );
}
