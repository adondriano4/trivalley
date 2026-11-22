import React from "react";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
  CalendarCheck,
  Users,
  Sparkles,
} from "lucide-react";
import {
  SERVICES,
  TEAM_MEMBERS,
  CASE_HIGHLIGHTS,
  BLOG_POSTS,
  SITE_INFO,
} from "@/data/site-data";
import VimeoIntroPlayer from "@/components/VimeoIntroPlayer";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import MiniGoogleMaps from "@/components/MiniGoogleMaps";
import CareInquiryForm from "@/components/CareInquiryForm";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF9FC] via-white to-[#FDF2F8] border-b border-[#FBCFE8]">
        {/* Soft Decorative Pink Glow */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#FFBFDF]/35 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#F0418C]/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#FBCFE8] text-[#9D174D] text-xs font-bold mb-5 shadow-xs">
                <img
                  src="/images/trivalley-icon.png"
                  alt=""
                  className="h-4 w-auto"
                />
                <span>25+ Years of Trusted Home Health · Est. 2000</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-[#023D69] tracking-tight leading-[1.1] mb-5">
                Personal, compassionate nursing care in the{" "}
                <span className="text-[#C2185B]">comfort of home</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-7 max-w-xl">
                At Tri-Valley Home Health Care, we believe healthcare should be delivered with the same warmth and clinical excellence we&rsquo;d provide to our own family. Serving Northern California seniors and families with 24/7 nursing support.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 mb-8">
                <a
                  href={SITE_INFO.phoneHref}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F0418C] hover:bg-[#C2185B] text-white font-bold text-sm sm:text-base shadow-[0_10px_24px_rgba(240,65,140,0.32)] transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {SITE_INFO.phone} · 24/7 Support</span>
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#023D69] text-[#023D69] hover:bg-[#023D69] hover:text-white font-bold text-sm sm:text-base transition-colors"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-3 max-w-md pt-4 border-t border-[#FCE7F3]">
                <div>
                  <div className="font-display font-extrabold text-xl sm:text-2xl text-[#023D69]">
                    35,000+
                  </div>
                  <div className="text-xs text-slate-600 font-medium">
                    Happy Patients
                  </div>
                </div>
                <div>
                  <div className="font-display font-extrabold text-xl sm:text-2xl text-[#C2185B]">
                    25,000+
                  </div>
                  <div className="text-xs text-slate-600 font-medium">
                    Family Support Cases
                  </div>
                </div>
                <div>
                  <div className="font-display font-extrabold text-xl sm:text-2xl text-[#023D69]">
                    4 Counties
                  </div>
                  <div className="text-xs text-slate-600 font-medium">
                    Northern CA
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-[0_22px_50px_rgba(2,61,105,0.16)]">
                <img
                  src="/images/hero-home-care.jpg"
                  alt="Smiling Tri-Valley nurse reviewing a health checkup report with a senior patient at home"
                  className="w-full h-80 sm:h-[420px] object-cover object-[center_20%]"
                />
                {/* Floating Accreditation Pill */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-white/95 backdrop-blur-md border border-[#FBCFE8] rounded-2xl p-3.5 shadow-lg flex items-center gap-3">
                  <img
                    src="/images/chap-seal.png"
                    alt="CHAP Accredited Seal"
                    className="h-11 w-auto shrink-0"
                  />
                  <div>
                    <div className="font-display font-extrabold text-xs sm:text-sm text-[#023D69]">
                      CHAP Accredited &amp; Medicare Certified
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Accepting New Patient Referrals
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST & ACCREDITATION STRIP */}
      <section className="bg-white border-b border-[#FCE7F3] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex items-center gap-3 bg-[#FFF9FC] border border-[#FCE7F3] rounded-2xl px-4 py-3">
            <img
              src="/images/chap-seal.png"
              alt="CHAP Standards of Excellence"
              className="h-10 w-auto shrink-0"
            />
            <div className="text-xs font-bold text-[#023D69]">
              CHAP Standards of Excellence Accredited
            </div>
          </div>
          <div className="flex items-center gap-3 bg-[#FFF9FC] border border-[#FCE7F3] rounded-2xl px-4 py-3">
            <img
              src="/images/cms-seal.png"
              alt="CMS Medicare and Medi-Cal"
              className="h-9 w-auto shrink-0"
            />
            <div className="text-xs font-bold text-[#023D69]">
              CMS Medicare &amp; Medi-Cal Certified
            </div>
          </div>
          <div className="flex items-center gap-3 bg-[#FFF9FC] border border-[#FCE7F3] rounded-2xl px-4 py-3">
            <img
              src="/images/trivalley-icon.png"
              alt="Tri-Valley Icon"
              className="h-7 w-auto shrink-0"
            />
            <div className="text-xs font-bold text-[#023D69]">
              Licensed by CA Dept. of Health Services
            </div>
          </div>
          <div className="flex items-center gap-3 bg-[#FFF9FC] border border-[#FCE7F3] rounded-2xl px-4 py-3">
            <div className="font-display font-extrabold text-xl text-[#C2185B] shrink-0">
              25+ Yrs
            </div>
            <div className="text-xs font-bold text-[#023D69]">
              Compassionate Stockton &amp; Valley Care
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT US & MISSION BAND (Featuring mission1.jpeg) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#FBCFE8] shadow-[0_18px_40px_rgba(2,61,105,0.12)]">
                <img
                  src="/images/mission1.jpeg"
                  alt="Founder Necita Tecson Manapul, RN caring warmly for a senior patient in a wheelchair"
                  className="w-full h-80 sm:h-96 object-cover object-[center_20%]"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm border border-[#F9A8D4] rounded-2xl px-3.5 py-2 flex items-center gap-2 shadow-md">
                  <img
                    src="/images/trivalley-icon.png"
                    alt="Tri-Valley Icon"
                    className="h-5 w-auto"
                  />
                  <span className="font-display font-bold text-xs text-[#023D69]">
                    Est. 2000 · Stockton, CA
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9FC] border border-[#FBCFE8] text-[#C2185B] text-xs font-bold mb-3">
                About Us &amp; Our Mission
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#023D69] tracking-tight mb-4">
                Empowering patients to reach their fullest potential at home
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Founded in 2000 by Necita Tecson Manapul, RN, Tri-Valley Home Health Care is dedicated to delivering expert professional and paraprofessional care through thorough, holistic assessments—uniting clinical precision with family dignity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-[#FFF9FC] border border-[#FBCFE8] rounded-2xl p-5">
                  <h3 className="font-display font-extrabold text-base text-[#C2185B] mb-1.5">
                    Our Mission
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Supporting individuals in reaching their utmost potential in daily self-care through multidisciplinary, holistic care at home.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                  <h3 className="font-display font-extrabold text-base text-[#023D69] mb-1.5">
                    Our Vision
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    To remain a premier home healthcare provider renowned for innovative, professional, and compassionate service.
                  </p>
                </div>
              </div>

              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 text-sm font-extrabold text-[#C2185B] hover:text-[#023D69] transition-colors"
              >
                <span>Read our full 25-year story &amp; founder legacy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VIMEO INTRO VIDEO + WHY CHOOSE US SHOWCASE */}
      <section className="py-16 sm:py-20 bg-[#FFF9FC] border-y border-[#FCE7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <VimeoIntroPlayer />
            </div>

            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#FBCFE8] text-[#C2185B] text-xs font-bold">
                See Tri-Valley in Motion
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#023D69] leading-tight">
                Driven by Compassion, Defined by Clinical Excellence
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Watch our short agency introduction to see how our Stockton nurses, therapists, social workers, and aides partner with families and physicians across Northern California.
              </p>

              <div className="space-y-3">
                {[
                  {
                    icon: Stethoscope,
                    title: "Physician-Coordinated Care Plans",
                    desc: "Direct collaboration with your doctor for rapid 24–48 hour start of care.",
                  },
                  {
                    icon: HeartHandshake,
                    title: "Personalized Senior & Family Support",
                    desc: "Tailored visit schedules built around comfort, safety, and caregiver peace of mind.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "24/7 On-Call Registered Nursing",
                    desc: "Live nurse support whenever questions or urgent symptoms arise at home.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 bg-white border border-[#FBCFE8] rounded-2xl p-4 shadow-2xs"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FDF2F8] border border-[#F9A8D4] text-[#C2185B] flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-[#023D69]">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SIX CLINICAL SERVICES GRID */}
      <section id="services" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9FC] border border-[#FBCFE8] text-[#C2185B] text-xs font-bold mb-2">
                What We Offer
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#023D69]">
                Reliable, Compassionate Home Health Services
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#C2185B] hover:text-[#023D69]"
            >
              <span>Compare all 6 specialties</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group bg-white rounded-3xl border border-[#F1E4EC] hover:border-[#F0418C] shadow-[0_4px_20px_rgba(2,61,105,0.05)] hover:shadow-[0_14px_32px_rgba(240,65,140,0.14)] transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover object-[center_22%] transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 border border-[#FBCFE8] text-[11px] font-bold text-[#9D174D]">
                    {service.tagline}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl font-extrabold text-[#023D69] group-hover:text-[#C2185B] transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {service.summary}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-[#C2185B]">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS (3-STEP PROCESS) + PROVEN IMPACT */}
      <section className="py-16 bg-gradient-to-br from-[#012B4B] via-[#023D69] to-[#831843] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 border border-[#FFBFDF]/40 text-[#FFBFDF] text-xs font-bold mb-2">
                How It Works
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold">
                Our Simple &amp; Effective 3-Step Care Process
              </h2>
            </div>
            <div className="text-sm font-bold text-[#FFBFDF]">
              Start of Care Typically Within 24–48 Hours
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                step: "01 · Initial Consultation",
                icon: Phone,
                title: "Call or Submit Physician Orders",
                text: "Reach our Stockton intake desk at (209) 957-0708 or fax referrals to (209) 957-7866 to verify insurance & eligibility.",
              },
              {
                step: "02 · Personalized Care Plan",
                icon: CalendarCheck,
                title: "Holistic Home Assessment",
                text: "A Registered Nurse visits your home, coordinates with your doctor, and designs a tailored nursing, therapy, and nutrition plan.",
              },
              {
                step: "03 · Ongoing Care & Support",
                icon: Sparkles,
                title: "QAPI-Monitored Recovery",
                text: "Dedicated clinicians deliver compassionate scheduled visits backed by continuous quality oversight and 24/7 RN support.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#F0418C] text-white text-xs font-bold">
                    {s.step}
                  </span>
                  <s.icon className="w-5 h-5 text-[#FFBFDF]" />
                </div>
                <h3 className="font-display text-lg font-extrabold mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>

          {/* Proven Track Record Highlights */}
          <div className="pt-10 border-t border-white/15">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-xl sm:text-2xl font-extrabold">
                Trusted Home Care Solutions · Proven Track Record
              </h3>
              <span className="hidden sm:inline text-xs font-bold text-[#FFBFDF]">
                35,000+ Happy Patients · 25,000+ Support Cases
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CASE_HIGHLIGHTS.map((item) => (
                <div
                  key={item.title}
                  className="bg-white text-slate-900 rounded-2xl overflow-hidden flex items-center gap-3.5 p-3 shadow-md"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 rounded-xl object-cover shrink-0"
                  />
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C2185B]">
                      {item.category}
                    </span>
                    <h4 className="font-display font-extrabold text-sm text-[#023D69]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS CAROUSEL (All 24 Curated Reviews) */}
      <section className="py-16 sm:py-20 bg-[#FFF9FC] border-b border-[#FCE7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#FBCFE8] text-[#C2185B] text-xs font-bold mb-2">
              Patient &amp; Family Stories
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#023D69]">
              What Families Across Northern California Are Saying
            </h2>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* 8. DEDICATED LEADERSHIP TEAM (With View More Buttons to Individual Pages) */}
      <section id="team" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9FC] border border-[#FBCFE8] text-[#C2185B] text-xs font-bold mb-2">
                <Users className="w-3.5 h-3.5" />
                <span>Our Dedicated Team</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#023D69]">
                Meet Our Clinical &amp; Operational Leadership
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Select &ldquo;View More&rdquo; on any leader to read their full biography, education, and credentials.
              </p>
            </div>
            <Link
              href="/our-team"
              className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#C2185B] hover:text-[#023D69] shrink-0"
            >
              <span>Full Team Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.slug}
                className="bg-[#FFF9FC]/70 hover:bg-white rounded-3xl border border-[#FBCFE8] hover:border-[#F0418C] p-6 text-center shadow-[0_4px_18px_rgba(2,61,105,0.04)] hover:shadow-[0_14px_30px_rgba(240,65,140,0.14)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full mx-auto mb-5 p-1.5 bg-gradient-to-tr from-[#F0418C] to-[#FFBFDF] shadow-lg">
                    <img
                      src={member.image}
                      alt={member.imageAlt}
                      className="w-full h-full rounded-full object-cover object-top bg-white"
                    />
                  </div>
                  <h3 className="font-display font-extrabold text-base text-[#023D69] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-[#C2185B] mb-2.5 min-h-[2rem]">
                    {member.shortRole}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-5">
                    {member.experienceSummary}
                  </p>
                </div>

                <Link
                  href={`/${member.slug}`}
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-full bg-white border border-[#F9A8D4] hover:bg-[#F0418C] hover:border-[#F0418C] text-[#023D69] hover:text-white font-bold text-xs transition-colors"
                >
                  <span>View More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BLOG INSIGHTS PREVIEW */}
      <section className="py-14 bg-[#FFF9FC] border-y border-[#FCE7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C2185B]">
                Insights &amp; Quality
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#023D69]">
                Insights on Quality Home Care &amp; Nursing
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm font-bold text-[#C2185B] hover:underline shrink-0"
            >
              All Articles &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-3xl border border-[#FBCFE8] overflow-hidden flex flex-col sm:flex-row hover:border-[#F0418C] transition-all shadow-xs"
              >
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full sm:w-52 h-48 sm:h-auto object-cover shrink-0"
                />
                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-[#C2185B] mb-1">
                      {post.category} · {post.date}
                    </div>
                    <h3 className="font-display font-extrabold text-base text-[#023D69] group-hover:text-[#C2185B] mb-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#C2185B]">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. STOCKTON HQ MINI GOOGLE MAPS + QUICK CARE INQUIRY */}
      <section id="location" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9FC] border border-[#FBCFE8] text-[#C2185B] text-xs font-bold mb-2">
              Visit or Contact Stockton HQ
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#023D69]">
              Talk to Your Doctor About Home Health Care Today
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-4">
              <MiniGoogleMaps heightClass="h-72 sm:h-80" />

              <div className="grid grid-cols-2 gap-3">
                {SITE_INFO.counties.map((county) => (
                  <div
                    key={county}
                    className="flex items-center gap-2 bg-[#FFF9FC] border border-[#FBCFE8] rounded-xl px-3.5 py-2.5 text-xs font-bold text-[#023D69]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#F0418C] shrink-0" />
                    <span>{county}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <CareInquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
