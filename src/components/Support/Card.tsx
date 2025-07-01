export default function SupportCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-[12px] border-r last:border-r-0">
      <h3 className="text-5xl pb-[12px] font-faodu">{title}</h3>
      {description}
    </div>
  );
}
