import { getDictionary, locales } from "@/app/(frontend)/[locale]/dictionaries";
import AnimatedLink from "./AnimatedLink";

export async function Header({ locale }: { locale: locales }) {
  const dict = await getDictionary(locale);

  return (
    <header className="z-10 fixed top-[0] left-[0] w-full flex justify-between font-chicle md:text-2xl">
      <AnimatedLink
        className="menu-button border-b border-r px-[20px] py-[12px] h-fit"
        href=""
      >
        {dict.header.home}
      </AnimatedLink>
      <ul className="flex items-center border-b border-l">
        <li>
          <AnimatedLink
            className="menu-button h-full flex items-center border-r px-[20px] py-[12px] md:px-[32px] md:py-[24px]"
            href="/events"
          >
            {dict.header.events}
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink
            className="menu-button h-full flex items-center border-r px-[20px] py-[12px] md:px-[32px] md:py-[24px]"
            href="/media"
          >
            {dict.header.media}
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink
            className={`menu-button h-full border-r flex items-center px-[20px] py-[12px] md:px-[24px] md:py-[24px] ${locale === "en" ? "!bg-menu-button-active" : ""}`}
            href="/en"
          >
            🇬🇧
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink
            className={`menu-button h-full flex items-center px-[20px] py-[12px] md:px-[24px] md:py-[24px] ${locale === "no" ? "!bg-menu-button-active" : ""}`}
            href="/no"
          >
            🇳🇴
          </AnimatedLink>
        </li>
      </ul>
    </header>
  );
}
