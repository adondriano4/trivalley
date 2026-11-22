import type { Metadata } from "next";
import React from "react";
import { SITE_INFO } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Review how Tri-Valley Home Health Care, Inc. collects, uses, and safeguards personal and health-related information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FFF9FC] min-h-screen py-12">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-3xl border border-[#FBCFE8] p-7 sm:p-11 shadow-xs">
        <div className="text-xs font-bold text-[#C2185B] uppercase tracking-wider mb-2">
          Effective Date: November 28, 2024
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#023D69] mb-6">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
          <p>
            Tri-Valley Home Health Care, Inc. (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, interact with our services, or provide personal data to us.
          </p>

          <section>
            <h2 className="font-display text-xl font-bold text-[#023D69] mb-2">
              Information We Collect
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Personal Information:</strong> Identifiable data such as your name, address, phone number, email address, job title, or any other information you voluntarily provide through forms or applications.
              </li>
              <li>
                <strong>Health Information:</strong> For clinical care delivery, we handle health-related information strictly in compliance with HIPAA (Health Insurance Portability and Accountability Act) regulations.
              </li>
              <li>
                <strong>Technical Information:</strong> Standard device and browser data collected to keep our website accessible and secure.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[#023D69] mb-2">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>To respond to inquiries, coordinate home health services, or process job applications.</li>
              <li>To improve website accessibility, relevance, and user experience.</li>
              <li>With your consent, to share newsletters or community health updates.</li>
              <li>To comply with healthcare regulations and legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[#023D69] mb-2">
              Your Rights &amp; Children&rsquo;s Privacy
            </h2>
            <p className="mb-2">
              You have the right to request access to, correction of, or deletion of personal information we hold about you, as well as to opt out of marketing communications at any time.
            </p>
            <p>
              Our website and services are not directed to individuals under age 18 without verifiable parental or legal guardian consent.
            </p>
          </section>

          <section className="bg-[#FFF9FC] border border-[#FBCFE8] rounded-2xl p-5">
            <h2 className="font-display text-lg font-bold text-[#023D69] mb-1">
              Contact Us Regarding Privacy
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
