import { Check } from 'lucide-react';

const FEATURES = [
  'AI Clipping',
  'Video Editing',
  'Approval Flow',
  'Multi-Platform Publishing',
] as const;

export function FeatureStrip() {
  return (
    <ul
      aria-label="Key platform capabilities"
      className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-0"
    >
      {FEATURES.map((feature, index) => (
        <li key={feature} className="flex items-center">
          {index > 0 && (
            <span
              aria-hidden="true"
              className="mx-5 hidden h-4 w-px bg-white/15 sm:inline-block lg:mx-7"
            />
          )}
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="inline-flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-[#D5FF4F] text-[#080B14]"
            >
              <Check className="h-3 w-3 stroke-[3.2]" />
            </span>
            <span className="whitespace-nowrap text-[14px] font-medium text-[#E8ECF5] sm:text-[15px]">
              {feature}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
