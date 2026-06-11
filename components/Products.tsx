import { Camera, BadgeCheck } from "lucide-react";

type Product = {
  title: string;
  price: string;
  moq: string;
  sold: string;
  age: string;
  origin: string;
  verified?: boolean;
  badge?: string;
};

const products: Product[] = [
  { title: "K9 Mini Type-C Wireless Lavalier Microphone Noise Cancelling", price: "₦2,872", moq: "1 piece", sold: "551 sold", age: "2 yrs", origin: "CN", badge: "CE" },
  { title: "OEM Customizable 85-Inch Android Smart LED TV 4K Television", price: "₦54,417-72,555", moq: "1 piece", sold: "812 sold", age: "12 yrs", origin: "CN", verified: true, badge: "CE CB" },
  { title: "51.2V Lithium Iron Phosphate Battery Pack Solar Storage", price: "₦204,061-355,217", moq: "1 set", sold: "5 sold", age: "2 yrs", origin: "CN", verified: true, badge: "CE" },
  { title: "New Arrival 1000W TVS Motor Tricycle Electric Cargo", price: "₦603,113-1,056,581", moq: "2 pieces", sold: "139 sold", age: "6 yrs", origin: "CN", verified: true, badge: "CE" },
  { title: "Schylling NeeDoh Nice TPR Squishy Stress-Relieving Cube", price: "₦2,721-4,157", moq: "10 pieces", sold: "5,339 sold", age: "1 yr", origin: "CN", badge: "Reorder 41%" },
  { title: "Smartphone 6.5\" HD Display 128GB Unlocked Mobile Phone", price: "₦98,500", moq: "1 piece", sold: "3,402 sold", age: "1 yr", origin: "CN", verified: true, badge: "FCC" },
  { title: "Wireless Noise Cancelling Earbuds Pro Bluetooth 5.3", price: "₦3,940", moq: "10 pieces", sold: "1,204 sold", age: "1 yr", origin: "CN" },
  { title: "Mini Portable Air Cooler Fan USB Rechargeable", price: "₦6,430", moq: "1 piece", sold: "1,890 sold", age: "2 yrs", origin: "CN" },
  { title: "Smart Robot Vacuum Cleaner Mapping WiFi App Control", price: "₦48,750", moq: "1 piece", sold: "402 sold", age: "1 yr", origin: "CN", verified: true },
  { title: "Original Unlocked Mobile Phone 5G Android 128GB", price: "₦312,000", moq: "1 piece", sold: "789 sold", age: "2 yrs", origin: "CN" },
  { title: "Electric Cargo Tricycle 1500W Heavy Duty Loading", price: "₦845,000", moq: "1 piece", sold: "212 sold", age: "4 yrs", origin: "CN" },
  { title: "Wireless Charger Stand 15W Fast Charging Pad", price: "₦4,210", moq: "5 pieces", sold: "2,109 sold", age: "1 yr", origin: "CN" },
];

type Props = {
  title?: string;
  showHeader?: boolean;
  limit?: number;
  variant?: "default" | "compact";
};

export default function Products({
  title = "Featured Products",
  showHeader = true,
  limit,
  variant = "default",
}: Props) {
  const list = typeof limit === "number" ? products.slice(0, limit) : products;

  const grid = (
    <>
      {showHeader && variant === "default" && (
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              All <span className="text-main">Products</span>
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Discover top deals from verified sellers across the marketplace.
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-main hover:underline"
          >
            View all
          </a>
        </div>
      )}

      {title && !showHeader && (
        <h3 className="text-sm font-bold text-black mb-3">{title}</h3>
      )}

      <div
        className={
          variant === "compact"
            ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
            : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
        }
      >
        {list.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>
    </>
  );

  if (variant === "compact") {
    return <div>{grid}</div>;
  }

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">{grid}</div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href="#"
      className="group block rounded-xl border border-gray-200 bg-white p-3 hover:border-main transition"
    >
      <div className="relative aspect-square rounded-lg bg-main/5 grid place-items-center overflow-hidden">
        <span className="text-main/40 text-xs">Product image</span>
        {product.badge && (
          <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-white/90 text-[10px] font-bold text-black border border-gray-200">
            {product.badge}
          </span>
        )}
        <span className="absolute bottom-2 left-2 grid place-items-center size-7 rounded-full bg-white shadow">
          <Camera className="size-3.5 text-black" />
        </span>
      </div>
      <h4 className="mt-2 text-xs text-black line-clamp-2 min-h-8 group-hover:text-main">
        {product.title}
      </h4>
      <div className="mt-1 flex items-center gap-1 text-[10px] min-h-3">
        {product.verified && (
          <span className="inline-flex items-center gap-0.5 text-main font-semibold">
            <BadgeCheck className="size-3" /> Verified
          </span>
        )}
        {product.badge?.includes("Reorder") && (
          <span className="text-main font-semibold">↑ {product.badge}</span>
        )}
      </div>
      <p className="mt-1 text-sm font-bold text-black">{product.price}</p>
      <p className="text-[10px] text-gray-500">
        <span className="font-semibold text-black">MOQ:</span> {product.moq}{" "}
        <span className="text-gray-400">|</span> {product.sold}
      </p>
      <p className="text-[10px] text-gray-400">
        {product.age} <span className="text-gray-400">·</span> {product.origin}
      </p>
    </a>
  );
}
