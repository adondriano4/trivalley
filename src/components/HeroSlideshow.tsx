"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";
import { HERO_SLIDES, SITE_INFO } from "@/data/site-data";

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#012B4B] text-white border-b-4 border-[#F0418C]">
      {/* Ken Burns Crossfading Background Slideshow (Matches Original Hero) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_SLIDES.map((slide, idx) => {
          const isCurrent = idx === active;
          return (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isCurrent ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={!isCurrent}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className={`w-full h-full object-cover object-[center_22%] ${
                  isCurrent ? "ken-burns-active" : ""
                }`}
              />
            </div>
          );
        })}
        {/* Navy-to-Rose Gradient Overlay for Crisp Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#012B4B]/92 via-[#023D69]/80 to-[#831843]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#012B4B]/70 via-transparent to-transparent" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 text-[#023D69] text-xs font-extrabold mb-5 shadow-md">
              <img
                src="/images/trivalley-icon.png"
                alt=""
                className="h-4 w-auto"
              />
              <span>24/7 Nursing Support · Est. 2000</span>
            </div>

            <div className="font-display font-bold text-sm sm:text-base tracking-[0.22em] uppercase text-[#FFBFDF] mb-1">
              TRI-VALLEY
            </div>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.08] text-white mb-5">
              HOME HEALTH CARE INC.
            </h1>

            <p className="text-base sm:text-lg text-slate-100 leading-relaxed mb-7 max-w-2xl">
              At Tri-Valley Home Health Care, we believe that healthcare should be personal, compassionate, and delivered with the same care we&rsquo;d provide to our own families. For over 25 years, we&rsquo;ve been committed to enriching the lives of our patients in the comfort of their homes.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F0418C] hover:bg-[#C2185B] text-white font-bold text-sm sm:text-base shadow-[0_10px_28px_rgba(240,65,140,0.45)] transition-all"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={SITE_INFO.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white hover:text-[#023D69] backdrop-blur-md border border-white/40 text-white font-bold text-sm sm:text-base transition-all"
              >
                <Phone className="w-4 h-4 text-[#FFBFDF]" />
                <span>Get in Touch · {SITE_INFO.phone}</span>
              </a>
            </div>

            {/* Slide Progress Dots */}
            <div className="flex items-center gap-2.5">
              {HERO_SLIDES.map((s, idx) => (
                <button
                  key={s.image}
                  type="button"
                  onClick={() => setActive(idx)}
                  aria-label={`Show hero slide ${idx + 1}: ${s.caption}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === active
                      ? "w-9 bg-[#F0418C]"
                      : "w-2.5 bg-white/45 hover:bg-white/75"
                  }`}
                />
              ))}
              <span className="ml-2 text-xs font-semibold text-[#FFBFDF]">
                {HERO_SLIDES[active].caption}
              </span>
            </div>
          </div>

          {/* Floating Glass Highlights + Accreditation Card */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              <div className="bg-white/12 backdrop-blur-md border border-white/25 rounded-2xl p-4 flex items-center gap-3.5 shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-[#F0418C] text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-white">
                    Comfort &amp; Safety in Your Home
                  </div>
                  <div className="text-xs text-slate-200">
                    CA Licensed · CHAP Accredited
                  </div>
                </div>
              </div>

              <div className="bg-white/12 backdrop-blur-md border border-white/25 rounded-2xl p-4 flex items-center gap-3.5 shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-white text-[#C2185B] flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-white">
                    Personalized &amp; Dedicated Care
                  </div>
                  <div className="text-xs text-slate-200">
                    CMS Medicare &amp; Medi-Cal Certified
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-[#FBCFE8] shadow-xl flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <img
                  src="/images/chap-seal.png"
                  alt="CHAP Accredited Seal"
                  className="h-10 w-auto"
                />
                <img
                  src="/images/cms-seal.png"
                  alt="CMS Certified Seal"
                  className="h-8 w-auto"
                />
              </div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Accepting Referrals
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
