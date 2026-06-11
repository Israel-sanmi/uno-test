"use client";
import { Search, User, ShoppingCart, Menu } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import {
  LayoutGrid,
  ChevronDown,
  Headphones,
  Smartphone,
  Laptop,
  Plug,
  Shirt,
  Home as HomeIcon,
  Watch,
  Gamepad2,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import Products from "./Products";
import NavMenu from "./NavMenu";

const categories = [
  { name: "Phones & Tablets", count: "85,707 ads", Icon: Smartphone },
  { name: "Electronics", count: "263,298 ads", Icon: Laptop },
  { name: "Appliances", count: "544,321 ads", Icon: Plug },
  // { name: "Fashion", count: "412,930 ads", Icon: Shirt },
  // { name: "Home & Garden", count: "198,402 ads", Icon: HomeIcon },
  // { name: "Watches & Jewelry", count: "76,118 ads", Icon: Watch },
  { name: "Gaming", count: "92,654 ads", Icon: Gamepad2 },
  // { name: "Beauty", count: "152,389 ads", Icon: Sparkles },
];

const items = [
  { label: "Home" },
  { label: "RFQ"},
  { label: "Protection" },
  { label: "Shipping" },
];

export default function Header({
  onCartClick,
  cartCount = 0,
}: {
  onCartClick?: () => void;
  cartCount?: number;
}) {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setMegaOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);
  return (
    <header ref={ref} className="relative w-full bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl flex items-center justify-between gap-6 px-4 py-4">
        {/* Logo */}
        <div className="flex items-center gap-4 ">
          <a href="/" className="flex items-center gap-2 shrink-0">
            <span className="grid place-items-center size-9 rounded-lg bg-main text-white font-bold">
              F
            </span>
            <span className="text-xl font-bold text-black">
              First<span className="text-main">Uno</span>
            </span>
          </a>
          <button
            type="button"
            aria-expanded={megaOpen}
            onClick={() => setMegaOpen((v) => !v)}
            className={`flex items-center gap-2 h-10 px-4 rounded-lg text-sm font-semibold transition ${
              megaOpen
                ? "bg-black text-white"
                : "bg-main text-white hover:opacity-90"
            }`}
          >
            <LayoutGrid className="size-4" />
            Explore All Categories
            <ChevronDown
              className={`size-4 transition-transform ${megaOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>
           <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-black">
          {items.map((it) => (
            <li key={it.label}>
              <a
                href="#"
                className="flex items-center gap-1 hover:text-main transition"
              >
                {it.label}
                {/* {it.hasMenu && <ChevronDown className="size-3.5" />} */}
              </a>
            </li>
          ))}
        </ul>
        {/* Search: not on home page but on other pages */}
        {/* <div className="flex-1 max-w-2xl">
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
        </div> */}

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
              <span className="font-semibold">Log in / Sign up</span>
            </span>
          </a>

          <button
            onClick={onCartClick}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 relative cursor-pointer text-left"
          >
            <span className="grid place-items-center size-9 rounded-lg bg-main/10 text-main relative">
              <ShoppingCart className="size-4" />
              <span className="absolute -top-1 -right-1 size-4 rounded-full bg-main text-white text-[10px] grid place-items-center font-bold">
                {cartCount}
              </span>
            </span>
            <span className="text-xs leading-tight text-black">
              Cart
              <br />
              <span className="font-semibold">{cartCount} - Items</span>
            </span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Menu"
            className="md:hidden grid place-items-center size-10 rounded-sm border border-gray-200 text-black hover:bg-gray-50 active:scale-95 transition cursor-pointer"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>
      {/* Mega menu */}
      {megaOpen && (
        <div className="absolute left-0 right-0 top-full z-40 bg-white border-b border-gray-200 shadow-2xl shadow-black/10">
          <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
            {/* Categories sidebar */}
            <aside>
              <h3 className="px-3 mb-2 text-xs font-bold uppercase tracking-wider text-gray-500">
                All Categories
              </h3>
              <ul className="rounded-xl border border-gray-200 divide-y divide-gray-100 overflow-hidden">
                {categories.map(({ name, count, Icon }) => (
                  <li key={name}>
                    <a
                      href="#"
                      className="flex items-center gap-3 px-3 py-3 hover:bg-main/5 group"
                    >
                      <span className="grid place-items-center size-9 rounded-lg bg-main/10 text-main group-hover:bg-main group-hover:text-white transition">
                        <Icon className="size-4" />
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block text-sm font-semibold text-black truncate">
                          {name}
                        </span>
                        <span className="block text-[11px] text-gray-500">
                          {count}
                        </span>
                      </span>
                      <ChevronRight className="size-4 text-gray-400 group-hover:text-main" />
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Products grid */}
            <div>
              <div className="flex items-center justify-between mb-3">
                {/* <h3 className="text-sm font-bold text-black">Featured products</h3> */}
                <a
                  href="#"
                  className="text-xs text-main font-semibold hover:underline"
                >
                  See all
                </a>
              </div>
              <Products variant="compact" limit={8} showHeader={false} />
            </div>
          </div>
        </div>
      )}
      {/* Mobile navigation menu drawer */}
      <NavMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
