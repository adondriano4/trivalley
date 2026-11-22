import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Heart, Phone, ShieldCheck } from "lucide-react";
import { SITE_INFO } from "@/data/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Tri-Valley Home Health Care, founded in 2000 in Stockton, CA by Necita Tecson Manapul, RN—dedicated to compassionate, holistic home care.",
};

export default function AboutUsPage() {
  return (
    <div className="bg-[#FFF9FC]">
      {/* Hero with mission1.jpeg */}
      <section className="bg-gradient-to-br from-[#FFF9FC] via-white to-[#FDF2F8] border-b border-[#FBCFE8] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#FBCFE8] text-[#C2185B] text-xs font-bold mb-4">
              <img
                src="/images/trivalley-icon.png"
                alt=""
                className="h-4 w-auto"
              />
              <span>Est. 2000 · 25+ Years in San Joaquin County</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#023D69] tracking-tight leading-tight mb-4">
              Holistic, Compassionate Home Health Care Since 2000
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              Founded in Stockton by Registered Nurse Necita Tecson Manapul, Tri-Valley Home Health Care empowers individuals within the comfort of their homes through expert multidisciplinary care and unwavering community compassion.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/our-team"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F0418C] hover:bg-[#C2185B] text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Meet Our 8 Leaders</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={SITE_INFO.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#023D69] text-[#023D69] font-bold text-sm hover:bg-[#023D69] hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{SITE_INFO.phone}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-[0_20px_48px_rgba(2,61,105,0.14)]">
              <img
                src="/images/mission1.jpeg"
                alt="Tri-Valley founder Necita Tecson Manapul, RN caring for a senior patient in a wheelchair"
                className="w-full h-80 sm:h-[410px] object-cover object-[center_20%]"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl border border-[#FBCFE8] px-4 py-2.5 shadow-md">
                <div className="font-display font-extrabold text-xs text-[#023D69]">
                  Necita Tecson Manapul, RN · Founder &amp; CEO
                </div>
                <div className="text-[11px] font-semibold text-[#C2185B]">
                  Serving 35,000+ Northern California Patients
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-14 bg-white border-b border-[#FCE7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#FFF9FC] border border-[#FBCFE8] rounded-3xl p-8">
            <div className="w-11 h-11 rounded-2xl bg-[#F0418C] text-white flex items-center justify-center mb-4">
              <Heart className="w-5 h-5" />
            </div>
            <h2 className="font-display text-2xl font-extrabold text-[#C2185B] mb-3">
              Our Mission
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Empowering clients within the comfort of their homes, our agency is dedicated to delivering expert professional and paraprofessional care. Our mission is to support individuals in reaching their utmost potential in daily self-care activities. We are unwavering in our commitment to delivering high-quality, multidisciplinary care through thorough and holistic assessments—ensuring both client and clinical perspectives shape every care plan.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8">
            <div className="w-11 h-11 rounded-2xl bg-[#023D69] text-white flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="font-display text-2xl font-extrabold text-[#023D69] mb-3">
              Our Vision
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We aspire to be a premier provider of diverse, high-quality home healthcare services and to be renowned for our unwavering commitment to delivering innovative, professional, and compassionate care to the communities we serve across Alameda, San Joaquin, Stanislaus, and Sacramento counties.
            </p>
          </div>
        </div>
      </section>

      {/* Founding Story & Accreditation */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-[#FBCFE8] p-8 sm:p-10 shadow-xs">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#023D69] mb-4">
              A Legacy of Clinical Excellence &amp; Philanthropy
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed mb-8">
              <p>
                From humble beginnings in 2000 as a community-focused home health agency in Stockton, California, founder Necita &ldquo;Cita&rdquo; Tecson Manapul, RN built Tri-Valley around a simple promise: every patient deserves the attentiveness and dignity we would offer our own family.
              </p>
              <p>
                Inspired by her late father Emilio Tecson’s legacy of service, Cita has led Tri-Valley through pro bono care initiatives for underserved families and community medical mission drives—while growing a multidisciplinary team of nurses, therapists, social workers, dietitians, and aides.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#FCE7F3]">
              <div className="flex items-center gap-3 bg-[#FFF9FC] rounded-2xl p-4 border border-[#FBCFE8]">
                <img src="/images/chap-seal.png" alt="CHAP Seal" className="h-10 w-auto" />
                <span className="text-xs font-bold text-[#023D69]">
                  CHAP Accredited Excellence
                </span>
              </div>
              <div className="flex items-center gap-3 bg-[#FFF9FC] rounded-2xl p-4 border border-[#FBCFE8]">
                <img src="/images/cms-seal.png" alt="CMS Seal" className="h-9 w-auto" />
                <span className="text-xs font-bold text-[#023D69]">
                  Medicare &amp; Medi-Cal Certified
                </span>
              </div>
              <div className="flex items-center gap-3 bg-[#FFF9FC] rounded-2xl p-4 border border-[#FBCFE8]">
                <CheckCircle2 className="w-7 h-7 text-[#F0418C] shrink-0" />
                <span className="text-xs font-bold text-[#023D69]">
                  CA Dept. of Health Services Licensed
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
