import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { BLOG_POSTS } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Tri-Valley Home Health Blog",
  description:
    "Explore insights on CHAP accreditation, compassionate senior care, and quality home nursing from the Tri-Valley Clinical Team.",
};

export default function BlogIndexPage() {
  return (
    <div className="bg-[#FFF9FC] min-h-screen">
      <section className="bg-gradient-to-br from-[#FFF9FC] via-white to-[#FDF2F8] border-b border-[#FBCFE8] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#FBCFE8] text-[#C2185B] text-xs font-bold mb-3">
            <BookOpen className="w-4 h-4" />
            <span>Insights on Quality Home Care &amp; Nursing</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#023D69] tracking-tight mb-3">
            Tri-Valley Clinical Blog &amp; Updates
          </h1>
          <p className="text-base sm:text-lg text-slate-700">
            Stories, quality milestones, and family caregiving guidance from our Stockton home health nursing team.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl border border-[#FBCFE8] overflow-hidden shadow-xs hover:shadow-lg hover:border-[#F0418C] transition-all flex flex-col"
            >
              <img
                src={post.image}
                alt={post.imageAlt}
                className="w-full h-60 object-cover"
              />
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-[#C2185B] mb-2">
                    <span>{post.category}</span>
                    <span className="text-slate-500">{post.date}</span>
                  </div>
                  <h2 className="font-display text-xl font-extrabold text-[#023D69] mb-3 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    By {post.author}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#C2185B] hover:text-[#023D69]"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
