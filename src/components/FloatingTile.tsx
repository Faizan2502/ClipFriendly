import type { CSSProperties } from 'react';
import type { LucideIcon } from 'lucide-react';

export interface FloatingTileConfig {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  glowColor: string;
  rotateDeg: number;
  floatDuration: string;
  floatDelay: string;
  reverse?: boolean;
  positionClass: string;
}

interface FloatingTileProps {
  tile: FloatingTileConfig;
  isActive: boolean;
  onToggle: (id: string) => void;
  compact?: boolean;
}

export function FloatingTile({
  tile,
  isActive,
  onToggle,
  compact = false,
}: FloatingTileProps) {
  const Icon = tile.icon;

  if (compact) {
    return (
      <button
        type="button"
        onClick={() => onToggle(tile.id)}
        style={{
          backgroundColor: tile.bgColor,
          boxShadow: isActive
            ? `0 0 0 2px #FFFFFF, 0 8px 24px ${tile.glowColor}`
            : `0 6px 20px ${tile.glowColor}`,
        }}
        className="group inline-flex min-h-[40px] items-center gap-2 rounded-2xl px-3.5 py-2 text-[#080B14] transition-transform duration-150 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
        aria-pressed={isActive}
      >
        <Icon className="h-4 w-4 shrink-0 stroke-[2.2]" aria-hidden="true" />
        <span className="font-display text-[13px] font-bold tracking-[-0.01em] whitespace-nowrap">
          {tile.label}
        </span>
      </button>
    );
  }

  const floatStyle = {
    '--tile-rotate': `${tile.rotateDeg}deg`,
    '--float-duration': tile.floatDuration,
    '--float-delay': tile.floatDelay,
  } as CSSProperties;

  return (
    <div
      className={`pointer-events-auto absolute z-20 hidden lg:block ${tile.positionClass}`}
    >
      <div
        style={floatStyle}
        className={tile.reverse ? 'animate-float-reverse' : 'animate-float-slow'}
      >
        <div className="relative flex flex-col items-center">
          {/* Soft colored ambient halo matching reference screenshot */}
          <span
            aria-hidden="true"
            style={{ backgroundColor: tile.bgColor }}
            className="pointer-events-none absolute -inset-3 rounded-full opacity-25 blur-2xl"
          />

          <button
            type="button"
            onClick={() => onToggle(tile.id)}
            aria-label={`${tile.label}: ${tile.description}`}
            aria-pressed={isActive}
            style={{
              backgroundColor: tile.bgColor,
              boxShadow: isActive
                ? `0 0 0 2.5px #FFFFFF, 0 18px 48px ${tile.glowColor}`
                : `0 14px 40px ${tile.glowColor}`,
            }}
            className="group relative flex h-[76px] w-[76px] flex-col items-center justify-center gap-1.5 rounded-[22px] text-[#080B14] transition-transform duration-200 ease-out hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B14] xl:h-[88px] xl:w-[88px] 2xl:h-[94px] 2xl:w-[94px] cursor-pointer"
          >
            <Icon
              className="h-6 w-6 stroke-[2.2] transition-transform duration-200 group-hover:scale-105 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8"
              aria-hidden="true"
            />
            <span className="font-display text-[12px] font-bold leading-none tracking-[-0.01em] xl:text-[13px] 2xl:text-[14px]">
              {tile.label}
            </span>
          </button>

          {/* Subtle interactive tooltip shown when clicked */}
          {isActive && (
            <div
              role="status"
              className="relative z-30 mt-3 w-44 rounded-xl border border-white/15 bg-[#101626]/95 px-3 py-2 text-center text-[12px] leading-snug text-[#E5E9F2] shadow-xl backdrop-blur-md"
            >
              {tile.description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
