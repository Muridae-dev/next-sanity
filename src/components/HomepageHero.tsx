import ClientSceneWrapper from "./ClientSceneWrapper";

export default function HomepageHero() {
  return (
    <section className="w-auto h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <h1 className="z-1 text-heading">Henningsvær Pride</h1>
      <div className="z-1 flex flex-row gap-[12px] md:gap-[64px] text-sm md:text-lg text-center">
        <span>1 - 6 Juli 2025</span>
        ❤️
        <span>Lofoten</span>
        ❤️
        <span>Norway</span>
      </div>
      <ClientSceneWrapper scene="flag" />
    </section>
  );
}
