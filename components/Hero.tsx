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
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-main/10 text-main text-xs font-semibold">
            <ShieldCheck className="size-3.5" /> Africa&apos;s trusted escrow marketplace
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold text-black">
            Search. Source. Trade <span className="text-main">safely</span> across Africa.
          </h1>
          <p className="mt-3 text-sm md:text-base text-gray-600">
            Find verified <span className="text-main font-semibold">sellers</span> and products across Africa with escrow-secured trade.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-1 p-1 rounded-sm bg-white border border-gray-200 shadow-sm">
            {tabs.map((t, i) => {
              const Icon = t.icon;
              const active = i === 0;
              return (
                <button
                  key={t.id}
                  className={`flex items-center gap-2 px-5 h-10 rounded-sm text-sm font-semibold transition ${
                    active
                      ? "bg-main text-white"
                      : "text-black hover:text-main"
                  }`}
                >
                  <Icon className="size-4" />
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search box */}
        <div className="mt-5 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 p-2 bg-white rounded-2xl border-2 border-main shadow-lg shadow-main/10">
            <div className="flex items-center flex-1 gap-2 px-3">
              <Search className="size-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products, sellers, manufacturers, or categories..."
                className="flex-1 bg-transparent outline-none text-sm text-black placeholder:text-gray-400 h-10"
              />
            </div>
            <button
              aria-label="Image search"
              className="grid place-items-center size-10 rounded-xl text-black hover:bg-gray-100"
            >
              <Camera className="size-5" />
            </button>
            <button
              aria-label="Filters"
              className="grid place-items-center size-10 rounded-xl text-black hover:bg-gray-100"
            >
              <Sliders className="size-5" />
            </button>
            <button className="flex items-center gap-2 h-10 px-5 rounded-xl bg-main text-white text-sm font-semibold hover:opacity-90">
              <Search className="size-4" />
              Search
            </button>
          </div>
        </div>

        {/* Popular categories */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm font-semibold text-black mr-1">Popular categories:</span>
          {popular.map((c) => (
            <a
              key={c}
              href="#"
              className="px-3.5 h-9 inline-flex items-center rounded-sm bg-white border border-gray-200 text-xs text-black hover:border-main hover:text-main transition"
            >
              {c}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
