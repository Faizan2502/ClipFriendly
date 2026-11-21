import { useState } from 'react';
import { Play, Pause, Crop, Layers, Captions } from 'lucide-react';

/**
 * Easy-to-replace media asset paths for Section 6 (The Editor).
 * Swap these URLs anytime with final studio footage or creator thumbnails.
 */
const EDITOR_MEDIA = {
  creatorMain: '/src/assets/images/editor_creator_main_1795205232997.jpg',
  studioMic: '/src/assets/images/editor_studio_mic_1795205232998.jpg',
} as const;

const CAPTION_PRESETS = [
  { id: 'clean', label: 'Aa', fontClass: 'font-sans font-semibold', preview: 'Clean Sans' },
  { id: 'bold', label: 'Aa', fontClass: 'font-display font-bold italic', preview: 'Editorial Italic' },
  { id: 'mono', label: 'Aa', fontClass: 'font-mono font-semibold', preview: 'Studio Mono' },
  { id: 'highlight', label: 'Aa', fontClass: 'font-display font-extrabold', preview: 'Lime Pop' },
] as const;

const BRAND_SWATCHES = ['#D5FF4F', '#A978FF', '#FFAA45', '#83D7FF'] as const;

const SAMPLE_HOOKS = [
  { top: 'Here’s the', highlight: 'real strategy' },
  { top: 'Nobody talks about', highlight: 'this one shift' },
  { top: 'Stop editing clips', highlight: 'the slow way' },
] as const;

const CROP_RATIOS = [
  { id: '9:16', label: '9:16', insetClass: 'inset-x-6 inset-y-2' },
  { id: '1:1', label: '1:1', insetClass: 'inset-x-4 inset-y-2' },
  { id: '16:9', label: '16:9', insetClass: 'inset-x-2 inset-y-4' },
] as const;

interface EditorFeature {
  number: string;
  title: string;
  description: string;
  accentColor: string;
  icon: typeof Play;
}

const EDITOR_FEATURES: EditorFeature[] = [
  {
    number: '01',
    title: 'Hooks that start strong',
    description:
      'Edit the opening text and clip title so every clip begins the way you’d want it to.',
    accentColor: '#D5FF4F',
    icon: Play,
  },
  {
    number: '02',
    title: 'Captions in your style',
    description: 'Choose the font, colours, position, and caption style.',
    accentColor: '#A978FF',
    icon: Captions,
  },
  {
    number: '03',
    title: 'Framing you control',
    description:
      'Adjust the layout and speaker positioning for vertical, square, or horizontal formats. Fine-tune the framing whenever you need to.',
    accentColor: '#FFAA45',
    icon: Crop,
  },
  {
    number: '04',
    title: 'Branding on every clip',
    description:
      'Add your logo and brand colours so your clips look like your channel.',
    accentColor: '#83D7FF',
    icon: Layers,
  },
];

function BurstAccent({
  color = '#D5FF4F',
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

export function EditorSection() {
  const [selectedCaptionId, setSelectedCaptionId] = useState<string>('highlight');
  const [cropIndex, setCropIndex] = useState<number>(0);
  const [brandColor, setBrandColor] = useState<string>('#D5FF4F');
  const [hookIndex, setHookIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const activeCrop = CROP_RATIOS[cropIndex];
  const activeHook = SAMPLE_HOOKS[hookIndex];

  return (
    <section
      id="the-editor"
      aria-labelledby="editor-section-headline"
      className="relative w-full overflow-hidden border-t border-white/[0.06] bg-[#080B14] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Subtle dotted canvas + atmospheric purple corner curves matching reference */}
      <div
        aria-hidden="true"
        className="hero-dot-grid pointer-events-none absolute inset-0 opacity-65"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#A978FF]/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 -top-12 h-44 w-52 rotate-[-24deg] rounded-[80px] bg-gradient-to-br from-[#B88CFF] to-[#6B38D4] opacity-85"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#A978FF]/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -right-14 h-44 w-64 rotate-[-22deg] rounded-[90px] bg-gradient-to-tl from-[#B88CFF] to-[#6B38D4] opacity-85"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[48%] h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A978FF]/12 blur-[110px]"
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        {/* ================================================================
            TOP: CENTERED HEADING AREA
        ================================================================ */}
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
          {/* Eyebrow Badge with Minimal Accent Ticks */}
          <div className="mb-6 inline-flex items-center gap-3">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              aria-hidden="true"
              className="hidden sm:block"
            >
              <path d="M16 12L4 9" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M18 6L11 2" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
            </svg>

            <span className="inline-flex items-center rounded-full bg-[#D5FF4F] px-5 py-1.5 font-display text-[12px] font-bold uppercase tracking-[0.14em] text-[#080B14] shadow-[0_0_24px_rgba(213,255,79,0.3)] sm:text-[13px]">
              THE EDITOR
            </span>

            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              aria-hidden="true"
              className="hidden sm:block"
            >
              <path d="M4 12L16 9" stroke="#A978FF" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M2 6L9 2" stroke="#A978FF" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>

          {/* Main Display Headline */}
          <h2
            id="editor-section-headline"
            className="font-display text-[clamp(2.2rem,4.7vw,4.1rem)] font-bold leading-[1.08] tracking-[-0.035em] text-white"
          >
            <span className="block">AI finds the moment.</span>
            <span className="mt-1.5 inline-block">
              <span className="relative inline-block text-[#D5FF4F]">
                <span className="relative z-10">You make it yours.</span>
                {/* Subtle energetic neon-lime hand-drawn underline */}
                <svg
                  viewBox="0 0 420 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-2.5 left-0 w-full"
                >
                  <path
                    d="M6 12C88 6.5 196 5 318 8.5C356 9.5 390 10.5 414 9"
                    stroke="#D5FF4F"
                    strokeWidth="4.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M72 17.5C154 13.2 264 12.5 362 15.5"
                    stroke="#A978FF"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeOpacity="0.85"
                  />
                </svg>
              </span>
            </span>
          </h2>

          {/* Supporting Copy */}
          <p className="mt-7 max-w-[680px] text-[16px] leading-[1.68] text-[#AEB5C4] sm:mt-8 sm:text-[18px]">
            AI finds the moments and creates a first cut. From there, the hook, captions,
            framing, and branding are yours to customise.
          </p>
        </div>

        {/* ================================================================
            MIDDLE: FLOATING VISUAL EDITOR COLLAGE
        ================================================================ */}
        <div className="mt-14 lg:mt-16">
          <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-2 lg:grid-cols-[0.78fr_1.08fr_1.48fr_1.08fr_0.78fr] lg:gap-4 xl:gap-5">
            {/* COL 1 (Far-Left): Studio Microphone Recording Preview */}
            <div className="relative order-4 flex flex-col items-center lg:order-1">
              <BurstAccent
                color="#D5FF4F"
                className="absolute -left-2 -top-7 hidden h-7 w-7 -scale-x-100 lg:block"
              />
              <div className="group relative aspect-[3/4] w-full max-w-[220px] overflow-hidden rounded-[22px] border border-[#A978FF]/65 bg-[#0D1220] shadow-[0_0_28px_rgba(169,120,255,0.25)] transition-transform duration-200 hover:-translate-y-1 lg:max-w-none">
                <img
                  src={EDITOR_MEDIA.studioMic}
                  alt="Condenser podcast microphone lit with soft purple studio lighting"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080B14]/45 via-transparent to-transparent"
                />
              </div>
            </div>

            {/* COL 2 (Mid-Left): Caption Styling + Framing Controls */}
            <div className="order-2 flex flex-col gap-4 lg:order-2">
              {/* Preview 1: Caption Styling */}
              <div className="relative flex min-h-[144px] flex-col justify-center overflow-hidden rounded-[20px] border border-[#A978FF]/55 bg-[#0D1220]/95 p-4 shadow-[0_14px_34px_rgba(0,0,0,0.45),0_0_24px_rgba(169,120,255,0.14)] transition-colors duration-200 hover:border-[#A978FF]">
                <span className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#AEB5C4]">
                  Caption Style
                </span>

                <div
                  role="tablist"
                  aria-label="Caption typography styles"
                  className="relative flex -rotate-[2.5deg] items-center justify-between gap-1.5 rounded-[14px] border border-white/10 bg-[#151C30] p-1.5 shadow-inner"
                >
                  {CAPTION_PRESETS.map((preset) => {
                    const isSelected = selectedCaptionId === preset.id;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        aria-label={`Select ${preset.preview} caption style`}
                        onClick={() => setSelectedCaptionId(preset.id)}
                        className={`flex h-10 flex-1 items-center justify-center rounded-[10px] text-[15px] transition-all duration-150 cursor-pointer ${
                          preset.fontClass
                        } ${
                          isSelected
                            ? 'bg-[#D5FF4F] text-[#080B14] shadow-[0_0_18px_rgba(213,255,79,0.45)]'
                            : 'text-white/80 hover:bg-white/[0.06] hover:text-white'
                        }`}
                      >
                        {preset.label}
                      </button>
                    );
                  })}

                  {/* Editorial vector cursor hovering over highlighted Aa */}
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 20 22"
                    fill="none"
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-3 right-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.65)]"
                  >
                    <path
                      d="M3 2.5L16.8 11.4L10.3 12.6L7.3 18.8L3 2.5Z"
                      fill="#FFFFFF"
                      stroke="#080B14"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Preview 2: Framing Controls */}
              <button
                type="button"
                onClick={() => setCropIndex((prev) => (prev + 1) % CROP_RATIOS.length)}
                aria-label={`Cycle framing aspect ratio (currently ${activeCrop.label})`}
                className="group relative aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-[20px] border border-[#A978FF]/55 bg-[#0D1220] text-left shadow-[0_14px_34px_rgba(0,0,0,0.45),0_0_24px_rgba(169,120,255,0.14)] transition-all duration-200 hover:border-[#FFAA45]/80"
              >
                <img
                  src={EDITOR_MEDIA.creatorMain}
                  alt="Creator video inside an adjustable crop framing grid"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-top opacity-90 transition-transform duration-300 group-hover:scale-105"
                />
                {/* Dim outer mask */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#080B14]/35"
                />
                {/* Adjustable Crop Boundary with Rule-of-Thirds Grid & Corner Handles */}
                <div
                  aria-hidden="true"
                  className={`absolute border-[1.5px] border-white/95 shadow-[0_0_0_999px_rgba(8,11,20,0.35)] transition-all duration-300 ${activeCrop.insetClass}`}
                >
                  {/* Rule of thirds lines */}
                  <span className="absolute inset-y-0 left-1/3 w-px bg-white/30" />
                  <span className="absolute inset-y-0 left-2/3 w-px bg-white/30" />
                  <span className="absolute inset-x-0 top-1/3 h-px bg-white/30" />
                  <span className="absolute inset-x-0 top-2/3 h-px bg-white/30" />
                  {/* 4 corner resize handles */}
                  <span className="absolute -left-1 -top-1 h-2 w-2 rounded-[2px] bg-white" />
                  <span className="absolute -right-1 -top-1 h-2 w-2 rounded-[2px] bg-white" />
                  <span className="absolute -bottom-1 -left-1 h-2 w-2 rounded-[2px] bg-white" />
                  <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-[2px] bg-white" />
                </div>
                <span className="absolute right-2.5 top-2 rounded-md bg-[#080B14]/80 px-2 py-0.5 font-mono text-[10px] font-semibold text-[#FFAA45] backdrop-blur-sm">
                  {activeCrop.label}
                </span>
              </button>
            </div>

            {/* COL 3 (Center Dominant Focal Point): Main Vertical Creator Video Preview */}
            <div className="order-1 md:col-span-2 lg:order-3 lg:col-span-1">
              <div className="group relative mx-auto aspect-[3/4.05] w-full max-w-[340px] overflow-hidden rounded-[26px] border-2 border-[#C8A6FF] bg-[#0D1220] shadow-[0_0_52px_rgba(169,120,255,0.4),0_26px_64px_rgba(0,0,0,0.72)] lg:max-w-none">
                <img
                  src={EDITOR_MEDIA.creatorMain}
                  alt="Podcast creator wearing studio headphones speaking into a microphone in ClipVerse editor"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-top"
                />

                {/* Subtle top brand indicator synced to user's selected brand swatch */}
                <div className="absolute left-3.5 top-3.5 inline-flex items-center gap-1.5 rounded-lg bg-[#080B14]/70 px-2.5 py-1 backdrop-blur-md">
                  <span
                    style={{ backgroundColor: brandColor }}
                    className="h-2 w-2 rounded-full"
                    aria-hidden="true"
                  />
                  <span className="font-display text-[11px] font-bold tracking-tight text-white">
                    ClipVerse
                  </span>
                </div>

                {/* Bottom scrim + interactive player controls */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#060912]/95 via-[#060912]/55 to-transparent"
                />

                <div className="absolute inset-x-4 bottom-4 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsPlaying((prev) => !prev)}
                    aria-label={isPlaying ? 'Pause clip preview' : 'Play clip preview'}
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-[#D5FF4F] hover:text-[#080B14] cursor-pointer"
                  >
                    {isPlaying ? (
                      <Pause className="h-3.5 w-3.5 fill-current" />
                    ) : (
                      <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
                    )}
                  </button>

                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/25">
                    <div
                      style={{
                        width: isPlaying ? '68%' : '32%',
                        backgroundColor: brandColor,
                      }}
                      className="h-full rounded-full transition-all duration-500"
                    />
                  </div>

                  <span className="font-mono text-[11px] font-medium tabular-nums text-white/95">
                    {isPlaying ? '0:19 / 0:28' : '0:00 / 0:28'}
                  </span>
                </div>
              </div>
            </div>

            {/* COL 4 (Mid-Right): Branding Controls + Hook Editing */}
            <div className="order-3 flex flex-col gap-4 lg:order-4">
              {/* Preview 3: Branding Controls */}
              <div className="relative flex min-h-[144px] flex-col justify-between overflow-hidden rounded-[20px] border border-[#A978FF]/55 bg-[#0D1220]/95 p-4 shadow-[0_14px_34px_rgba(0,0,0,0.45),0_0_24px_rgba(169,120,255,0.14)] transition-colors duration-200 hover:border-[#83D7FF]">
                {/* Soft purple bottom wave matching reference */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-8 inset-x-0 h-16 rounded-t-[100%] bg-gradient-to-r from-[#6D3FD6]/55 via-[#A978FF]/55 to-[#6D3FD6]/55 blur-[2px]"
                />

                {/* Dashed Draggable Brand Logo Frame */}
                <div className="relative z-10 mx-auto my-1 flex w-full max-w-[196px] items-center justify-center gap-2 rounded-[10px] border border-dashed border-white/70 bg-[#0A0E1C]/80 px-3.5 py-2.5">
                  <span className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-white" />
                  <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-white" />
                  <span className="absolute -bottom-1 -left-1 h-2 w-2 rounded-full bg-white" />
                  <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-white" />

                  <span
                    style={{ backgroundColor: brandColor }}
                    className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] text-[#080B14] transition-colors"
                  >
                    <Play className="ml-0.5 h-3 w-3 fill-current" aria-hidden="true" />
                  </span>
                  <span className="font-display text-[15px] font-bold tracking-[-0.02em] text-white">
                    ClipVerse
                  </span>
                </div>

                {/* Clickable Brand Colour Swatches */}
                <div className="relative z-10 mt-3 flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/80">
                    Brand Colour
                  </span>
                  <div className="flex items-center gap-1.5">
                    {BRAND_SWATCHES.map((swatch) => (
                      <button
                        key={swatch}
                        type="button"
                        onClick={() => setBrandColor(swatch)}
                        aria-label={`Select brand colour ${swatch}`}
                        aria-pressed={brandColor === swatch}
                        style={{ backgroundColor: swatch }}
                        className={`h-4 w-4 rounded-full transition-transform cursor-pointer ${
                          brandColor === swatch
                            ? 'scale-115 ring-2 ring-white ring-offset-1 ring-offset-[#0D1220]'
                            : 'opacity-75 hover:opacity-100'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Preview 4: Hook Editing */}
              <button
                type="button"
                onClick={() => setHookIndex((prev) => (prev + 1) % SAMPLE_HOOKS.length)}
                aria-label="Cycle opening hook preview text"
                className="group relative flex aspect-[16/10] w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[20px] border border-[#A978FF]/55 bg-[#0D1220] p-4 text-center shadow-[0_14px_34px_rgba(0,0,0,0.45),0_0_24px_rgba(169,120,255,0.14)] transition-all duration-200 hover:border-[#D5FF4F]/75"
              >
                <img
                  src={EDITOR_MEDIA.creatorMain}
                  alt="Blurred studio video frame behind editable opening hook caption"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-[3px]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#080B14]/55"
                />

                <BurstAccent
                  color="#A978FF"
                  className="absolute right-3 top-2.5 z-10 h-5 w-5"
                />

                <div className="relative z-10 -rotate-[2.5deg] flex flex-col items-center">
                  <span className="font-display text-[17px] font-bold leading-tight text-white drop-shadow">
                    {activeHook.top}
                  </span>
                  <span className="mt-1.5 inline-block rounded-[9px] bg-[#D5FF4F] px-3 py-1 font-display text-[16px] font-extrabold leading-none text-[#080B14] shadow-[0_6px_18px_rgba(213,255,79,0.35)] transition-transform duration-150 group-hover:scale-105">
                    {activeHook.highlight}
                  </span>
                </div>
              </button>
            </div>

            {/* COL 5 (Far-Right): Vertical Multi-Clip Timeline Preview */}
            <div className="relative order-5 flex flex-col items-center lg:order-5">
              <BurstAccent
                color="#A978FF"
                className="absolute -right-2 -top-7 hidden h-7 w-7 lg:block"
              />
              <div className="relative flex aspect-[3/4] w-full max-w-[220px] flex-col justify-center gap-2.5 overflow-hidden rounded-[22px] border border-[#A978FF]/60 bg-[#0C101E] p-3.5 shadow-[0_0_28px_rgba(169,120,255,0.22)] lg:max-w-none">
                {/* 3 Stacked Video Filmstrip Tracks using real <img> frames */}
                {[0, 1, 2].map((track) => (
                  <div
                    key={track}
                    className="relative grid h-[24%] grid-cols-3 gap-0.5 overflow-hidden rounded-[7px] border border-[#A978FF]/65 bg-[#141A2E]"
                  >
                    {[0, 1, 2].map((frame) => (
                      <img
                        key={frame}
                        src={EDITOR_MEDIA.creatorMain}
                        alt=""
                        aria-hidden="true"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover object-top opacity-90"
                      />
                    ))}
                  </div>
                ))}

                {/* Vertical Glowing Playhead Scrubber Line */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-6 left-1/2 flex -translate-x-1/2 flex-col items-center"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_12px_#FFFFFF]" />
                  <span className="w-[2.5px] flex-1 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.85)]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================
            FEATURE HIGHLIGHTS (4 Horizontal Clean Descriptions + Vertical Dividers)
        ================================================================ */}
        <div className="mt-14 grid grid-cols-1 gap-8 border-t border-white/[0.08] pt-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/[0.1] lg:border-t-0 lg:pt-0">
          {EDITOR_FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.number}
                className={`flex items-start gap-3.5 ${
                  index === 0
                    ? 'lg:pr-6'
                    : index === EDITOR_FEATURES.length - 1
                      ? 'lg:pl-6'
                      : 'lg:px-6'
                }`}
              >
                <span
                  aria-hidden="true"
                  style={{ backgroundColor: feature.accentColor }}
                  className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] text-[#080B14] shadow-sm"
                >
                  <Icon className="h-5 w-5 stroke-[2.4]" />
                </span>

                <div className="min-w-0">
                  <span
                    style={{ color: feature.accentColor }}
                    className="font-mono text-[11px] font-semibold tracking-[0.08em] tabular-nums"
                  >
                    {feature.number}
                  </span>
                  <h3 className="mt-0.5 font-display text-[17px] font-bold leading-snug tracking-[-0.015em] text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-[1.6] text-[#AEB5C4]">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================================================================
            CLOSING STATEMENT
        ================================================================ */}
        <div className="mt-14 flex items-center justify-center text-center sm:mt-16">
          <div className="relative inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-2 px-4">
            <BurstAccent
              color="#D5FF4F"
              className="-ml-5 hidden h-6 w-6 -scale-x-100 sm:inline-block"
            />
            <p className="font-display text-[21px] font-bold leading-snug tracking-[-0.02em] text-white sm:text-[26px]">
              The AI does the first pass.{' '}
              <span className="ml-0.5 inline-block rounded-[14px] bg-[#D5FF4F] px-3.5 py-0.5 text-[#080B14] shadow-[0_8px_26px_rgba(213,255,79,0.24)]">
                The last word is yours.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
