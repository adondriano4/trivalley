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
      {/* Ken Burns Crossfading Background Slideshow */}
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#012B4B]/92 via-[#023D69]/80 to-[#831843]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#012B4B]/70 via-transparent to-transparent" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-22">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 text-[#023D69] text-xs font-extrabold mb-5 shadow-md">
              <img
                src="/images/logo-full.png"
                alt="Tri-Valley Logo"
                className="h-5 w-auto object-contain"
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

          {/* Right Column: 25th Anniversary Silver Jubilee Emblem + Seal Cards */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            <div className="bg-white/10 backdrop-blur-md border border-white/25 rounded-3xl px-5 py-3.5 flex items-center gap-4 shadow-xl">
              <img
                src="/images/anniversary-25-badge.png"
                alt="Tri-Valley Home Health Care 25 Years Silver Jubilee"
                className="w-28 h-28 sm:w-32 sm:h-32 object-contain drop-shadow-md shrink-0"
              />
              <div className="text-left">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#FFBFDF]">
                  #WeTurn25 · Silver Jubilee
                </div>
                <div className="font-display font-extrabold text-base sm:text-lg text-white leading-snug">
                  25 Years of Hard Work, Care &amp; Passion
                </div>
                <div className="text-xs text-slate-200 mt-1">
                  Serving Stockton &amp; Northern CA since 2000
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              <div className="bg-white/14 backdrop-blur-md border border-white/25 rounded-2xl p-3.5 flex items-center justify-between gap-3.5 shadow-lg">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F0418C] text-white flex items-center justify-center shrink-0">
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
                <img
                  src="/images/chap-seal.png"
                  alt="CHAP Standards of Excellence Accredited Seal"
                  className="h-14 w-auto object-contain shrink-0 drop-shadow-[0_2px_10px_rgba(255,255,255,0.45)]"
                />
              </div>

              <div className="bg-white/16 backdrop-blur-md border border-white/25 rounded-2xl p-3.5 flex items-center justify-between gap-3.5 shadow-lg">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white text-[#C2185B] flex items-center justify-center shrink-0">
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
                <img
                  src="/images/cms-seal.png"
                  alt="CMS Medicare and Medi-Cal Certified Seal"
                  className="h-14 w-14 object-contain shrink-0 drop-shadow-[0_2px_10px_rgba(255,255,255,0.55)]"
                />
              </div>
            </div>

            <div className="flex justify-start lg:justify-end">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold text-emerald-100 bg-emerald-950/60 backdrop-blur-sm border border-emerald-400/40 px-4 py-1.5 rounded-full shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Accepting New Patient Referrals
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
