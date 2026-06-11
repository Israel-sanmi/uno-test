"use client";

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

const items = [
  { label: "Home", hasMenu: true },
  { label: "Shop", hasMenu: true },
  
  
  { label: "Blog" },

];

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

export default function NavMenu() {
  const [megaOpen, setMegaOpen] = useState(false);
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
    <nav className="w-full bg-white border-b border-gray-100 relative" ref={ref}>
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 h-14 gap-6">
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

        <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-black">
          {items.map((it) => (
            <li key={it.label}>
              <a
                href="#"
                className="flex items-center gap-1 hover:text-main transition"
              >
                {it.label}
                {it.hasMenu && <ChevronDown className="size-3.5" />}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="hidden md:flex items-center gap-2 text-sm text-black hover:text-main"
        >
          <span className="grid place-items-center size-9 rounded-full border border-main text-main">
            <Headphones className="size-4" />
          </span>
          <span className="leading-tight">
            <span className="block text-[10px] text-gray-500">24/7 Support</span>
            <span className="block font-bold">888-777-999</span>
          </span>
        </a>
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
    </nav>
  );
}
