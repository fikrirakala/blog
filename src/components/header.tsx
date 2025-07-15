import Link from "next/link";

const navItems = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "bookmarks",
    href: "/bookmarks",
  },
];

export default function Header() {
  return (
    <header className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <nav className="flex gap-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
