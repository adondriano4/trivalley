"use client";

import React, { useState } from "react";
import { Briefcase, CheckCircle2, MapPin, Upload, Send } from "lucide-react";
import { CAREER_POSITIONS, SITE_INFO } from "@/data/site-data";

export default function CareerPage() {
  const [selectedRole, setSelectedRole] = useState(CAREER_POSITIONS[0].title);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fileName, setFileName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FFF9FC] min-h-screen">
      <section className="bg-gradient-to-br from-[#FFF9FC] via-white to-[#FDF2F8] border-b border-[#FBCFE8] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#FBCFE8] text-[#C2185B] text-xs font-bold mb-3">
            <Briefcase className="w-4 h-4" />
            <span>Careers at Tri-Valley · Now Hiring Across 4 Counties</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#023D69] tracking-tight mb-4">
            Join Our Compassionate Clinical Team
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Work alongside supportive nursing supervisors and multidisciplinary clinicians serving families in Alameda, San Joaquin, Stanislaus, and Sacramento counties.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Open Positions */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-display text-2xl font-extrabold text-[#023D69] mb-4">
              Open Clinical &amp; Care Positions
            </h2>
            {CAREER_POSITIONS.map((pos) => (
              <div
                key={pos.title}
                className="bg-white rounded-2xl border border-[#FBCFE8] p-5 shadow-2xs hover:border-[#F0418C] transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="font-display font-extrabold text-lg text-[#023D69]">
                    {pos.title}
                  </h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#FFF9FC] border border-[#F9A8D4] text-[11px] font-bold text-[#9D174D] w-fit">
                    {pos.type}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-3">{pos.summary}</p>
                <div className="flex items-center justify-between gap-3 pt-2 border-t border-slate-100">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-[#F0418C]" />
                    {pos.territory}
                  </span>
                  <a
                    href="#career-application"
                    onClick={() => setSelectedRole(pos.title)}
                    className="text-xs font-extrabold text-[#C2185B] hover:underline"
                  >
                    Apply for this role &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Application Form */}
          <div id="career-application" className="lg:col-span-5">
            {submitted ? (
              <div className="bg-white rounded-3xl border border-[#FBCFE8] p-8 text-center shadow-sm">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                <h3 className="font-display text-xl font-extrabold text-[#023D69] mb-2">
                  Application Received!
                </h3>
                <p className="text-sm text-slate-600 mb-5">
                  Thank you, {firstName}. Our hiring coordinator will review your interest in{" "}
                  <strong>{selectedRole}</strong>. Questions? Call{" "}
                  <a href={SITE_INFO.phoneHref} className="font-bold text-[#C2185B]">
                    {SITE_INFO.phone}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded-full border border-[#F9A8D4] text-sm font-bold text-[#023D69] cursor-pointer"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl border border-[#FBCFE8] p-6 sm:p-7 shadow-[0_10px_30px_rgba(2,61,105,0.08)] space-y-4"
              >
                <h2 className="font-display text-xl font-extrabold text-[#023D69]">
                  Apply Now
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="c-first" className="block text-xs font-bold text-[#023D69] mb-1">
                      First Name *
                    </label>
                    <input
                      id="c-first"
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-[#F0418C] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-last" className="block text-xs font-bold text-[#023D69] mb-1">
                      Last Name *
                    </label>
                    <input
                      id="c-last"
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-[#F0418C] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="c-email" className="block text-xs font-bold text-[#023D69] mb-1">
                      Email *
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-[#F0418C] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-phone" className="block text-xs font-bold text-[#023D69] mb-1">
                      Phone No. *
                    </label>
                    <input
                      id="c-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-[#F0418C] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="c-pos" className="block text-xs font-bold text-[#023D69] mb-1">
                    Position Applied *
                  </label>
                  <select
                    id="c-pos"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm bg-white focus:border-[#F0418C] focus:outline-none"
                  >
                    {CAREER_POSITIONS.map((p) => (
                      <option key={p.title} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="c-resume" className="block text-xs font-bold text-[#023D69] mb-1">
                    Resume (PDF / DOCX)
                  </label>
                  <label
                    htmlFor="c-resume"
                    className="flex items-center justify-center gap-2 border-2 border-dashed border-[#F9A8D4] bg-[#FFF9FC] rounded-xl p-3 text-xs font-semibold text-[#9D174D] cursor-pointer hover:bg-[#FDF2F8]"
                  >
                    <Upload className="w-4 h-4" />
                    <span>{fileName || "Choose resume file to attach"}</span>
                  </label>
                  <input
                    id="c-resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="sr-only"
                    onChange={(e) =>
                      setFileName(e.target.files?.[0]?.name || "")
                    }
                  />
                </div>

                <div>
                  <label htmlFor="c-msg" className="block text-xs font-bold text-[#023D69] mb-1">
                    Message / Licensure Notes
                  </label>
                  <textarea
                    id="c-msg"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your CA license type, availability, or preferred counties..."
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-[#F0418C] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#F0418C] hover:bg-[#C2185B] text-white font-bold text-sm py-3 shadow-md transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
