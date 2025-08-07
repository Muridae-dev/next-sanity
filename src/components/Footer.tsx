import MarqueeText from "./MarqueeText";

export default function Footer() {
  return (
    <footer className="relative w-screen flex flex-col pt-[24px] border-t font-chicle text-2xl md:text-3xl">
      <address className="flex flex-col items-center md:flex-row md:justify-evenly not-italic pb-[12px]">
        <a
          href="tel:+4747686652"
          className="hover:underline"
          aria-label="Call us at +47 47 68 66 52"
        >
          📞 +47 47 68 66 52
        </a>
        <a
          href="mailto:Henningsvaerpride@gmail.com"
          className="hover:underline"
          aria-label="Email Henningsvaer Pride"
        >
          📧 Henningsvaerpride@gmail.com
        </a>
        <a
          href="https://www.instagram.com/henningsvaer.pride"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
          aria-label="Visit our Instagram profile"
        >
          📷 @henningsvaer.pride
        </a>
      </address>
      <MarqueeText text="Henningsvær Pride ❤️" />
    </footer>
  );
}
