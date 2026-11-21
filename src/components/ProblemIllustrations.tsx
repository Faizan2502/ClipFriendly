import { useState } from 'react';
import { Scissors, Scan, Calendar, Play, MoreHorizontal } from 'lucide-react';

function ThreeRayBurst({
  color,
  className,
}: {
  color: string;
  className?: string;
}) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`pointer-events-none ${className ?? ''}`}
    >
      <path d="M5 10L8.5 2.5" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
      <path d="M11.5 14L19.5 7.5" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
      <path d="M15 20.5L24.5 18.5" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

function VectorPointer({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`pointer-events-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.65)] ${className ?? ''}`}
    >
      <path
        d="M3 2.5L16.8 11.4L10.3 12.6L7.3 18.8L3 2.5Z"
        fill="#0B0F1C"
        stroke="#FFFFFF"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const WAVEFORM_BARS = [
  16, 28, 20, 38, 26, 46, 22, 18, 32, 48, 30, 20, 42, 62, 78, 68, 86, 74, 58,
  40, 24, 34, 22, 44, 28, 18, 36, 24, 30, 16, 26, 20,
];

/**
 * Card 01 Visual: Long-form 2:00:00 podcast video player + waveform timeline
 * with an elusive highlighted clip window.
 */
export function TimelineIllustration() {
  const [selectedSegment, setSelectedSegment] = useState<'best' | 'intro' | 'outro'>('best');

  const segmentConfig = {
    intro: { left: '12%', width: '22%', time: '00:18:10', progress: '22%', cursorLeft: '24%' },
    best: { left: '34%', width: '31%', time: '00:42:18', progress: '54%', cursorLeft: '54%' },
    outro: { left: '68%', width: '20%', time: '01:28:40', progress: '78%', cursorLeft: '78%' },
  }[selectedSegment];

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center px-2 pt-2">
      {/* Pink 3-ray burst top-right matching reference */}
      <ThreeRayBurst color="#F58FBD" className="absolute right-0 top-1" />

      {/* Video Player Viewport */}
      <div className="relative w-full max-w-[274px] overflow-hidden rounded-[14px] border border-white/15 bg-[#0A0E1B] shadow-[0_14px_34px_rgba(0,0,0,0.55)]">
        {/* Stylized Studio Podcast Frame */}
        <div className="relative h-[112px] w-full overflow-hidden bg-[radial-gradient(ellipse_80%_90%_at_52%_38%,#242A3E_0%,#111524_62%,#090C16_100%)]">
          {/* Warm studio ambient shelf light left */}
          <div
            aria-hidden="true"
            className="absolute -left-4 top-2 h-24 w-24 rounded-full bg-[#FFAA45]/20 blur-xl"
          />
          {/* Cool rim light right */}
          <div
            aria-hidden="true"
            className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-[#83D7FF]/12 blur-xl"
          />

          {/* Subtle blurred studio shelves background */}
          <svg
            viewBox="0 0 274 112"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
            aria-hidden="true"
          >
            {/* Studio wall panels */}
            <rect x="14" y="14" width="44" height="58" rx="4" fill="#1B2133" fillOpacity="0.7" />
            <rect x="20" y="24" width="32" height="4" rx="2" fill="#2E3750" />
            <rect x="20" y="40" width="32" height="4" rx="2" fill="#2E3750" />
            <rect x="20" y="56" width="32" height="4" rx="2" fill="#2E3750" />

            <rect x="216" y="14" width="44" height="58" rx="4" fill="#181E30" fillOpacity="0.65" />
            <circle cx="238" cy="36" r="10" fill="#262E45" />

            {/* Speaker silhouette with studio headphones & podcast mic */}
            {/* Shoulders */}
            <path
              d="M84 112C88 86 105 74 132 74C159 74 176 86 180 112H84Z"
              fill="#121725"
              stroke="#2C354D"
              strokeWidth="1.2"
            />
            {/* Neck */}
            <rect x="124" y="61" width="16" height="15" rx="6" fill="#B98A6C" fillOpacity="0.85" />
            {/* Headphone band */}
            <path
              d="M107 43C107 27 118 17 132 17C146 17 157 27 157 43"
              stroke="#22293C"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            {/* Head */}
            <ellipse cx="132" cy="43" rx="18" ry="21" fill="#C99676" fillOpacity="0.92" />
            {/* Hair / beard silhouette */}
            <path
              d="M114 38C115 24 124 20 133 20C143 20 150 26 150 38C146 31 139 29 132 29C124 29 118 32 114 38Z"
              fill="#171B27"
            />
            <path
              d="M116 49C118 59 124 64 132 64C140 64 146 59 148 49C144 55 138 57 132 57C126 57 120 55 116 49Z"
              fill="#191D2A"
              fillOpacity="0.85"
            />
            {/* Headphone earcups */}
            <rect x="105" y="36" width="9" height="18" rx="4.5" fill="#1D2436" stroke="#3B4562" strokeWidth="1" />
            <rect x="150" y="36" width="9" height="18" rx="4.5" fill="#1D2436" stroke="#3B4562" strokeWidth="1" />

            {/* Studio boom mic */}
            <path d="M188 112L166 78" stroke="#36405B" strokeWidth="3.5" strokeLinecap="round" />
            <rect
              x="151"
              y="62"
              width="14"
              height="24"
              rx="7"
              transform="rotate(-24 151 62)"
              fill="#1A2032"
              stroke="#4C587A"
              strokeWidth="1.2"
            />
            {/* Soft warm glow near mic */}
            <circle cx="158" cy="70" r="2" fill="#D5FF4F" />
          </svg>

          {/* Bottom player scrim */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-11 bg-gradient-to-t from-[#070A12]/95 via-[#070A12]/65 to-transparent"
          />

          {/* Player Controls Overlay */}
          <div className="absolute inset-x-3 bottom-2.5 flex items-center gap-2.5">
            <Play className="h-3.5 w-3.5 shrink-0 fill-white text-white" aria-hidden="true" />
            <div className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/25">
              <div
                style={{ width: segmentConfig.progress }}
                className="h-full rounded-full bg-white transition-all duration-300"
              />
            </div>
            <span className="font-mono text-[10px] font-medium tabular-nums text-white/90">
              2:00:00
            </span>
          </div>
        </div>
      </div>

      {/* Long-Form Timeline Scrubber Track */}
      <div className="relative mt-3.5 w-full max-w-[274px]">
        <div
          role="group"
          aria-label="Long-form video timeline segments"
          className="relative flex h-10 w-full items-center overflow-hidden rounded-[10px] border border-[#283044] bg-[#141A2C] px-2"
        >
          {/* Subtle audio waveform bars across the full 2-hour track */}
          <div
            aria-hidden="true"
            className="flex h-full w-full items-center justify-between gap-[3px] opacity-35"
          >
            {WAVEFORM_BARS.map((height, idx) => (
              <span
                key={idx}
                style={{ height: `${Math.max(16, Math.round(height * 0.45))}%` }}
                className="w-[3px] rounded-full bg-[#AEB5C4]"
              />
            ))}
          </div>

          {/* Clickable chapter markers along timeline */}
          <button
            type="button"
            onClick={() => setSelectedSegment('intro')}
            aria-label="Inspect intro section 00:18:10"
            className="absolute left-[18%] top-2 bottom-2 w-1.5 -translate-x-1/2 cursor-pointer rounded-full bg-white/50 transition-colors hover:bg-white"
          />
          <button
            type="button"
            onClick={() => setSelectedSegment('best')}
            aria-label="Inspect highlighted best clip 00:42:18"
            className="absolute left-[50%] top-2 bottom-2 w-1.5 -translate-x-1/2 cursor-pointer rounded-full bg-white/40 transition-colors hover:bg-white"
          />
          <button
            type="button"
            onClick={() => setSelectedSegment('outro')}
            aria-label="Inspect late conversation section 01:28:40"
            className="absolute left-[84%] top-2 bottom-2 w-1.5 -translate-x-1/2 cursor-pointer rounded-full bg-white/50 transition-colors hover:bg-white"
          />

          {/* Highlighted Golden Clip Range (Purple) */}
          <button
            type="button"
            onClick={() =>
              setSelectedSegment((curr) =>
                curr === 'best' ? 'outro' : curr === 'outro' ? 'intro' : 'best'
              )
            }
            aria-label={`Selected clip window at ${segmentConfig.time}`}
            style={{ left: segmentConfig.left, width: segmentConfig.width }}
            className="absolute inset-y-0.5 flex cursor-pointer items-center justify-between rounded-[8px] border-2 border-white bg-[#A978FF]/90 px-1 shadow-[0_0_24px_rgba(169,120,255,0.55)] transition-all duration-300"
          >
            <span className="h-4 w-[2.5px] rounded-full bg-white" />
            <span className="h-full w-px bg-white/35" />
            <span className="h-4 w-[2.5px] rounded-full bg-white" />
          </button>
        </div>

        {/* Crisp Vector Cursor Pointer hovering on the selected clip */}
        <div
          style={{ left: segmentConfig.cursorLeft }}
          className="pointer-events-none absolute -bottom-3 transition-all duration-300"
        >
          <VectorPointer />
        </div>
      </div>
    </div>
  );
}

/**
 * Card 02 Visual: Three colourful tilted floating tool pills (Trim, Caption, Resize)
 * with cursor pointer and neon-lime burst.
 */
export function ToolsIllustration() {
  const [activeTool, setActiveTool] = useState<'trim' | 'caption' | 'resize'>('caption');

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      {/* Neon lime 3-ray burst right */}
      <ThreeRayBurst color="#D5FF4F" className="absolute right-3 top-6" />

      <div className="relative flex flex-col items-center gap-2.5">
        {/* Trim — Purple */}
        <button
          type="button"
          onClick={() => setActiveTool('trim')}
          aria-pressed={activeTool === 'trim'}
          className={`group relative -translate-x-5 -rotate-[5.5deg] inline-flex items-center gap-2.5 rounded-[16px] bg-[#A978FF] px-5 py-2.5 text-[#080B14] shadow-[0_12px_32px_rgba(169,120,255,0.34)] transition-transform duration-200 hover:scale-105 cursor-pointer ${
            activeTool === 'trim' ? 'ring-2 ring-white/90' : ''
          }`}
        >
          <Scissors className="h-[19px] w-[19px] stroke-[2.4]" aria-hidden="true" />
          <span className="font-display text-[17px] font-bold tracking-[-0.02em]">
            Trim
          </span>
        </button>

        {/* Caption — Sky Blue */}
        <div className="relative translate-x-4 -rotate-[3.5deg]">
          <button
            type="button"
            onClick={() => setActiveTool('caption')}
            aria-pressed={activeTool === 'caption'}
            className={`group relative inline-flex items-center gap-2.5 rounded-[16px] bg-[#83D7FF] px-6 py-3 text-[#080B14] shadow-[0_14px_38px_rgba(131,215,255,0.38)] transition-transform duration-200 hover:scale-105 cursor-pointer ${
              activeTool === 'caption' ? 'ring-2 ring-white/90' : ''
            }`}
          >
            <span
              aria-hidden="true"
              className="inline-flex h-[20px] items-center justify-center rounded-[5px] border-[2px] border-[#080B14] px-1 font-display text-[10px] font-extrabold leading-none tracking-tight"
            >
              CC
            </span>
            <span className="font-display text-[18px] font-bold tracking-[-0.02em]">
              Caption
            </span>
          </button>

          {/* Cursor clicking Caption */}
          <VectorPointer className="absolute -bottom-3.5 right-3" />
        </div>

        {/* Resize — Orange */}
        <button
          type="button"
          onClick={() => setActiveTool('resize')}
          aria-pressed={activeTool === 'resize'}
          className={`group relative -translate-x-5 rotate-[4deg] inline-flex items-center gap-2.5 rounded-[16px] bg-[#FFAA45] px-5 py-2.5 text-[#080B14] shadow-[0_12px_32px_rgba(255,170,69,0.34)] transition-transform duration-200 hover:scale-105 cursor-pointer ${
            activeTool === 'resize' ? 'ring-2 ring-white/90' : ''
          }`}
        >
          <Scan className="h-[19px] w-[19px] stroke-[2.4]" aria-hidden="true" />
          <span className="font-display text-[17px] font-bold tracking-[-0.02em]">
            Resize
          </span>
        </button>
      </div>
    </div>
  );
}

/**
 * Card 03 Visual: Content Schedule mini-calendar connected via curved purple arrow
 * to YouTube, Instagram, and pending publishing slots.
 */
export function ScheduleIllustration() {
  const [selectedPlatform, setSelectedPlatform] = useState<'youtube' | 'instagram' | 'more'>('youtube');

  return (
    <div className="relative flex h-full w-full items-center justify-center px-1">
      {/* Purple 3-ray burst bottom-right matching reference */}
      <ThreeRayBurst color="#A978FF" className="absolute -bottom-2 right-0" />

      <div className="flex w-full max-w-[300px] items-center justify-between gap-2">
        {/* Dark Content Schedule Calendar Card */}
        <div className="relative flex-1 rounded-[14px] border border-[#283044] bg-[#0B101E] p-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.45)]">
          <div className="mb-3 flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 text-[#D5FF4F]" aria-hidden="true" />
            <span className="font-display text-[12px] font-semibold tracking-[-0.01em] text-white">
              Content Schedule
            </span>
          </div>

          {/* 4-row schedule grid matching reference */}
          <div className="grid grid-cols-3 gap-1.5" aria-hidden="true">
            {/* Row 1 */}
            <div className="h-[15px] rounded-[4px] bg-[#1A2136]" />
            <div className="h-[15px] rounded-[4px] bg-[#1A2136]" />
            <div className="h-[15px] rounded-[4px] bg-[#1A2136]" />

            {/* Row 2 — Purple block on right */}
            <div className="h-[15px] rounded-[4px] bg-[#1A2136]" />
            <div className="h-[15px] rounded-[4px] bg-[#1A2136]" />
            <div
              className={`h-[15px] rounded-[4px] bg-[#A978FF] shadow-[0_0_12px_rgba(169,120,255,0.5)] transition-opacity ${
                selectedPlatform === 'youtube' ? 'opacity-100' : 'opacity-80'
              }`}
            />

            {/* Row 3 — Purple block center */}
            <div className="h-[15px] rounded-[4px] bg-[#1A2136]" />
            <div
              className={`h-[15px] rounded-[4px] bg-[#A978FF] shadow-[0_0_12px_rgba(169,120,255,0.5)] transition-opacity ${
                selectedPlatform === 'instagram' ? 'opacity-100' : 'opacity-80'
              }`}
            />
            <div className="h-[15px] rounded-[4px] bg-[#1A2136]" />

            {/* Row 4 */}
            <div className="h-[15px] rounded-[4px] bg-[#1A2136]" />
            <div className="h-[15px] rounded-[4px] bg-[#1A2136]" />
            <div className="h-[15px] rounded-[4px] bg-[#1A2136]" />
          </div>
        </div>

        {/* Curved Purple Connector Arrow */}
        <svg
          width="36"
          height="32"
          viewBox="0 0 36 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="-mx-2 shrink-0 self-start mt-4"
        >
          <path
            d="M3 24C6 15 15 11 18 16C20 19.5 16 21.5 14 19C12 16.5 18 10 31 10"
            stroke="#A978FF"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M26 5.5L32 10L26.5 14.5"
            stroke="#A978FF"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Right Publishing Platforms Column */}
        <div className="flex shrink-0 flex-col gap-2.5">
          {/* YouTube */}
          <button
            type="button"
            onClick={() => setSelectedPlatform('youtube')}
            aria-label="YouTube Shorts publishing channel"
            aria-pressed={selectedPlatform === 'youtube'}
            className={`flex h-[38px] w-[38px] items-center justify-center rounded-[11px] bg-[#FF2424] shadow-[0_6px_18px_rgba(255,36,36,0.38)] transition-transform duration-150 hover:scale-105 cursor-pointer ${
              selectedPlatform === 'youtube' ? 'ring-2 ring-white/80' : ''
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M5 3.4L12.6 8L5 12.6V3.4Z" fill="white" />
            </svg>
          </button>

          {/* Instagram */}
          <button
            type="button"
            onClick={() => setSelectedPlatform('instagram')}
            aria-label="Instagram Reels publishing channel"
            aria-pressed={selectedPlatform === 'instagram'}
            className={`flex h-[38px] w-[38px] items-center justify-center rounded-[11px] bg-gradient-to-tr from-[#FFAA45] via-[#F58FBD] to-[#A978FF] shadow-[0_6px_18px_rgba(245,143,189,0.34)] transition-transform duration-150 hover:scale-105 cursor-pointer ${
              selectedPlatform === 'instagram' ? 'ring-2 ring-white/80' : ''
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect
                x="3.5"
                y="3.5"
                width="17"
                height="17"
                rx="5"
                stroke="white"
                strokeWidth="2.2"
              />
              <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2.2" />
              <circle cx="17.2" cy="6.8" r="1.2" fill="white" />
            </svg>
          </button>

          {/* Pending / More */}
          <button
            type="button"
            onClick={() => setSelectedPlatform('more')}
            aria-label="More channels waiting on approval"
            aria-pressed={selectedPlatform === 'more'}
            className={`flex h-[38px] w-[38px] items-center justify-center rounded-[11px] border border-dashed border-white/25 bg-white/[0.03] text-white/80 transition-all duration-150 hover:border-white/45 hover:text-white cursor-pointer ${
              selectedPlatform === 'more' ? 'border-[#A978FF] bg-[#A978FF]/15 text-white' : ''
            }`}
          >
            <MoreHorizontal className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
