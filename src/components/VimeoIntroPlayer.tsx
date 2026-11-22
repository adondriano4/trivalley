"use client";

import React, { useEffect, useRef, useState } from "react";
import { Play, ExternalLink, Clock, HeartHandshake, Volume2, VolumeX } from "lucide-react";
import { SITE_INFO } from "@/data/site-data";

export default function VimeoIntroPlayer() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Autoplay when user scrolls into the video area
  useEffect(() => {
    const el = containerRef.current;
    if (!el || isPlaying) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsPlaying(true);
            setIsMuted(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.3, rootMargin: "120px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isPlaying]);

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    const win = iframeRef.current?.contentWindow;
    if (win) {
      win.postMessage(
        JSON.stringify({ method: "setMuted", value: nextMuted }),
        "https://player.vimeo.com"
      );
      if (!nextMuted) {
        win.postMessage(
          JSON.stringify({ method: "setVolume", value: 1 }),
          "https://player.vimeo.com"
        );
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative rounded-3xl overflow-hidden bg-[#012B4B] border-2 border-[#FBCFE8] shadow-[0_18px_45px_rgba(2,61,105,0.16)]"
    >
      {/* Top Film Strip Bar */}
      <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 bg-[#023D69] border-b border-white/10 text-white text-xs">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white p-0.5">
            <img
              src="/images/logo-full.png"
              alt="Tri-Valley Logo"
              className="h-5 w-auto object-contain"
            />
          </span>
          <span className="font-display font-bold">
            Tri-Valley Home Health Care — Agency Intro
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          {isPlaying && (
            <button
              type="button"
              onClick={toggleMute}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F0418C] hover:bg-[#C2185B] text-white font-bold text-[11px] transition-colors cursor-pointer"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span>Unmute</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Sound On</span>
                </>
              )}
            </button>
          )}
          <span className="hidden sm:inline-flex items-center gap-1 text-[#FFBFDF] font-semibold">
            <Clock className="w-3.5 h-3.5" />
            0:48
          </span>
          <a
            href={SITE_INFO.vimeoIntroUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-slate-200 hover:text-[#FFBFDF] font-semibold transition-colors"
          >
            <span>Vimeo</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* 16:9 Video Stage */}
      <div className="relative aspect-video w-full bg-slate-900">
        {isPlaying ? (
          <>
            <iframe
              ref={iframeRef}
              src={`https://player.vimeo.com/video/${SITE_INFO.vimeoIntroId}?autoplay=1&muted=1&playsinline=1&loop=1&api=1&title=0&byline=0&portrait=0`}
              title="Tri-Valley Home Health Care Introduction Video"
              className="w-full h-full border-0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            {isMuted && (
              <button
                type="button"
                onClick={toggleMute}
                className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#023D69]/90 hover:bg-[#F0418C] text-white border border-white/25 text-xs font-bold shadow-lg backdrop-blur-sm transition-colors cursor-pointer"
              >
                <VolumeX className="w-3.5 h-3.5 text-[#FFBFDF]" />
                <span>Playing Muted · Tap for Sound</span>
              </button>
            )}
          </>
        ) : (
          <button
            type="button"
            onClick={() => {
              setIsPlaying(true);
              setIsMuted(false);
            }}
            className="group relative w-full h-full block text-left cursor-pointer"
            aria-label="Play Tri-Valley Home Health Care Intro Video"
          >
            <img
              src="/images/vimeo-intro-thumb.jpg"
              alt="Tri-Valley Home Health Care introduction video preview"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012B4B]/80 via-[#023D69]/30 to-transparent transition-opacity" />

            {/* Center Play Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F0418C] group-hover:bg-[#C2185B] text-white flex items-center justify-center shadow-[0_0_0_8px_rgba(255,191,223,0.38)] transition-all duration-300 group-hover:scale-110">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1" />
              </div>
              <span className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 text-[#023D69] font-display font-extrabold text-xs sm:text-sm shadow-md">
                Watch Agency Intro · 0:48
              </span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-3 left-4 right-4 hidden sm:flex items-center justify-between text-white text-xs">
              <span className="inline-flex items-center gap-1.5 bg-[#023D69]/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/15">
                <HeartHandshake className="w-3.5 h-3.5 text-[#FFBFDF]" />
                Compassionate Nursing, Therapy &amp; Care at Home
              </span>
              <span className="bg-black/45 px-2.5 py-1 rounded-full font-semibold">
                Auto-plays in view
              </span>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
