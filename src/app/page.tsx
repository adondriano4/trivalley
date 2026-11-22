import React from "react";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  Users,
  Sparkles,
  Stethoscope,
  Home,
  Star,
} from "lucide-react";
import { BLOG_POSTS, SITE_INFO } from "@/data/site-data";
import HeroSlideshow from "@/components/HeroSlideshow";
import VimeoIntroPlayer from "@/components/VimeoIntroPlayer";
import ServicesSlider from "@/components/ServicesSlider";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import TeamSlider from "@/components/TeamSlider";
import WorkShowcaseSlider from "@/components/WorkShowcaseSlider";
import MiniGoogleMaps from "@/components/MiniGoogleMaps";
import CareInquiryForm from "@/components/CareInquiryForm";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* 1. HERO KEN BURNS SLIDESHOW (Matches Original 3-Photo Hero) */}
      <HeroSlideshow />

      {/* 2. ABOUT US (MISSION + mission1.jpeg) & AUTOPLAY VIMEO INTRO */}
      <section className="py-14 sm:py-18 bg-gradient-to-b from-[#FFF9FC] to-white border-b border-[#FCE7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: mission1.jpeg + Signature Asymmetric Pink-Bordered Mission Card */}
            <div className="lg:col-span-6 space-y-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#FBCFE8] shadow-[0_18px_42px_rgba(2,61,105,0.12)]">
                <img
                  src="/images/mission1.jpeg"
                  alt="Founder Necita Tecson Manapul, RN caring warmly for a senior patient in a wheelchair"
                  className="w-full h-72 sm:h-84 object-cover object-[center_20%]"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-[#F9A8D4] rounded-full px-3.5 py-1.5 flex items-center gap-2 shadow-md">
                  <img
                    src="/images/trivalley-icon.png"
                    alt="Tri-Valley Icon"
                    className="h-4 w-auto"
                  />
                  <span className="font-display font-bold text-xs text-[#023D69]">
                    About Us · Est. 2000
                  </span>
                </div>
              </div>

              <div className="bg-[#4A7995] text-white rounded-2xl rounded-br-[72px] border-b-[8px] border-[#FFBFDF] p-6 sm:p-7 shadow-[0_14px_34px_rgba(2,61,105,0.14)]">
                <div className="text-xs font-extrabold uppercase tracking-wider text-[#FFBFDF] mb-1">
                  Mission
                </div>
                <p className="text-sm sm:text-base text-white/95 leading-relaxed mb-4">
                  Empowering clients within the comfort of their homes, our agency is dedicated to delivering expert professional and paraprofessional care to support individuals in reaching their utmost potential in daily self-care through thorough, holistic assessments.
                </p>
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F0418C] hover:bg-[#C2185B] text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
                >
                  <span>More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Agency Intro Vimeo Video (Autoplays on Scroll) */}
            <div className="lg:col-span-6">
              <div className="mb-3 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#FBCFE8] text-[#C2185B] text-xs font-bold">
                  Agency Introduction · 0:48
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Autoplays when scrolled into view
                </span>
              </div>
              <VimeoIntroPlayer />
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER — INTERACTIVE 6-SERVICE CARD SLIDER */}
      <section id="services" className="py-14 sm:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9FC] border border-[#FBCFE8] text-[#C2185B] text-xs font-bold mb-2">
                What We Offer
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#023D69]">
                Reliable and Compassionate Home Nursing Services
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#C2185B] hover:text-[#023D69] shrink-0"
            >
              <span>All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <ServicesSlider />
        </div>
      </section>

      {/* 4. PARALLAX BAND 1: WHY CHOOSE US · HOW IT WORKS · 35k+ / 25k+ */}
      <section
        className="parallax-bg relative py-16 sm:py-22 text-white border-y-4 border-[#FFBFDF]"
        style={{
          backgroundImage: "url('/images/parallax-why.jpg')",
        }}
      >
        {/* Original Pink Blush + Deep Navy Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#023D69]/90 via-[#023D69]/80 to-[#F0418C]/65"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Why Choose Us Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#FFBFDF] text-[#023D69] text-xs font-extrabold uppercase tracking-wider mb-3">
                Why Choose Us
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold leading-tight mb-4">
                Driven by Compassion, Defined by Excellence
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { icon: Home, label: "Home Care" },
                  { icon: HeartHandshake, label: "Senior Care" },
                  { icon: Stethoscope, label: "Health Consultation" },
                ].map((pill) => (
                  <span
                    key={pill.label}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs font-bold text-white"
                  >
                    <pill.icon className="w-4 h-4 text-[#FFBFDF]" />
                    {pill.label}
                  </span>
                ))}
              </div>
            </div>

            {/* 35k+ & 25k+ Impact Counters */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/95 backdrop-blur-md text-[#023D69] rounded-3xl p-6 border-b-4 border-[#F0418C] shadow-xl">
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#C2185B]">
                  35k+
                </div>
                <div className="font-display font-bold text-base mt-1">
                  Happy Customers
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  Trusted by Stockton &amp; Northern California families since 2000.
                </p>
              </div>
              <div className="bg-white/95 backdrop-blur-md text-[#023D69] rounded-3xl p-6 border-b-4 border-[#023D69] shadow-xl">
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#023D69]">
                  25k+
                </div>
                <div className="font-display font-bold text-base mt-1">
                  Customer Support Cases
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  Coordinated nursing, therapy, social work &amp; caregiver guidance.
                </p>
              </div>
            </div>
          </div>

          {/* How It Works (3 Concise Steps) */}
          <div className="pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
              <h3 className="font-display text-xl sm:text-2xl font-extrabold">
                How It Works · Our Simple &amp; Effective Care Process
              </h3>
              <span className="text-xs font-bold text-[#FFBFDF]">
                3 Simple Steps to Care at Home
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  text: "Call (209) 957-0708 or send physician orders to verify eligibility.",
                },
                {
                  step: "02",
                  title: "Personalized Care Plan",
                  text: "Holistic RN home assessment coordinated with your primary doctor.",
                },
                {
                  step: "03",
                  title: "Ongoing Care & Support",
                  text: "Compassionate clinical visits with 24/7 on-call nursing coverage.",
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="bg-[#012B4B]/75 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex items-start gap-3.5"
                >
                  <span className="w-9 h-9 rounded-full bg-[#F0418C] text-white font-display font-extrabold text-sm flex items-center justify-center shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <div className="font-display font-bold text-base text-white">
                      {s.title}
                    </div>
                    <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                      {s.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. PARALLAX BAND 2: WHAT THEY'RE SAYING (INTERACTIVE TESTIMONIAL SLIDES) */}
      <section
        className="parallax-bg relative py-14 sm:py-18 border-b border-[#FBCFE8]"
        style={{
          backgroundImage: "url('/images/parallax-testimonials.jpg')",
        }}
      >
        {/* Warm Blush Overlay Matching Original Testimonial Parallax */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#FFF9FC]/90 via-[#FFBFDF]/78 to-[#FFF9FC]/92 backdrop-blur-[1px]"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#FBCFE8] text-[#C2185B] text-xs font-bold mb-2 shadow-2xs">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                <span>5-Star Care · Greater Future</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#023D69]">
                What They&rsquo;re Saying
              </h2>
            </div>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* 6. OUR DEDICATED TEAM — INTERACTIVE LEADERSHIP SLIDER */}
      <section id="team" className="py-14 sm:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9FC] border border-[#FBCFE8] text-[#C2185B] text-xs font-bold mb-2">
                <Users className="w-3.5 h-3.5" />
                <span>Our Dedicated Team</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#023D69]">
                Meet Our Clinical &amp; Operational Leadership
              </h2>
            </div>
            <Link
              href="/our-team"
              className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#C2185B] hover:text-[#023D69] shrink-0"
            >
              <span>Full Team Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <TeamSlider />
        </div>
      </section>

      {/* 7. SEE OUR WORK — ORIGINAL 6-SLIDE SHOWCASE (slid1..slid6) */}
      <section className="py-14 sm:py-18 bg-[#FFF9FC] border-y border-[#FCE7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#FBCFE8] text-[#C2185B] text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>See Our Work</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#023D69]">
                Trusted Home Care Solutions, Our Proven Track Record
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#C2185B] hover:text-[#023D69] shrink-0"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <WorkShowcaseSlider />
        </div>
      </section>

      {/* 8. PARALLAX BAND 3: SERVICE AREA + MINI GOOGLE MAPS + MAKE AN APPOINTMENT */}
      <section
        id="location"
        className="parallax-bg relative py-16 sm:py-20 border-b border-[#FBCFE8]"
        style={{
          backgroundImage: "url('/images/parallax-cta.jpg')",
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#012B4B]/88 via-[#023D69]/80 to-[#831843]/72"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-5 text-white">
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#FFBFDF] text-[#023D69] text-xs font-extrabold uppercase tracking-wider mb-3">
                  Service Area · Make an Appointment
                </span>
                <h2 className="font-display text-2xl sm:text-4xl font-extrabold leading-tight mb-3">
                  Talk to your Doctor about Home Health Care with us today
                </h2>
                <div className="grid grid-cols-2 gap-2.5 max-w-md">
                  {SITE_INFO.counties.map((county) => (
                    <div
                      key={county}
                      className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-xl px-3 py-2 text-xs font-bold text-white"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FFBFDF] shrink-0" />
                      <span>{county}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-slate-900">
                <MiniGoogleMaps heightClass="h-64" />
              </div>
            </div>

            <div className="lg:col-span-6">
              <CareInquiryForm compact heading="Send Us a Message" />
            </div>
          </div>
        </div>
      </section>

      {/* 9. INSIGHTS ON QUALITY HOME CARE & NURSING (2 Original Blog Cards) */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-7">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C2185B]">
                More About Us
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
                className="group bg-[#FFF9FC] hover:bg-white rounded-3xl border border-[#FBCFE8] hover:border-[#F0418C] overflow-hidden flex flex-col sm:flex-row transition-all shadow-xs"
              >
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full sm:w-48 h-48 sm:h-auto object-cover shrink-0"
                />
                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-[#C2185B] mb-1">
                      {post.category} · {post.date}
                    </div>
                    <h3 className="font-display font-extrabold text-base text-[#023D69] group-hover:text-[#C2185B] mb-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#C2185B]">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
