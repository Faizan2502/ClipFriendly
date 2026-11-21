import { useId, useState } from 'react';
import {
  Link2,
  Crop,
  Calendar,
  Send,
  Check,
  Clapperboard,
  Play,
} from 'lucide-react';

/**
 * Easy-to-replace media asset paths for Section 4 video previews.
 * Swap these URLs anytime with final product thumbnails or creator footage.
 */
const MEDIA_ASSETS = {
  youtubePreview: '/src/assets/images/creator_youtube_16_9_1795201833465.jpg',
  instagramPreview: '/src/assets/images/creator_instagram_9_16_1795201835523.jpg',
} as const;

function FourPointDoodle({ className }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`pointer-events-none ${className ?? ''}`}
    >
      <path
        d="M12 2.5C12.7 7.6 16.4 11.3 21.5 12C16.4 12.7 12.7 16.4 12 21.5C11.3 16.4 7.6 12.7 2.5 12C7.6 11.3 11.3 7.6 12 2.5Z"
        stroke="#646C7E"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BurstDoodle({
  color = '#0B0F1A',
  className,
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`pointer-events-none ${className ?? ''}`}
    >
      <path d="M6 12L9.5 3" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
      <path d="M13.5 16.5L23 8.5" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
      <path d="M17.5 24L29 21.5" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  );
}

function YouTubeMark({ size = 28 }: { size?: number }) {
  const height = Math.round(size * 0.72);
  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 36 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="36" height="26" rx="7" fill="#FF1F1F" />
      <path d="M14.5 8L23.5 13L14.5 18V8Z" fill="#FFFFFF" />
    </svg>
  );
}

function InstagramMark({ size = 28 }: { size?: number }) {
  const gradientId = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="4"
          y1="28"
          x2="28"
          y2="4"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFAA45" />
          <stop offset="0.48" stopColor="#F53888" />
          <stop offset="1" stopColor="#8F4DFF" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill={`url(#${gradientId})`} />
      <rect
        x="7"
        y="7"
        width="18"
        height="18"
        rx="5.5"
        stroke="#FFFFFF"
        strokeWidth="2.2"
      />
      <circle cx="16" cy="16" r="4.2" stroke="#FFFFFF" strokeWidth="2.2" />
      <circle cx="21.2" cy="10.8" r="1.2" fill="#FFFFFF" />
    </svg>
  );
}

export function PublishingSection() {
  const [connectedAccounts, setConnectedAccounts] = useState({
    youtube: true,
    instagram: true,
  });
  const [activePreview, setActivePreview] = useState<'youtube' | 'instagram'>('instagram');
  const [publishMode, setPublishMode] = useState<'schedule' | 'publish'>('publish');

  const toggleAccount = (platform: 'youtube' | 'instagram') => {
    setConnectedAccounts((prev) => ({ ...prev, [platform]: !prev[platform] }));
  };

  const bothConnected = connectedAccounts.youtube && connectedAccounts.instagram;

  return (
    <section
      id="youtube-instagram"
      aria-labelledby="publishing-section-headline"
      className="relative w-full overflow-hidden bg-[#FAF9F5] py-20 text-[#0B0F1A] sm:py-24 lg:py-28"
    >
      {/* Subtle warm editorial surface texture & organic colour accents at viewport edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-[42%] h-64 w-56 rounded-full bg-[#D5FF4F] opacity-85 blur-[1px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-72 rotate-[-16deg] rounded-[90px] bg-[#C8A6FF]/75"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_45%_at_50%_0%,rgba(255,255,255,0.85),transparent_70%)]"
      />

      <div className="relative z-10 mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10">
        {/* Decorative Floating Editorial Doodles & Social Tiles (Desktop) */}
        <div className="pointer-events-none hidden lg:block" aria-hidden="true">
          {/* Left Clapperboard Doodle + Stars */}
          <FourPointDoodle className="absolute left-[14%] top-6 h-5 w-5" />
          <div className="absolute left-[6%] top-16 -rotate-[16deg] rounded-[18px] bg-white/80 p-3 shadow-[0_10px_28px_rgba(11,15,26,0.06)] ring-1 ring-black/[0.06]">
            <Clapperboard className="h-11 w-11 stroke-[2.2] text-[#0B0F1A]" />
          </div>
          <FourPointDoodle className="absolute left-[4.5%] top-44 h-6 w-6" />

          {/* Right Floating YouTube & Instagram Tiles + Burst */}
          <BurstDoodle color="#0B0F1A" className="absolute right-[6.5%] top-6 h-8 w-8" />
          <div className="absolute right-[10.5%] top-12 rotate-[10deg] rounded-[18px] border border-black/10 bg-white p-3 shadow-[0_14px_34px_rgba(11,15,26,0.09)]">
            <YouTubeMark size={38} />
          </div>
          <div className="absolute right-[4.5%] top-28 -rotate-[8deg] rounded-[20px] border border-[#A978FF]/35 bg-white p-3 shadow-[0_16px_36px_rgba(169,120,255,0.18)]">
            <InstagramMark size={40} />
          </div>
          <FourPointDoodle className="absolute right-[3%] top-52 h-5 w-5" />
        </div>

        {/* Centered Editorial Header */}
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
          {/* Neon-Lime Eyebrow Pill with Burst */}
          <div className="relative mb-6 inline-flex items-center">
            <span className="inline-flex items-center rounded-full border border-[#0B0F1A]/10 bg-[#D5FF4F] px-5 py-1.5 font-display text-[12px] font-bold uppercase tracking-[0.13em] text-[#0B0F1A] shadow-[0_6px_20px_rgba(213,255,79,0.4)] sm:text-[13px]">
              YOUTUBE AND INSTAGRAM
            </span>
            <BurstDoodle
              color="#0B0F1A"
              className="absolute -right-7 -top-3.5 h-6 w-6"
            />
          </div>

          {/* Bold Black Display Headline */}
          <h2
            id="publishing-section-headline"
            className="font-display text-[clamp(2.25rem,5vw,4.25rem)] font-bold leading-[1.06] tracking-[-0.035em] text-[#0B0F1A]"
          >
            <span className="block">Each clip, ready for</span>
            <span className="mt-1 block">
              <span className="relative inline-block">
                <span className="relative z-10">where</span>
                {/* Playful neon-lime highlighter brushstroke under "where" */}
                <svg
                  viewBox="0 0 210 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-2 left-0 w-[108%]"
                >
                  <path
                    d="M4 13C56 7.5 142 6.5 204 9.5"
                    stroke="#D5FF4F"
                    strokeWidth="7.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M36 18.5C94 14 148 14 196 16.5"
                    stroke="#D5FF4F"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              it’s going.
            </span>
          </h2>

          {/* Intro Paragraph */}
          <p className="mt-7 max-w-[680px] text-[16px] leading-[1.68] text-[#2F3544] sm:mt-8 sm:text-[17.5px]">
            Posting a clip to YouTube and Instagram usually means exporting it twice,
            resizing it twice, and writing the caption twice. Connect both accounts and
            ClipVerse prepares each clip for each destination. You choose where it goes
            and when.
          </p>
        </div>

        {/* Three Equally Sized Distinctly Styled Feature Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {/* CARD 01 — Dark Black Card: Connect in a minute */}
          <article className="relative flex flex-col justify-between overflow-hidden rounded-[28px] bg-[#12141E] p-7 text-white shadow-[0_20px_50px_rgba(11,15,26,0.16)] sm:p-8">
            {/* Soft purple decorative arc bottom-left inside card matching screenshot */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -left-14 h-40 w-44 rounded-full bg-[#684699]/65"
            />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.04] px-3.5 py-1 font-display text-[13px] font-medium text-white">
                <Link2 className="h-3.5 w-3.5 text-[#D5FF4F]" aria-hidden="true" />
                <span>Connect</span>
              </span>

              <h3 className="mt-6 font-display text-[28px] font-bold leading-[1.12] tracking-[-0.025em] text-white xl:text-[31px]">
                Connect in
                <br />a minute
              </h3>

              <p className="mt-4 max-w-[270px] text-[15px] leading-[1.6] text-[#B7BECD]">
                Link your YouTube and Instagram accounts once. You can disconnect
                whenever you like.
              </p>
            </div>

            {/* Account Visuals + Connection Indicators + Lime Accents */}
            <div className="relative z-10 mt-8 flex items-end justify-end pt-2">
              <div className="relative flex items-center">
                <BurstDoodle
                  color="#D5FF4F"
                  className="absolute -right-2 -top-7 h-6 w-6"
                />

                {/* YouTube Account Tile */}
                <button
                  type="button"
                  onClick={() => toggleAccount('youtube')}
                  aria-label={
                    connectedAccounts.youtube
                      ? 'YouTube connected. Click to disconnect.'
                      : 'YouTube disconnected. Click to connect.'
                  }
                  aria-pressed={connectedAccounts.youtube}
                  className={`relative z-10 -mr-2 -rotate-[8deg] flex h-[78px] w-[78px] cursor-pointer items-center justify-center rounded-[20px] bg-white shadow-[0_14px_30px_rgba(0,0,0,0.45)] transition-all duration-200 hover:-translate-y-1 ${
                    connectedAccounts.youtube ? 'opacity-100' : 'opacity-45 grayscale'
                  }`}
                >
                  <YouTubeMark size={44} />
                </button>

                {/* Instagram Account Tile */}
                <button
                  type="button"
                  onClick={() => toggleAccount('instagram')}
                  aria-label={
                    connectedAccounts.instagram
                      ? 'Instagram connected. Click to disconnect.'
                      : 'Instagram disconnected. Click to connect.'
                  }
                  aria-pressed={connectedAccounts.instagram}
                  className={`relative z-20 rotate-[7deg] flex h-[78px] w-[78px] cursor-pointer items-center justify-center rounded-[20px] bg-white shadow-[0_14px_30px_rgba(0,0,0,0.45)] transition-all duration-200 hover:-translate-y-1 ${
                    connectedAccounts.instagram ? 'opacity-100' : 'opacity-45 grayscale'
                  }`}
                >
                  <InstagramMark size={44} />
                </button>

                {/* Neon-Lime Connection Check Indicator */}
                <span
                  aria-label={bothConnected ? 'Both accounts connected' : 'Connection updated'}
                  className={`absolute -bottom-2 -right-2 z-30 inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border-[2.5px] border-[#12141E] shadow-md transition-colors ${
                    bothConnected
                      ? 'bg-[#D5FF4F] text-[#0B0F1A]'
                      : 'bg-[#283044] text-white'
                  }`}
                >
                  <Check className="h-4 w-4 stroke-[3.2]" aria-hidden="true" />
                </span>
              </div>
            </div>
          </article>

          {/* CARD 02 — Crisp Light-Grey Card: Right format, right place (Real <img> Previews) */}
          <article className="relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-black/[0.06] bg-[#EFF0F5] p-7 text-[#0B0F1A] shadow-[0_20px_50px_rgba(11,15,26,0.06)] sm:p-8">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#0B0F1A]/75 bg-white/75 px-3.5 py-1 font-display text-[13px] font-semibold text-[#0B0F1A]">
                <Crop className="h-3.5 w-3.5 stroke-[2.2]" aria-hidden="true" />
                <span>Format</span>
              </span>

              <h3 className="mt-6 font-display text-[28px] font-bold leading-[1.12] tracking-[-0.025em] text-[#0B0F1A] xl:text-[31px]">
                Right format,
                <br />
                right place
              </h3>

              <p className="mt-4 text-[15px] leading-[1.6] text-[#353B48]">
                Pick the destination for each clip and get the format and captions
                ready for it.
              </p>
            </div>

            {/* Real <img> Video Previews: YouTube 16:9 Horizontal + Instagram 9:16 Vertical */}
            <div className="relative z-10 mt-7 flex items-end justify-between gap-3 pt-2">
              <BurstDoodle
                color="#0B0F1A"
                className="absolute -top-4 right-1 h-6 w-6"
              />

              {/* YouTube Horizontal 16:9 Real Image Preview */}
              <button
                type="button"
                onClick={() => setActivePreview('youtube')}
                aria-pressed={activePreview === 'youtube'}
                className={`group relative flex-1 -rotate-[2deg] cursor-pointer overflow-hidden rounded-[16px] border-2 bg-[#10131D] text-left shadow-[0_14px_30px_rgba(11,15,26,0.18)] transition-all duration-200 hover:-translate-y-1 ${
                  activePreview === 'youtube'
                    ? 'z-20 border-[#0B0F1A] ring-2 ring-[#D5FF4F]'
                    : 'z-10 border-white'
                }`}
              >
                <div className="relative aspect-video w-full overflow-hidden bg-[#151926]">
                  <img
                    src={MEDIA_ASSETS.youtubePreview}
                    alt="YouTube 16:9 horizontal clip preview of a podcast creator"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Scrim for badge legibility */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/75 to-transparent"
                  />
                  <div className="absolute left-2 top-2 flex items-center gap-1.5 rounded-md bg-black/65 px-1.5 py-0.5 backdrop-blur-sm">
                    <YouTubeMark size={18} />
                    <span className="font-mono text-[10px] font-bold text-white">
                      16:9
                    </span>
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 flex items-center gap-1.5 bg-gradient-to-t from-black/80 to-transparent px-2 pb-1.5 pt-4"
                  >
                    <Play className="h-2.5 w-2.5 fill-white text-white" />
                    <span className="h-[2.5px] flex-1 rounded-full bg-white/30">
                      <span className="block h-full w-1/2 rounded-full bg-[#D5FF4F]" />
                    </span>
                  </div>
                </div>
              </button>

              {/* Instagram Vertical 9:16 Real Image Preview */}
              <button
                type="button"
                onClick={() => setActivePreview('instagram')}
                aria-pressed={activePreview === 'instagram'}
                className={`group relative w-[104px] shrink-0 rotate-[3.5deg] cursor-pointer overflow-hidden rounded-[18px] border-2 bg-[#10131D] text-left shadow-[0_16px_34px_rgba(11,15,26,0.22)] transition-all duration-200 hover:-translate-y-1 sm:w-[112px] ${
                  activePreview === 'instagram'
                    ? 'z-20 border-[#A978FF] ring-2 ring-[#A978FF]/45'
                    : 'z-10 border-white'
                }`}
              >
                <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#151926]">
                  <img
                    src={MEDIA_ASSETS.instagramPreview}
                    alt="Instagram 9:16 vertical reel preview of a podcast creator"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-11 bg-gradient-to-b from-black/75 to-transparent"
                  />
                  <div className="absolute left-2 top-2 flex items-center gap-1.5 rounded-md bg-black/65 px-1.5 py-0.5 backdrop-blur-sm">
                    <InstagramMark size={16} />
                    <span className="font-mono text-[10px] font-bold text-white">
                      9:16
                    </span>
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-2 pb-2 pt-5 text-center"
                  >
                    <span className="inline-block rounded bg-[#D5FF4F] px-1.5 py-0.5 font-display text-[9px] font-bold leading-none text-[#0B0F1A]">
                      Auto-captioned
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </article>

          {/* CARD 03 — Neon-Lime Card: Nothing posts without you */}
          <article className="relative flex flex-col justify-between overflow-hidden rounded-[28px] bg-[#DDFD5A] p-7 text-[#0B0F1A] shadow-[0_20px_50px_rgba(213,255,79,0.28)] md:col-span-2 md:mx-auto md:w-full md:max-w-[540px] lg:col-span-1 lg:max-w-none sm:p-8">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#0B0F1A]/80 bg-transparent px-3.5 py-1 font-display text-[13px] font-semibold text-[#0B0F1A]">
                <Calendar className="h-3.5 w-3.5 stroke-[2.2]" aria-hidden="true" />
                <span>Publish</span>
              </span>

              <h3 className="mt-6 font-display text-[28px] font-bold leading-[1.12] tracking-[-0.025em] text-[#0B0F1A] xl:text-[31px]">
                Nothing posts
                <br />
                without you
              </h3>

              <p className="mt-4 text-[15px] leading-[1.6] text-[#1A1F2B]">
                Approve each clip, then publish now or schedule it. Your accounts,
                your call.
              </p>
            </div>

            {/* Interactive Schedule / Publish Interface Preview Pill */}
            <div className="relative z-10 mt-8 pt-3">
              <BurstDoodle
                color="#0B0F1A"
                className="absolute -right-1 -top-5 h-6 w-6"
              />

              <div
                role="tablist"
                aria-label="Publishing action mode"
                className="relative flex w-full items-center gap-1.5 rounded-full bg-white p-1.5 shadow-[0_14px_30px_rgba(11,15,26,0.14)]"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={publishMode === 'schedule'}
                  onClick={() => setPublishMode('schedule')}
                  className={`inline-flex min-h-[46px] flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 font-display text-[14.5px] font-bold transition-all duration-150 cursor-pointer ${
                    publishMode === 'schedule'
                      ? 'bg-[#12141E] text-white shadow-sm'
                      : 'text-[#0B0F1A] hover:bg-black/[0.05]'
                  }`}
                >
                  <Calendar className="h-4 w-4 stroke-[2.2]" aria-hidden="true" />
                  <span>Schedule</span>
                </button>

                <button
                  type="button"
                  role="tab"
                  aria-selected={publishMode === 'publish'}
                  onClick={() => setPublishMode('publish')}
                  className={`inline-flex min-h-[46px] flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 font-display text-[14.5px] font-bold transition-all duration-150 cursor-pointer ${
                    publishMode === 'publish'
                      ? 'bg-[#12141E] text-white shadow-sm'
                      : 'text-[#0B0F1A] hover:bg-black/[0.05]'
                  }`}
                >
                  <Send className="h-4 w-4 stroke-[2.2]" aria-hidden="true" />
                  <span>Publish</span>
                </button>

                {/* Crisp Editorial Pointer Cursor Accent */}
                <svg
                  width="22"
                  height="24"
                  viewBox="0 0 22 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className={`pointer-events-none absolute -bottom-3.5 transition-all duration-200 drop-shadow-[0_4px_8px_rgba(0,0,0,0.22)] ${
                    publishMode === 'publish' ? 'right-5' : 'left-[38%]'
                  }`}
                >
                  <path
                    d="M3.5 2.5L18.5 12.2L11.4 13.4L8.2 20.5L3.5 2.5Z"
                    fill="#0B0F1A"
                    stroke="#FFFFFF"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <p className="mt-4 text-center text-[13px] font-medium text-[#1A1F2B]/80">
                {publishMode === 'publish'
                  ? 'Approved clips go live only when you hit Publish.'
                  : 'Queue approved clips on your YouTube & Instagram calendar.'}
              </p>
            </div>
          </article>
        </div>

        {/* Closing Statement */}
        <div className="mt-14 flex items-center justify-center text-center sm:mt-16">
          <div className="relative inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-2 px-4">
            <BurstDoodle
              color="#0B0F1A"
              className="-ml-5 hidden h-6 w-6 -scale-x-100 sm:inline-block"
            />
            <p className="font-display text-[22px] font-bold leading-snug tracking-[-0.025em] text-[#0B0F1A] sm:text-[28px]">
              Post it from here. Then{' '}
              <span className="ml-0.5 inline-block -rotate-[0.6deg] rounded-[14px] bg-[#D5FF4F] px-3.5 py-0.5 text-[#0B0F1A] shadow-[0_8px_22px_rgba(213,255,79,0.45)]">
                see how it did.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
