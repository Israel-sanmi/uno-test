import { Search, User, ShoppingCart, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl flex items-center gap-6 px-4 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <span className="grid place-items-center size-9 rounded-lg bg-main text-white font-bold">
            F
          </span>
          <span className="text-xl font-bold text-black">
            First<span className="text-main">Uno</span>
          </span>
        </a>

        {/* Search */}
        <div className="flex-1 max-w-2xl">
          <div className="flex items-center w-full h-11 rounded-full border border-gray-200 focus-within:border-main transition">
            <input
              type="text"
              placeholder="Search for items..."
              className="flex-1 bg-transparent outline-none px-5 text-sm text-black placeholder:text-gray-400"
            />
            <button
              aria-label="Search"
              className="grid place-items-center size-11 rounded-full bg-main text-white hover:opacity-90"
            >
              <Search className="size-4" />
            </button>
          </div>
        </div>

        {/* Account + Cart */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#"
            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50"
          >
            <span className="grid place-items-center size-9 rounded-lg bg-main/10 text-main">
              <User className="size-4" />
            </span>
            <span className="text-xs leading-tight text-black">
              Account
              <br />
              <span className="font-semibold">Log in</span>
            </span>
          </a>

          <a
            href="#"
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 relative"
          >
            <span className="grid place-items-center size-9 rounded-lg bg-main/10 text-main relative">
              <ShoppingCart className="size-4" />
              <span className="absolute -top-1 -right-1 size-4 rounded-full bg-main text-white text-[10px] grid place-items-center">
                0
              </span>
            </span>
            <span className="text-xs leading-tight text-black">
              Cart
              <br />
              <span className="font-semibold">0 - Items</span>
            </span>
          </a>

          <button
            aria-label="Menu"
            className="md:hidden grid place-items-center size-10 rounded-lg border border-gray-200 text-black"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
