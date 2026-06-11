import { ArrowRight, BadgeCheck, ShieldCheck } from "lucide-react";

const categories = [
  { name: "Smartphones & Accessories", tag: "Top category" },
  { name: "Bluetooth Speakers", tag: "Top category" },
  { name: "Kitchen Appliances", tag: "Top category" },
  { name: "Laptops & Peripherals", tag: "Top category" },
  { name: "Notebooks & Stationery", tag: "Verified seller" },
  { name: "Printers & Office Tools", tag: "Top category" },
  { name: "Mobile Gadgets", tag: "Top category" },
  { name: "Computer Accessories", tag: "Top category" },
];

export default function TopCategories() {
  return (
    <section className="w-full bg-main/5">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Top <span className="text-main">Categories</span>
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Hand-picked categories buyers love this week.
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-main hover:underline"
          >
            View all <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((c) => (
            <a
              key={c.name}
              href="#"
              className="group relative rounded-2xl border border-gray-200 bg-white p-4 hover:border-main transition"
            >
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-main bg-main/10 rounded-full px-2 py-1">
                {c.tag === "Verified sellerr" ? (
                  <BadgeCheck className="size-3" />
                ) : (
                  <ShieldCheck className="size-3" />
                )}
                {c.tag}
              </span>
              <h3 className="mt-3 text-sm font-bold text-black leading-snug min-h-10">
                {c.name}
              </h3>
              <div className="mt-3 aspect-[4/3] rounded-xl bg-main/10 grid place-items-center">
                <span className="text-main/40 text-xs">Product image</span>
              </div>
              <span className="absolute bottom-4 right-4 grid place-items-center size-9 rounded-full bg-main text-white opacity-0 group-hover:opacity-100 transition">
                <ArrowRight className="size-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
