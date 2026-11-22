import type { Metadata } from "next";
import React from "react";
import { Phone, Printer, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { SITE_INFO } from "@/data/site-data";
import MiniGoogleMaps from "@/components/MiniGoogleMaps";
import CareInquiryForm from "@/components/CareInquiryForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Tri-Valley Home Health Care in Stockton, CA. Call (209) 957-0708, fax referrals to (209) 957-7866, or explore our mini Google Map.",
};

export default function ContactUsPage() {
  return (
    <div className="bg-[#FFF9FC] min-h-screen">
      <section className="bg-gradient-to-br from-[#FFF9FC] via-white to-[#FDF2F8] border-b border-[#FBCFE8] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#FBCFE8] text-[#C2185B] text-xs font-bold mb-3">
            <img src="/images/logo-full.png" alt="Tri-Valley Logo" className="h-5 w-auto object-contain" />
            <span>Stockton Headquarters · 24/7 On-Call Nursing</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#023D69] tracking-tight mb-3">
            Contact Us &amp; Stockton HQ
          </h1>
          <p className="text-base sm:text-lg text-slate-700">
            Reach out for patient referrals, home care eligibility questions, or family consultations across Alameda, San Joaquin, Stanislaus, and Sacramento counties.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Info Cards + Mini Google Maps */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl border border-[#FBCFE8] p-5 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C2185B] uppercase mb-1">
                  <Phone className="w-4 h-4" />
                  <span>Phone (24/7 Nursing)</span>
                </div>
                <a
                  href={SITE_INFO.phoneHref}
                  className="font-display font-extrabold text-xl text-[#023D69] hover:text-[#C2185B]"
                >
                  {SITE_INFO.phone}
                </a>
                <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-1">
                  <Printer className="w-3.5 h-3.5 text-[#4A7995]" />
                  <span>Fax: {SITE_INFO.fax}</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-[#FBCFE8] p-5 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C2185B] uppercase mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Office Hours</span>
                </div>
                <div className="font-display font-bold text-sm text-[#023D69]">
                  Mon – Fri: 8:30 AM – 5:00 PM
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-1">
                  <span>24/7 On-Call Registered Nursing</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#FBCFE8] p-4 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#F0418C] shrink-0 mt-0.5" />
              <div>
                <div className="font-display font-bold text-sm text-[#023D69]">
                  Office Address
                </div>
                <div className="text-sm text-slate-700">{SITE_INFO.address}</div>
              </div>
            </div>

            <MiniGoogleMaps heightClass="h-72 sm:h-80" />

            <div className="grid grid-cols-2 gap-3">
              {SITE_INFO.counties.map((county) => (
                <div
                  key={county}
                  className="flex items-center gap-2 bg-white border border-[#FBCFE8] rounded-xl px-3.5 py-2.5 text-xs font-bold text-[#023D69]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#F0418C] shrink-0" />
                  <span>{county}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: HIPAA-Conscious Form */}
          <div className="lg:col-span-6">
            <CareInquiryForm heading="Send Us a Message" />
          </div>
        </div>
      </section>
    </div>
  );
}
