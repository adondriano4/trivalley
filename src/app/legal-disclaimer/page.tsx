import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { SITE_INFO } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Legal Disclaimer",
  description:
    "Read the legal and medical disclaimer for Tri-Valley Home Health Care, Inc.",
};

export default function LegalDisclaimerPage() {
  return (
    <div className="bg-[#FFF9FC] min-h-screen py-12">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-3xl border border-[#FBCFE8] p-7 sm:p-11 shadow-xs">
        <div className="text-xs font-bold text-[#C2185B] uppercase tracking-wider mb-2">
          Notice &amp; Disclosures
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#023D69] mb-6">
          Legal &amp; Medical Disclaimer
        </h1>

        <div className="space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed">
          <p>
            The information provided on this website is for general informational purposes only. Tri-Valley Home Health Care, Inc. makes every effort to keep clinical service descriptions current, but materials on this site are not intended to serve as personalized medical, legal, or financial advice.
          </p>

          <div className="bg-[#FFF9FC] border-l-4 border-[#F0418C] rounded-r-2xl p-5">
            <h2 className="font-display text-lg font-bold text-[#023D69] mb-1.5">
              Medical Disclaimer
            </h2>
            <p className="text-sm">
              This website does not provide medical advice. Educational health materials are not a substitute for professional medical diagnosis or treatment. Always consult a qualified physician regarding any medical condition. If you are experiencing a medical emergency, call 911 immediately.
            </p>
          </div>

          <p>
            For full details, please review our{" "}
            <Link href="/terms-of-service" className="font-bold text-[#C2185B] underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="font-bold text-[#C2185B] underline">
              Privacy Policy
            </Link>
            . Questions? Call us at {SITE_INFO.phone} or fax {SITE_INFO.fax}.
          </p>
        </div>
      </article>
    </div>
  );
}
