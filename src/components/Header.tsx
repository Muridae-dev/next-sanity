import Link from "next/link";

export function Header() {
  return (
    <header className="z-10 fixed top-[0] left-[0] w-full flex justify-between">
      <Link className="border-b border-r px-[20px] py-[12px]" href="/">
        Home
      </Link>
      <ul className="flex items-center px-[20px] border-b border-l">
        <li className="h-full flex items-center pr-[20px] border-r">
          <Link href="/posts">Posts</Link>
        </li>
        <li className="h-full flex items-center pl-[20px]">
          <Link href="/studio">Sanity Studio</Link>
        </li>
      </ul>
    </header>
  );
}
