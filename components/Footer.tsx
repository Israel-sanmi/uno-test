import { Mail, MapPin, Phone } from "lucide-react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <a href="/" className="flex items-center gap-2">
            <span className="grid place-items-center size-9 rounded-lg bg-main text-white font-bold">
              F
            </span>
            <span className="text-xl font-bold">
              First<span className="text-main">Uno</span>
            </span>
          </a>
          <p className="mt-3 text-sm text-white/70">
            Trade Safe. Grow Together. Africa&apos;s trusted escrow marketplace.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a href="#" className="grid place-items-center size-9 rounded-full bg-white/10 hover:bg-main"><FaTwitter className="size-4" /></a>
            <a href="#" className="grid place-items-center size-9 rounded-full bg-white/10 hover:bg-main"><FaFacebook className="size-4" /></a>
            <a href="#" className="grid place-items-center size-9 rounded-full bg-white/10 hover:bg-main"><FaInstagram className="size-4" /></a>
            <a href="#" className="grid place-items-center size-9 rounded-full bg-white/10 hover:bg-main"><FaLinkedin className="size-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider">Shop</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><a href="#" className="hover:text-main">Electronics</a></li>
            <li><a href="#" className="hover:text-main">Appliances</a></li>
            <li><a href="#" className="hover:text-main">Fashion</a></li>
            <li><a href="#" className="hover:text-main">Mobile Phones</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><a href="#" className="hover:text-main">About Us</a></li>
            <li><a href="#" className="hover:text-main">Careers</a></li>
            <li><a href="#" className="hover:text-main">Press</a></li>
            <li><a href="#" className="hover:text-main">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li className="flex items-center gap-2"><Phone className="size-4 text-main" /> +254 700 123 456</li>
            <li className="flex items-center gap-2"><Mail className="size-4 text-main" /> hello@firstuno.com</li>
            <li className="flex items-center gap-2"><MapPin className="size-4 text-main" /> Nairobi, Kenya</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-white/50 flex flex-col md:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} FirstUno. All rights reserved.</span>
          <span>Escrow-secured trade. Buyer protection on every order.</span>
        </div>
      </div>
    </footer>
  );
}
