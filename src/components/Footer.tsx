"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MapPin, Printer, CheckCircle2 } from "lucide-react";
import { SERVICES, SITE_INFO } from "@/data/site-data";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#012B4B] text-white pt-14 pb-24 md:pb-10 border-t-4 border-[#F0418C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/15">
          {/* Brand & Stockton HQ */}
          <div>
            <div className="flex items-center gap-3.5 mb-4">
              <div className="bg-white rounded-2xl px-3 py-2 shadow-sm shrink-0">
                <img
                  src="/images/logo-full.png"
                  alt="Tri-Valley Logo"
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </div>
              <div>
                <div className="font-display font-extrabold text-base leading-tight text-white">
                  TRI-VALLEY
                </div>
                <div className="text-[11px] font-bold tracking-wider text-[#FFBFDF] uppercase">
                  Home Health Care, Inc.
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Licensed by the California Department of Health Services, CHAP Accredited, and Medicare &amp; Medi-Cal Certified since 2000.
            </p>
            <div className="space-y-2 text-xs text-slate-200">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FFBFDF] shrink-0 mt-0.5" />
                <span>{SITE_INFO.address}</span>
              </div>
              <a
                href={SITE_INFO.phoneHref}
                className="flex items-center gap-2 hover:text-[#FFBFDF] transition-colors font-semibold"
              >
                <Phone className="w-4 h-4 text-[#FFBFDF] shrink-0" />
                <span>{SITE_INFO.phone}</span>
              </a>
              <div className="flex items-center gap-2">
                <Printer className="w-4 h-4 text-[#FFBFDF] shrink-0" />
                <span>Fax: {SITE_INFO.fax}</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Territory */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-[#FFBFDF] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-200 mb-6">
              <li>
                <Link href="/" className="hover:text-[#FFBFDF] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-[#FFBFDF] transition-colors">
                  About Us &amp; Our Mission
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="hover:text-[#FFBFDF] transition-colors">
                  Our Leadership Team
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-[#FFBFDF] transition-colors">
                  Careers at Tri-Valley
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#FFBFDF] transition-colors">
                  Clinical Blog &amp; News
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-[#FFBFDF] transition-colors">
                  Contact &amp; Referrals
                </Link>
              </li>
            </ul>
          </div>

          {/* Clinical Services */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-[#FFBFDF] mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-200">
              {SERVICES.map((srv) => (
                <li key={srv.slug}>
                  <Link
                    href={`/${srv.slug}`}
                    className="hover:text-[#FFBFDF] transition-colors"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Accreditation Seals */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-[#FFBFDF] mb-4">
              Health Updates &amp; Newsletter
            </h3>
            <p className="text-xs text-slate-300 mb-3 leading-relaxed">
              Receive seasonal wellness tips, caregiver resources, and community health updates from our Stockton clinical team.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-100 rounded-xl px-3.5 py-2.5 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-300" />
                <span>Thank you for subscribing to Tri-Valley updates!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <label htmlFor="footer-newsletter" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full rounded-xl bg-white/10 border border-white/20 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-400 focus:border-[#FFBFDF] focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#F0418C] hover:bg-[#C2185B] text-white font-bold text-sm py-2.5 transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}

            <div className="mt-5 w-full flex items-center justify-evenly gap-4">
              <img
                src="/images/chap-seal.png"
                alt="CHAP Standards of Excellence Accredited"
                className="h-16 w-auto object-contain drop-shadow-[0_2px_10px_rgba(255,255,255,0.45)]"
              />
              <img
                src="/images/cms-seal.png"
                alt="CMS Medicare & Medi-Cal Certified"
                className="h-16 w-auto object-contain drop-shadow-[0_2px_10px_rgba(255,255,255,0.55)]"
              />
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div>
            Copyright &copy; {new Date().getFullYear()} Tri-Valley Home Health Care, Inc. All Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-[#FFBFDF] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#FFBFDF] transition-colors">
              Terms of Service
            </Link>
            <Link href="/legal-disclaimer" className="hover:text-[#FFBFDF] transition-colors">
              Legal Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
