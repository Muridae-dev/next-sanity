import AnimatedText from "../AnimatedText";
import SupportCard from "./Card";

export default function SupportSection({
  title,
  sections,
}: {
  title: string;
  sections: { title: string; description: string }[];
}) {
  return (
    <>
      <div className="h-content w-full border-t border-b flex justify-center items-center">
        <h2 className="text-heading w-fit h-fit">
          <AnimatedText text={title} />
        </h2>
      </div>
      <div className="py-[12px] border-b md:py-0 md:grid md:grid-cols-3">
        {sections.map((d) => (
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
