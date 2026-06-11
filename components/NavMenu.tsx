"use client";

import { useState } from "react";
import {
  X,
  User,
  Globe,
  Headphones,
  Smartphone,
  Laptop,
  Plug,
  Gamepad2,
  ChevronRight,
  ChevronDown,
  LayoutGrid
} from "lucide-react";

interface NavMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { label: "Home", href: "/" },
  { label: "RFQ", href: "#" },
  { label: "Protection", href: "#" },
  { label: "Shipping", href: "#" },
];

const categories = [
  { name: "Phones & Tablets", count: "85,707 ads", Icon: Smartphone },
  { name: "Electronics", count: "263,298 ads", Icon: Laptop },
  { name: "Appliances", count: "544,321 ads", Icon: Plug },
  { name: "Gaming", count: "92,654 ads", Icon: Gamepad2 },
];

export default function NavMenu({ isOpen, onClose }: NavMenuProps) {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [lang, setLang] = useState("English");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex md:hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div className="relative flex w-full max-w-xs flex-col bg-white h-full shadow-2xl overflow-y-auto animate-in slide-in-from-left duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 bg-gray-50">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center size-8 rounded-sm bg-main text-white font-bold text-sm">
              F
            </span>
            <span className="text-lg font-bold text-black">
              First<span className="text-main">Uno</span>
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-sm text-gray-500 hover:text-black hover:bg-gray-150 transition cursor-pointer"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* User login banner */}
        <div className="px-4 py-4 border-b border-gray-100 flex items-center gap-3">
          <div className="grid place-items-center size-10 rounded-sm bg-main/10 text-main shrink-0">
            <User className="size-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-black leading-none">Welcome guest</p>
            <a href="#" className="text-xs font-semibold text-main hover:underline mt-1 inline-block">
              Log in / Sign up
            </a>
          </div>
        </div>

        {/* Navigation items */}
        <div className="px-2 py-4 border-b border-gray-100">
          <h3 className="px-2 pb-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
            Navigation
          </h3>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between px-3 py-2 rounded-sm text-sm font-semibold text-black hover:bg-gray-50 hover:text-main transition"
                >
                  {item.label}
                  <ChevronRight className="size-3.5 text-gray-400" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories Section */}
        <div className="px-2 py-4 border-b border-gray-100">
          <button
            type="button"
            onClick={() => setCategoriesOpen(!categoriesOpen)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-sm text-sm font-bold text-black bg-gray-50 border border-gray-200/50 hover:bg-gray-100 transition"
          >
            <span className="flex items-center gap-2">
              <LayoutGrid className="size-4 text-main" />
              Categories
            </span>
            <ChevronDown 
              className={`size-4 text-gray-500 transition-transform ${categoriesOpen ? "rotate-180" : ""}`} 
            />
          </button>

          {categoriesOpen && (
            <ul className="mt-2 space-y-1 pl-2 border-l border-gray-100 ml-3">
              {categories.map(({ name, Icon }) => (
                <li key={name}>
                  <a
                    href="#"
                    onClick={onClose}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-sm text-xs font-semibold text-gray-700 hover:bg-gray-50 hover:text-main transition"
                  >
                    <Icon className="size-3.5 text-gray-400" />
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Preferences / Languages / Support */}
        <div className="px-4 py-4 space-y-4 mt-auto">
          {/* Language Switcher */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="w-full flex items-center justify-between py-2 text-xs font-semibold text-gray-700 hover:text-black border-t border-gray-100 pt-4 cursor-pointer focus:outline-none"
            >
              <span className="flex items-center gap-2">
                <Globe className="size-4" />
                Language: {lang}
              </span>
              <ChevronDown className={`size-3 transition-transform ${langDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {langDropdownOpen && (
              <div className="mt-1 w-full bg-white border border-gray-150 rounded-sm shadow-md text-black overflow-hidden py-1">
                {["English", "Chinese"].map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => {
                      setLang(item);
                      setLangDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left text-xs hover:bg-gray-100 transition cursor-pointer"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Support Section */}
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
            <Headphones className="size-4 text-main shrink-0" />
            <div>
              <p className="text-gray-400 font-medium leading-none">Support Hotline</p>
              <p className="text-black font-bold mt-1">(480) 555-0103</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
