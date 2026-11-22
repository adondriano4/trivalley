import React from "react";
import Link from "next/link";
import { Phone, CheckCircle2, ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { ServiceItem, SERVICES, SITE_INFO } from "@/data/site-data";
import CareInquiryForm from "./CareInquiryForm";

export default function ServiceDetailView({ service }: { service: ServiceItem }) {
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <div className="bg-[#FFF9FC]">
      {/* Breadcrumb + Service Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF9FC] via-white to-[#FDF2F8] border-b border-[#FBCFE8] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C2185B] hover:underline mb-5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All Home Health Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#FBCFE8] text-[#C2185B] text-xs font-bold mb-4 shadow-xs">
                <img
                  src="/images/trivalley-icon.png"
                  alt=""
                  className="h-4 w-auto"
                />
                <span>{service.tagline}</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#023D69] tracking-tight mb-4">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
                {service.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-7">
                {service.highlights.map((h) => (
                  <span
                    key={h}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#FBCFE8] text-xs font-bold text-[#9D174D]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F0418C]" />
                    {h}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={SITE_INFO.phoneHref}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F0418C] hover:bg-[#C2185B] text-white font-bold text-sm shadow-[0_8px_20px_rgba(240,65,140,0.3)] transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call {SITE_INFO.phone} · Refer Patient
                </a>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#023D69] text-[#023D69] hover:bg-[#023D69] hover:text-white font-bold text-sm transition-colors"
                >
                  Schedule Care Assessment
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-[0_18px_40px_rgba(2,61,105,0.14)]">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-72 sm:h-88 object-cover object-center"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm rounded-xl border border-[#FBCFE8] px-3.5 py-2.5 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#023D69]">
                    CHAP Accredited · Medicare &amp; Medi-Cal
                  </span>
                  <span className="font-bold text-[#C2185B]">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Details + Sidebar Form */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-8">
            {service.sections.map((sec) => (
              <div
                key={sec.heading}
                className="bg-white rounded-3xl border border-[#FBCFE8] p-6 sm:p-8 shadow-xs"
              >
                <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#023D69] mb-4">
                  {sec.heading}
                </h2>
                <div className="space-y-3 text-slate-700 leading-relaxed mb-5">
                  {sec.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
                {sec.bullets && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {sec.bullets.map((b, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 bg-[#FFF9FC] border border-[#FCE7F3] rounded-xl p-3 text-sm text-slate-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#F0418C] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {service.quote && (
              <blockquote className="bg-[#023D69] text-white rounded-3xl p-6 sm:p-8 border-l-8 border-[#F0418C]">
                <Quote className="w-7 h-7 text-[#FFBFDF] mb-2" />
                <p className="font-display text-lg sm:text-xl font-bold leading-snug mb-2">
                  &ldquo;{service.quote.text}&rdquo;
                </p>
                <footer className="text-sm text-[#FFBFDF] font-semibold">
                  — {service.quote.author}
                </footer>
              </blockquote>
            )}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <CareInquiryForm
              compact
              heading={`Inquire About ${service.shortTitle}`}
            />

            <div className="bg-white rounded-2xl border border-[#FBCFE8] p-5">
              <h3 className="font-display font-extrabold text-base text-[#023D69] mb-3">
                Explore Other Clinical Specialties
              </h3>
              <div className="space-y-2">
                {otherServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-slate-100 hover:border-[#FBCFE8] hover:bg-[#FFF9FC] text-sm font-semibold text-[#023D69] hover:text-[#C2185B] transition-colors"
                  >
                    <span>{s.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
