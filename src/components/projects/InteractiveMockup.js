"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    title: "Role Selection",
    role: "Signup",
    img: "/Farmly/Signup.png",
    caption: "Choose your role at signup: Farmer or Customer",
    tint: "from-green-400/10",
  },
  {
    title: "Guest Users",
    role: "Guests",
    img: "/Farmly/GuestSetting.png",
    caption: "Explore anonymously without logging in",
    tint: "from-slate-400/10",
  },
  {
    title: "Registered Customers",
    role: "Customers",
    img: "/Farmly/CustomerFarms.png",
    caption: "Discover nearby farms, browse produce, message farmers",
    tint: "from-blue-400/10",
  },
  {
    title: "Farmers",
    role: "Farmers",
    img: "/Farmly/CreateFarm.png",
    caption: "Manage farm profile, list produce, chat with customers",
    tint: "from-green-400/10",
  },
];

export default function InteractiveMockup() {
  const scrollerRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const cards = Array.from(el.querySelectorAll("[data-card]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.dataset.index);
            setActive(idx);
          }
        });
      },
      { root: el, threshold: 0.6 }
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section className="mx-auto w-full max-w-6xl">
      <div
        ref={scrollerRef}
        className="relative flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 -mx-6 px-6 no-scrollbar"
      >
        <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-10" />

        {SLIDES.map((s, i) => {
          const isActive = i === active;
          return (
            <article
              key={s.title}
              data-card
              data-index={i}
              className={`relative snap-center shrink-0 transition-all duration-300 will-change-transform
                ${isActive ? "z-20 scale-100 opacity-100" : "z-10 scale-95 opacity-70 md:[clip-path:inset(0_8%_0_8%)]"}`}
              style={{ width: "min(76vw, 820px)" }}
            >
              <div className={`rounded-2xl border border-slate-200 bg-white transition-shadow duration-300 ${isActive ? "shadow-xl" : "shadow-md"}`}>
                <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex size-2 rounded-full bg-red-400" />
                    <span className="inline-flex size-2 rounded-full bg-yellow-400" />
                    <span className="inline-flex size-2 rounded-full bg-green-400" />
                  </div>
                  <div className="text-sm font-medium text-slate-600">{s.title}</div>
                  <div className="text-xs text-slate-400">{i + 1} / {SLIDES.length}</div>
                </div>

                <div className={`rounded-b-2xl overflow-hidden bg-gradient-to-b ${s.tint} to-transparent`}>
                  <div className="relative mx-auto my-4 aspect-[9/16] w-[220px] md:w-[260px] overflow-hidden rounded-[2rem] ring-1 ring-black/10 shadow-2xl bg-white">
                    <Image
                      src={s.img}
                      alt={s.role}
                      fill
                      className={`object-cover transition-transform duration-300 ${isActive ? "scale-100" : "scale-95"}`}
                      sizes="(max-width: 768px) 220px, 260px"
                    />
                    <div className="absolute left-1/2 top-3 -translate-x-1/2 h-1.5 w-20 rounded-full bg-slate-200" />
                  </div>
                </div>

                <div className="px-6 pb-6 text-center">
                  <div className="mb-2 text-xl font-bold text-slate-800">{s.role}</div>
                  <p className="text-base text-slate-600">{s.caption}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {SLIDES.map((_, i) => (
          <span key={i} className={`h-2 rounded-full transition-all duration-300 ${i === active ? "bg-slate-900 w-6" : "bg-slate-300 w-2"}`} />
        ))}
      </div>
    </section>
  );
}

