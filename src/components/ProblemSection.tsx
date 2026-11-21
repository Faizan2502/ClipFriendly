import type { ReactNode } from 'react';
import {
  TimelineIllustration,
  ToolsIllustration,
  ScheduleIllustration,
} from './ProblemIllustrations';

interface ProblemCardData {
  number: string;
  title: string;
  description: string;
  badgeBg: string;
  accentGlow: string;
  borderHoverClass: string;
  visual: ReactNode;
}

const PROBLEM_CARDS: ProblemCardData[] = [
  {
    number: '01',
    title: 'Buried in the timeline',
    description:
      'The best 40 seconds of a two-hour conversation don’t announce themselves. The only way to find them is to rewatch the whole thing.',
    badgeBg: '#F58FBD',
    accentGlow: 'rgba(245, 143, 189, 0.12)',
    borderHoverClass: 'hover:border-[#F58FBD]/45',
    visual: <TimelineIllustration />,
  },
  {
    number: '02',
    title: 'One clip, five tools',
    description:
      'Trim in one app, caption in another, resize in a third. Every clip turns into its own small project.',
    badgeBg: '#D5FF4F',
    accentGlow: 'rgba(213, 255, 79, 0.11)',
    borderHoverClass: 'hover:border-[#D5FF4F]/45',
    visual: <ToolsIllustration />,
  },
  {
    number: '03',
    title: 'Posting slips to “later”',
    description:
      'Different platforms, different formats, clips waiting on approval. Consistency is the first thing to go when the week gets busy.',
    badgeBg: '#A978FF',
    accentGlow: 'rgba(169, 120, 255, 0.13)',
    borderHoverClass: 'hover:border-[#A978FF]/45',
    visual: <ScheduleIllustration />,
  },
];

export function ProblemSection() {
  return (
    <section
      id="after-record"
      aria-labelledby="problem-section-headline"
      className="relative w-full overflow-hidden border-t border-white/[0.06] bg-[#080B14] py-20 sm:py-24 lg:py-28"
    >
      {/* Continue dotted background texture from Hero */}
      <div
        aria-hidden="true"
        className="hero-dot-grid pointer-events-none absolute inset-0 opacity-90"
      />

      {/* Restrained radial ambient vignette for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_18%,rgba(28,37,68,0.24),transparent_70%),radial-gradient(ellipse_95%_90%_at_50%_50%,transparent_55%,rgba(8,11,20,0.88)_100%)]"
      />

      <div className="relative z-10 mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10">
        {/* Centered Header Block */}
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
          {/* Eyebrow with subtle flanking hairlines */}
          <div className="mb-5 flex items-center justify-center gap-4">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-gradient-to-r from-transparent to-white/25 sm:w-12"
            />
            <p className="font-display text-[12px] font-bold uppercase tracking-[0.16em] text-[#D5FF4F] sm:text-[13px]">
              AFTER YOU HIT RECORD
            </p>
            <span
              aria-hidden="true"
              className="h-px w-8 bg-gradient-to-l from-transparent to-white/25 sm:w-12"
            />
          </div>

          {/* Section Headline with neon-lime underline on "easy part" & 3-ray burst */}
          <h2
            id="problem-section-headline"
            className="font-display text-[clamp(2rem,4.4vw,3.65rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white [text-wrap:balance]"
          >
            The recording is the{' '}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">easy part.</span>

              {/* Neon-lime hand-drawn double underline beneath "easy part" */}
              <svg
                viewBox="0 0 220 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-2 left-0 w-[96%]"
              >
                <path
                  d="M4 11.5C58 6.5 144 4.5 214 7.5"
                  stroke="#D5FF4F"
                  strokeWidth="4.4"
                  strokeLinecap="round"
                />
                <path
                  d="M36 16.2C92 12.2 152 11.2 204 13.5"
                  stroke="#D5FF4F"
                  strokeWidth="3.4"
                  strokeLinecap="round"
                  strokeOpacity="0.9"
                />
              </svg>

              {/* Signature 3-ray neon-lime burst top-right */}
              <svg
                width="30"
                height="30"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="pointer-events-none absolute -right-7 -top-4 hidden h-7 w-7 sm:block md:-right-8 md:-top-5 md:h-8 md:w-8"
              >
                <path
                  d="M7 13L11 3"
                  stroke="#D5FF4F"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                <path
                  d="M15.5 18.5L26 9"
                  stroke="#D5FF4F"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                <path
                  d="M20 26.5L32.5 23.5"
                  stroke="#D5FF4F"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Narrative Paragraph */}
          <p className="mt-7 max-w-[730px] text-[16px] leading-[1.7] text-[#C5CCD9] sm:mt-8 sm:text-[18px]">
            You put in the preparation, the conversation, the edit. Then the file goes into
            a folder, because turning it into short clips is a whole second job. Someone has
            to find the moments, cut them, caption them, fit them to each platform, and post
            on a schedule.
          </p>

          {/* Highlighted Statement Callout Bar */}
          <div className="mt-8 inline-flex max-w-full items-center gap-3 rounded-2xl border border-[#283044] bg-[#0D1220]/95 px-5 py-3.5 shadow-[0_0_36px_rgba(213,255,79,0.08),inset_0_1px_0_rgba(255,255,255,0.06)] sm:mt-9 sm:rounded-full sm:px-7">
            <svg
              width="20"
              height="20"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
              aria-hidden="true"
            >
              <path
                d="M6.5 6.35C6.5 4.86 8.13 3.94 9.41 4.71L22.36 12.36C23.62 13.11 23.62 14.89 22.36 15.64L9.41 23.29C8.13 24.06 6.5 23.14 6.5 21.65V6.35Z"
                stroke="#D5FF4F"
                strokeWidth="2.8"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-left font-display text-[14px] font-semibold leading-snug tracking-[-0.01em] text-[#D5FF4F] sm:text-center sm:text-[16px]">
              So your best minute only reaches the people who already watched the rest, if it
              gets shared at all.
            </p>
          </div>
        </div>

        {/* Three Problem Cards Row */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {PROBLEM_CARDS.map((card, index) => (
            <article
              key={card.number}
              className={`group relative flex flex-col overflow-hidden rounded-[26px] border border-[#283044] bg-[#0D1220]/95 p-6 shadow-[0_18px_46px_rgba(0,0,0,0.42)] transition-all duration-200 hover:-translate-y-1 sm:p-7 ${card.borderHoverClass} ${
                index === 2 ? 'md:col-span-2 md:mx-auto md:w-full md:max-w-[520px] lg:col-span-1 lg:max-w-none' : ''
              }`}
            >
              {/* Subtle card-specific top ambient tint */}
              <div
                aria-hidden="true"
                style={{
                  background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${card.accentGlow}, transparent 75%)`,
                }}
                className="pointer-events-none absolute inset-x-0 top-0 h-44 opacity-80 transition-opacity duration-200 group-hover:opacity-100"
              />

              {/* Visual Illustration Stage (consistent height keeps titles aligned across cards) */}
              <div className="relative z-10 mb-6 flex h-[206px] w-full items-center justify-center sm:h-[214px]">
                {card.visual}
              </div>

              {/* Number Badge + Card Title */}
              <div className="relative z-10 flex items-center gap-3">
                <span
                  style={{ backgroundColor: card.badgeBg }}
                  className="inline-flex h-[32px] min-w-[38px] shrink-0 items-center justify-center rounded-[10px] px-2.5 font-display text-[14px] font-bold tabular-nums text-[#080B14]"
                >
                  {card.number}
                </span>
                <h3 className="font-display text-[20px] font-bold leading-tight tracking-[-0.02em] text-white xl:text-[22px]">
                  {card.title}
                </h3>
              </div>

              {/* Card Description */}
              <p className="relative z-10 mt-3.5 text-[15px] leading-[1.65] text-[#AEB5C4]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
