"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Star, Map as MapIcon, Globe } from "lucide-react";
import { SITE_INFO } from "@/data/site-data";

interface MiniGoogleMapsProps {
  heightClass?: string;
}

export default function MiniGoogleMaps({
  heightClass = "h-64 sm:h-72",
}: MiniGoogleMapsProps) {
  const [viewMode, setViewMode] = useState<"live" | "territory">("live");

  return (
    <div className="bg-white rounded-2xl border border-[#FBCFE8] shadow-[0_6px_24px_rgba(2,61,105,0.08)] overflow-hidden">
      {/* Mini Map Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-[#FFF9FC] border-b border-[#FCE7F3]">
        <div className="flex items-center gap-2">
          <img
            src="/images/logo-full.png"
            alt="Tri-Valley Logo"
            className="h-6 w-auto object-contain"
          />
          <span className="font-display font-bold text-xs sm:text-sm text-[#023D69]">
            Stockton Headquarters · Mini Google Map
          </span>
        </div>

        <div className="flex items-center gap-1 bg-white border border-[#FBCFE8] rounded-full p-0.5 text-xs">
          <button
            type="button"
            onClick={() => setViewMode("live")}
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-semibold transition-colors cursor-pointer ${
              viewMode === "live"
                ? "bg-[#F0418C] text-white"
                : "text-[#023D69] hover:text-[#C2185B]"
            }`}
          >
            <Globe className="w-3 h-3" />
            Google Map
          </button>
          <button
            type="button"
            onClick={() => setViewMode("territory")}
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-semibold transition-colors cursor-pointer ${
              viewMode === "territory"
                ? "bg-[#023D69] text-white"
                : "text-[#023D69] hover:text-[#C2185B]"
            }`}
          >
            <MapIcon className="w-3 h-3" />
            4-County Area
          </button>
        </div>
      </div>

      {/* Map Viewport */}
      <div className={`relative w-full ${heightClass} bg-[#EEF2EE]`}>
        {viewMode === "live" ? (
          <iframe
            title="Tri-Valley Home Health Care Stockton HQ on Google Maps"
            src={SITE_INFO.googleMapsEmbedUrl}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <div className="relative w-full h-full overflow-hidden">
            {/* Stylized Cartographic Preview with Custom Tri-Valley Pink Pin */}
            <svg
              viewBox="0 0 600 300"
              preserveAspectRatio="xMidYMid slice"
              className="w-full h-full block"
              aria-hidden="true"
            >
              <rect width="600" height="300" fill="#EAEFE8" />
              <path
                d="M0 245 Q160 218 300 240 T600 228 L600 262 Q430 272 300 264 T0 270 Z"
                fill="#C8E4F8"
              />
              <rect x="40" y="30" width="110" height="70" rx="10" fill="#D4EAD3" />
              <rect x="435" y="145" width="130" height="75" rx="10" fill="#D4EAD3" />
              <g stroke="#FFFFFF" strokeWidth="6" fill="none">
                <line x1="0" y1="75" x2="600" y2="75" />
                <line x1="0" y1="145" x2="600" y2="145" />
                <line x1="0" y1="205" x2="600" y2="205" />
                <line x1="110" y1="0" x2="110" y2="300" />
                <line x1="230" y1="0" x2="230" y2="300" />
                <line x1="475" y1="0" x2="475" y2="300" />
              </g>
              <g stroke="#FDE68A" strokeWidth="10" fill="none">
                <line x1="0" y1="112" x2="600" y2="122" />
                <line x1="355" y1="0" x2="375" y2="300" />
              </g>
              <path
                d="M42 0 C52 102, 70 192, 96 300"
                stroke="#FBBF24"
                strokeWidth="12"
                fill="none"
              />
              <text x="195" y="105" fontSize="12" fontWeight="700" fill="#475569">
                W. Robinhood Dr
              </text>
              <text x="382" y="56" fontSize="12" fontWeight="700" fill="#475569">
                Pacific Ave
              </text>
              <text x="255" y="256" fontSize="11" fontWeight="600" fill="#0369A1">
                Calaveras River
              </text>
              <rect x="40" y="158" width="30" height="20" rx="5" fill="#0369A1" />
              <text
                x="55"
                y="172"
                textAnchor="middle"
                fontSize="11"
                fontWeight="800"
                fill="#FFFFFF"
              >
                I-5
              </text>
            </svg>

            {/* Custom Tri-Valley Pin */}
            <div className="absolute top-[42%] left-[72%] -translate-x-1/2 -translate-y-full flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white border-[3px] border-[#F0418C] shadow-lg flex items-center justify-center p-1">
                <img
                  src="/images/logo-full.png"
                  alt="Tri-Valley HQ Marker"
                  className="w-9 h-auto object-contain"
                />
              </div>
              <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[10px] border-t-[#F0418C] -mt-0.5" />
            </div>
          </div>
        )}

        {/* Floating Stockton HQ Google Card */}
        <div className="absolute top-3 left-3 max-w-[235px] bg-white/95 backdrop-blur-sm rounded-xl border border-[#FBCFE8] p-3 shadow-lg pointer-events-auto">
          <div className="font-display font-extrabold text-xs text-[#023D69] leading-tight">
            {SITE_INFO.shortName}
          </div>
          <div className="text-[11px] text-slate-600 mt-0.5 leading-snug">
            {SITE_INFO.shortAddress}
          </div>
          <div className="flex items-center justify-between gap-2 mt-2 pt-1.5 border-t border-slate-100">
            <span className="inline-flex items-center gap-0.5 text-[11px] font-bold text-amber-600">
              5.0 <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
            </span>
            <a
              href={SITE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-bold text-[#C2185B] hover:underline"
            >
              <Navigation className="w-3 h-3" />
              Directions
            </a>
          </div>
        </div>
      </div>

      {/* 4-County Service Territory Strip */}
      <div className="px-4 py-2.5 bg-white border-t border-[#FCE7F3] flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-1.5 text-[#023D69] font-semibold">
          <MapPin className="w-3.5 h-3.5 text-[#F0418C]" />
          <span>Counties: Alameda · San Joaquin · Stanislaus · Sacramento</span>
        </div>
        <a
          href={SITE_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-[#C2185B] hover:underline"
        >
          Open in Google Maps &rarr;
        </a>
      </div>
    </div>
  );
}
