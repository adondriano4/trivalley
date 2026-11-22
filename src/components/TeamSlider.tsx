"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { TEAM_MEMBERS } from "@/data/site-data";

export default function TeamSlider() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(4);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else setPerView(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, TEAM_MEMBERS.length - perView);
  const safeIndex = Math.min(index, maxIndex);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
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
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.slug}
              className="w-full sm:w-1/2 lg:w-1/4 shrink-0 px-3"
            >
              <div className="h-full bg-[#FFF9FC] hover:bg-white rounded-3xl border border-[#FBCFE8] hover:border-[#F0418C] p-6 text-center shadow-[0_6px_22px_rgba(2,61,105,0.05)] hover:shadow-[0_14px_30px_rgba(240,65,140,0.16)] transition-all flex flex-col justify-between">
                <div>
                  <div className="w-44 h-44 rounded-full mx-auto mb-5 p-1.5 bg-gradient-to-tr from-[#F0418C] to-[#FFBFDF] shadow-lg">
                    <img
                      src={member.image}
                      alt={member.imageAlt}
                      className="w-full h-full rounded-full object-cover object-top bg-white"
                    />
                  </div>
                  <h3 className="font-display font-extrabold text-base text-[#023D69] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-[#C2185B] mb-4 min-h-[2rem]">
                    {member.shortRole}
                  </p>
                </div>

                <Link
                  href={`/${member.slug}`}
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-full bg-white border border-[#F9A8D4] hover:bg-[#F0418C] hover:border-[#F0418C] text-[#023D69] hover:text-white font-bold text-xs shadow-2xs transition-colors"
                >
                  <span>View More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
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
              aria-label={`Team slide ${idx + 1}`}
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
            aria-label="Previous team members"
            className="w-10 h-10 rounded-full border border-[#F9A8D4] bg-white hover:bg-[#F0418C] text-[#023D69] hover:text-white flex items-center justify-center shadow-xs transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next team members"
            className="w-10 h-10 rounded-full border border-[#F9A8D4] bg-white hover:bg-[#F0418C] text-[#023D69] hover:text-white flex items-center justify-center shadow-xs transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
