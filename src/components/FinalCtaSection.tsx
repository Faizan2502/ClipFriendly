import { Play, ArrowRight, Check } from 'lucide-react';

/**
 * Easy-to-replace creator clip preview assets for the Final CTA fanned stack.
 */
const CTA_CLIP_MEDIA = {
  front: '/src/assets/images/editor_creator_main_1795205232997.jpg',
  middle: '/src/assets/images/creator_instagram_9_16_1795201835523.jpg',
  back: '/src/assets/images/editorial_creator_portrait_1795202908028.jpg',
} as const;

const MICROCOPY_POINTS = [
  'Create smarter.',
  'Publish consistently.',
  'Grow with every clip.',
] as const;

interface FinalCtaSectionProps {
  onStartCreating?: () => void;
  onExploreHowItWorks?: () => void;
}

export function FinalCtaSection({
  onStartCreating,
  onExploreHowItWorks,
}: FinalCtaSectionProps) {
  return (
    <section
      aria-labelledby="final-cta-headline"
      className="relative w-full bg-[#080B14] py-8 text-white sm:py-12"
    >
      <div className="mx-auto max-w-[1220px] px-5 sm:px-8 lg:px-10">
        {/* Elevated Purple-Lit Final CTA Banner */}
        <div className="relative overflow-hidden rounded-[30px] border border-[#A978FF]/65 bg-[#0D1220] px-6 py-10 shadow-[0_24px_72px_rgba(124,77,255,0.22),inset_0_1px_0_rgba(255,255,255,0.08)] sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          {/* Atmospheric glowing violet corner washes matching reference */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-20 h-80 w-96 rounded-full bg-[#A978FF]/45 blur-[90px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-80 rounded-full bg-[#8B52FF]/35 blur-[95px]"
          />

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.88fr_1.22fr] lg:gap-12">
            {/* LEFT: Fanned Stack of 3 Real Vertical Clip Previews */}
            <div className="relative mx-auto flex h-[280px] w-full max-w-[330px] items-center justify-center sm:h-[310px]">
              {/* Back-most clip card */}
              <div
                aria-hidden="true"
                className="absolute left-4 top-5 h-[220px] w-[164px] -rotate-[12deg] overflow-hidden rounded-[20px] border border-white/25 bg-[#121728] opacity-55 shadow-xl sm:left-3 sm:h-[244px] sm:w-[180px]"
              >
                <img
                  src={CTA_CLIP_MEDIA.back}
                  alt=""
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* Middle clip card */}
              <div
                aria-hidden="true"
                className="absolute left-9 top-8 h-[226px] w-[170px] -rotate-[7deg] overflow-hidden rounded-[20px] border border-white/35 bg-[#121728] opacity-75 shadow-xl sm:left-10 sm:h-[250px] sm:w-[188px]"
              >
                <img
                  src={CTA_CLIP_MEDIA.middle}
                  alt=""
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* Front focal clip card */}
              <div className="relative z-20 ml-10 mt-6 -rotate-[3deg] sm:ml-14">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 34 34"
                  fill="none"
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-7 -top-6"
                >
                  <path d="M6 12L9.5 3" stroke="#D5FF4F" strokeWidth="2.8" strokeLinecap="round" />
                  <path d="M13.5 16.5L23 8.5" stroke="#D5FF4F" strokeWidth="2.8" strokeLinecap="round" />
                  <path d="M17.5 24L29 21.5" stroke="#D5FF4F" strokeWidth="2.8" strokeLinecap="round" />
                </svg>

                <div className="relative h-[232px] w-[184px] overflow-hidden rounded-[22px] border-2 border-[#D2B5FF] bg-[#0B0F1C] shadow-[0_22px_52px_rgba(0,0,0,0.65),0_0_36px_rgba(169,120,255,0.4)] sm:h-[256px] sm:w-[204px]">
                  <img
                    src={CTA_CLIP_MEDIA.front}
                    alt="Creator smiling into studio podcast microphone in ClipVerse short clip preview"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-top"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#060912]/90 via-[#060912]/45 to-transparent"
                  />
                  <div className="absolute inset-x-3.5 bottom-3 flex items-center justify-between">
                    <Play className="h-4 w-4 fill-white text-white" aria-hidden="true" />
                    <span className="font-mono text-[11px] font-semibold tabular-nums text-white/95">
                      00:28
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Headline, Description, Primary & Secondary CTAs */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              {/* Eyebrow */}
              <div className="mb-5 inline-flex items-center gap-2.5">
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 20 18"
                  fill="none"
                  aria-hidden="true"
                  className="hidden sm:block"
                >
                  <path d="M16 12L4 9" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M18 6L11 2" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
                <span className="inline-flex items-center rounded-full bg-[#D5FF4F] px-4 py-1 font-display text-[11.5px] font-bold uppercase tracking-[0.13em] text-[#080B14] sm:text-[12.5px]">
                  YOUR NEXT CLIP STARTS HERE
                </span>
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 20 18"
                  fill="none"
                  aria-hidden="true"
                  className="hidden sm:block"
                >
                  <path d="M4 12L16 9" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M2 6L9 2" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </div>

              {/* Main Headline */}
              <h2
                id="final-cta-headline"
                className="font-display text-[clamp(2rem,3.9vw,3.35rem)] font-bold leading-[1.09] tracking-[-0.03em] text-white"
              >
                <span className="block">Your next great clip is</span>
                <span className="block">already sitting in your</span>
                <span className="mt-1.5 inline-block rounded-[15px] bg-[#D5FF4F] px-4 py-0.5 text-[#080B14] shadow-[0_10px_28px_rgba(213,255,79,0.28)]">
                  last video.
                </span>
              </h2>

              {/* Supporting Copy */}
              <p className="mt-5 max-w-[540px] text-[15.5px] leading-[1.68] text-[#D0D6E3] sm:text-[16.5px]">
                Stop letting great moments get buried in long recordings. Let AI find
                them, make them yours, and get your content ready to reach more people.
              </p>

              {/* CTA Buttons */}
              <div className="mt-7 flex w-full flex-col items-center gap-3.5 sm:w-auto sm:flex-row">
                <button
                  type="button"
                  onClick={onStartCreating}
                  className="inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-[#D5FF4F] px-6 py-3 font-display text-[15px] font-bold text-[#080B14] shadow-[0_0_28px_rgba(213,255,79,0.32)] transition-all duration-150 hover:bg-[#E2FF7A] hover:shadow-[0_0_36px_rgba(213,255,79,0.46)] active:scale-[0.98] sm:w-auto cursor-pointer"
                >
                  <Play className="h-4 w-4 shrink-0 stroke-[2.4]" aria-hidden="true" />
                  <span>Start Creating with ClipVerse</span>
                  <ArrowRight className="h-4 w-4 shrink-0 stroke-[2.5]" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={onExploreHowItWorks}
                  className="inline-flex min-h-[52px] w-full items-center justify-center whitespace-nowrap rounded-full border border-white/45 bg-white/[0.03] px-6 py-3 font-display text-[15px] font-semibold text-white transition-all duration-150 hover:border-white hover:bg-white/[0.09] active:scale-[0.98] sm:w-auto cursor-pointer"
                >
                  Explore How It Works
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Supporting Microcopy Row */}
          <ul
            aria-label="ClipVerse core benefits"
            className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 border-t border-white/[0.1] pt-6 sm:gap-x-0"
          >
            {MICROCOPY_POINTS.map((point, index) => (
              <li key={point} className="flex items-center">
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="mx-6 hidden h-4 w-px bg-white/20 sm:inline-block lg:mx-8"
                  />
                )}
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#D5FF4F] text-[#080B14]"
                  >
                    <Check className="h-2.5 w-2.5 stroke-[3.2]" />
                  </span>
                  <span className="whitespace-nowrap text-[14px] font-medium text-[#E8ECF5]">
                    {point}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
