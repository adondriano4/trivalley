import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { SERVICES, SITE_INFO } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Home Health Care Services",
  description:
    "Explore Tri-Valley Home Health Care's 6 specialized services: Skilled Nursing, Rehabilitative Care, Home Health Aide, Medical Social Worker, Registered Dietitian, and Infusion Services.",
};

export default function ServicesHubPage() {
  return (
    <div className="bg-[#FFF9FC] min-h-screen">
      <section className="bg-gradient-to-br from-[#FFF9FC] via-white to-[#FDF2F8] border-b border-[#FBCFE8] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#FBCFE8] text-[#C2185B] text-xs font-bold mb-3">
              <img src="/images/logo-full.png" alt="Tri-Valley Logo" className="h-5 w-auto object-contain" />
              <span>What We Offer · Multidisciplinary Home Health</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#023D69] tracking-tight mb-3">
              Reliable &amp; Compassionate Home Health Services
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Every clinical service is physician-coordinated, CHAP-accredited, and tailored to help patients heal safely and comfortably at home.
            </p>
          </div>
          <a
            href={SITE_INFO.phoneHref}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F0418C] hover:bg-[#C2185B] text-white font-bold text-sm shadow-md shrink-0 w-fit"
          >
            <Phone className="w-4 h-4" />
            Call {SITE_INFO.phone} · Refer a Patient
          </a>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((srv) => (
            <article
              key={srv.slug}
              className="bg-white rounded-3xl border border-[#FBCFE8] overflow-hidden shadow-xs hover:shadow-[0_14px_34px_rgba(240,65,140,0.14)] hover:border-[#F0418C] transition-all flex flex-col"
            >
              <div className="relative">
                <img
                  src={srv.image}
                  alt={srv.imageAlt}
                  className="w-full h-56 object-cover object-[center_22%]"
                />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-max max-w-[90%] px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-xs border border-[#FBCFE8] text-[11px] font-bold text-[#9D174D] text-center shadow-md">
                  {srv.tagline}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="font-display text-xl font-extrabold text-[#023D69] mb-2.5">
                    {srv.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {srv.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {srv.highlights.slice(0, 4).map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFF9FC] border border-[#FCE7F3] text-[11px] font-semibold text-[#9D174D]"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#F0418C]" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={`/${srv.slug}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#023D69] hover:bg-[#F0418C] text-white font-bold text-sm transition-colors"
                >
                  <span>View Service Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
