"use client";

import { useState } from "react";
import { Headphones, Globe, ChevronDown } from "lucide-react";

const links = ["About us", "My Account", "My Wishlist",  "Order Tracking"];

export default function TopBar() {
  const [lang, setLang] = useState("English");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-main text-white text-xs z-40 relative">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 h-9">
        <div className="flex items-center gap-5">
          <a href="#" className="flex items-center gap-1.5 hover:opacity-90">
            <Headphones className="size-3.5" />
            <span>Need Support ? Call Us</span>
            <span className="font-semibold tracking-wide">(480) 555-0103</span>
          </a>
          
          <div className="relative hidden md:block">
            <button 
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1.5 hover:opacity-90 cursor-pointer focus:outline-none"
            >
              <Globe className="size-3.5" />
              <span>{lang}</span>
              <ChevronDown 
                className="size-3 transition-transform duration-200" 
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }} 
              />
            </button>

            {isOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsOpen(false)}
                />
                <div className="absolute left-0 mt-1.5 w-24 bg-white border border-gray-150 rounded-sm shadow-lg z-50 text-black overflow-hidden py-1 animate-in fade-in slide-in-from-top-1 duration-150">
                  {["English", "Chinese"].map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => {
                        setLang(item);
                        setIsOpen(false);
                      }}
                      className="w-full px-3 py-1.5 text-left text-xs hover:bg-gray-150 transition cursor-pointer"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
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
