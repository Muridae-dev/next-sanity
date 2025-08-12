import AnimatedText from "../AnimatedText";
import SupportCard from "./Card";

export default function SupportSection({ title }: { title: string }) {
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
      <div className="h-content w-full border-t border-b flex justify-center items-center">
        <h2 className="text-heading w-fit h-fit">
          <AnimatedText text={title} />
        </h2>
      </div>
      <div className="py-[12px] border-b md:py-0 md:grid md:grid-cols-3">
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
