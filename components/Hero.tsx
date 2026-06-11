import { Search, Camera, Sliders, ShieldCheck, Package, Sparkles } from "lucide-react";

const tabs = [
  { id: "products", label: "Products", icon: Package },
  // { id: "sellers", label: "Sellers", icon: ShieldCheck },
  // { id: "rfq", label: "RFQ", icon: Sparkles },
];

const popular = [
  "Electronics",
  "Gadgets",
  "Appliances",
  // "Stationery",
  "Computer Accessories",
  "Mobile Phones",
  "Audio",
  // "Office Supplies",
];

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-main/35 via-white to-main/40">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-14 md:py-20">
        <div className="text-center max-w-3xl mx-auto px-2">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-main/10 text-main text-xs font-semibold">
            <ShieldCheck className="size-3.5 shrink-0" /> First trusted escrow marketplace
          </span>
          <h1 className="mt-4 text-2xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
            {/* Search. Source. Trade <span className="text-main">safely</span> across Africa. */}
            <span className="text-main">Find</span> Electronics. Gadgets. Appliances & Stationery
          </h1>
        </div>

        {/* Search box */}
        <div className="mt-8 md:mt-12 max-w-4xl mx-auto px-2 sm:px-0">
          <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 md:p-3 bg-white rounded-xl md:rounded-2xl border-2 border-main shadow-lg shadow-main/10">
            <div className="flex items-center flex-1 gap-1.5 sm:gap-2 px-1 sm:px-3 min-w-0">
              <Search className="size-4 sm:size-5 text-gray-400 shrink-0" />
              <input
                type="text"
                placeholder="Search products, sellers, categories..."
                className="flex-1 min-w-0 bg-transparent outline-none text-xs sm:text-sm text-black placeholder:text-gray-400 h-8 sm:h-10"
              />
            </div>
            <button
              aria-label="Image search"
              className="grid place-items-center size-8 sm:size-10 rounded-lg sm:rounded-xl text-black hover:bg-gray-100 shrink-0 transition-colors"
            >
              <Camera className="size-4 sm:size-5" />
            </button>
            <button
              aria-label="Filters"
              className="grid place-items-center size-8 sm:size-10 rounded-lg sm:rounded-xl text-black hover:bg-gray-100 shrink-0 transition-colors"
            >
              <Sliders className="size-4 sm:size-5" />
            </button>
            <button className="flex items-center justify-center gap-1.5 sm:gap-2 h-8 sm:h-10 px-3 sm:px-4 md:px-5 rounded-lg sm:rounded-xl bg-main text-white text-xs sm:text-sm font-semibold hover:opacity-90 shrink-0 transition-all">
              <Search className="size-3.5 sm:size-4 shrink-0" />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </div>

        {/* Popular categories */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-2">
          <span className="text-xs sm:text-sm font-semibold text-black mr-1">Popular categories:</span>
          {popular.map((c) => (
            <a
              key={c}
              href="#"
              className="px-2.5 sm:px-3.5 h-7 sm:h-9 inline-flex items-center rounded-sm bg-white border border-gray-200 text-[10px] sm:text-xs text-black hover:border-main hover:text-main transition-colors"
            >
              {c}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
