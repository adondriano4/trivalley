import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { ArrowRight, Award, Users } from "lucide-react";
import { TEAM_MEMBERS } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Our Dedicated Leadership Team",
  description:
    "Meet the clinical and administrative leaders behind Tri-Valley Home Health Care, Inc. Read full biographies, credentials, and nursing backgrounds.",
};

export default function OurTeamPage() {
  return (
    <div className="bg-[#FFF9FC] min-h-screen">
      <section className="bg-gradient-to-br from-[#FFF9FC] via-white to-[#FDF2F8] border-b border-[#FBCFE8] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#FBCFE8] text-[#C2185B] text-xs font-bold mb-3">
            <Users className="w-4 h-4" />
            <span>Our Dedicated Leadership Team</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#023D69] tracking-tight mb-4">
            Clinical &amp; Operational Leaders Guided by Compassion
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Every Tri-Valley leader brings deep healthcare expertise, regulatory rigor, and personal devotion to serving families across Northern California. Click &ldquo;View More&rdquo; to open each leader&rsquo;s dedicated page.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <article
              key={member.slug}
              className="bg-white rounded-3xl border border-[#FBCFE8] hover:border-[#F0418C] p-6 shadow-xs hover:shadow-[0_14px_30px_rgba(240,65,140,0.14)] transition-all flex flex-col justify-between text-center"
            >
              <div>
                <div className="w-44 h-44 rounded-full mx-auto mb-5 p-1.5 bg-gradient-to-tr from-[#F0418C] to-[#FFBFDF] shadow-lg">
                  <img
                    src={member.image}
                    alt={member.imageAlt}
                    className="w-full h-full rounded-full object-cover object-top bg-white"
                  />
                </div>
                <h2 className="font-display font-extrabold text-lg text-[#023D69] mb-1">
                  {member.name}
                </h2>
                <p className="text-xs font-bold text-[#C2185B] mb-3">
                  {member.role}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {member.experienceSummary}
                </p>
                <div className="flex flex-wrap justify-center gap-1.5 mb-5">
                  {member.credentials.slice(0, 2).map((cred) => (
                    <span
                      key={cred}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FFF9FC] border border-[#FCE7F3] text-[10px] font-bold text-[#023D69]"
                    >
                      <Award className="w-3 h-3 text-[#F0418C]" />
                      {cred}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={`/${member.slug}`}
                className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-full bg-[#F0418C] hover:bg-[#C2185B] text-white font-bold text-xs shadow-sm transition-colors"
              >
                <span>View More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
