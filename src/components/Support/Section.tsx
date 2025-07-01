import SupportCard from "./Card";

export default function SupportSection() {
  const data = [
    {
      title: "Raise your flag!",
      description:
        "Show your support by hanging a rainbow flag where you live.",
    },
    {
      title: "Buy our Merch",
      description: `We sell caps, shopping nets, stickers and flags. All the money goes
          directly to Henningsvær Pride. You can buy our merch at MIN
          Henningsvær or secondhand and div in Henningsvær.`,
    },
    {
      title: "Follow us on Instagram",
      description: ` @henningsvaer.pride Here we share pictures and information about Pride
          week.`,
    },
  ];
  return (
    <>
      <div className="h-content w-full border-t border-b flex items-center gradient-background">
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
      <div className="grid grid-cols-3 border-b gradient-background">
        {data.map((d) => (
          <SupportCard
            key={d.title}
            title={d.title}
            description={d.description}
          />
        ))}
      </div>
    </>
  );
}
