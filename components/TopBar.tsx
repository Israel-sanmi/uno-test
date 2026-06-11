import { Headphones, Globe, ChevronDown } from "lucide-react";

const links = ["About us", "My Account", "My Wishlist", "Compare", "Order Tracking"];

export default function TopBar() {
  return (
    <div className="w-full bg-main text-white text-xs">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 h-9">
        <div className="flex items-center gap-5">
          <a href="#" className="flex items-center gap-1.5 hover:opacity-90">
            <Headphones className="size-3.5" />
            <span>Need Support ? Call Us</span>
            <span className="font-semibold tracking-wide">(480) 555-0103</span>
          </a>
          <button className="hidden md:flex items-center gap-1.5 hover:opacity-90">
            <Globe className="size-3.5" />
            <span>English</span>
            <ChevronDown className="size-3" />
          </button>
        </div>

        <ul className="hidden md:flex items-center divide-x divide-white/30">
          {links.map((l) => (
            <li key={l} className="px-3 first:pl-0 last:pr-0">
              <a href="#" className="hover:opacity-90">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
