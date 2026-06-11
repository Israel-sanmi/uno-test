"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Star,
  BadgeCheck,
  Shield,
  CreditCard,
  Truck,
  MessageCircle,
  Mail,
  Play,
  ThumbsUp,
  MapPin,
  Clock,
  Award,
  Package,
  Plus,
  Minus,
  Heart,
  Share2,
  Camera,
  Check,
  Flag,
  X,
  Trash2,
  ShoppingCart,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FrequentlyBoughtCarousel from "@/components/product/frequentlyBoughtCarousel";

/* ────────────────────── Mock Data ────────────────────── */

const productImages = [
  { id: 1, color: "hsl(210, 40%, 92%)", label: "Front view" },
  { id: 2, color: "hsl(210, 30%, 85%)", label: "Side angle" },
  { id: 3, color: "hsl(200, 25%, 88%)", label: "Keyboard close-up" },
  { id: 4, color: "hsl(220, 35%, 90%)", label: "Back view" },
  { id: 5, color: "hsl(195, 30%, 86%)", label: "Ports detail" },
  { id: 6, color: "hsl(210, 20%, 83%)", label: "Screen display" },
  { id: 7, color: "hsl(205, 28%, 89%)", label: "Box contents" },
];

const product = {
  title:
    'Brand New Win10/11 Laptop 14.1" Intel N4500 8GB DDR4 512GB SSD Light Weight Laptop for Home&Study FHD IPS in Stock',
  rating: 5.0,
  reviewCount: 1,
  sold: 1,
  hotTag: "#16 hot selling in Personal & Hom…",
  badges: ["CE", "FCC"],
  priceRange: "₦204,061-294,755",
  moq: "1 piece",
  colors: [
    { name: "Silver", hex: "#8B9DAF" },
    { name: "Space Gray", hex: "#555D66" },
  ],
  capacities: [
    "8GB RAM+64GB SSD",
    "8GB RAM+128GB SSD",
    "8GB RAM+256GB SSD",
    "8GB RAM+512GB SSD",
  ],
  modelNumbers: ["N4500"],
  customization: {
    title: "Logo/graphic design",
    price: "from ₦3,024/piece",
    minOrder: "Min. order: 20 pieces",
  },
};

const supplier = {
  name: "Shenzhen Honlin Technology Co., Ltd.",
  location: "Shenzhen, CN",
  years: 11,
  type: "Custom Manufacturer",
  verified: true,
  ranking: "#5 best seller in Personal & Home laptops",
  storeRating: 4.4,
  storeReviews: 171,
  responseTime: "≤4h",
  onTimeDelivery: "≥100%",
  reorderRate: "5%",
  capabilities: [
    "Minor customization",
    "Drawing-based customization",
    "Sample-based customization",
    "Full customization",
  ],
};

const keyAttributes = [
  ["series", "For Home & Student"],
  ["products status", "New"],
  ["screen size", '14.1"'],
  ["processor type", "Intel N4500"],
  ["operating system", "WIN10/WIN11"],
  ["hard drive type", "SSD"],
  ["display resolution", "1920 x 1080"],
  ["graphics card type", "Integrated Card"],
  ["brand name", "HonlinBook"],
  ["processor core", "Dual Core"],
  ["display ratio", "16:09"],
  ["port", "2*USB3.0"],
  ["wlan", "WiFi 802.11 a/b/g"],
  ["feature", "Backlit keyboard"],
  ["panel type", "IPS"],
  ["thickness", "18 - 20mm"],
];

const frequentlyBought = [
  {
    title: "Wholesale Wins11 Light Weight Laptop 14.1 Inch…",
    price: "₦219,177-264,523",
    moq: "1 piece",
  },
  {
    title: "New Wholesale 14 Inch Intel N4500 8GB RAM…",
    price: "₦204,061",
    moq: "1 piece",
  },
  {
    title: "Wholesale Customize 14 Inch Business Laptop Int…",
    price: "₦204,061",
    moq: "1 piece",
  },
  {
    title: "OEM Custom Logo 14 Inch Laptop Intel Celeron…",
    price: "₦204,061-287,197",
    moq: "1 piece",
  },
  {
    title: 'Cheapest HDMI Laptop 14.1" Intel N4500 8GB…',
    price: "₦204,061-294,755",
    moq: "1 piece",
  },
  {
    title: "Ultra Thin 15.6 Inch Laptop AMD Ryzen 5 16GB…",
    price: "₦312,000-445,500",
    moq: "1 piece",
  },
  {
    title: "Mini Portable Business Laptop 12.5 Inch Intel…",
    price: "₦175,400",
    moq: "1 piece",
  },
];

const reviews = [
  {
    user: "s***y",
    rating: 5,
    date: "Jun 4, 2026",
    country: "Spain",
    verified: true,
    modelNumber: "N4500",
    color: "Silver",
    capacity: "8GB RAM+128GB SSD",
    videoMemory: "Main memory allocated memory",
    helpful: 0,
  },
];

const faqs = [
  {
    q: "What is the minimum order quantity?",
    a: "The minimum order quantity is 1 piece for standard configurations. For customized orders (logo, packaging), the minimum is 20 pieces.",
  },
  {
    q: "How long does shipping take?",
    a: "Standard shipping typically takes 15-30 business days depending on your location. Express shipping options are available at additional cost, usually 7-12 days.",
  },
  {
    q: "Can I get a sample before bulk ordering?",
    a: "Yes, we offer sample orders. You can order 1-2 units at regular price to evaluate quality before committing to a larger order.",
  },
  {
    q: "What warranty is provided?",
    a: "All laptops come with a 12-month manufacturer warranty covering defects in materials and workmanship. Extended warranty options are available upon request.",
  },
  {
    q: "Do you support OEM/ODM customization?",
    a: "Yes, we support full OEM/ODM customization including logo printing, custom packaging, pre-installed software, and hardware configuration changes. Minimum order for customization is 20 pieces.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept Visa, MasterCard, bank transfer (T/T), and trade assurance payments through the platform. All payments are secured with escrow protection.",
  },
];

const tabItems = [
  { id: "service", label: "Service" },
  { id: "attributes", label: "Attributes" },
  { id: "reviews", label: "Reviews" },
  { id: "supplier", label: "Supplier" },
  { id: "description", label: "Description" },
];

const deliveryOptions: Record<
  string,
  {
    freeDelivery: string;
    expressDelivery: string;
    returns: string;
    warranty: string;
  }
> = {
  "United Kingdom": {
    freeDelivery: "Free delivery by 18 - 20 Jun",
    expressDelivery: "Express delivery by 15-17 Jun from £5.00",
    returns: "Free 30-day returns",
    warranty: "12 months seller warranty",
  },
  "United States": {
    freeDelivery: "Free delivery by 20 - 22 Jun",
    expressDelivery: "Express delivery by 16-18 Jun from $15.00",
    returns: "Free 30-day returns",
    warranty: "12 months seller warranty",
  },
  Nigeria: {
    freeDelivery: "Free delivery by 22 - 25 Jun",
    expressDelivery: "Express delivery by 17-20 Jun from ₦15,000",
    returns: "Free 15-day returns",
    warranty: "12 months local warranty",
  },
  Germany: {
    freeDelivery: "Free delivery by 19 - 21 Jun",
    expressDelivery: "Express delivery by 16-18 Jun from €10.00",
    returns: "Free 30-day returns",
    warranty: "24 months warranty",
  },
};

/* ────────────────────── Page Component ────────────────────── */

export default function ProductDetailPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [mediaTab, setMediaTab] = useState<"photos" | "video">("photos");
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedCapacity, setSelectedCapacity] = useState(0);
  const [activeTab, setActiveTab] = useState("service");
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set());
  const [thumbStart, setThumbStart] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<
    {
      id: string;
      title: string;
      price: number;
      color: string;
      capacity: string;
      quantity: number;
      imageColor: string;
    }[]
  >([]);
  const [quantity, setQuantity] = useState(1);
  const [isLaserPrintingSelected, setIsLaserPrintingSelected] = useState(false);
  const [deliveryCountry, setDeliveryCountry] = useState("United Kingdom");

  const handleAddFrequentlyBoughtToCart = (item: {
    title: string;
    price: string;
  }) => {
    const cleanedPrice = parseFloat(item.price.replace(/[^\d]/g, "")) || 204061;
    const newItem = {
      id: `frequently-bought-${item.title}`,
      title: item.title,
      price: cleanedPrice,
      color: "Standard",
      capacity: "Standard",
      quantity: 1,
      imageColor: "hsl(210, 40%, 92%)",
    };

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((c) => c.id === newItem.id);
      if (existingIndex > -1) {
        const nextCart = [...prevCart];
        nextCart[existingIndex].quantity += 1;
        return nextCart;
      }
      return [...prevCart, newItem];
    });

    setIsCartOpen(true);
  };

  const addToCart = () => {
    const finalQty = quantity > 0 ? quantity : 1;
    const newItem = {
      id: `${product.colors[selectedColor].name}-${product.capacities[selectedCapacity]}`,
      title: product.title,
      price: 204061,
      color: product.colors[selectedColor].name,
      capacity: product.capacities[selectedCapacity],
      quantity: finalQty,
      imageColor: productImages[currentImage].color,
    };

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.id === newItem.id,
      );
      if (existingIndex > -1) {
        const nextCart = [...prevCart];
        nextCart[existingIndex].quantity += finalQty;
        return nextCart;
      }
      return [...prevCart, newItem];
    });

    setIsModalOpen(false);
    setIsCartOpen(true);
  };

  const updateCartQty = (id: string, newQty: number) => {
    if (newQty <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item,
      ),
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  /* magnifier state */
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0 });
  const [magnifierBg, setMagnifierBg] = useState({ x: 0, y: 0 });
  const mainImageRef = useRef<HTMLDivElement>(null);

  /* section refs for scroll-to-tab */
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const tabBarRef = useRef<HTMLDivElement>(null);

  const setRef = useCallback(
    (id: string) => (el: HTMLElement | null) => {
      sectionRefs.current[id] = el;
    },
    [],
  );

  /* Watch scroll to update active tab */
  useEffect(() => {
    const handleScroll = () => {
      const offset = 160;
      for (const tab of tabItems) {
        const el = sectionRefs.current[tab.id];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom > offset) {
            setActiveTab(tab.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      const offset = 130;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveTab(id);
    }
  };

  const nextImage = () =>
    setCurrentImage((i) => (i + 1) % productImages.length);
  const prevImage = () =>
    setCurrentImage(
      (i) => (i - 1 + productImages.length) % productImages.length,
    );

  const thumbVisible = 5;
  const canScrollThumbUp = thumbStart > 0;
  const canScrollThumbDown = thumbStart + thumbVisible < productImages.length;

  const toggleFaq = (idx: number) => {
    setOpenFaqs((prev) => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  };

  /* Magnifier handler */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mainImageRef.current) return;
    const rect = mainImageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    setMagnifierPos({ x, y });
    setMagnifierBg({ x: xPercent, y: yPercent });
  };

  return (
    <div className="font-poppins text-black bg-gray-50 min-h-screen pb-24">
      <TopBar />
      <Header
        onCartClick={() => setIsCartOpen(true)}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <nav className="flex items-center gap-2 text-xs text-gray-500">
            <a href="/" className="hover:text-main">
              Home
            </a>
            <ChevronRight className="size-3" />
            <a href="#" className="hover:text-main">
              Electronics
            </a>
            <ChevronRight className="size-3" />
            <a href="#" className="hover:text-main">
              Laptops
            </a>
            <ChevronRight className="size-3" />
            <span className="text-gray-800 font-medium truncate max-w-xs">
              Personal & Home laptops
            </span>
          </nav>
        </div>
      </div>

      {/* ═══════ SECTION 1: Hero ═══════ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* ── Left: Image Gallery (sticky) ── */}
            <div className="lg:col-span-5 lg:self-start lg:sticky lg:top-4">
              {/* Main image + thumbnails */}
              <div className="flex flex-col md:flex-row gap-3">
                {/* Horizontal thumbnails for mobile / tablet */}
                <div className="flex md:hidden gap-2 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
                  {productImages.map((img, i) => (
                    <button
                      key={img.id}
                      onClick={() => {
                        setCurrentImage(i);
                        setMediaTab("photos");
                      }}
                      className={`w-[60px] h-[60px] shrink-0 rounded-sm border-2 transition overflow-hidden flex items-center justify-center ${
                        currentImage === i
                          ? "border-main"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                      style={{ backgroundColor: img.color }}
                    >
                      <Camera className="size-4 text-gray-400" />
                    </button>
                  ))}
                </div>

                {/* Vertical thumbnails for desktop */}
                <div className="hidden md:flex flex-col items-center gap-1 w-[72px] shrink-0">
                  {canScrollThumbUp && (
                    <button
                      onClick={() => setThumbStart((s) => Math.max(0, s - 1))}
                      className="w-full flex justify-center py-1 text-gray-400 hover:text-main"
                    >
                      <ChevronUp className="size-4" />
                    </button>
                  )}
                  {productImages
                    .slice(thumbStart, thumbStart + thumbVisible)
                    .map((img, i) => {
                      const realIndex = thumbStart + i;
                      return (
                        <button
                          key={img.id}
                          onClick={() => {
                            setCurrentImage(realIndex);
                            setMediaTab("photos");
                          }}
                          className={`w-[68px] h-[68px] rounded-lg border-2 transition overflow-hidden flex items-center justify-center ${
                            currentImage === realIndex
                              ? "border-main"
                              : "border-gray-200 hover:border-gray-400"
                          }`}
                          style={{ backgroundColor: img.color }}
                        >
                          <Camera className="size-4 text-gray-400" />
                        </button>
                      );
                    })}
                  {canScrollThumbDown && (
                    <button
                      onClick={() => setThumbStart((s) => s + 1)}
                      className="w-full flex justify-center py-1 text-gray-400 hover:text-main"
                    >
                      <ChevronDown className="size-4" />
                    </button>
                  )}
                </div>

                {/* Main image with magnifier */}
                <div className="flex-1 relative">
                  {mediaTab === "photos" ? (
                    <div
                      ref={mainImageRef}
                      className="relative w-full aspect-square rounded-sm overflow-hidden cursor-crosshair"
                      style={{
                        backgroundColor: productImages[currentImage].color,
                      }}
                      onMouseEnter={() => setShowMagnifier(true)}
                      onMouseLeave={() => setShowMagnifier(false)}
                      onMouseMove={handleMouseMove}
                    >
                      {/* Placeholder content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                        <Camera className="size-10 text-gray-300" />
                        <span className="text-sm text-gray-400 font-medium">
                          {productImages[currentImage].label}
                        </span>
                      </div>

                      {/* Magnifier lens */}
                      {showMagnifier && (
                        <div
                          className="absolute pointer-events-none border-2 border-main/50 rounded-sm shadow-lg z-10"
                          style={{
                            width: 150,
                            height: 150,
                            left: magnifierPos.x - 75,
                            top: magnifierPos.y - 75,
                            backgroundImage: `radial-gradient(circle at ${magnifierBg.x}% ${magnifierBg.y}%, rgba(0,0,0,0.08) 0%, transparent 60%)`,
                            backgroundColor: productImages[currentImage].color,
                            backgroundSize: "300% 300%",
                            backgroundPosition: `${magnifierBg.x}% ${magnifierBg.y}%`,
                            boxShadow:
                              "0 0 0 2px rgba(255,255,255,0.8), 0 4px 20px rgba(0,0,0,0.15)",
                          }}
                        />
                      )}

                      {/* Nav arrows */}
                      <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 size-9 rounded-sm bg-white/90 shadow grid place-items-center hover:bg-white transition z-20"
                      >
                        <ChevronLeft className="size-5 text-gray-700" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 size-9 rounded-sm bg-white/90 shadow grid place-items-center hover:bg-white transition z-20"
                      >
                        <ChevronRight className="size-5 text-gray-700" />
                      </button>

                      {/* Wishlist + image search icons */}
                      <button className="absolute top-3 right-3 size-9 rounded-sm bg-white/90 shadow grid place-items-center hover:bg-white z-20">
                        <Heart className="size-4 text-gray-600" />
                      </button>
                    </div>
                  ) : (
                    <div className="w-full aspect-square rounded-sm bg-gray-900 flex flex-col items-center justify-center gap-2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10" />
                      <div className="size-16 rounded-sm bg-white/20 hover:bg-white/30 backdrop-blur-sm grid place-items-center cursor-pointer transition transform hover:scale-105 z-20 shadow-md">
                        <Play className="size-7 text-white ml-1 fill-white" />
                      </div>
                      <span className="text-sm text-white/80 font-semibold tracking-wide z-20">
                        Product video preview
                      </span>
                    </div>
                  )}

                  {/* Photo / Video tabs */}
                  <div className="flex items-center justify-center gap-6 mt-4">
                    <button
                      onClick={() => setMediaTab("photos")}
                      className={`flex items-center gap-1.5 pb-2 text-sm font-semibold border-b-2 transition ${
                        mediaTab === "photos"
                          ? "border-black text-black"
                          : "border-transparent text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      <Camera className="size-4" />
                      Photos
                    </button>
                    <button
                      onClick={() => setMediaTab("video")}
                      className={`flex items-center gap-1.5 pb-2 text-sm font-semibold border-b-2 transition ${
                        mediaTab === "video"
                          ? "border-black text-black"
                          : "border-transparent text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      <Play className="size-4" />
                      Video
                    </button>
                  </div>

                  {/* Supplier card (below gallery) */}
                  <div className="mt-5 rounded-sm border border-gray-200 bg-white p-4">
                    <div className="flex items-start gap-3">
                      <div className="size-12 rounded-lg bg-main/10 grid place-items-center shrink-0">
                        <span className="text-main font-bold text-lg">H</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-black truncate">
                            {supplier.name}
                          </h4>
                          {supplier.verified && (
                            <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-main bg-main/10 px-1.5 py-0.5 rounded">
                              <BadgeCheck className="size-3" /> Verified
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                          <Flag className="size-3" />
                          {supplier.location} · {supplier.years} yrs ·{" "}
                          {supplier.type}
                        </p>
                        <p className="text-[11px] text-main mt-1 flex items-center gap-1">
                          <Award className="size-3" />
                          {supplier.ranking}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 text-center">
                      <div>
                        <p className="text-sm font-bold text-black">
                          {supplier.storeRating}/5
                          <span className="text-[10px] text-gray-400 font-normal ml-0.5">
                            ({supplier.storeReviews})
                          </span>
                        </p>
                        <p className="text-[10px] text-gray-500">
                          Store rating
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-black">
                          {supplier.responseTime}
                        </p>
                        <p className="text-[10px] text-gray-500">
                          Response Time
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-black">
                          {supplier.onTimeDelivery}
                        </p>
                        <p className="text-[10px] text-gray-500">
                          On-time delivery rate
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-black">
                          {supplier.reorderRate}
                        </p>
                        <p className="text-[10px] text-gray-500">
                          Reorder rate
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mt-3 text-[11px] text-gray-500">
                      <span className="flex items-center gap-1">
                        <Settings2Icon /> Minor customization
                      </span>
                      <span className="flex items-center gap-1">
                        <Settings2Icon /> Drawing-based customization
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: Product Information ── */}
            <div className="lg:col-span-7 min-w-0">
              {/* Title */}
              <h1 className="text-lg font-bold text-black leading-snug">
                {product.title}
              </h1>

              {/* Rating row */}
              <div className="flex items-center gap-3 mt-3 flex-wrap">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4"
                      fill={i < product.rating ? "#f59e0b" : "none"}
                      stroke={i < product.rating ? "#f59e0b" : "#d1d5db"}
                    />
                  ))}
                </div>
                <span className="text-sm text-black font-semibold">
                  {product.rating}
                </span>
                <a href="#" className="text-sm text-main hover:underline">
                  ({product.reviewCount} review)
                </a>
                <span className="text-sm text-gray-500">
                  {product.sold} sold
                </span>
                <span className="text-xs text-main bg-main/10 px-2 py-0.5 rounded-sm font-medium">
                  🔥 {product.hotTag}
                </span>
              </div>

              {/* Badges */}
              <div className="flex items-center gap-2 mt-3">
                {product.badges.map((b) => (
                  <span
                    key={b}
                    className="px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-700 border border-gray-200"
                  >
                    {b}
                  </span>
                ))}
                <span className="text-xs text-main cursor-pointer hover:underline">
                  +2 more
                </span>
              </div>

              {/* Price */}
              <div className="mt-5 bg-gradient-to-r from-main/5 to-transparent rounded-sm p-4">
                <p className="text-2xl font-bold text-black">
                  {product.priceRange}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Minimum order quantity:{" "}
                  <span className="text-black font-medium">{product.moq}</span>
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-xs text-main border border-main/20 rounded px-2 py-0.5 hover:bg-main/5 transition cursor-pointer ml-auto"
              >
                Select now
              </button>
              {/* Color selector */}
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <label className="text-sm font-semibold text-black">
                    color:
                  </label>
                  <span className="text-sm text-gray-650 font-bold uppercase">
                    {product.colors[selectedColor].name}
                  </span>
                </div>

                <div className="flex gap-2 mt-2">
                  {product.colors.map((c, i) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(i)}
                      className={`size-10 rounded-lg border-2 transition ${
                        selectedColor === i
                          ? "border-main shadow-sm"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>

              {/* Capacity selector */}
              <div className="mt-6">
                <label className="text-sm font-semibold text-black">
                  hard drive capacity
                </label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {product.capacities.map((cap, i) => (
                    <button
                      key={cap}
                      onClick={() => setSelectedCapacity(i)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
                        selectedCapacity === i
                          ? "border-main text-main bg-main/5"
                          : "border-gray-200 text-black hover:border-gray-400"
                      }`}
                    >
                      {cap}
                    </button>
                  ))}
                </div>
              </div>

              {/* Model number */}
              <div className="mt-6">
                <label className="text-sm font-semibold text-black">
                  model number
                </label>
                <div className="flex gap-2 mt-2">
                  {product.modelNumbers.map((m) => (
                    <span
                      key={m}
                      className="px-4 py-2 rounded-lg text-sm font-medium border border-main text-main bg-main/5"
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <button className="mt-2 text-xs text-main hover:underline">
                  + 1 more variants
                </button>
              </div>

              {/* Customization options */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-black">
                  Customization options (1)
                </h3>
                <div
                  onClick={() => setIsModalOpen(true)}
                  className="mt-2 rounded-sm border border-gray-200 p-4 flex items-center justify-between hover:border-main/50 transition cursor-pointer"
                >
                  <div>
                    <p className="text-sm font-medium text-black">
                      {product.customization.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {product.customization.minOrder}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">
                      + {product.customization.price}
                    </span>
                    <ChevronRight className="size-4 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* More customization */}
              <div className="mt-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full flex items-center justify-between rounded-sm border border-gray-200 p-4 hover:border-main/50 transition cursor-pointer"
                >
                  <span className="text-sm font-semibold text-black">
                    More customization options
                  </span>
                  <ChevronRight className="size-4 text-gray-400" />
                </button>
              </div>

              {/* Supplier customization ability */}
              <div className="mt-6 rounded-sm border border-gray-200 p-4">
                <h3 className="text-sm font-semibold text-black flex items-center gap-2">
                  Supplier&apos;s customization ability
                  {supplier.verified && (
                    <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-main bg-main/10 px-1.5 py-0.5 rounded">
                      <BadgeCheck className="size-3" /> Verified
                    </span>
                  )}
                </h3>
                <ul className="mt-3 space-y-2">
                  {supplier.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <span className="size-1.5 rounded-sm bg-gray-400" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>

              {/* At a glance */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-black flex items-center gap-2">
                  At a glance
                  <span className="size-4 rounded-sm border border-gray-300 grid place-items-center text-[10px] text-gray-400">
                    i
                  </span>
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li>
                    <strong className="text-black">
                      14.1 Inch FHD IPS Screen:
                    </strong>{" "}
                    The 14.1-inch Full HD IPS display offers a wide viewing
                    angle and high resolution, enhancing visual clarity for both
                    work and entertainment.
                  </li>
                  <li>
                    <strong className="text-black">
                      Intel N4500 Processor:
                    </strong>{" "}
                    Powered by Intel N4500 dual-core processor, providing smooth
                    performance for everyday computing tasks.
                  </li>
                  <li>
                    <strong className="text-black">Lightweight Design:</strong>{" "}
                    At just 1.5kg, this laptop is ultra-portable and ideal for
                    students and professionals on the go.
                  </li>
                </ul>
              </div>

              {/* Delivery Dropdown & Timeline Cards */}
              <div className="mt-6 border-t border-gray-100 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">
                      Deliver to
                    </span>
                  </div>
                  <div className="relative">
                    <select
                      value={deliveryCountry}
                      onChange={(e) => setDeliveryCountry(e.target.value)}
                      className="text-xs font-semibold text-black bg-gray-50 border border-gray-300 rounded-sm pl-3 pr-8 py-1.5 appearance-none hover:bg-gray-100 focus:outline-none cursor-pointer transition"
                    >
                      {Object.keys(deliveryOptions).map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 size-3.5 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Delivery Card */}
                  <div className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200/60 rounded-sm">
                    <div className="mt-0.5">
                      <Truck className="size-4 text-gray-700" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-black">
                        {deliveryOptions[deliveryCountry].freeDelivery}
                      </p>
                      <p className="text-[11px] text-gray-500 mt-0.5">
                        {deliveryOptions[deliveryCountry].expressDelivery}
                      </p>
                    </div>
                  </div>

                  {/* Returns Card */}
                  <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200/60 rounded-sm cursor-pointer hover:bg-slate-100/40 transition">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <span className="text-sm font-bold text-gray-700 leading-none">
                          ⇄
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-black">
                          {deliveryOptions[deliveryCountry].returns}
                        </p>
                        <p className="text-[11px] text-gray-500 mt-0.5">
                          {deliveryOptions[deliveryCountry].warranty}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="size-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 2: Frequently Bought Together ═══════ */}
      <section className="bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <h2 className="text-lg font-bold text-black mb-5">
            Frequently Bought Together
          </h2>
          <FrequentlyBoughtCarousel
            items={frequentlyBought}
            onAddToCart={handleAddFrequentlyBoughtToCart}
          />
        </div>
      </section>

      {/* ═══════ SECTION 3: Tabbed Content + Sidebar ═══════ */}
      <section className="bg-white border-t border-gray-100">
        {/* Sticky tab bar */}
        <div
          ref={tabBarRef}
          className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm"
        >
          <div className="mx-auto max-w-7xl px-4">
            <nav className="flex gap-6 overflow-x-auto scrollbar-hide pb-0" style={{ scrollbarWidth: "none" }}>
              {tabItems.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`py-4 text-sm font-semibold border-b-2 transition whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-black text-black"
                      : "border-transparent text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
            {/* ── Main content column ── */}
            <div className="min-w-0">
              {/* Service */}
              <div ref={setRef("service")} id="service" className="mb-10">
                <h2 className="text-lg font-bold text-black mb-4">Service</h2>
                <div className="flex items-center gap-2 text-sm text-main cursor-pointer hover:underline">
                  <Clock className="size-4" />
                  Custom design in 3 days
                  <ChevronRight className="size-4" />
                </div>
              </div>

              {/* Attributes */}
              <div ref={setRef("attributes")} id="attributes" className="mb-10">
                <h2 className="text-lg font-bold text-black mb-4">
                  Key attributes
                </h2>
                <div className="rounded-sm border border-gray-200 overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 divide-gray-150">
                    {keyAttributes.map(([key, value], i) => (
                      <div
                        key={key}
                        className="flex items-stretch border-b border-gray-100 last:border-b-0 sm:even:border-l sm:even:border-gray-100"
                      >
                        <div className="w-[120px] sm:w-[140px] shrink-0 bg-gray-50 px-3 sm:px-4 py-3 text-[11px] sm:text-xs text-gray-500">
                          {key}
                        </div>
                        <div className="flex-1 px-3 sm:px-4 py-3 text-xs sm:text-sm font-semibold text-black">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div ref={setRef("reviews")} id="reviews" className="mb-10">
                <h2 className="text-lg font-bold text-black mb-1">
                  Ratings & Reviews
                </h2>
                <div className="flex gap-6 mt-3 border-b border-gray-200 pb-3">
                  <button className="text-sm font-semibold text-black border-b-2 border-black pb-2">
                    Product reviews ({reviews.length})
                  </button>
                  <button className="text-sm text-gray-400 hover:text-gray-600 pb-2">
                    Store reviews ({supplier.storeReviews})
                  </button>
                </div>

                {/* Rating summary */}
                <div className="flex items-center gap-4 mt-5">
                  <p className="text-4xl font-bold text-black">
                    {product.rating}
                  </p>
                  <div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-5"
                          fill="#f59e0b"
                          stroke="#f59e0b"
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Very satisfied · Based on {reviews.length} reviews for{" "}
                      <span className="text-main">verified purchases</span>{" "}
                      <Check className="inline size-3 text-main" />
                    </p>
                  </div>
                </div>

                {/* Filter pills */}
                <div className="flex flex-wrap gap-2 mt-4 items-center justify-between sm:justify-start">
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 rounded-sm text-xs font-medium border border-black text-black bg-white">
                      All
                    </button>
                    <button className="px-3 py-1.5 rounded-sm text-xs text-gray-500 border border-gray-200 hover:border-gray-400 flex items-center gap-1">
                      Rating <ChevronDown className="size-3" />
                    </button>
                  </div>
                  <button className="px-3 py-1.5 rounded-sm text-xs text-gray-500 border border-gray-200 hover:border-gray-400 flex items-center gap-1">
                    Sort by: Most relevant <ChevronDown className="size-3" />
                  </button>
                </div>

                {/* Review list */}
                <div className="mt-6 space-y-6">
                  {reviews.map((rev, i) => (
                    <div
                      key={i}
                      className="border-b border-gray-100 pb-6 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-sm bg-green-600 text-white grid place-items-center text-sm font-bold">
                          {rev.user[0].toUpperCase()}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-black">
                            {rev.user}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <div className="flex gap-0.5">
                              {Array.from({ length: rev.rating }).map(
                                (_, j) => (
                                  <Star
                                    key={j}
                                    className="size-3"
                                    fill="#f59e0b"
                                    stroke="#f59e0b"
                                  />
                                ),
                              )}
                            </div>
                            <span className="text-xs text-gray-400">
                              {rev.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 text-xs text-gray-550 flex flex-wrap gap-x-4 gap-y-1.5">
                        <span>
                          model number:{" "}
                          <strong className="text-black">
                            {rev.modelNumber}
                          </strong>
                        </span>
                        <span>
                          color:{" "}
                          <strong className="text-black">{rev.color}</strong>
                        </span>
                        <span>
                          hard drive capacity:{" "}
                          <strong className="text-black">{rev.capacity}</strong>
                        </span>
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        video memory capacity:{" "}
                        <strong className="text-black">
                          {rev.videoMemory}
                        </strong>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <span className="flex items-center gap-1 text-gray-400">
                          <Flag className="size-3" /> {rev.country}
                        </span>
                        {rev.verified && (
                          <span className="flex items-center gap-1 text-green-600 text-xs">
                            <Check className="size-3" /> Verified purchase
                          </span>
                        )}
                      </div>
                      <button className="mt-2 flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600">
                        <ThumbsUp className="size-3" /> Helpful ({rev.helpful})
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supplier */}
              <div ref={setRef("supplier")} id="supplier" className="mb-10">
                <h2 className="text-lg font-bold text-black mb-4">
                  Know your supplier
                </h2>
                <div className="rounded-sm border border-gray-200 p-5">
                  <div className="flex items-start gap-4">
                    <div className="size-14 rounded-sm bg-main/10 grid place-items-center shrink-0">
                      <span className="text-main font-bold text-xl">H</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-black">
                        {supplier.name}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 flex items-center gap-2 flex-wrap">
                        {supplier.verified && (
                          <span className="inline-flex items-center gap-0.5 text-main font-semibold">
                            <BadgeCheck className="size-3" /> Verified
                          </span>
                        )}
                        · {supplier.type} · {supplier.years} yrs on FirstUno ·
                        ⭐ {supplier.storeRating}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                        <MapPin className="size-3" /> Located in Shenzhen,
                        Guangdong, CN
                      </p>
                      <p className="text-xs text-main mt-1 flex items-center gap-1">
                        <Award className="size-3" />
                        {supplier.ranking}
                      </p>
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-black mt-6 mb-3">
                    Company overview
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Shenzhen Honlin Technology Co., Ltd. is a professional
                    laptop manufacturer specializing in customized notebook
                    computers. With over 11 years of experience, we serve
                    clients worldwide with high-quality, cost-effective
                    computing solutions.
                  </p>
                </div>
              </div>

              {/* Description */}
              <div
                ref={setRef("description")}
                id="description"
                className="mb-10"
              >
                <h2 className="text-lg font-bold text-black mb-4">
                  Product Description
                </h2>
                <div className="prose prose-sm max-w-none text-gray-600">
                  <p>
                    This Brand New Win10/11 Laptop features a 14.1-inch Full HD
                    IPS display with 1920×1080 resolution, powered by the Intel
                    N4500 dual-core processor. With up to 8GB DDR4 RAM and 512GB
                    SSD storage, it delivers smooth multitasking performance for
                    everyday computing needs.
                  </p>
                  <h4 className="text-black font-semibold mt-4">
                    Key Features:
                  </h4>
                  <ul className="space-y-1 text-gray-600 list-disc list-inside">
                    <li>
                      14.1&quot; Full HD IPS display (1920×1080) with wide
                      viewing angles
                    </li>
                    <li>
                      Intel N4500 dual-core processor for efficient performance
                    </li>
                    <li>
                      8GB DDR4 RAM with SSD storage options (64GB to 512GB)
                    </li>
                    <li>
                      Backlit keyboard for comfortable typing in any light
                    </li>
                    <li>
                      WiFi 802.11 a/b/g and 2× USB 3.0 ports for connectivity
                    </li>
                    <li>
                      Ultra-lightweight at just 1.5kg — perfect for portability
                    </li>
                    <li>
                      Pre-installed Windows 10/11 for immediate productivity
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ── Right sidebar (sticky on desktop) ── */}
            <div className="w-full lg:w-auto mt-8 lg:mt-0">
              <div className="lg:sticky lg:top-[65px] space-y-4">
                {/* More customization */}
                <div className="rounded-sm border border-gray-200 p-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full flex items-center justify-between text-sm font-semibold text-black cursor-pointer"
                  >
                    More customization options
                    <ChevronRight className="size-4 text-gray-400" />
                  </button>
                  <p className="text-xs text-gray-500 mt-1">
                    • hard drive capacity
                  </p>
                </div>

                {/* Supplier abilities */}
                <div className="rounded-sm border border-gray-200 p-4">
                  <h4 className="text-sm font-semibold text-black flex items-center gap-2">
                    Supplier&apos;s customization ability
                    <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-main bg-main/10 px-1.5 py-0.5 rounded">
                      <BadgeCheck className="size-3" /> Verified
                    </span>
                  </h4>
                  <ul className="mt-2 space-y-1.5">
                    {supplier.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-center gap-2 text-xs text-gray-600"
                      >
                        <span className="size-1 rounded-sm bg-gray-400" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Shipping */}
                <div className="rounded-sm border border-gray-200 p-4">
                  <h4 className="text-sm font-bold text-black flex items-center gap-1">
                    <Truck className="size-4" /> Delivery
                  </h4>
                  <p className="text-xs text-gray-500 mt-2">
                    Delivery fee and date can be negotiated. Chat with seller
                    now for more details.
                  </p>
                </div>

                {/* Order protection */}
                <div className="rounded-sm border border-gray-200 p-4">
                  <h4 className="text-sm font-bold text-black">
                    FirstUno order protection
                    <ChevronRight className="inline size-3 ml-1 text-gray-400" />
                  </h4>
                  <div className="mt-3 space-y-3">
                    <div className="flex items-start gap-2">
                      <Shield className="size-4 text-green-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-black flex items-center gap-2">
                          Secure payments
                          <span className="flex gap-1">
                            {["💳", "🏦", "📱"].map((e, i) => (
                              <span key={i} className="text-xs">
                                {e}
                              </span>
                            ))}
                          </span>
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Every payment you make on FirstUno is secured with
                          strict SSL encryption an…
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CreditCard className="size-4 text-green-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-black">
                          Money-back protection
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Claim a refund if your order doesn&apos;t ship, is
                          missing, or arrives with product issues
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA buttons */}
                <button className="w-full py-3 rounded-sm bg-main text-white font-semibold text-sm hover:opacity-90 transition flex items-center justify-center gap-2">
                  <Mail className="size-4" />
                  Send inquiry
                </button>
                <button className="w-full py-3 rounded-sm border-2 border-gray-800 text-black font-semibold text-sm hover:bg-gray-50 transition flex items-center justify-center gap-2">
                  <MessageCircle className="size-4" />
                  Chat now
                </button>

                <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                  Only orders placed and paid through FirstUno can enjoy free
                  protection by{" "}
                  <span className="text-main font-medium">
                    🛡️ Trade Assurance
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <h2 className="text-lg font-bold text-black mb-5">
            Other recommendations for your business
          </h2>
          <FrequentlyBoughtCarousel
            items={frequentlyBought}
            onAddToCart={handleAddFrequentlyBoughtToCart}
          />
        </div>
      </section>

      {/* ═══════ SECTION 4: FAQ ═══════ */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <h2 className="text-xl font-bold text-black mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3 max-w-3xl">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-sm border border-gray-200 bg-white overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition"
                >
                  <span className="text-sm font-semibold text-black pr-4">
                    {faq.q}
                  </span>
                  {openFaqs.has(i) ? (
                    <Minus className="size-4 text-gray-400 shrink-0" />
                  ) : (
                    <Plus className="size-4 text-gray-400 shrink-0" />
                  )}
                </button>
                {openFaqs.has(i) && (
                  <div className="px-5 pb-4">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Center variations modal overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 "
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Content container */}
          <div className="relative bg-white rounded-sm w-full max-w-lg shadow-2xl flex flex-col max-h-[85vh] overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-base font-bold text-black">
                Select variations and quantity
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-sm text-gray-400 hover:text-black hover:bg-gray-100 transition cursor-pointer"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
              {/* Product Info Card */}
              <div className="flex items-start gap-3 border-b border-gray-100 pb-4">
                <div
                  className="size-16 rounded-lg shrink-0 flex items-center justify-center overflow-hidden border border-gray-200"
                  style={{ backgroundColor: productImages[currentImage].color }}
                >
                  <Camera className="size-5 text-gray-400/60" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-black line-clamp-2 leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-sm font-extrabold text-main mt-1">
                    {product.priceRange}
                  </p>
                  <p className="text-[10px] text-gray-400 mt-0.5">
                    Minimum order quantity: {product.moq}
                  </p>
                </div>
              </div>

              {/* Color Swatches */}
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  color:{" "}
                  <span className="text-black font-semibold uppercase">
                    {product.colors[selectedColor].name}
                  </span>
                </h4>
                <div className="flex gap-2">
                  {product.colors.map((c, i) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(i)}
                      className={`size-10 rounded-lg border-2 transition cursor-pointer ${
                        selectedColor === i
                          ? "border-main shadow-sm"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>

              {/* Hard drive capacity */}
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  hard drive capacity
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {product.capacities.map((cap, i) => (
                    <button
                      key={cap}
                      onClick={() => setSelectedCapacity(i)}
                      className={`px-3 py-2.5 rounded-lg text-xs font-semibold border transition text-left cursor-pointer ${
                        selectedCapacity === i
                          ? "border-main text-main bg-main/5 font-bold"
                          : "border-gray-200 text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      {cap}
                    </button>
                  ))}
                </div>
              </div>

              {/* Model number */}
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  model number
                </h4>
                <div className="flex gap-2">
                  {product.modelNumbers.map((m) => (
                    <span
                      key={m}
                      className="px-3 py-2 rounded-lg text-xs font-bold border border-main text-main bg-main/5"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Video memory capacity */}
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  video memory capacity
                </h4>
                <div className="rounded-sm border border-gray-200 p-3 bg-gray-50/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-black bg-white border border-gray-200 px-2 py-1.5 rounded shadow-sm">
                      Main memory allocated memory
                    </span>
                    <span className="text-sm font-bold text-black">
                      ₦204,061
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-150">
                    <span className="text-xs text-gray-500">
                      Select quantity:
                    </span>
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
                      <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="px-2.5 py-1.5 hover:bg-gray-100 text-gray-500 font-bold transition cursor-pointer"
                      >
                        <Minus className="size-3" />
                      </button>
                      <span className="px-3 py-1 text-xs font-bold text-black min-w-8 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity((q) => q + 1)}
                        className="px-2.5 py-1.5 hover:bg-gray-100 text-gray-500 font-bold transition cursor-pointer"
                      >
                        <Plus className="size-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customization */}
              <div className="border-t border-gray-150 pt-4">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Settings2Icon /> Customization
                </h4>
                <div className="rounded-sm border border-gray-200 p-3 bg-gray-50/50 space-y-3">
                  <div>
                    <p className="text-xs font-bold text-black">
                      Logo/graphic design (optional)
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-gray-500 mt-1">
                      <span>Laser Printing (+₦3,024/piece)</span>
                      <span>Min. order: 20 pieces</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <button
                      onClick={() =>
                        setIsLaserPrintingSelected(!isLaserPrintingSelected)
                      }
                      className="flex items-center gap-2 cursor-pointer group text-left"
                    >
                      <div
                        className={`size-4.5 rounded border flex items-center justify-center transition ${
                          isLaserPrintingSelected
                            ? "bg-main border-main text-white"
                            : "border-gray-300 bg-white group-hover:border-gray-400"
                        }`}
                      >
                        {isLaserPrintingSelected && (
                          <Check className="size-3" />
                        )}
                      </div>
                      <span className="text-xs font-semibold text-black">
                        Laser Print logo
                      </span>
                    </button>
                    <button className="text-xs text-main font-semibold hover:underline cursor-pointer">
                      Add design
                    </button>
                  </div>
                </div>
              </div>

              {/* Shipping */}
              <div className="border-t border-gray-150 pt-4">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Truck className="size-3.5 text-gray-400" /> Shipping
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Shipping fee and delivery date can be negotiated. Chat with
                  seller now for more details.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-150 bg-gray-50 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-500 uppercase">
                  Subtotal
                </span>
                <span className="text-base font-extrabold text-main">
                  ₦
                  {(
                    quantity * 204061 +
                    (isLaserPrintingSelected && quantity >= 20
                      ? quantity * 3024
                      : 0)
                  ).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </span>
              </div>
              <button
                onClick={addToCart}
                className="w-full py-3 rounded-sm bg-main text-white font-extrabold text-sm hover:opacity-95 transition flex items-center justify-center gap-1.5 cursor-pointer shadow"
              >
                <ShoppingCart className="size-4" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Side Cart Drawer */}
      <div
        className={`fixed inset-0 z-50 overflow-hidden  duration-300 ${
          isCartOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-modal="true"
        role="dialog"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setIsCartOpen(false)}
        />

        {/* Drawer container */}
        <div className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
          <div
            className={`w-screen max-w-md bg-white shadow-2xl flex flex-col h-full transform transition-transform duration-300 ease-in-out ${
              isCartOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-base font-bold text-black flex items-center gap-2">
                <ShoppingCart className="size-5 text-main" />
                Shopping Cart (
                {cart.reduce((sum, item) => sum + item.quantity, 0)})
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1 rounded-sm text-gray-400 hover:text-black hover:bg-gray-100 transition cursor-pointer"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-3">
                  <div className="size-16 rounded-sm bg-gray-50 flex items-center justify-center text-gray-300">
                    <ShoppingCart className="size-8" />
                  </div>
                  <p className="text-sm font-bold text-black">
                    Your cart is empty
                  </p>
                  <p className="text-xs text-gray-400">
                    Add products to start your order
                  </p>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      setIsModalOpen(true);
                    }}
                    className="mt-2 px-5 py-2 rounded-sm bg-main text-white font-bold text-xs hover:opacity-90 transition cursor-pointer"
                  >
                    Select Variations
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-3 p-3 rounded-sm border border-gray-200 bg-gray-55/30 relative group"
                  >
                    <div
                      className="size-16 rounded-lg shrink-0 flex items-center justify-center overflow-hidden border border-gray-200"
                      style={{ backgroundColor: item.imageColor }}
                    >
                      <Camera className="size-5 text-gray-300" />
                    </div>
                    <div className="flex-1 min-w-0 pr-6">
                      <h3 className="text-xs font-bold text-black line-clamp-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-[10px] text-gray-400 mt-1">
                        Specs:{" "}
                        <span className="text-gray-700 font-semibold">
                          {item.color} / {item.capacity}
                        </span>
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
                          <button
                            onClick={() =>
                              updateCartQty(item.id, item.quantity - 1)
                            }
                            className="px-2 py-1 hover:bg-gray-100 text-gray-500 font-bold transition cursor-pointer"
                          >
                            <Minus className="size-2.5" />
                          </button>
                          <span className="px-2 py-0.5 text-xs font-bold text-black min-w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateCartQty(item.id, item.quantity + 1)
                            }
                            className="px-2 py-1 hover:bg-gray-100 text-gray-500 font-bold transition cursor-pointer"
                          >
                            <Plus className="size-2.5" />
                          </button>
                        </div>
                        <span className="text-xs font-bold text-black">
                          ₦
                          {(item.price * item.quantity).toLocaleString(
                            "en-US",
                            { minimumFractionDigits: 2 },
                          )}
                        </span>
                      </div>
                    </div>
                    {/* Delete button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition cursor-pointer p-1 rounded-sm hover:bg-red-50"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-150 bg-gray-55 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Subtotal</span>
                    <span className="font-semibold text-black">
                      ₦
                      {cart
                        .reduce(
                          (sum, item) => sum + item.price * item.quantity,
                          0,
                        )
                        .toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Shipping</span>
                    <span className="font-semibold text-black">Negotiated</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-black pt-2 border-t border-gray-200">
                    <span>Total Amount</span>
                    <span className="text-main">
                      ₦
                      {cart
                        .reduce(
                          (sum, item) => sum + item.price * item.quantity,
                          0,
                        )
                        .toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button className="flex-1 py-3 rounded-sm bg-main text-white font-semibold text-xs hover:opacity-90 transition flex items-center justify-center gap-1.5 cursor-pointer shadow-sm">
                    Proceed to Escrow Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-main text-white py-3 px-4 sm:px-6 shadow-lg border-t border-amber-500/20 flex flex-col sm:flex-row gap-3 sm:gap-6 items-center justify-between">
        <div className="flex flex-col text-center sm:text-left w-full sm:w-auto">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/80">
            Selected Option Specs:
          </span>
          <span className="text-xs sm:text-sm font-black truncate max-w-[280px] sm:max-w-md lg:max-w-xl mx-auto sm:mx-0">
            {product.colors[selectedColor].name} /{" "}
            {product.capacities[selectedCapacity]}
          </span>
        </div>
        <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 w-full sm:w-auto">
          <div className="text-left sm:text-right">
            <span className="block text-[10px] sm:text-xs font-bold uppercase text-white/80 tracking-wider">
              Total Amount
            </span>
            <span className="text-base sm:text-lg font-black">
              ₦
              {(204061 * (quantity > 0 ? quantity : 1)).toLocaleString(
                "en-US",
                { minimumFractionDigits: 2 },
              )}
            </span>
          </div>
          <button
            onClick={addToCart}
            className="bg-white text-main hover:bg-white/95 px-5 sm:px-6 py-2 sm:py-2.5 rounded-sm font-black text-xs uppercase tracking-wider shadow hover:scale-102 transition cursor-pointer active:scale-95 shrink-0"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────── Sub-components ────────────────────── */

function Settings2Icon() {
  return (
    <svg
      className="size-3 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4m0 14v4m-7.07-3.93l2.83-2.83m8.48-8.48l2.83-2.83M1 12h4m14 0h4M3.93 5.07l2.83 2.83m8.48 8.48l2.83 2.83" />
    </svg>
  );
}

function ChevronRightIcon() {
  return <ChevronRight className="size-3 text-gray-400" />;
}

// FrequentlyBoughtCarousel imported from "@/components/product/frequentlyBoughtCarousel"
