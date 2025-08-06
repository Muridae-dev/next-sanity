import AnimatedLink from "./AnimatedLink";

export function Header() {
  return (
    <header className="z-10 fixed top-[0] left-[0] w-full flex justify-between font-faodu md:text-lg">
      <AnimatedLink
        className="menu-button border-b border-r px-[20px] py-[12px] h-fit"
        href="/"
      >
        Home
      </AnimatedLink>
      <ul className="flex items-center border-b border-l">
        <li>
          <AnimatedLink
            className="menu-button h-full flex items-center border-r px-[20px] py-[12px] md:px-[32px] md:py-[32px]"
            href="/events"
          >
            Events
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink
            className="menu-button h-full flex items-center px-[20px] py-[12px] md:px-[32px] md:py-[32px]"
            href="/media"
          >
            Media
          </AnimatedLink>
        </li>
      </ul>
    </header>
  );
}
