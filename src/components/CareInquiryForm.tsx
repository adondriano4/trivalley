"use client";

import React, { useState } from "react";
import { Lock, CheckCircle2, Send, AlertCircle } from "lucide-react";
import { SERVICES, SITE_INFO } from "@/data/site-data";

interface CareInquiryFormProps {
  compact?: boolean;
  heading?: string;
  fullHeight?: boolean;
}

export default function CareInquiryForm({
  compact = false,
  heading = "Request Care or Schedule an Assessment",
  fullHeight = false,
}: CareInquiryFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Skilled Nursing Care");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [deliveryNote, setDeliveryNote] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, service, message }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Unable to send message right now.");
      } else {
        setDeliveryNote(data.note || "");
        setSubmitted(true);
      }
    } catch {
      setErrorMsg("Network error. Please call (209) 957-0708 for immediate support.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        className={`bg-white rounded-2xl border border-[#FBCFE8] p-6 sm:p-8 shadow-sm text-center flex flex-col items-center justify-center ${
          fullHeight ? "h-full" : ""
        }`}
      >
        <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-3">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="font-display font-extrabold text-xl text-[#023D69] mb-2">
          Thank You, {name}
        </h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto mb-4">
          {deliveryNote ||
            "Your care inquiry has been submitted to our Stockton care coordination team."}
          {" "}For immediate 24/7 clinical assistance, please call{" "}
          <a href={SITE_INFO.phoneHref} className="font-bold text-[#C2185B] underline">
            {SITE_INFO.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setName("");
            setPhone("");
            setEmail("");
            setMessage("");
          }}
          className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-[#F9A8D4] text-sm font-bold text-[#023D69] hover:bg-[#FFF9FC] cursor-pointer"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-2xl border border-[#FBCFE8] p-5 sm:p-6 shadow-[0_6px_24px_rgba(2,61,105,0.06)] ${
        fullHeight ? "h-full flex flex-col justify-between" : ""
      }`}
    >
      <div>
        <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#023D69] mb-1">
          {heading}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mb-4">
          Our Stockton care team responds promptly during office hours, with 24/7 on-call nursing support.
        </p>

        {errorMsg && (
          <div className="mb-4 flex items-center gap-2 rounded-xl bg-rose-50 border border-rose-200 px-3.5 py-2.5 text-xs font-semibold text-rose-800">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
          <div>
            <label
              htmlFor="inquiry-name"
              className="block text-xs font-bold text-[#023D69] mb-1"
            >
              Full Name *
            </label>
            <input
              id="inquiry-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#F0418C] focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="inquiry-phone"
              className="block text-xs font-bold text-[#023D69] mb-1"
            >
              Phone Number
            </label>
            <input
              id="inquiry-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(209) 555-0123"
              className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#F0418C] focus:outline-none"
            />
          </div>
        </div>

        <div className={`grid grid-cols-1 ${compact ? "" : "sm:grid-cols-2"} gap-3.5 mb-3.5`}>
          <div>
            <label
              htmlFor="inquiry-email"
              className="block text-xs font-bold text-[#023D69] mb-1"
            >
              Email Address *
            </label>
            <input
              id="inquiry-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#F0418C] focus:outline-none"
            />
          </div>
          {!compact && (
            <div>
              <label
                htmlFor="inquiry-service"
                className="block text-xs font-bold text-[#023D69] mb-1"
              >
                Service Needed
              </label>
              <select
                id="inquiry-service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 bg-white focus:border-[#F0418C] focus:outline-none"
              >
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="General Care Inquiry">General Care Inquiry</option>
                <option value="Physician Referral">Physician Referral</option>
              </select>
            </div>
          )}
        </div>
      </div>

      <div className={fullHeight ? "flex-1 flex flex-col" : ""}>
        <div className={`mb-3.5 ${fullHeight ? "flex-1 flex flex-col" : ""}`}>
          <label
            htmlFor="inquiry-message"
            className="block text-xs font-bold text-[#023D69] mb-1"
          >
            How Can We Help Your Loved One? *
          </label>
          <textarea
            id="inquiry-message"
            required
            rows={compact ? 5 : 4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share preferred callback time, city/county, or general care questions..."
            className={`w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#F0418C] focus:outline-none ${
              fullHeight ? "flex-1 min-h-[140px]" : ""
            }`}
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
          <p className="inline-flex items-center gap-1.5 text-xs text-slate-600 bg-[#FFF9FC] border border-[#FCE7F3] rounded-lg px-2.5 py-1.5">
            <Lock className="w-3.5 h-3.5 text-[#C2185B] shrink-0" />
            <span>HIPAA Notice: Please do not include sensitive medical records in web forms.</span>
          </p>

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F0418C] hover:bg-[#C2185B] disabled:opacity-60 text-white font-bold text-sm px-6 py-2.5 shadow-[0_6px_18px_rgba(240,65,140,0.28)] transition-all shrink-0 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>{submitting ? "Sending..." : "Send Inquiry"}</span>
          </button>
        </div>
      </div>
    </form>
  );
}
