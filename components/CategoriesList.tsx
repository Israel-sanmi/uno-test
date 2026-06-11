import { Smartphone, Laptop, Plug, Shirt, Home as HomeIcon, Watch, ChevronRight, Star, Gamepad2, Sparkles } from "lucide-react";

const items = [
  { name: "Phones & Tablets", count: "85,707 ads", Icon: Smartphone },
  { name: "Electronics", count: "263,298 ads", Icon: Laptop },
  { name: "Appliances", count: "544,321 ads", Icon: Plug },
  // { name: "Fashion", count: "412,930 ads", Icon: Shirt },
  // { name: "Home & Garden", count: "198,402 ads", Icon: HomeIcon },
  // { name: "Watches & Jewelry", count: "76,118 ads", Icon: Watch },
  { name: "Gaming", count: "92,654 ads", Icon: Gamepad2 },
  // { name: "Beauty", count: "152,389 ads", Icon: Sparkles },
];

export default function CategoriesList() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        {/* Sidebar categories */}
        <aside className="rounded-2xl border border-gray-200 bg-white p-3 h-fit">
          <h3 className="flex items-center gap-2 px-2 py-2 text-sm font-semibold text-black">
            <Star className="size-4 text-main" /> Categories for you
          </h3>
          <ul className="mt-1 divide-y divide-gray-100">
            {items.map(({ name, count, Icon }) => (
              <li key={name}>
                <a
                  href="#"
                  className="flex items-center gap-3 px-2 py-3 rounded-xl hover:bg-main/5 group"
                >
                  <span className="grid place-items-center size-10 rounded-xl bg-main/10 text-main group-hover:bg-main group-hover:text-white transition">
                    <Icon className="size-5" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-sm font-semibold text-black truncate">{name}</span>
                    <span className="block text-xs text-gray-500">{count}</span>
                  </span>
                  <ChevronRight className="size-4 text-gray-400 group-hover:text-main" />
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Right column with three cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ProductCard
            eyebrow="Browsing history"
            title="Office Chair"
            price="£40.07"
            accent="bg-main/10"
          />
          <ProductCard
            eyebrow="Keep looking for"
            title="Blenders"
            price="£20.39"
            accent="bg-main/10"
          />
          <ProductCard
            eyebrow="Keep looking for"
            title="Juice Extractor"
            price="£37.76"
            accent="bg-main/10"
          />
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  eyebrow,
  title,
  price,
  accent,
}: {
  eyebrow: string;
  title: string;
  price: string;
  accent: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 p-4 bg-white hover:border-main transition">
      <p className="text-xs text-gray-500">{eyebrow}</p>
      <h4 className="mt-1 text-base font-bold text-black">{title}</h4>
      <div className={`mt-4 aspect-[4/3] rounded-xl ${accent} grid place-items-center`}>
        <span className="text-main/40 text-xs">Product image</span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-lg font-bold text-main">{price}</span>
        <button className="size-9 rounded-full bg-main text-white grid place-items-center hover:opacity-90">
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
