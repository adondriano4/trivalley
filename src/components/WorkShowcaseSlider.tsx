"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { CASE_HIGHLIGHTS } from "@/data/site-data";

export default function WorkShowcaseSlider() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else setPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, CASE_HIGHLIGHTS.length - perView);
  const safeIndex = Math.min(index, maxIndex);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4800);
    return () => clearInterval(id);
  }, [paused, maxIndex]);

  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative"
    >
      <div className="overflow-hidden -mx-3 px-3 py-2">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${safeIndex * (100 / perView)}%)`,
          }}
        >
          {CASE_HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3"
            >
              <div className="group h-full bg-white rounded-3xl border border-[#FBCFE8] hover:border-[#F0418C] overflow-hidden shadow-[0_6px_22px_rgba(2,61,105,0.06)] hover:shadow-[0_14px_32px_rgba(240,65,140,0.16)] transition-all flex flex-col">
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#023D69]/90 text-[#FFBFDF] text-[11px] font-bold">
                    {item.category}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-extrabold text-lg text-[#023D69] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#C2185B] hover:text-[#023D69]"
                  >
                    <span>Explore Care Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setIndex(idx)}
              aria-label={`Case slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                idx === safeIndex
                  ? "w-8 bg-[#F0418C]"
                  : "w-2.5 bg-[#FBCFE8] hover:bg-[#F9A8D4]"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous work slide"
            className="w-10 h-10 rounded-full border border-[#F9A8D4] bg-white hover:bg-[#F0418C] text-[#023D69] hover:text-white flex items-center justify-center shadow-xs transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next work slide"
            className="w-10 h-10 rounded-full border border-[#F9A8D4] bg-white hover:bg-[#F0418C] text-[#023D69] hover:text-white flex items-center justify-center shadow-xs transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
