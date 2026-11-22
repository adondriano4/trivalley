import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { BLOG_POSTS } from "@/data/site-data";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="bg-[#FFF9FC] min-h-screen py-12">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#C2185B] hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Articles
        </Link>

        <div className="bg-white rounded-3xl border border-[#FBCFE8] overflow-hidden shadow-sm">
          <img
            src={post.image}
            alt={post.imageAlt}
            className="w-full h-72 sm:h-96 object-cover"
          />
          <div className="p-7 sm:p-10">
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#C2185B] mb-3">
              <span className="px-3 py-1 rounded-full bg-[#FFF9FC] border border-[#FBCFE8]">
                {post.category}
              </span>
              <span className="text-slate-500">{post.date}</span>
              <span className="text-slate-500">· By {post.author}</span>
            </div>

            <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-[#023D69] leading-tight mb-6">
              {post.title}
            </h1>

            {post.badges && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.badges.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF9FC] border border-[#FBCFE8] text-xs font-bold text-[#023D69]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F0418C]" />
                    {b}
                  </span>
                ))}
              </div>
            )}

            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              {post.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
