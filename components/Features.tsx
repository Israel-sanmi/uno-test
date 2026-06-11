import { ShieldCheck, Lock, BadgeCheck, UserCheck } from "lucide-react";

const features = [
  { title: "Safe Purchase", Icon: ShieldCheck },
  { title: "Escrow Protected", Icon: Lock },
  { title: "Buyer Protection", Icon: BadgeCheck },
  { title: "Verified Sellers", Icon: UserCheck },
];

export default function Features() {
  return (
    <section className="w-full bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map(({ title, Icon }) => (
          <div key={title} className="flex items-center gap-3">
            <span className="grid place-items-center size-12 rounded-xl bg-main/10 text-main">
              <Icon className="size-6" />
            </span>
            <span className="text-sm md:text-base font-bold text-black">{title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
