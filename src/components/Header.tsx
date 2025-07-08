import Link from "next/link";

export function Header() {
  return (
    <header className="z-10 fixed top-[0] left-[0] w-full flex justify-between font-faodu text-lg">
      <Link
        className="bg-white border-b border-r px-[20px] py-[12px] h-fit hover:bg-gray-200"
        href="/"
      >
        Home
      </Link>
      <ul className="flex items-center border-b border-l bg-white">
        <li>
          <Link
            className="h-full flex items-center px-[32px] border-r py-[32px] hover:bg-gray-200"
            href="/posts"
          >
            Program
          </Link>
        </li>
        <li>
          <Link
            className="h-full flex items-center px-[32px] py-[32px] hover:bg-gray-200"
            href="/studio"
          >
            Shop
          </Link>
        </li>
      </ul>
    </header>
  );
}
