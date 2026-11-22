import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  GraduationCap,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { TeamMember, TEAM_MEMBERS, SITE_INFO } from "@/data/site-data";

export default function TeamProfileView({ member }: { member: TeamMember }) {
  const currentIdx = TEAM_MEMBERS.findIndex((m) => m.slug === member.slug);
  const nextMember =
    TEAM_MEMBERS[(currentIdx + 1) % TEAM_MEMBERS.length];
  const prevMember =
    TEAM_MEMBERS[
      (currentIdx - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length
    ];

  return (
    <div className="bg-[#FFF9FC] min-h-screen py-10 sm:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Breadcrumb */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <Link
            href="/our-team"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#C2185B] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Leadership Team
          </Link>
          <Link
            href="/#team"
            className="text-xs font-semibold text-slate-600 hover:text-[#023D69]"
          >
            Homepage Team Overview
          </Link>
        </div>

        {/* Profile Card */}
        <article className="bg-white rounded-3xl border border-[#FBCFE8] shadow-[0_14px_40px_rgba(2,61,105,0.08)] overflow-hidden">
          <div className="bg-gradient-to-r from-[#023D69] via-[#0F3D6E] to-[#831843] px-6 sm:px-10 py-8 text-white">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full border-4 border-[#FFBFDF] bg-white overflow-hidden shadow-xl shrink-0">
                <img
                  src={member.image}
                  alt={member.imageAlt}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-[#FFBFDF]/40 text-[#FFBFDF] text-xs font-bold mb-2">
                  <img
                    src="/images/trivalley-icon.png"
                    alt=""
                    className="h-3.5 w-auto bg-white rounded-full p-0.5"
                  />
                  <span>Tri-Valley Leadership</span>
                </div>
                <h1 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-1.5">
                  {member.name}
                </h1>
                <p className="text-base sm:text-lg font-semibold text-[#FFBFDF] mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-slate-200 max-w-2xl">
                  {member.experienceSummary}
                </p>
              </div>
            </div>
          </div>

          {/* Credentials Strip */}
          <div className="bg-[#FFF9FC] border-b border-[#FCE7F3] px-6 sm:px-10 py-4 flex flex-wrap items-center gap-2.5">
            {member.credentials.map((cred) => (
              <span
                key={cred}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#FBCFE8] text-xs font-bold text-[#023D69]"
              >
                <Award className="w-3.5 h-3.5 text-[#F0418C]" />
                {cred}
              </span>
            ))}
            {member.education && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#FBCFE8] text-xs font-bold text-[#9D174D]">
                <GraduationCap className="w-3.5 h-3.5 text-[#C2185B]" />
                {member.education}
              </span>
            )}
          </div>

          {/* Full Bio */}
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-4 text-slate-700 leading-relaxed text-base">
              <h2 className="font-display text-xl font-extrabold text-[#023D69] mb-2">
                Biography &amp; Clinical Commitment
              </h2>
              {member.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <aside className="lg:col-span-4 space-y-4">
              <div className="rounded-2xl bg-[#FFF9FC] border border-[#FBCFE8] p-5">
                <h3 className="font-display font-extrabold text-sm text-[#023D69] mb-2">
                  Agency Standards
                </h3>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F0418C] shrink-0" />
                    <span>Licensed by CA Dept. of Health Services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F0418C] shrink-0" />
                    <span>CHAP Accredited Standards of Excellence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F0418C] shrink-0" />
                    <span>CMS Medicare &amp; Medi-Cal Certified</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-[#023D69] text-white p-5">
                <div className="text-xs font-bold text-[#FFBFDF] uppercase tracking-wider mb-1">
                  Speak With Our Team
                </div>
                <p className="text-sm text-slate-200 mb-4">
                  Have questions about home health eligibility or care coordination?
                </p>
                <a
                  href={SITE_INFO.phoneHref}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#F0418C] hover:bg-[#C2185B] text-white font-bold text-sm py-2.5 transition-colors mb-2"
                >
                  <Phone className="w-4 h-4" />
                  {SITE_INFO.phone}
                </a>
                <Link
                  href="/contact-us"
                  className="w-full inline-flex items-center justify-center rounded-full bg-white text-[#023D69] font-bold text-xs py-2 hover:bg-[#FFF9FC] transition-colors"
                >
                  Contact Stockton Office
                </Link>
              </div>
            </aside>
          </div>
        </article>

        {/* Next / Previous Team Navigation */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href={`/${prevMember.slug}`}
            className="flex items-center gap-3 bg-white rounded-2xl border border-[#FBCFE8] p-4 hover:border-[#F0418C] transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 text-[#C2185B] shrink-0 group-hover:-translate-x-0.5 transition-transform" />
            <img
              src={prevMember.image}
              alt={prevMember.name}
              className="w-11 h-11 rounded-full object-cover object-top border border-[#F9A8D4]"
            />
            <div>
              <div className="text-[11px] font-bold text-slate-500 uppercase">
                Previous Leader
              </div>
              <div className="font-display font-bold text-sm text-[#023D69]">
                {prevMember.name}
              </div>
            </div>
          </Link>

          <Link
            href={`/${nextMember.slug}`}
            className="flex items-center justify-end gap-3 bg-white rounded-2xl border border-[#FBCFE8] p-4 hover:border-[#F0418C] transition-colors group text-right"
          >
            <div>
              <div className="text-[11px] font-bold text-slate-500 uppercase">
                Next Leader
              </div>
              <div className="font-display font-bold text-sm text-[#023D69]">
                {nextMember.name}
              </div>
            </div>
            <img
              src={nextMember.image}
              alt={nextMember.name}
              className="w-11 h-11 rounded-full object-cover object-top border border-[#F9A8D4]"
            />
            <ArrowRight className="w-5 h-5 text-[#C2185B] shrink-0 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
