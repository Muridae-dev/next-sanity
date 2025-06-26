import Link from "next/link";

export function Header() {
  return (
    <header className="z-10 fixed top-[0] left-[0] w-full flex justify-between">
      <Link
        className="bg-white border-b border-r px-[20px] py-[12px] h-fit"
        href="/"
      >
        Home
      </Link>
      <ul className="flex items-center px-[32px] border-b border-l bg-white">
        <li className="h-full flex items-center pr-[32px] border-r py-[32px]">
          <Link href="/posts">Program</Link>
        </li>
        <li className="h-full flex items-center pl-[32px] py-[32px]">
          <Link href="/studio">Shop</Link>
        </li>
      </ul>
    </header>
  );
}
