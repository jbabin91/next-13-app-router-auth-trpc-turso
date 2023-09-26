import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed left-0 top-0 flex w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <div className="flex space-x-2 px-4 py-2">
        <Link
          href="/"
          className="hover:text-teal-800 hover:underline"
          title="Home"
        >
          Home
        </Link>
        <Link
          href="/add-new"
          className="hover:text-teal-800 hover:underline"
          title="Add New"
        >
          Add New
        </Link>
        <Link
          href="/about"
          className="hover:text-teal-800 hover:underline"
          title="About"
        >
          About
        </Link>
      </div>
    </nav>
  );
}
