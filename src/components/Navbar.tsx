"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown, Clock, MapPin } from "lucide-react";
import { SERVICES, SITE_INFO } from "@/data/site-data";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/our-team", label: "Our Team" },
    { href: "/career", label: "Careers" },
    { href: "/blog", label: "Blog" },
    { href: "/contact-us", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#FBCFE8] shadow-[0_2px_14px_rgba(2,61,105,0.06)]">
      {/* Top Navy Trust & Territory Bar */}
      <div className="bg-[#023D69] text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[#E2E8F0]">
            <MapPin className="w-3.5 h-3.5 text-[#FFBFDF] shrink-0" />
            <span>
              Serving Alameda, San Joaquin, Stanislaus &amp; Sacramento Counties · Stockton, CA
            </span>
          </div>
          <div className="flex items-center gap-4 text-[#E2E8F0]">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#FFBFDF]" />
              Mon–Fri 8:30 AM – 5:00 PM ·{" "}
              <strong className="text-[#FFBFDF] font-semibold">24/7 On-Call Nursing</strong>
            </span>
            <span className="text-white/40">|</span>
            <span>Fax: {SITE_INFO.fax}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Full Brand Logo (Desktop/Tablet) + Compact Icon Mark (Small Mobile) */}
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0 group"
          aria-label="Tri-Valley Home Health Care Home"
        >
          <img
            src="/images/logo-full.png"
            alt="Tri-Valley Home Health Care, Inc."
            className="h-11 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
          <Link
            href="/"
            className={`px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
              isActive("/")
                ? "text-[#C2185B] bg-[#FFF9FC] border border-[#FBCFE8]"
                : "text-[#023D69] hover:text-[#C2185B] hover:bg-[#FFF9FC]"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about-us"
            className={`px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
              isActive("/about-us")
                ? "text-[#C2185B] bg-[#FFF9FC] border border-[#FBCFE8]"
                : "text-[#023D69] hover:text-[#C2185B] hover:bg-[#FFF9FC]"
            }`}
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className={`inline-flex items-center gap-1 px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
                isActive("/services") ||
                SERVICES.some((s) => pathname === `/${s.slug}`)
                  ? "text-[#C2185B] bg-[#FFF9FC] border border-[#FBCFE8]"
                  : "text-[#023D69] hover:text-[#C2185B] hover:bg-[#FFF9FC]"
              }`}
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </Link>

            {servicesOpen && (
              <div className="absolute left-0 top-full pt-2 w-72 z-50">
                <div className="bg-white rounded-2xl border border-[#FBCFE8] shadow-[0_14px_34px_rgba(2,61,105,0.14)] p-2">
                  <Link
                    href="/services"
                    className="block px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#C2185B] bg-[#FFF9FC] mb-1 hover:bg-[#FDF2F8]"
                  >
                    View All 6 Clinical Services &rarr;
                  </Link>
                  {SERVICES.map((srv) => (
                    <Link
                      key={srv.slug}
                      href={`/${srv.slug}`}
                      className="block px-3.5 py-2 rounded-xl hover:bg-[#FFF9FC] transition-colors group"
                    >
                      <div className="text-sm font-semibold text-[#023D69] group-hover:text-[#C2185B]">
                        {srv.title}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-1">
                        {srv.tagline}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
                isActive(link.href)
                  ? "text-[#C2185B] bg-[#FFF9FC] border border-[#FBCFE8]"
                  : "text-[#023D69] hover:text-[#C2185B] hover:bg-[#FFF9FC]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop & Tablet Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={SITE_INFO.phoneHref}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#F9A8D4] bg-[#FFF9FC] text-[#023D69] hover:border-[#F0418C] hover:text-[#C2185B] text-sm font-bold transition-colors"
          >
            <Phone className="w-4 h-4 text-[#F0418C]" />
            <span>{SITE_INFO.phone}</span>
          </a>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#F0418C] hover:bg-[#C2185B] text-white text-sm font-bold shadow-[0_6px_16px_rgba(240,65,140,0.28)] transition-all"
          >
            Request Care
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-[#F9A8D4] bg-[#FFF9FC] text-[#023D69] font-bold text-sm"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          <span>{mobileOpen ? "Close" : "Menu"}</span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#FBCFE8] px-4 py-4 shadow-xl max-h-[82vh] overflow-y-auto">
          <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-[#FCE7F3]">
            <img
              src="/images/logo-full.png"
              alt="Tri-Valley Logo"
              className="h-8 w-auto object-contain"
            />
            <div>
              <div className="text-xs font-bold text-[#023D69]">
                Tri-Valley Home Health Care, Inc.
              </div>
              <div className="text-[11px] text-[#C2185B] font-semibold">
                Est. 2000 · Stockton, CA · 24/7 Nursing
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-[#023D69] hover:bg-[#FFF9FC]"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-[#023D69] hover:bg-[#FFF9FC]"
            >
              About Us
            </Link>
            <div className="px-3 py-2 bg-[#FFF9FC] rounded-xl border border-[#FCE7F3]">
              <Link
                href="/services"
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-bold text-[#C2185B] mb-1.5"
              >
                All Clinical Services
              </Link>
              <div className="grid grid-cols-1 gap-1 pl-2 border-l-2 border-[#F9A8D4]">
                {SERVICES.map((srv) => (
                  <Link
                    key={srv.slug}
                    href={`/${srv.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="py-1.5 text-xs font-semibold text-[#023D69] hover:text-[#C2185B]"
                  >
                    {srv.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/our-team"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-[#023D69] hover:bg-[#FFF9FC]"
            >
              Our Leadership Team
            </Link>
            <Link
              href="/career"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-[#023D69] hover:bg-[#FFF9FC]"
            >
              Careers
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-[#023D69] hover:bg-[#FFF9FC]"
            >
              Blog &amp; Insights
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-[#023D69] hover:bg-[#FFF9FC]"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-4 pt-3 border-t border-[#FCE7F3] flex flex-col gap-2">
            <a
              href={SITE_INFO.phoneHref}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#023D69] text-white text-sm font-bold"
            >
              <Phone className="w-4 h-4 text-[#FFBFDF]" />
              Call {SITE_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
