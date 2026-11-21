import { useState } from 'react';
import {
  Sparkles,
  Scissors,
  Captions,
  Palette,
  Maximize2,
  Check,
  Calendar,
  Play,
  TrendingUp,
} from 'lucide-react';

function AccentBurst({
  color,
  className,
}: {
  color: string;
  className?: string;
}) {
  return (
    <svg
      width="22"
      height="22"
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

/**
 * Easy-to-replace placeholder creator video thumbnail.
 * Pass `imageSrc` later to swap in real video frames or creator photography.
 */
interface CreatorThumbnailProps {
  imageSrc?: string;
  alt?: string;
  aspect?: 'landscape' | 'portrait' | 'mini';
  duration?: string;
  progressPercent?: number;
  captionOverlay?: string;
  showBrandBadge?: boolean;
  className?: string;
}

export function CreatorThumbnailPlaceholder({
  imageSrc,
  alt = 'Creator video preview',
  aspect = 'landscape',
  duration,
  progressPercent = 48,
  captionOverlay,
  showBrandBadge = false,
  className = '',
}: CreatorThumbnailProps) {
  const sizeClass =
    aspect === 'portrait'
      ? 'h-[196px] w-[118px] sm:h-[208px] sm:w-[126px]'
      : aspect === 'mini'
        ? 'h-[40px] w-[62px]'
        : 'h-[104px] w-full';

  return (
    <div
      className={`relative overflow-hidden bg-[radial-gradient(ellipse_85%_85%_at_50%_35%,#272E44_0%,#121728_62%,#080B14_100%)] ${sizeClass} ${className}`}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={alt}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover"
        />
      ) : (
        <>
          {/* Warm studio key light & cool rim light */}
          <div
            aria-hidden="true"
            className="absolute -left-3 top-1 h-16 w-16 rounded-full bg-[#FFAA45]/20 blur-lg"
          />
          <div
            aria-hidden="true"
            className="absolute -right-3 top-2 h-16 w-16 rounded-full bg-[#A978FF]/18 blur-lg"
          />

          {/* Clean stylized podcast creator frame */}
          <svg
            viewBox={aspect === 'portrait' ? '0 0 130 210' : '0 0 180 104'}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
            aria-hidden="true"
          >
            {aspect === 'portrait' ? (
              <>
                <rect x="10" y="16" width="28" height="62" rx="4" fill="#1C2338" fillOpacity="0.65" />
                <rect x="94" y="20" width="26" height="54" rx="4" fill="#1A2034" fillOpacity="0.6" />
                {/* Shoulders */}
                <path
                  d="M16 210C22 150 38 128 65 128C92 128 108 150 114 210H16Z"
                  fill="#121725"
                  stroke="#2C354D"
                  strokeWidth="1.4"
                />
                {/* Neck */}
                <rect x="55" y="108" width="20" height="24" rx="8" fill="#B98A6C" fillOpacity="0.88" />
                {/* Headphone band */}
                <path
                  d="M34 84C34 59 48 44 65 44C82 44 96 59 96 84"
                  stroke="#232B40"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                />
                {/* Head */}
                <ellipse cx="65" cy="84" rx="23" ry="28" fill="#CCA080" fillOpacity="0.95" />
                {/* Hair & beard */}
                <path
                  d="M42 78C44 58 54 50 66 50C79 50 87 58 88 78C82 68 74 65 65 65C55 65 47 69 42 78Z"
                  fill="#151926"
                />
                <path
                  d="M45 92C48 106 56 112 65 112C74 112 82 106 85 92C80 99 73 102 65 102C57 102 50 99 45 92Z"
                  fill="#171C2A"
                  fillOpacity="0.88"
                />
                {/* Headphone cups */}
                <rect x="31" y="75" width="11" height="24" rx="5.5" fill="#1E2538" stroke="#3F4A6A" strokeWidth="1.2" />
                <rect x="88" y="75" width="11" height="24" rx="5.5" fill="#1E2538" stroke="#3F4A6A" strokeWidth="1.2" />
                {/* Studio microphone */}
                <path d="M114 196L92 146" stroke="#3B4663" strokeWidth="4" strokeLinecap="round" />
                <rect
                  x="78"
                  y="118"
                  width="18"
                  height="32"
                  rx="9"
                  transform="rotate(-20 78 118)"
                  fill="#1A2133"
                  stroke="#536084"
                  strokeWidth="1.4"
                />
                <circle cx="88" cy="128" r="2.2" fill="#D5FF4F" />
              </>
            ) : (
              <>
                <rect x="10" y="12" width="32" height="52" rx="4" fill="#1C2338" fillOpacity="0.65" />
                <rect x="138" y="12" width="32" height="52" rx="4" fill="#1A2034" fillOpacity="0.6" />
                {/* Shoulders */}
                <path
                  d="M46 104C50 80 65 69 90 69C115 69 130 80 134 104H46Z"
                  fill="#121725"
                  stroke="#2C354D"
                  strokeWidth="1.2"
                />
                {/* Neck */}
                <rect x="82" y="57" width="16" height="14" rx="5" fill="#B98A6C" fillOpacity="0.86" />
                {/* Headphone band */}
                <path
                  d="M66 41C66 25 76 16 90 16C104 16 114 25 114 41"
                  stroke="#232B40"
                  strokeWidth="4.2"
                  strokeLinecap="round"
                />
                {/* Head */}
                <ellipse cx="90" cy="41" rx="17" ry="20" fill="#CCA080" fillOpacity="0.94" />
                {/* Hair & beard */}
                <path
                  d="M73 36C74 23 82 19 91 19C100 19 107 24 107 36C103 29 97 27 90 27C83 27 77 30 73 36Z"
                  fill="#151926"
                />
                <path
                  d="M75 46C77 56 83 61 90 61C97 61 103 56 105 46C101 52 96 54 90 54C84 54 79 52 75 46Z"
                  fill="#171C2A"
                  fillOpacity="0.86"
                />
                {/* Headphone cups */}
                <rect x="64" y="34" width="8.5" height="17" rx="4" fill="#1E2538" stroke="#3F4A6A" strokeWidth="1" />
                <rect x="107.5" y="34" width="8.5" height="17" rx="4" fill="#1E2538" stroke="#3F4A6A" strokeWidth="1" />
                {/* Mic */}
                <path d="M138 104L120 74" stroke="#3B4663" strokeWidth="3.2" strokeLinecap="round" />
                <rect
                  x="107"
                  y="58"
                  width="13"
                  height="22"
                  rx="6.5"
                  transform="rotate(-24 107 58)"
                  fill="#1A2133"
                  stroke="#536084"
                  strokeWidth="1.2"
                />
              </>
            )}
          </svg>
        </>
      )}

      {/* Optional Brand Watermark Pill when Branding tool is active */}
      {showBrandBadge && (
        <span className="absolute right-2 top-2 rounded-md bg-[#D5FF4F] px-1.5 py-0.5 font-display text-[9px] font-extrabold tracking-tight text-[#080B14] shadow">
          CLIPVERSE
        </span>
      )}

      {/* Bottom dark legibility scrim */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#060912]/95 via-[#060912]/65 to-transparent"
      />

      {/* Optional Caption Overlay (Card 02) */}
      {captionOverlay && (
        <div className="absolute inset-x-2 bottom-7 text-center">
          <span className="inline-block rounded-md bg-black/55 px-2 py-0.5 font-display text-[11px] font-bold leading-tight text-white shadow-sm backdrop-blur-[2px]">
            {captionOverlay}
          </span>
        </div>
      )}

      {/* Mini playback bar */}
      {duration && (
        <div
          className={`absolute inset-x-2 flex items-center gap-1.5 ${
            aspect === 'mini' ? 'bottom-1' : 'bottom-2'
          }`}
        >
          <Play
            className={`${
              aspect === 'mini' ? 'h-2.5 w-2.5' : 'h-3 w-3'
            } shrink-0 fill-white text-white`}
            aria-hidden="true"
          />
          {aspect !== 'mini' && (
            <div className="h-[2.5px] flex-1 overflow-hidden rounded-full bg-white/25">
              <div
                style={{ width: `${progressPercent}%` }}
                className="h-full rounded-full bg-white transition-all duration-300"
              />
            </div>
          )}
          <span
            className={`ml-auto font-mono font-medium tabular-nums text-white/95 ${
              aspect === 'mini' ? 'text-[8.5px]' : 'text-[9.5px]'
            }`}
          >
            {duration}
          </span>
        </div>
      )}
    </div>
  );
}

const TIMELINE_WAVES = [
  18, 30, 22, 42, 66, 52, 26, 20, 34, 24, 18, 48, 72, 84, 70, 56, 36, 22, 32,
  26, 44, 30, 20, 38, 26, 22, 34, 18,
];

const AI_MOMENTS = [
  { id: 'm1', range: '12:34 – 13:10', progress: 22, left: '10%', width: '16%' },
  { id: 'm2', range: '28:05 – 29:02', progress: 50, left: '38%', width: '24%' },
  { id: 'm3', range: '47:18 – 47:56', progress: 78, left: '72%', width: '16%' },
] as const;

/**
 * Step 01 Visual: Video preview + AI Analysis badge + clickable timestamps + timeline moments.
 */
export function FindMomentsVisual() {
  const [selectedMomentId, setSelectedMomentId] = useState<'m1' | 'm2' | 'm3'>('m2');
  const activeMoment =
    AI_MOMENTS.find((m) => m.id === selectedMomentId) ?? AI_MOMENTS[1];

  return (
    <div className="relative w-full rounded-[18px] border border-[#283044] bg-[#090D1A]/95 p-3.5 shadow-[0_14px_34px_rgba(0,0,0,0.45)]">
      <AccentBurst color="#A978FF" className="absolute -right-2 -top-3.5" />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1.3fr_1fr] lg:grid-cols-1 xl:grid-cols-[1.28fr_1fr]">
        {/* Video preview */}
        <CreatorThumbnailPlaceholder
          aspect="landscape"
          duration="2:00:00"
          progressPercent={activeMoment.progress}
          className="rounded-[12px] border border-white/12"
        />

        {/* AI Analysis label + clickable timestamp chips */}
        <div className="flex flex-col justify-between gap-2">
          <div className="inline-flex w-full items-center justify-center gap-1.5 rounded-[10px] bg-[#A978FF] px-2.5 py-1.5 font-display text-[11px] font-bold text-[#080B14] shadow-[0_6px_18px_rgba(169,120,255,0.35)]">
            <Sparkles className="h-3.5 w-3.5 stroke-[2.4]" aria-hidden="true" />
            <span>AI Analysis</span>
          </div>

          <div className="flex flex-col gap-1.5">
            {AI_MOMENTS.map((moment) => {
              const isSelected = moment.id === selectedMomentId;
              return (
                <button
                  key={moment.id}
                  type="button"
                  onClick={() => setSelectedMomentId(moment.id)}
                  aria-pressed={isSelected}
                  className={`w-full rounded-[9px] px-2.5 py-1.5 font-mono text-[11px] font-semibold tabular-nums transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-[#D5FF4F] text-[#080B14] shadow-[0_0_18px_rgba(213,255,79,0.3)]'
                      : 'border border-[#283044] bg-[#13192B] text-[#C8CFDD] hover:border-white/25 hover:text-white'
                  }`}
                >
                  {moment.range}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Waveform Timeline with Highlighted Purple Moments */}
      <div className="relative mt-3 flex h-8 w-full items-center overflow-hidden rounded-[9px] border border-[#283044] bg-[#121728] px-2">
        <div
          aria-hidden="true"
          className="flex h-full w-full items-center justify-between gap-[3px] opacity-35"
        >
          {TIMELINE_WAVES.map((bar, i) => (
            <span
              key={i}
              style={{ height: `${Math.max(16, Math.round(bar * 0.48))}%` }}
              className="w-[2.5px] rounded-full bg-[#AEB5C4]"
            />
          ))}
        </div>

        {/* Highlighted surfaced moments */}
        {AI_MOMENTS.slice(0, 2).map((moment) => {
          const isCurrent = moment.id === selectedMomentId;
          return (
            <button
              key={moment.id}
              type="button"
              onClick={() => setSelectedMomentId(moment.id)}
              aria-label={`Jump to moment ${moment.range}`}
              style={{ left: moment.left, width: moment.width }}
              className={`absolute inset-y-0.5 flex cursor-pointer items-center justify-between rounded-[7px] border px-0.5 transition-all duration-200 ${
                isCurrent
                  ? 'border-white bg-[#A978FF] shadow-[0_0_18px_rgba(169,120,255,0.65)]'
                  : 'border-white/60 bg-[#A978FF]/70 hover:bg-[#A978FF]/90'
              }`}
            >
              <span className="h-3.5 w-[2px] rounded-full bg-white" />
              <span className="h-3.5 w-[2px] rounded-full bg-white" />
            </button>
          );
        })}

        {selectedMomentId === 'm3' && (
          <span
            style={{ left: activeMoment.left, width: activeMoment.width }}
            className="pointer-events-none absolute inset-y-0.5 flex items-center justify-between rounded-[7px] border border-white bg-[#A978FF] px-0.5 shadow-[0_0_18px_rgba(169,120,255,0.65)]"
          >
            <span className="h-3.5 w-[2px] rounded-full bg-white" />
            <span className="h-3.5 w-[2px] rounded-full bg-white" />
          </span>
        )}
      </div>
    </div>
  );
}

const EDIT_CONTROLS = [
  { id: 'trim', label: 'Trim', icon: Scissors, caption: 'Start right on the hook...' },
  { id: 'captions', label: 'Captions', icon: Captions, caption: 'Here’s the real lesson...' },
  { id: 'branding', label: 'Branding', icon: Palette, caption: 'Here’s the real lesson...' },
  { id: 'ratio', label: 'Aspect Ratio', icon: Maximize2, caption: '9:16 Vertical Framing' },
] as const;

/**
 * Step 02 Visual: Vertical 9:16 video preview + Trim, Captions, Branding, Aspect Ratio controls.
 */
export function ShapeClipVisual() {
  const [activeControl, setActiveControl] = useState<'trim' | 'captions' | 'branding' | 'ratio'>(
    'captions'
  );

  const currentControl =
    EDIT_CONTROLS.find((item) => item.id === activeControl) ?? EDIT_CONTROLS[1];

  return (
    <div className="relative flex w-full items-center justify-center gap-3.5 sm:justify-end">
      {/* Vertical 9:16 Short Clip Frame */}
      <div className="relative shrink-0">
        <AccentBurst color="#F58FBD" className="absolute -right-3 -top-3.5 z-20" />
        <CreatorThumbnailPlaceholder
          aspect="portrait"
          duration="0:42"
          progressPercent={62}
          captionOverlay={currentControl.caption}
          showBrandBadge={activeControl === 'branding'}
          className="rounded-[16px] border-2 border-[#A978FF]/85 shadow-[0_0_28px_rgba(169,120,255,0.28)]"
        />
      </div>

      {/* Editing Controls Stack */}
      <div
        role="tablist"
        aria-label="Clip editing controls"
        className="flex w-full max-w-[144px] flex-col gap-1.5 rounded-[16px] border border-[#283044] bg-[#0A0E1B]/95 p-2 shadow-[0_12px_28px_rgba(0,0,0,0.4)]"
      >
        {EDIT_CONTROLS.map((ctrl) => {
          const Icon = ctrl.icon;
          const isActive = activeControl === ctrl.id;
          return (
            <button
              key={ctrl.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveControl(ctrl.id)}
              className={`flex min-h-[38px] w-full items-center gap-2.5 rounded-[10px] px-3 py-2 text-left text-[12.5px] font-medium transition-all duration-150 cursor-pointer ${
                isActive
                  ? 'border border-[#D5FF4F]/40 bg-[#1B2338] text-white shadow-[0_0_16px_rgba(213,255,79,0.08)]'
                  : 'border border-transparent text-[#AEB5C4] hover:bg-white/[0.04] hover:text-white'
              }`}
            >
              <Icon
                className={`h-4 w-4 shrink-0 ${
                  isActive ? 'text-[#D5FF4F]' : 'text-[#8D96A8]'
                }`}
                aria-hidden="true"
              />
              <span className="whitespace-nowrap">{ctrl.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface ApprovalItem {
  id: string;
  title: string;
  duration: string;
}

const INITIAL_CLIPS: ApprovalItem[] = [
  { id: 'c1', title: 'The real lesson', duration: '0:42' },
  { id: 'c2', title: 'Mindset shift', duration: '0:38' },
  { id: 'c3', title: 'How to start', duration: '0:38' },
];

/**
 * Step 03 Visual: Clip approval queue with thumbnails, Review buttons, and highlighted Approve CTA.
 */
export function ApprovalQueueVisual() {
  const [approvedIds, setApprovedIds] = useState<string[]>(['c1']);

  const toggleApproval = (id: string) => {
    setApprovedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="relative w-full rounded-[18px] border border-[#283044] bg-[#090D1A]/95 p-3 shadow-[0_14px_34px_rgba(0,0,0,0.45)]">
      <AccentBurst color="#FFAA45" className="absolute -right-2 -top-3.5" />

      <div className="flex flex-col gap-2.5">
        {INITIAL_CLIPS.map((clip) => {
          const isApproved = approvedIds.includes(clip.id);
          return (
            <div
              key={clip.id}
              className={`flex items-center justify-between gap-2.5 rounded-[13px] border p-2 transition-all duration-200 ${
                isApproved
                  ? 'border-[#D5FF4F]/80 bg-[#D5FF4F]/[0.05] shadow-[0_0_24px_rgba(213,255,79,0.1)]'
                  : 'border-[#232B40] bg-[#101627]/85'
              }`}
            >
              <div className="flex min-w-0 items-center gap-2.5">
                <CreatorThumbnailPlaceholder
                  aspect="mini"
                  duration={clip.duration}
                  className="shrink-0 rounded-[8px] border border-white/10"
                />
                <span className="truncate font-display text-[13px] font-semibold text-white">
                  {clip.title}
                </span>
              </div>

              <button
                type="button"
                onClick={() => toggleApproval(clip.id)}
                aria-pressed={isApproved}
                className={`inline-flex min-h-[32px] shrink-0 items-center gap-1 whitespace-nowrap rounded-[9px] px-3 py-1.5 font-display text-[11.5px] font-bold transition-all duration-150 cursor-pointer ${
                  isApproved
                    ? 'bg-[#D5FF4F] text-[#080B14] shadow-[0_0_16px_rgba(213,255,79,0.28)] hover:bg-[#E2FF7A]'
                    : 'border border-[#2E3852] bg-[#171E32] text-[#C5CCD9] hover:border-white/30 hover:text-white'
                }`}
              >
                {isApproved && <Check className="h-3 w-3 stroke-[3]" aria-hidden="true" />}
                <span>{isApproved ? 'Approve' : 'Review'}</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Step 04 Visual: Connected YouTube & Instagram account chips, mini scheduling calendar, and analytics chart.
 */
export function PublishLearnVisual() {
  const [selectedDay, setSelectedDay] = useState<'thu' | 'tue'>('thu');

  return (
    <div className="flex w-full flex-col gap-3">
      {/* Connected Account Row */}
      <div className="grid grid-cols-2 gap-2.5">
        {/* YouTube Account */}
        <div className="flex items-center justify-between gap-2 rounded-[13px] border border-[#283044] bg-[#0A0E1C] px-3 py-2.5">
          <div className="flex min-w-0 items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-[24px] w-[28px] shrink-0 items-center justify-center rounded-[7px] bg-[#FF2424]"
            >
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M3.2 2.1L9.8 6L3.2 9.9V2.1Z" fill="white" />
              </svg>
            </span>
            <span className="truncate font-display text-[12.5px] font-semibold text-white">
              YouTube
            </span>
          </div>
          <span
            aria-label="YouTube connected"
            className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#D5FF4F] text-[#080B14]"
          >
            <Check className="h-2.5 w-2.5 stroke-[3.2]" />
          </span>
        </div>

        {/* Instagram Account */}
        <div className="flex items-center justify-between gap-2 rounded-[13px] border border-[#283044] bg-[#0A0E1C] px-3 py-2.5">
          <div className="flex min-w-0 items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-[7px] bg-gradient-to-tr from-[#FFAA45] via-[#F58FBD] to-[#A978FF]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="white" strokeWidth="2.4" />
                <circle cx="12" cy="12" r="3.6" stroke="white" strokeWidth="2.4" />
              </svg>
            </span>
            <span className="truncate font-display text-[12.5px] font-semibold text-white">
              Instagram
            </span>
          </div>
          <span
            aria-label="Instagram connected"
            className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#D5FF4F] text-[#080B14]"
          >
            <Check className="h-2.5 w-2.5 stroke-[3.2]" />
          </span>
        </div>
      </div>

      {/* Bottom Row: Schedule Post Calendar + Performance Analytics */}
      <div className="grid grid-cols-[1.35fr_1fr] gap-2.5">
        {/* Mini Scheduling Calendar */}
        <div className="rounded-[14px] border border-[#283044] bg-[#0A0E1C] p-3">
          <div className="mb-2.5 flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-[#D5FF4F]" aria-hidden="true" />
            <span className="font-display text-[11.5px] font-semibold text-white">
              Schedule Post
            </span>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <div className="h-[13px] rounded-[4px] bg-[#192035]" />
            <div className="h-[13px] rounded-[4px] bg-[#192035]" />
            <div className="h-[13px] rounded-[4px] bg-[#192035]" />

            <div className="h-[13px] rounded-[4px] bg-[#192035]" />
            <div className="h-[13px] rounded-[4px] bg-[#192035]" />
            <button
              type="button"
              onClick={() => setSelectedDay('thu')}
              aria-label="Scheduled Thursday clip slot"
              className={`h-[13px] cursor-pointer rounded-[4px] bg-[#A978FF] transition-all ${
                selectedDay === 'thu' ? 'ring-1 ring-white shadow-[0_0_10px_rgba(169,120,255,0.6)]' : 'opacity-80'
              }`}
            />

            <div className="h-[13px] rounded-[4px] bg-[#192035]" />
            <button
              type="button"
              onClick={() => setSelectedDay('tue')}
              aria-label="Scheduled Tuesday clip slot"
              className={`h-[13px] cursor-pointer rounded-[4px] bg-[#A978FF] transition-all ${
                selectedDay === 'tue' ? 'ring-1 ring-white shadow-[0_0_10px_rgba(169,120,255,0.6)]' : 'opacity-80'
              }`}
            />
            <div className="h-[13px] rounded-[4px] bg-[#192035]" />

            <div className="h-[13px] rounded-[4px] bg-[#192035]" />
            <div className="h-[13px] rounded-[4px] bg-[#192035]" />
            <div className="h-[13px] rounded-[4px] bg-[#192035]" />
          </div>
        </div>

        {/* Analytics Preview Card */}
        <div className="flex flex-col justify-between rounded-[14px] border border-[#283044] bg-[#0A0E1C] p-3">
          <div className="flex items-center justify-end">
            <TrendingUp className="h-4 w-4 text-[#83D7FF]" aria-hidden="true" />
          </div>

          <div
            aria-label="Clip performance growth preview"
            className="mt-2 flex h-[62px] items-end justify-between gap-2 px-1"
          >
            <span className="h-[22%] flex-1 rounded-t-[4px] bg-[#A978FF]/60" />
            <span className="h-[42%] flex-1 rounded-t-[4px] bg-[#A978FF]/75" />
            <span className="h-[64%] flex-1 rounded-t-[4px] bg-[#A978FF]/90" />
            <span className="h-[92%] flex-1 rounded-t-[4px] bg-[#A978FF] shadow-[0_0_14px_rgba(169,120,255,0.5)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
