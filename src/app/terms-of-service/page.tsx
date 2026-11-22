import type { Metadata } from "next";
import React from "react";
import { SITE_INFO } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the Terms of Service governing your use of the Tri-Valley Home Health Care, Inc. website.",
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#FFF9FC] min-h-screen py-12">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-3xl border border-[#FBCFE8] p-7 sm:p-11 shadow-xs">
        <div className="text-xs font-bold text-[#C2185B] uppercase tracking-wider mb-2">
          Effective Date: November 28, 2024
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#023D69] mb-6">
          Terms of Service
        </h1>

        <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
          <p>
            Welcome to the website of Tri-Valley Home Health Care, Inc. (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By accessing or using our website, you agree to comply with and be bound by the following Terms of Service and our Privacy Policy.
          </p>

          <section>
            <h2 className="font-display text-xl font-bold text-[#023D69] mb-2">
              Use of Website &amp; Intellectual Property
            </h2>
            <p>
              You agree to use this website only for lawful purposes. All website content—including text, graphics, logos, photography, and layout—is the property of Tri-Valley Home Health Care, Inc. or its licensors and is protected by copyright and trademark law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[#023D69] mb-2">
              Disclaimer of Warranties &amp; Limitation of Liability
            </h2>
            <p>
              This website is provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; To the fullest extent permitted by law, Tri-Valley Home Health Care, Inc. disclaims warranties regarding uninterrupted availability and shall not be liable for indirect, incidental, or consequential damages arising from website access.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[#023D69] mb-2">
              Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of the State of California, with exclusive jurisdiction in the state and federal courts located in California.
            </p>
          </section>

          <section className="bg-[#FFF9FC] border border-[#FBCFE8] rounded-2xl p-5">
            <h2 className="font-display text-lg font-bold text-[#023D69] mb-1">
              Contact Us
            </h2>
            <p className="text-sm">
              {SITE_INFO.name} · {SITE_INFO.address}
              <br />
              Phone: {SITE_INFO.phone} · Fax: {SITE_INFO.fax}
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
