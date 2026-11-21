import { useState, type FormEvent, type RefObject } from 'react';
import { ArrowRight, Sparkles, X, CheckCircle2, AlertCircle } from 'lucide-react';

interface VideoUrlFormProps {
  inputRef?: RefObject<HTMLInputElement | null>;
}

const SAMPLE_YOUTUBE_URL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

function extractYouTubeVideoId(rawUrl: string): string | null {
  const trimmed = rawUrl.trim();
  if (!trimmed) return null;

  try {
    const normalized = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
    const url = new URL(normalized);
    const host = url.hostname.replace(/^www\./, '').toLowerCase();

    if (host === 'youtu.be') {
      const id = url.pathname.slice(1).split('/')[0];
      return id && /^[a-zA-Z0-9_-]{11}$/.test(id) ? id : null;
    }

    if (host === 'youtube.com' || host === 'm.youtube.com') {
      const vParam = url.searchParams.get('v');
      if (vParam && /^[a-zA-Z0-9_-]{11}$/.test(vParam)) {
        return vParam;
      }

      const pathSegments = url.pathname.split('/').filter(Boolean);
      if (
        (pathSegments[0] === 'shorts' ||
          pathSegments[0] === 'embed' ||
          pathSegments[0] === 'live') &&
        pathSegments[1] &&
        /^[a-zA-Z0-9_-]{11}$/.test(pathSegments[1])
      ) {
        return pathSegments[1];
      }
    }
  } catch {
    return null;
  }

  return null;
}

export function VideoUrlForm({ inputRef }: VideoUrlFormProps) {
  const [url, setUrl] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [previewVideoId, setPreviewVideoId] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const videoId = extractYouTubeVideoId(url);

    if (!videoId) {
      setError('Enter a valid YouTube video URL (youtube.com/watch?v=... or youtu.be/...)');
      return;
    }

    setError(null);
    setPreviewVideoId(videoId);
  };

  const handleUseSample = () => {
    setUrl(SAMPLE_YOUTUBE_URL);
    setError(null);
    inputRef?.current?.focus();
  };

  return (
    <div className="flex w-full max-w-[680px] flex-col items-center">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="group relative flex w-full flex-col gap-2 rounded-[24px] border border-white/25 bg-[#0D111E]/95 p-2 shadow-[0_20px_54px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-md transition-all duration-200 hover:border-white/35 focus-within:border-[#D5FF4F]/75 focus-within:shadow-[0_20px_54px_rgba(0,0,0,0.65),0_0_0_3px_rgba(213,255,79,0.14)] sm:flex-row sm:items-center sm:gap-0 sm:p-2.5 sm:pl-5"
      >
        <div className="flex min-w-0 flex-1 items-center gap-3.5 px-2 py-1.5 sm:px-0 sm:py-0">
          {/* Crisp YouTube Play Mark */}
          <span
            aria-hidden="true"
            className="inline-flex h-[26px] w-[36px] shrink-0 items-center justify-center rounded-[7px] bg-[#FF2424] shadow-[0_2px_10px_rgba(255,36,36,0.35)]"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.2 2.1L9.8 6L3.2 9.9V2.1Z" fill="white" />
            </svg>
          </span>

          <label htmlFor="youtube-video-url" className="sr-only">
            YouTube video URL
          </label>
          <input
            ref={inputRef}
            id="youtube-video-url"
            type="url"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              if (error) setError(null);
            }}
            placeholder="Paste your YouTube video link here..."
            autoComplete="off"
            spellCheck={false}
            className="w-full min-w-0 bg-transparent text-[15px] text-white placeholder-[#8F98AA] focus:outline-none sm:text-[16px]"
          />
        </div>

        {/* Hairline vertical divider */}
        <span
          aria-hidden="true"
          className="mx-3.5 hidden h-7 w-px shrink-0 bg-white/20 sm:block"
        />

        {/* Primary Neon Lime CTA */}
        <button
          type="submit"
          className="inline-flex min-h-[50px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[16px] bg-[#D5FF4F] px-6 py-3 font-display text-[15px] font-bold tracking-[-0.01em] text-[#080B14] shadow-[0_0_28px_rgba(213,255,79,0.28)] transition-all duration-150 hover:bg-[#E3FF7A] hover:shadow-[0_0_36px_rgba(213,255,79,0.44)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D111E] sm:px-7 cursor-pointer"
        >
          <span>Preview Video</span>
          <ArrowRight className="h-[18px] w-[18px] stroke-[2.5] transition-transform duration-150 group-hover:translate-x-0.5" />
        </button>
      </form>

      {/* Helper Text */}
      <p className="mt-4 flex items-center justify-center gap-2 text-center text-[14px] text-[#AEB5C4]">
        <Sparkles className="h-4 w-4 shrink-0 text-[#FFAA45]" aria-hidden="true" />
        <span>Preview your video first. No signup required.</span>
      </p>

      {/* Validation message when user submits invalid/empty URL */}
      {error && (
        <div
          role="alert"
          className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 rounded-xl border border-[#FFAA45]/30 bg-[#FFAA45]/10 px-4 py-2 text-[13px] text-[#FFD39E]"
        >
          <span className="inline-flex items-center gap-1.5">
            <AlertCircle className="h-4 w-4 shrink-0 text-[#FFAA45]" aria-hidden="true" />
            <span>{error}</span>
          </span>
          <button
            type="button"
            onClick={handleUseSample}
            className="font-semibold text-[#D5FF4F] underline underline-offset-2 transition-colors hover:text-white cursor-pointer"
          >
            Try a sample link
          </button>
        </div>
      )}

      {/* Lightweight Video Preview Modal */}
      {previewVideoId && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-preview-heading"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={() => setPreviewVideoId(null)}
        >
          <div
            className="w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-[#0E1322] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-[#D5FF4F]" aria-hidden="true" />
                <h2
                  id="video-preview-heading"
                  className="font-display text-[17px] font-bold text-white"
                >
                  Video Loaded for Clip Preview
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setPreviewVideoId(null)}
                aria-label="Close video preview"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-[#AEB5C4] transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-5">
              <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black">
                <iframe
                  title="YouTube video preview"
                  src={`https://www.youtube-nocookie.com/embed/${previewVideoId}`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[13px] text-[#AEB5C4]">
                  Ready to detect viral hooks, generate captions, and export 9:16 clips.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setPreviewVideoId(null);
                    setUrl('');
                    inputRef?.current?.focus();
                  }}
                  className="shrink-0 whitespace-nowrap rounded-xl bg-[#D5FF4F] px-4 py-2 text-[13px] font-semibold text-[#080B14] transition-colors hover:bg-[#E2FF7A] cursor-pointer"
                >
                  Paste Another Link
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
