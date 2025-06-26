import HomepageHero from "@/components/HomepageHero";
import Image from "next/image";

export default async function Page() {
  return (
    <>
      <HomepageHero />
      <div className="h-content w-full border-t border-b flex items-center">
        <h2 className="text-8xl w-fit h-fit pl-[12px] pr-[24px] font-faodu">
          SUPPORTING PRIDE
        </h2>
        <div className="h-[200px] border-l overflow-hidden relative">
          <img
            className="w-full translate-y-[-55%]"
            src="/backgrounds/henningsvaer-torg.avif"
            alt="something"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 border-b">
        <div className="p-[12px] border-r">
          <h3 className="text-5xl pb-[12px] font-faodu">Raise your flag!</h3>
          Show your support by hanging a rainbow flag where you live.
        </div>

        <div className="p-[12px] border-r">
          <h3 className="text-5xl pb-[12px] font-faodu">Buy our Merch</h3>
          We sell caps, shopping nets, stickers and flags. All the money goes
          directly to Henningsvær Pride. You can buy our merch at MIN
          Henningsvær or secondhand and div in Henningsvær.
        </div>

        <div className="p-[12px]">
          <h3 className="text-5xl pb-[12px] font-faodu">
            Follow us on Instagram
          </h3>
          @henningsvaer.pride Here we share pictures and information about Pride
          week.
        </div>
      </div>
      <div className="h-screen w-full"></div>
    </>
  );
}
