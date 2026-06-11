"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Camera, ShoppingCart } from "lucide-react";

interface CarouselItem {
  title: string;
  price: string;
  moq: string;
}

interface FrequentlyBoughtCarouselProps {
  items: CarouselItem[];
  onAddToCart?: (item: CarouselItem) => void;
}

export default function FrequentlyBoughtCarousel({
  items,
  onAddToCart,
}: FrequentlyBoughtCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    el?.addEventListener("scroll", checkScroll, { passive: true });
    return () => el?.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 280;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group">
      {canScrollLeft && (
        <button
          type="button"
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 size-10 rounded-sm bg-white shadow-lg border border-gray-200 grid place-items-center hover:bg-gray-50 transition opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="size-5 text-gray-700" />
        </button>
      )}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
        style={{ scrollbarWidth: "none" }}
      >
        {items.map((item, i) => (
          <div key={i} className="shrink-0 w-[200px] group/card border border-gray-100 rounded-md p-2 hover:border-main/50 transition bg-white flex flex-col justify-between">
            <div>
              <a href="#" className="block">
                <div className="w-full aspect-square rounded-sm bg-gray-100 flex items-center justify-center group-hover/card:bg-gray-50 transition">
                  <Camera className="size-8 text-gray-300" />
                </div>
              </a>
              <div className="mt-2">
                <span className="inline-block px-1.5 py-0.5 rounded-sm text-[9px] font-bold bg-main/10 text-main mb-1">
                  DOC
                </span>
                <a href="#" className="block">
                  <p className="text-xs text-black line-clamp-2 min-h-[32px] group-hover/card:text-main leading-tight">
                    {item.title}
                  </p>
                </a>
                <p className="text-sm font-bold text-black mt-1">{item.price}</p>
                <p className="text-[10px] text-gray-500">MOQ: {item.moq}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onAddToCart?.(item);
              }}
              className="mt-3 w-full py-1.5 rounded-sm bg-main hover:bg-main/90 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition active:scale-95"
            >
              <ShoppingCart className="size-3.5" />
              Add to cart
            </button>
          </div>
        ))}
      </div>
      {canScrollRight && (
        <button
          type="button"
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 size-10 rounded-sm bg-white shadow-lg border border-gray-200 grid place-items-center hover:bg-gray-50 transition opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="size-5 text-gray-700" />
        </button>
      )}
    </div>
  );
}
