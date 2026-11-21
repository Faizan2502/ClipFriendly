import type { ReactNode } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import {
  FindMomentsVisual,
  ShapeClipVisual,
  ApprovalQueueVisual,
  PublishLearnVisual,
} from './WorkflowVisuals';

interface HowItWorksSectionProps {
  onPreviewClick?: () => void;
}

interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  badgeBg: string;
  accentGlow: string;
  borderHoverClass: string;
  visual: ReactNode;
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    number: '01',
    title: 'Find the moments',
    description:
      'Bring in your video. AI analyses the recording and surfaces interesting moments with strong potential for short-form clips.',
    badgeBg: '#F58FBD',
    accentGlow: 'rgba(245, 143, 189, 0.11)',
    borderHoverClass: 'hover:border-[#F58FBD]/45',
    visual: <FindMomentsVisual />,
  },
  {
    number: '02',
    title: 'Shape each clip',
    description:
      'Adjust the cut, rewrite the hook, refine the captions, and add your branding. Every clip looks and feels like yours.',
    badgeBg: '#D5FF4F',
    accentGlow: 'rgba(213, 255, 79, 0.1)',
    borderHoverClass: 'hover:border-[#D5FF4F]/45',
    visual: <ShapeClipVisual />,
  },
  {
    number: '03',
    title: 'Approve before anything posts',
    description:
      'Nothing goes live until you say so. Review each clip, make your final changes, and approve it before publishing.',
    badgeBg: '#FFAA45',
    accentGlow: 'rgba(255, 170, 69, 0.11)',
    borderHoverClass: 'hover:border-[#FFAA45]/45',
    visual: <ApprovalQueueVisual />,
  },
  {
    number: '04',
    title: 'Publish, then learn',
    description:
      'Publish to YouTube and Instagram immediately or schedule for later. Track how your clips perform and use those insights to shape what comes next.',
    badgeBg: '#83D7FF',
    accentGlow: 'rgba(131, 215, 255, 0.11)',
    borderHoverClass: 'hover:border-[#83D7FF]/45',
    visual: <PublishLearnVisual />,
  },
];

function HorizontalStepConnector() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none hidden lg:flex lg:items-center lg:justify-center lg:w-12 lg:shrink-0"
    >
      <div className="relative flex w-full items-center justify-center">
        <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 border-t border-dashed border-white/25" />
        <span className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#D5FF4F]/75 bg-[#080B14] text-[#D5FF4F] shadow-[0_0_18px_rgba(213,255,79,0.22)]">
          <ArrowRight className="h-4 w-4 stroke-[2.4]" />
        </span>
      </div>
    </div>
  );
}

function VerticalStepConnector() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-center py-1 lg:hidden"
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#D5FF4F]/60 bg-[#0D1220] text-[#D5FF4F]">
        <ArrowDown className="h-4 w-4 stroke-[2.4]" />
      </span>
    </div>
  );
}

function WorkflowCard({ step }: { step: WorkflowStep }) {
  return (
    <article
      className={`group relative flex flex-1 flex-col justify-between gap-6 overflow-hidden rounded-[26px] border border-[#283044] bg-[#0D1220]/95 p-6 shadow-[0_18px_46px_rgba(0,0,0,0.45)] transition-all duration-200 sm:flex-row sm:items-center sm:p-7 ${step.borderHoverClass}`}
    >
      {/* Subtle card-specific radial tint */}
      <div
        aria-hidden="true"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 20% 0%, ${step.accentGlow}, transparent 75%)`,
        }}
        className="pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-200 group-hover:opacity-100"
      />

      {/* Left Column: Step Number, Title & Copy */}
      <div className="relative z-10 flex w-full flex-col sm:w-[41%] sm:shrink-0">
        <span
          style={{ backgroundColor: step.badgeBg }}
          className="inline-flex h-[34px] w-fit min-w-[46px] items-center justify-center rounded-[11px] px-3 font-display text-[15px] font-bold tabular-nums text-[#080B14]"
        >
          {step.number}
        </span>

        <h3 className="mt-4 font-display text-[22px] font-bold leading-[1.18] tracking-[-0.02em] text-white xl:text-[24px]">
          {step.title}
        </h3>

        <p className="mt-3 text-[14.5px] leading-[1.65] text-[#AEB5C4] xl:text-[15px]">
          {step.description}
        </p>
      </div>

      {/* Right Column: Interactive Mock Product Visual */}
      <div className="relative z-10 flex w-full items-center justify-center sm:w-[59%]">
        {step.visual}
      </div>
    </article>
  );
}

export function HowItWorksSection({ onPreviewClick }: HowItWorksSectionProps) {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-headline"
      className="relative w-full overflow-hidden border-t border-white/[0.06] bg-[#080B14] py-20 sm:py-24 lg:py-28"
    >
      {/* Continue dotted background texture from Hero & Section 2 */}
      <div
        aria-hidden="true"
        className="hero-dot-grid pointer-events-none absolute inset-0 opacity-90"
      />

      {/* Atmospheric radial vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_48%_at_50%_15%,rgba(28,37,68,0.24),transparent_70%),radial-gradient(ellipse_95%_90%_at_50%_50%,transparent_54%,rgba(8,11,20,0.88)_100%)]"
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        {/* Centered Header */}
        <div className="mx-auto flex max-w-[880px] flex-col items-center text-center">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-4">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-gradient-to-r from-transparent to-white/25 sm:w-12"
            />
            <p className="font-display text-[12px] font-bold uppercase tracking-[0.16em] text-[#D5FF4F] sm:text-[13px]">
              HOW CLIPVERSE WORKS
            </p>
            <span
              aria-hidden="true"
              className="h-px w-8 bg-gradient-to-l from-transparent to-white/25 sm:w-12"
            />
          </div>

          {/* Display Headline with neon-lime highlight on "published." */}
          <h2
            id="how-it-works-headline"
            className="font-display text-[clamp(2rem,4.3vw,3.6rem)] font-bold leading-[1.12] tracking-[-0.03em] text-white"
          >
            <span>From recording to </span>
            <span className="relative inline-block">
              <span className="relative z-10 inline-block -rotate-[1.2deg] rounded-[16px] bg-[#D5FF4F] px-4 py-0.5 text-[#080B14] shadow-[0_10px_32px_rgba(213,255,79,0.22)] sm:rounded-[18px] sm:px-5 sm:py-1">
                published.
              </span>
              {/* Signature 3-ray neon-lime burst top-right */}
              <svg
                width="30"
                height="30"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="pointer-events-none absolute -right-7 -top-5 hidden h-7 w-7 sm:block md:-right-8 md:h-8 md:w-8"
              >
                <path d="M7 13L11 3" stroke="#D5FF4F" strokeWidth="3.2" strokeLinecap="round" />
                <path d="M15.5 18.5L26 9" stroke="#D5FF4F" strokeWidth="3.2" strokeLinecap="round" />
                <path d="M20 26.5L32.5 23.5" stroke="#D5FF4F" strokeWidth="3.2" strokeLinecap="round" />
              </svg>
            </span>
            <span className="mt-2 block text-white">All in one workspace.</span>
          </h2>

          {/* Intro Paragraph */}
          <p className="mt-6 max-w-[680px] text-[16px] leading-[1.68] text-[#C5CCD9] sm:mt-7 sm:text-[18px]">
            Paste a supported video link or bring in your recording. ClipVerse finds the
            moments worth keeping. You shape them, approve them, and send them out.
          </p>
        </div>

        {/* 2×2 Connected Workflow Cards */}
        <div className="mt-14 flex flex-col gap-5 lg:mt-16 lg:gap-7">
          {/* Row 1: Step 01 -> Step 02 */}
          <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:gap-0">
            <WorkflowCard step={WORKFLOW_STEPS[0]} />
            <HorizontalStepConnector />
            <VerticalStepConnector />
            <WorkflowCard step={WORKFLOW_STEPS[1]} />
          </div>

          {/* Mobile/Tablet Vertical Flow Bridge between Step 02 and Step 03 */}
          <VerticalStepConnector />

          {/* Row 2: Step 03 -> Step 04 */}
          <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:gap-0">
            <WorkflowCard step={WORKFLOW_STEPS[2]} />
            <HorizontalStepConnector />
            <VerticalStepConnector />
            <WorkflowCard step={WORKFLOW_STEPS[3]} />
          </div>
        </div>

        {/* Closing CTA Block */}
        <div className="mt-14 flex flex-col items-center text-center sm:mt-16">
          <div className="relative inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-2 px-4">
            {/* Left angled neon-lime 3-ray burst matching screenshot */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="pointer-events-none -ml-6 hidden -scale-x-100 sm:inline-block"
            >
              <path d="M7 13L11 3" stroke="#D5FF4F" strokeWidth="3.2" strokeLinecap="round" />
              <path d="M15.5 18.5L26 9" stroke="#D5FF4F" strokeWidth="3.2" strokeLinecap="round" />
              <path d="M20 26.5L32.5 23.5" stroke="#D5FF4F" strokeWidth="3.2" strokeLinecap="round" />
            </svg>

            <p className="font-display text-[20px] font-bold leading-snug tracking-[-0.02em] text-white sm:text-[24px]">
              Your{' '}
              <span className="mx-0.5 inline-block rounded-[10px] bg-[#D5FF4F] px-2.5 py-0.5 text-[#080B14] shadow-[0_6px_22px_rgba(213,255,79,0.22)]">
                next clip
              </span>{' '}
              might already be in your last recording.
            </p>
          </div>

          <button
            type="button"
            onClick={onPreviewClick}
            className="mt-6 inline-flex min-h-[54px] items-center justify-center gap-2.5 whitespace-nowrap rounded-[16px] bg-[#D5FF4F] px-8 py-3.5 font-display text-[16px] font-bold tracking-[-0.01em] text-[#080B14] shadow-[0_0_32px_rgba(213,255,79,0.3)] transition-all duration-150 hover:bg-[#E3FF7A] hover:shadow-[0_0_40px_rgba(213,255,79,0.45)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B14] cursor-pointer"
          >
            <span>Preview Your Video</span>
            <ArrowRight className="h-5 w-5 stroke-[2.5]" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
