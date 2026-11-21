import { Check, Play, Zap, Users, ArrowRight, type LucideIcon } from 'lucide-react';

export interface PricingPlanConfig {
  id: 'free' | 'creator' | 'teams';
  name: string;
  badge?: string;
  heading: string;
  description: string;
  /** Temporary placeholder price — update easily when final commercial pricing is set. */
  monthlyPrice: number;
  pricePeriod: string;
  features: string[];
  ctaLabel: string;
  featured: boolean;
  icon: LucideIcon;
}

/**
 * Configurable ClipVerse plan definitions.
 * Note: $19 and $49 are temporary visual placeholder prices and "Create Without Limits*"
 * is editable positioning copy, not a confirmed unlimited technical guarantee.
 */
export const DEFAULT_PRICING_PLANS: PricingPlanConfig[] = [
  {
    id: 'free',
    name: 'Free',
    heading: 'Explore ClipVerse',
    description: 'For creators who want to experience AI-powered clipping.',
    monthlyPrice: 0,
    pricePeriod: '/month',
    features: [
      'Try AI-powered clip generation',
      'Basic editing customisation',
      'Preview generated clips',
      'Limited monthly usage',
    ],
    ctaLabel: 'Start for Free',
    featured: false,
    icon: Play,
  },
  {
    id: 'creator',
    name: 'Creator',
    badge: 'MOST POPULAR',
    heading: 'Create Without Limits*',
    description: 'For creators who want to publish consistently across platforms.',
    monthlyPrice: 19,
    pricePeriod: '/month',
    features: [
      'More AI-generated clips',
      'Advanced editing customisation',
      'Custom captions and branding',
      'YouTube and Instagram publishing',
      'Schedule and manage content',
      'Performance analytics',
    ],
    ctaLabel: 'Choose Creator',
    featured: true,
    icon: Zap,
  },
  {
    id: 'teams',
    name: 'Teams',
    heading: 'Built to Scale',
    description: 'For agencies and teams managing multiple brands.',
    monthlyPrice: 49,
    pricePeriod: '/month',
    features: [
      'Higher usage limits',
      'Multiple brand workspaces',
      'Team collaboration',
      'Client content management',
      'Shared publishing workflows',
      'Advanced analytics',
    ],
    ctaLabel: 'Contact Sales',
    featured: false,
    icon: Users,
  },
];

interface PricingSectionProps {
  plans?: PricingPlanConfig[];
  onSelectPlan?: (planId: string, ctaLabel: string) => void;
  onStartCreating?: () => void;
}

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
      <path d="M6 12L9.5 3" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
      <path d="M13.5 16.5L23 8.5" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
      <path d="M17.5 24L29 21.5" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  );
}

export function PricingSection({
  plans = DEFAULT_PRICING_PLANS,
  onSelectPlan,
  onStartCreating,
}: PricingSectionProps) {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-section-headline"
      className="relative w-full overflow-hidden bg-[#FAF9F6] py-20 text-[#080B14] sm:py-24 lg:py-28"
    >
      {/* Subtle organic purple editorial corner accents matching reference */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rotate-[-18deg] rounded-[96px] bg-gradient-to-br from-[#C8A6FF]/70 via-[#E7D8FF]/75 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rotate-[-22deg] rounded-[96px] bg-gradient-to-tl from-[#C8A6FF]/70 via-[#E7D8FF]/70 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-[1220px] px-5 sm:px-8 lg:px-10">
        {/* ================================================================
            HEADING AREA
        ================================================================ */}
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
          {/* Eyebrow Pill with Flanking Slanted Ticks */}
          <div className="mb-6 inline-flex items-center gap-3">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              aria-hidden="true"
              className="hidden sm:block"
            >
              <path d="M16 12L4 9" stroke="#080B14" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M18 6L11 2" stroke="#080B14" strokeWidth="2.2" strokeLinecap="round" />
            </svg>

            <span className="inline-flex items-center rounded-full bg-[#D5FF4F] px-5 py-1.5 font-display text-[12px] font-bold uppercase tracking-[0.13em] text-[#080B14] shadow-[0_6px_18px_rgba(213,255,79,0.4)] sm:text-[13px]">
              SIMPLE, FLEXIBLE PRICING
            </span>

            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              aria-hidden="true"
              className="hidden sm:block"
            >
              <path d="M4 12L16 9" stroke="#080B14" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M2 6L9 2" stroke="#080B14" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>

          {/* Main Headline */}
          <h2
            id="pricing-section-headline"
            className="font-display text-[clamp(2.1rem,4.5vw,3.9rem)] font-bold leading-[1.09] tracking-[-0.035em] text-[#080B14]"
          >
            <span className="block">Start creating more.</span>
            <span className="mt-1 block">
              Choose a plan that{' '}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10">grows with you.</span>
                {/* Hand-drawn neon-lime highlighter underline */}
                <svg
                  viewBox="0 0 340 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-2.5 left-0 w-full"
                >
                  <path
                    d="M5 13C78 7 184 5.5 334 9.5"
                    stroke="#D5FF4F"
                    strokeWidth="6.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M62 18.5C142 13.5 232 13.5 316 15.5"
                    stroke="#D5FF4F"
                    strokeWidth="4.4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h2>

          {/* Supporting Description */}
          <p className="mt-7 max-w-[660px] text-[16px] leading-[1.66] text-[#626779] sm:mt-8 sm:text-[17.5px]">
            Whether you’re creating clips for yourself or managing content for multiple
            brands, there’s a ClipVerse plan for the way you work.
          </p>
        </div>

        {/* ================================================================
            THREE PRICING CARDS
        ================================================================ */}
        <div className="relative mt-14 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {/* Playful neon-lime 3-ray doodle near top-right of Teams card */}
          <BurstAccent
            color="#D5FF4F"
            className="absolute -right-5 -top-9 hidden h-8 w-8 lg:block"
          />

          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isFeatured = plan.featured;

            return (
              <article
                key={plan.id}
                className={`group relative flex flex-col overflow-hidden rounded-[26px] p-7 transition-all duration-200 hover:-translate-y-1 sm:p-8 ${
                  isFeatured
                    ? 'border-[2px] border-[#A978FF] bg-[#0D1220] text-white shadow-[0_24px_60px_rgba(124,77,255,0.24),0_0_0_1px_rgba(169,120,255,0.2)] lg:-my-2'
                    : 'border border-[#E5E3EB] bg-white text-[#080B14] shadow-[0_14px_38px_rgba(15,23,42,0.05)] hover:border-[#D4D0E2]'
                } ${
                  index === 2
                    ? 'md:col-span-2 md:mx-auto md:w-full md:max-w-[460px] lg:col-span-1 lg:max-w-none'
                    : ''
                }`}
              >
                {/* Subtle purple internal glow wave on the featured Creator card */}
                {isFeatured && (
                  <>
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-14 top-1/3 h-56 w-56 rounded-full bg-[#A978FF]/22 blur-3xl"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-16 -left-12 h-48 w-48 rounded-full bg-[#6C38D6]/20 blur-3xl"
                    />
                  </>
                )}

                {/* Top Plan Identity Row */}
                <div className="relative z-10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] ${
                        isFeatured
                          ? 'bg-[#D5FF4F] text-[#080B14] shadow-[0_0_20px_rgba(213,255,79,0.3)]'
                          : 'bg-[#F0E7FF] text-[#080B14]'
                      }`}
                    >
                      <Icon className="h-[19px] w-[19px] stroke-[2.3]" />
                    </span>
                    <span
                      className={`font-display text-[19px] font-bold tracking-[-0.015em] ${
                        isFeatured ? 'text-white' : 'text-[#080B14]'
                      }`}
                    >
                      {plan.name}
                    </span>
                  </div>

                  {/* Most Popular Badge */}
                  {plan.badge && (
                    <div className="relative">
                      <svg
                        width="16"
                        height="11"
                        viewBox="0 0 18 12"
                        fill="none"
                        aria-hidden="true"
                        className="absolute -top-3 right-2.5 text-white/85"
                      >
                        <path
                          d="M2 10L4 3L9 7L14 3L16 10H2Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="inline-flex items-center whitespace-nowrap rounded-full bg-[#D5FF4F] px-3.5 py-1 font-display text-[11px] font-bold uppercase tracking-[0.06em] text-[#080B14]">
                        {plan.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Plan Heading & Description */}
                <div className="relative z-10 mt-5">
                  <h3
                    className={`font-display text-[24px] font-bold leading-tight tracking-[-0.025em] ${
                      isFeatured ? 'text-white' : 'text-[#080B14]'
                    }`}
                  >
                    {plan.heading}
                  </h3>
                  <p
                    className={`mt-2 min-h-[44px] text-[14.5px] leading-[1.58] ${
                      isFeatured ? 'text-[#C5CCD9]' : 'text-[#626779]'
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Price Block */}
                <div className="relative z-10 mt-6 flex items-baseline gap-1.5 border-b pb-6 border-current/10">
                  <span
                    className={`font-display text-[44px] font-bold leading-none tracking-[-0.03em] tabular-nums ${
                      isFeatured ? 'text-white' : 'text-[#080B14]'
                    }`}
                  >
                    ${plan.monthlyPrice}
                  </span>
                  <span
                    className={`text-[15px] font-medium ${
                      isFeatured ? 'text-[#AEB5C4]' : 'text-[#626779]'
                    }`}
                  >
                    {plan.pricePeriod}
                  </span>
                </div>

                {/* Feature List */}
                <ul className="relative z-10 mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 inline-flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[#D5FF4F] text-[#080B14]"
                      >
                        <Check className="h-3 w-3 stroke-[3.2]" />
                      </span>
                      <span
                        className={`text-[14.5px] leading-[1.45] ${
                          isFeatured ? 'text-[#E8ECF5]' : 'text-[#1D2230]'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="relative z-10 mt-8 pt-1">
                  <button
                    type="button"
                    onClick={() => onSelectPlan?.(plan.id, plan.ctaLabel)}
                    className={`inline-flex min-h-[48px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 font-display text-[15px] font-bold transition-all duration-150 active:scale-[0.98] cursor-pointer ${
                      isFeatured
                        ? 'bg-[#D5FF4F] text-[#080B14] shadow-[0_0_26px_rgba(213,255,79,0.28)] hover:bg-[#E2FF7A] hover:shadow-[0_0_34px_rgba(213,255,79,0.42)]'
                        : 'border border-[#080B14]/75 bg-white text-[#080B14] hover:bg-[#080B14] hover:text-white'
                    }`}
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowRight className="h-4 w-4 stroke-[2.4]" aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* ================================================================
            BOTTOM HORIZONTAL CLOSING CTA AREA
        ================================================================ */}
        <div className="mx-auto mt-14 max-w-[1040px] border-t border-[#E5E3EB] pt-10 sm:mt-16 lg:pt-11">
          <div className="flex flex-col items-center justify-between gap-7 text-center lg:flex-row lg:gap-10 lg:text-left">
            {/* Left Copy Block */}
            <div className="relative flex items-start gap-3">
              <BurstAccent
                color="#080B14"
                className="-ml-4 -mt-2 hidden h-6 w-6 shrink-0 -scale-x-100 lg:block"
              />
              <div>
                <h3 className="font-display text-[25px] font-bold leading-tight tracking-[-0.025em] text-[#080B14] sm:text-[30px]">
                  More content.{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10">Less busywork.</span>
                    <svg
                      viewBox="0 0 230 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-1.5 left-0 w-full"
                    >
                      <path
                        d="M4 10C62 5.5 148 5 224 8.5"
                        stroke="#D5FF4F"
                        strokeWidth="5.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M42 14.5C108 11.5 168 11.5 212 13.5"
                        stroke="#D5FF4F"
                        strokeWidth="3.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-[#626779]">
                  Start with what you need today. Upgrade when you’re ready to do more.
                </p>
              </div>
            </div>

            {/* Subtle Vertical Divider on Desktop */}
            <span
              aria-hidden="true"
              className="hidden h-12 w-px shrink-0 bg-[#E5E3EB] lg:block"
            />

            {/* Right Neon-Lime Play CTA */}
            <button
              type="button"
              onClick={onStartCreating}
              className="inline-flex min-h-[54px] shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-[#D5FF4F] px-7 py-3.5 font-display text-[15.5px] font-bold text-[#080B14] shadow-[0_12px_30px_rgba(213,255,79,0.4)] transition-all duration-150 hover:bg-[#E2FF7A] hover:shadow-[0_14px_36px_rgba(213,255,79,0.52)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#080B14] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF9F6] cursor-pointer"
            >
              <Play className="h-4 w-4 shrink-0 stroke-[2.4]" aria-hidden="true" />
              <span>Start Creating with ClipVerse</span>
              <ArrowRight className="h-4 w-4 shrink-0 stroke-[2.5]" aria-hidden="true" />
            </button>
          </div>

          {/* Transparent Positioning & Placeholder Pricing Note */}
          <p className="mt-8 text-center text-[12px] leading-relaxed text-[#626779]/85">
            *“Without limits” is a positioning placeholder, not a confirmed unlimited usage
            guarantee. Displayed prices are placeholder visual references and remain subject to
            final plan tiers.
          </p>
        </div>
      </div>
    </section>
  );
}
