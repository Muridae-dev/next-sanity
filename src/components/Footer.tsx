import MarqueeText from "./MarqueeText";

export default function Footer() {
  return (
    <footer className="relative w-screen flex flex-col pt-[24px] border-t">
      <div className="flex flex-col items-center md:flex-row md:justify-evenly">
        <div>📞 +47 47 68 66 52</div> <div>📧 Henningsvaerpride@gmail.com</div>{" "}
        <div>📷 @henningsvaer.pride</div>
      </div>
      <MarqueeText text="Henningsvær Pride ❤️" />
    </footer>
  );
}
