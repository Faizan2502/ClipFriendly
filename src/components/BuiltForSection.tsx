import {
  Mic,
  Play,
  Rocket,
  Layers,
  Users,
  BarChart2,
  type LucideIcon,
} from 'lucide-react';

/**
 * Easy-to-replace media asset paths for Section 5 (Who It's Built For).
 * Swap any URL below with final studio photography or brand imagery later.
 */
const SECTION_5_MEDIA = {
  heroPortrait: '/src/assets/images/editorial_creator_portrait_1795202908028.jpg',
  podcasters: '/src/assets/images/audience_podcasters_1795202905803.jpg',
  contentCreators: '/src/assets/images/audience_content_creators_1795202911149.jpg',
  founders: '/src/assets/images/audience_founders_1795202914502.jpg',
  agencies: '/src/assets/images/audience_agencies_1795202906269.jpg',
  marketingTeams: '/src/assets/images/audience_marketing_teams_1795202906516.jpg',
} as const;

interface AudienceCardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  badgeBg: string;
  accentTopTint: string;
}

const AUDIENCE_CARDS: AudienceCardItem[] = [
  {
    id: 'podcasters',
    title: 'Podcasters',
    description:
      'Turn each episode into multiple clips that capture the conversations worth sharing.',
    image: SECTION_5_MEDIA.podcasters,
    imageAlt: 'Broadcast podcast microphone mounted on a boom arm in a pastel lavender studio',
    icon: Mic,
    badgeBg: '#C8A6FF',
    accentTopTint: '#C8A6FF',
  },
  {
    id: 'content-creators',
    title: 'Content Creators',
    description:
      'Get more short-form content from the videos you’re already creating.',
    image: SECTION_5_MEDIA.contentCreators,
    imageAlt: 'Mirrorless video camera on a tripod with flip-out preview monitor',
    icon: Play,
    badgeBg: '#FFE259',
    accentTopTint: '#FFE259',
  },
  {
    id: 'founders',
    title: 'Founders & Personal Brands',
    description:
      'Share your ideas, expertise, and founder journey across social platforms.',
    image: SECTION_5_MEDIA.founders,
    imageAlt: 'Founder smiling in a modern sunlit content studio workspace',
    icon: Rocket,
    badgeBg: '#D5FF4F',
    accentTopTint: '#D5FF4F',
  },
  {
    id: 'agencies',
    title: 'Agencies',
    description:
      'Create, manage, and publish clips for multiple clients from one workspace.',
    image: SECTION_5_MEDIA.agencies,
    imageAlt: 'Creative agency desk and laptop with soft purple ambient lighting',
    icon: Layers,
    badgeBg: '#B98EFF',
    accentTopTint: '#B98EFF',
  },
  {
    id: 'marketing-teams',
    title: 'Marketing Teams',
    description:
      'Turn webinars, interviews, and events into a consistent flow of shareable content.',
    image: SECTION_5_MEDIA.marketingTeams,
    imageAlt: 'Marketing team collaborating around a laptop in a bright creative studio',
    icon: Users,
    badgeBg: '#FFAA45',
    accentTopTint: '#FFAA45',
  },
];

function BurstAccent({
  color = '#080B14',
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
      <path d="M6 12L9.5 3" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M13.5 16.5L23 8.5" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M17.5 24L29 21.5" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function BuiltForSection() {
  return (
    <section
      id="who-its-built-for"
      aria-labelledby="built-for-headline"
      className="relative w-full overflow-hidden bg-[#DCFF54] text-[#080B14]"
    >
      {/* ================================================================
          UPPER NEON-LIME EDITORIAL HERO BAND
      ================================================================ */}
      <div className="relative mx-auto max-w-[1340px] px-5 pt-14 sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">
        {/* Oversized Editorial Background Typography: CREATORS */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none overflow-hidden text-center"
        >
          <span className="block font-display text-[clamp(4.4rem,14.5vw,13.5rem)] font-bold italic leading-[0.82] tracking-[-0.04em] text-[#B7DF2D]/95">
            CREATORS
          </span>
        </div>

        {/* Asymmetric 3-Column Editorial Spread overlapping the oversized text */}
        <div className="relative z-10 -mt-6 grid grid-cols-1 items-center gap-10 sm:-mt-10 lg:-mt-20 lg:grid-cols-[1fr_minmax(320px,410px)_1fr] lg:items-end lg:gap-8">
          {/* LEFT COLUMN: Stacked Bold Headline + Purple Brush Underline */}
          <div className="relative flex flex-col items-start lg:pb-14">
            <BurstAccent
              color="#080B14"
              className="mb-1 -ml-3 h-7 w-7 -scale-x-100"
            />
            <h2
              id="built-for-headline"
              className="font-display text-[clamp(2.35rem,4.1vw,3.55rem)] font-bold uppercase leading-[0.98] tracking-[-0.035em] text-[#080B14]"
            >
              <span className="block">BUILT FOR</span>
              <span className="block">CREATORS,</span>
              <span className="block">TEAMS, AND</span>
              <span className="relative inline-block">
                <span>BRANDS.</span>
                {/* Hand-drawn purple brush underline beneath BRANDS. */}
                <svg
                  viewBox="0 0 210 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-2.5 left-0 w-[104%]"
                >
                  <path
                    d="M4 11.5C62 5.5 144 4.5 204 8.2C162 12.2 126 14.5 92 17.5C136 15.2 172 14.5 198 17.8"
                    stroke="#A978FF"
                    strokeWidth="5.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </h2>
          </div>

          {/* CENTER COLUMN: Dominant Arched Creator Portrait + Floating REC & Clip Badges */}
          <div className="relative mx-auto flex w-full max-w-[380px] justify-center lg:max-w-[410px]">
            {/* Subtle dark arch halo rising from lower dark band behind portrait base (desktop docked) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 -inset-x-6 hidden h-36 rounded-t-full bg-[#12151E] lg:block"
            />

            {/* Main Rounded Arch Creator Portrait */}
            <div className="relative z-10 w-full">
              <div className="relative aspect-[4/4.35] w-full overflow-hidden rounded-t-full rounded-b-[26px] border-[4px] border-white bg-[#171A26] shadow-[0_18px_48px_rgba(8,11,20,0.2)] lg:rounded-b-none lg:border-b-0">
                <img
                  src={SECTION_5_MEDIA.heroPortrait}
                  alt="Podcast creator wearing studio headphones and speaking into a microphone"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-top"
                />

                {/* Subtle purple doodle rays inside bottom-right of portrait */}
                <BurstAccent
                  color="#A978FF"
                  className="absolute bottom-14 right-4 h-6 w-6 opacity-90"
                />
              </div>

              {/* Floating REC Badge (Top-Right of Arch) */}
              <div className="absolute right-1 top-6 z-20 flex items-center sm:right-2 sm:top-8">
                <div className="-rotate-[6deg] inline-flex items-center gap-2 rounded-full border-2 border-[#080B14] bg-white px-3.5 py-1.5 shadow-[0_8px_20px_rgba(8,11,20,0.16)]">
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full bg-[#FF2424]"
                  />
                  <span className="font-display text-[13px] font-bold tracking-[0.06em] text-[#080B14]">
                    REC
                  </span>
                </div>
                <BurstAccent
                  color="#080B14"
                  className="-ml-1 -mt-7 h-6 w-6"
                />
              </div>

              {/* Floating "1 Video → Multiple Clips" Pill (Bottom-Left of Arch) */}
              <div className="absolute -left-3 bottom-5 z-20 -rotate-[4deg] rounded-[18px] border border-black/10 bg-white px-3.5 py-2.5 shadow-[0_14px_32px_rgba(8,11,20,0.22)] sm:-left-10 sm:bottom-6 sm:px-4">
                <div className="flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F2F3F7] text-[#080B14]"
                  >
                    <BarChart2 className="h-5 w-5 stroke-[2.5]" />
                  </span>
                  <div className="flex flex-col items-start">
                    <span className="font-display text-[14px] font-bold leading-tight text-[#080B14]">
                      1 Video
                    </span>
                    <span className="mt-1 inline-flex items-center rounded-full bg-[#D5FF4F] px-2.5 py-0.5 font-display text-[11.5px] font-bold leading-none text-[#080B14]">
                      → Multiple Clips
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Supporting Copy + Playful Looped Arrow Doodle */}
          <div className="flex flex-col items-start pb-10 lg:items-start lg:pb-16 lg:pl-4">
            <p className="max-w-[330px] font-display text-[17px] font-semibold leading-[1.48] tracking-[-0.01em] text-[#0B0F1A] sm:text-[18.5px]">
              From solo creators to growing teams, ClipVerse helps turn long-form
              content into a steady stream of short, platform-ready clips.
            </p>

            {/* Hand-drawn looped arrow pointing toward the central portrait */}
            <svg
              width="76"
              height="44"
              viewBox="0 0 76 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="mt-4 hidden lg:block"
            >
              <path
                d="M70 10C60 22 44 26 39 18C35 11 43 6 47 12C51 19 36 33 10 31"
                stroke="#080B14"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 25.5L8.5 30.8L15.5 36.5"
                stroke="#080B14"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* ================================================================
          LOWER DARK AUDIENCE CARDS BAND (Seamlessly Docked to Upper Band)
      ================================================================ */}
      <div className="relative z-20 -mt-1 rounded-t-[32px] bg-[#12151E] pb-16 pt-9 text-white sm:rounded-t-[40px] sm:pb-20 sm:pt-11 lg:pb-24 lg:pt-12">
        <div className="mx-auto max-w-[1340px] px-5 sm:px-8 lg:px-10">
          {/* Five Audience Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4 xl:gap-5">
            {AUDIENCE_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.id}
                  className="group flex flex-col overflow-hidden rounded-[22px] bg-[#FAF9F6] text-[#0B0F1A] shadow-[0_14px_34px_rgba(0,0,0,0.28)] transition-transform duration-200 hover:-translate-y-1"
                >
                  {/* Top Real Photograph */}
                  <div
                    style={{ backgroundColor: card.accentTopTint }}
                    className="relative aspect-[4/3] w-full overflow-hidden"
                  >
                    <img
                      src={card.image}
                      alt={card.imageAlt}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Body with Overlapping Accent Icon Badge */}
                  <div className="relative flex flex-1 flex-col px-4 pb-5 pt-2 sm:px-5 sm:pb-6">
                    <span
                      aria-hidden="true"
                      style={{ backgroundColor: card.badgeBg }}
                      className="-mt-7 mb-3 inline-flex h-[42px] w-[42px] items-center justify-center rounded-[13px] border-[3px] border-[#FAF9F6] text-[#080B14] shadow-sm"
                    >
                      <Icon className="h-[19px] w-[19px] stroke-[2.3]" />
                    </span>

                    <h3 className="font-display text-[19px] font-bold leading-[1.16] tracking-[-0.02em] text-[#0B0F1A] xl:text-[20px]">
                      {card.title}
                    </h3>

                    <p className="mt-2.5 text-[13.5px] leading-[1.56] text-[#353B48] xl:text-[14px]">
                      {card.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Closing Statement */}
          <div className="mt-12 flex items-center justify-center text-center sm:mt-14">
            <div className="relative inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-2 px-4">
              <BurstAccent
                color="#D5FF4F"
                className="-ml-5 hidden h-6 w-6 -scale-x-100 sm:inline-block"
              />
              <p className="font-display text-[20px] font-bold leading-snug tracking-[-0.02em] text-white sm:text-[26px]">
                Long-form content creates more value{' '}
                <span className="ml-0.5 inline-block rounded-[13px] bg-[#D5FF4F] px-3.5 py-0.5 text-[#080B14] shadow-[0_8px_26px_rgba(213,255,79,0.22)]">
                  when it reaches further.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
