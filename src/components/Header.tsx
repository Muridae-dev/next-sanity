import AnimatedLink from "./AnimatedLink";

export function Header() {
  return (
    <header className="z-10 fixed top-[0] left-[0] w-full flex justify-between font-faodu text-lg">
      <AnimatedLink
        className="menu-button border-b border-r px-[20px] py-[12px] h-fit"
        href="/"
      >
        Home
      </AnimatedLink>
      <ul className="flex items-center border-b border-l">
        <li>
          <AnimatedLink
            className="menu-button h-full flex items-center px-[32px] border-r py-[32px]"
            href="/events"
          >
            Program
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink
            className="menu-button h-full flex items-center px-[32px] py-[32px]"
            href="/studio"
          >
            Shop
          </AnimatedLink>
        </li>
      </ul>
    </header>
  );
}
