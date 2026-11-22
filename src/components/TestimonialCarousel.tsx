"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/site-data";

const DISCIPLINES = [
  "All",
  "Skilled Nursing",
  "Physical Therapy",
  "Occupational Therapy",
  "Medical Social Work",
  "Home Health Aide",
  "Speech Therapy",
];

export default function TestimonialCarousel() {
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(0);

  const filtered =
    filter === "All"
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.discipline === filter);

  const perPage = 2;
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const safePage = page >= totalPages ? 0 : page;
  const visible = filtered.slice(safePage * perPage, safePage * perPage + perPage);

  return (
    <div>
      {/* Filter Pills & Pagination */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          {DISCIPLINES.map((disc) => (
            <button
              key={disc}
              type="button"
              onClick={() => {
                setFilter(disc);
                setPage(0);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                filter === disc
                  ? "bg-[#F0418C] text-white shadow-sm"
                  : "bg-white border border-[#FBCFE8] text-[#023D69] hover:border-[#F0418C] hover:text-[#C2185B]"
              }`}
            >
              {disc}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 self-end lg:self-auto">
          <span className="text-xs font-bold text-[#C2185B] mr-1">
            {safePage + 1} / {totalPages} · {filtered.length} Verified Reviews
          </span>
          <button
            type="button"
            onClick={() =>
              setPage((prev) => (prev - 1 + totalPages) % totalPages)
            }
            aria-label="Previous testimonials"
            className="w-9 h-9 rounded-full border border-[#F9A8D4] bg-white text-[#023D69] hover:bg-[#FFF9FC] flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setPage((prev) => (prev + 1) % totalPages)}
            aria-label="Next testimonials"
            className="w-9 h-9 rounded-full border border-[#F9A8D4] bg-white text-[#023D69] hover:bg-[#FFF9FC] flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2-Card Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {visible.map((item) => (
          <article
            key={item.id}
            className="bg-white rounded-2xl border border-[#F1E4EC] border-t-4 border-t-[#F0418C] p-6 shadow-[0_4px_18px_rgba(2,61,105,0.05)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-[#FFBFDF]" />
              </div>
              <p className="text-sm text-slate-700 leading-relaxed italic mb-4">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <strong className="font-display text-sm text-[#023D69]">
                — {item.patient}
              </strong>
              <span className="px-2.5 py-0.5 rounded-full bg-[#FFF9FC] border border-[#FBCFE8] text-[#C2185B] font-semibold">
                {item.discipline}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
