"use client";

import React from "react";
import Link from "next/link";
import { Phone, CalendarHeart } from "lucide-react";
import { SITE_INFO } from "@/data/site-data";

export default function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#023D69]/95 backdrop-blur-md border-t border-[#F0418C]/40 px-3 py-2.5 shadow-[0_-4px_20px_rgba(2,61,105,0.22)]">
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        <a
          href={SITE_INFO.phoneHref}
          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#F0418C] hover:bg-[#C2185B] text-white font-bold text-sm py-2.5 shadow-md"
        >
          <Phone className="w-4 h-4" />
          <span>Call (209) 957-0708</span>
        </a>
        <Link
          href="/contact-us"
          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-white text-[#023D69] font-bold text-sm py-2.5 shadow-md"
        >
          <CalendarHeart className="w-4 h-4 text-[#C2185B]" />
          <span>Request Care</span>
        </Link>
      </div>
    </div>
  );
}
