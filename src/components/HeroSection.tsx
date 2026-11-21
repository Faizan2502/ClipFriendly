import { useState, type CSSProperties, type RefObject } from 'react';
import {
  Scissors,
  Sparkles,
  Play,
  CalendarDays,
  BarChart3,
  Upload,
} from 'lucide-react';
import { FloatingTile, type FloatingTileConfig } from './FloatingTile';
import { VideoUrlForm } from './VideoUrlForm';
import { FeatureStrip } from './FeatureStrip';

interface HeroSectionProps {
  inputRef: RefObject<HTMLInputElement | null>;
}

const FLOATING_TILES: FloatingTileConfig[] = [
  {
    id: 'clip',
    label: 'Clip',
    description: 'AI detects high-retention hooks and moments automatically.',
    icon: Scissors,
    bgColor: '#F58FBD',
    glowColor: 'rgba(245, 143, 189, 0.34)',
    rotateDeg: -10,
    floatDuration: '6.4s',
    floatDelay: '0s',
    positionClass: 'left-[2.5%] xl:left-[9.5%] 2xl:left-[11%] top-[13%]',
  },
  {
    id: 'edit',
    label: 'Edit',
    description: 'Refine captions, framing, and pacing with frame-level control.',
    icon: Play,
    bgColor: '#D5FF4F',
    glowColor: 'rgba(213, 255, 79, 0.3)',
    rotateDeg: -9,
    floatDuration: '7.1s',
    floatDelay: '0.6s',
    reverse: true,
    positionClass: 'left-[2%] xl:left-[7%] 2xl:left-[8.5%] top-[47%]',
  },
  {
    id: 'analyze',
    label: 'Analyze',
    description: 'Track retention curves and top-performing hooks across channels.',
    icon: BarChart3,
    bgColor: '#B88CFF',
    glowColor: 'rgba(169, 120, 255, 0.34)',
    rotateDeg: 10,
    floatDuration: '6.8s',
    floatDelay: '1.1s',
    positionClass: 'left-[5%] xl:left-[12%] 2xl:left-[13.5%] bottom-[8%]',
  },
  {
    id: 'ai',
    label: 'AI',
    description: 'Score virality and generate dynamic short-form cuts in seconds.',
    icon: Sparkles,
    bgColor: '#A978FF',
    glowColor: 'rgba(169, 120, 255, 0.36)',
    rotateDeg: 11,
    floatDuration: '6.6s',
    floatDelay: '0.3s',
    reverse: true,
    positionClass: 'right-[3%] xl:left-auto xl:right-[10%] 2xl:right-[11.5%] top-[12%]',
  },
  {
    id: 'schedule',
    label: 'Schedule',
    description: 'Queue approved clips on an automated cross-channel calendar.',
    icon: CalendarDays,
    bgColor: '#FFAA45',
    glowColor: 'rgba(255, 170, 69, 0.34)',
    rotateDeg: 9,
    floatDuration: '7.3s',
    floatDelay: '0.9s',
    positionClass: 'right-[2%] xl:right-[7.5%] 2xl:right-[9%] top-[46%]',
  },
  {
    id: 'publish',
    label: 'Publish',
    description: 'Ship directly to YouTube Shorts and Instagram Reels in one click.',
    icon: Upload,
    bgColor: '#83D7FF',
    glowColor: 'rgba(131, 215, 255, 0.34)',
    rotateDeg: -8,
    floatDuration: '6.9s',
    floatDelay: '1.4s',
    reverse: true,
    positionClass: 'right-[5%] xl:right-[12%] 2xl:right-[13.5%] bottom-[8%]',
  },
];

function FourPointStar({
  color,
  size = 18,
  className,
  duration = '4.6s',
  delay = '0s',
}: {
  color: string;
  size?: number;
  className: string;
  duration?: string;
  delay?: string;
}) {
  const style = {
    '--twinkle-duration': duration,
    '--twinkle-delay': delay,
  } as CSSProperties;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={`pointer-events-none absolute hidden lg:block animate-twinkle ${className}`}
      aria-hidden="true"
    >
      <path
        d="M12 2.5C12.7 7.6 16.4 11.3 21.5 12C16.4 12.7 12.7 16.4 12 21.5C11.3 16.4 7.6 12.7 2.5 12C7.6 11.3 11.3 7.6 12 2.5Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroSection({ inputRef }: HeroSectionProps) {
  const [activeTileId, setActiveTileId] = useState<string | null>(null);

  const handleToggleTile = (id: string) => {
    setActiveTileId((current) => (current === id ? null : id));
  };

  const activeTile = FLOATING_TILES.find((t) => t.id === activeTileId) ?? null;

  return (
    <section
      id="top"
      aria-labelledby="hero-headline"
      className="relative flex min-h-[calc(100vh-76px)] w-full flex-col justify-center overflow-hidden bg-[#080B14]"
    >
      {/* Dotted background pattern */}
      <div
        aria-hidden="true"
        className="hero-dot-grid pointer-events-none absolute inset-0 opacity-90"
      />

      {/* Subtle atmospheric vignette & soft radial ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_40%,rgba(28,37,68,0.28),transparent_72%),radial-gradient(ellipse_95%_90%_at_50%_50%,transparent_52%,rgba(8,11,20,0.86)_100%)]"
      />

      {/* Desktop Floating Workflow Tiles & Sparkle Accents Container */}
      <div className="pointer-events-none relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col items-center justify-center px-5 py-12 sm:px-8 lg:py-14">
        {/* 6 Floating Workflow Tiles (Desktop) */}
        {FLOATING_TILES.map((tile) => (
          <FloatingTile
            key={tile.id}
            tile={tile}
            isActive={activeTileId === tile.id}
            onToggle={handleToggleTile}
          />
        ))}

        {/* 3 Delicate 4-Point Star Accents matching screenshot */}
        <FourPointStar
          color="#D5FF4F"
          size={20}
          className="left-[16%] xl:left-[21.5%] top-[21.5%]"
          duration="4.4s"
          delay="0.2s"
        />
        <FourPointStar
          color="#A978FF"
          size={16}
          className="left-[14%] xl:left-[19%] top-[43%]"
          duration="5.2s"
          delay="1.1s"
        />
        <FourPointStar
          color="#FFAA45"
          size={16}
          className="right-[14.5%] xl:right-[20%] top-[42.5%]"
          duration="4.8s"
          delay="0.7s"
        />

        {/* Center Hero Content Stack */}
        <div className="pointer-events-auto relative z-10 flex w-full max-w-[820px] flex-col items-center text-center">
          {/* Eyebrow */}
          <p className="mb-6 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 font-display text-[12px] font-semibold uppercase tracking-[0.14em] sm:text-[13px]">
            <span className="text-[#D5FF4F]">AI VIDEO WORKFLOW</span>
            <span aria-hidden="true" className="text-[#AEB5C4]/60">
              —
            </span>
            <span className="text-[#D6DCE8]">FOR CREATORS, FOUNDERS &amp; BRANDS</span>
          </p>

          {/* Main Display Headline */}
          <h1
            id="hero-headline"
            className="font-display font-bold tracking-[-0.035em] text-white"
          >
            <span className="relative inline-block text-[clamp(2.5rem,5.4vw,4.65rem)] leading-[1.06]">
              One Video. Endless
              {/* 3-Ray Neon Lime Burst Accent top-right of Endless */}
              <svg
                width="36"
                height="36"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="pointer-events-none absolute -right-7 -top-4 hidden h-8 w-8 sm:block md:-right-9 md:-top-5 md:h-9 md:w-9"
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

            <span className="mt-2 block sm:mt-2.5">
              <span className="relative inline-block">
                <span className="relative z-10 inline-block -rotate-[1.1deg] rounded-[18px] bg-[#D5FF4F] px-5 py-1 text-[clamp(2.5rem,5.4vw,4.65rem)] leading-[1.05] text-[#080B14] shadow-[0_12px_40px_rgba(213,255,79,0.22)] sm:rounded-[22px] sm:px-8 sm:py-1.5">
                  Short Clips.
                </span>

                {/* Hand-drawn Purple Brush Underline Swash */}
                <svg
                  viewBox="0 0 210 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-3.5 right-0 z-20 w-[56%] sm:-bottom-4 sm:right-1 sm:w-[54%]"
                >
                  <path
                    d="M6 15.5C54 8.5 128 4.2 191 6.2C162 11.2 135 14.8 112 19.2C146 15.5 178 13.8 203 18.8"
                    stroke="#A978FF"
                    strokeWidth="5.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-[660px] text-[16px] leading-[1.65] text-[#AEB5C4] sm:mt-9 sm:text-[18px]">
            <span className="text-[#E8EDF7]">
              Turn long-form videos into engaging short clips with AI.
            </span>{' '}
            <br className="hidden sm:inline" />
            Edit, get them approved, and publish across YouTube and Instagram — all in one place.
          </p>

          {/* Main YouTube URL CTA */}
          <div className="mt-9 flex w-full justify-center sm:mt-10">
            <VideoUrlForm inputRef={inputRef} />
          </div>

          {/* Mobile & Tablet Compact Floating Tiles Showcase */}
          <div className="mt-8 flex w-full flex-col items-center lg:hidden">
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {FLOATING_TILES.map((tile) => (
                <FloatingTile
                  key={tile.id}
                  tile={tile}
                  isActive={activeTileId === tile.id}
                  onToggle={handleToggleTile}
                  compact
                />
              ))}
            </div>
            {activeTile && (
              <p
                role="status"
                className="mt-3 max-w-sm rounded-xl border border-white/10 bg-[#101626] px-3.5 py-2 text-[13px] text-[#D6DCE8]"
              >
                <span className="font-semibold text-white">{activeTile.label}:</span>{' '}
                {activeTile.description}
              </p>
            )}
          </div>

          {/* Bottom Feature Strip */}
          <div className="mt-10 sm:mt-12">
            <FeatureStrip />
          </div>
        </div>
      </div>
    </section>
  );
}
