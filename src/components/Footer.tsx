import { Youtube, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (targetId: string, label: string) => void;
  onUtilityClick?: (label: string) => void;
}

export function Footer({ onNavigate, onUtilityClick }: FooterProps) {
  const handleNav = (id: string, label: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate?.(id, label);
    }
  };

  return (
    <footer className="relative w-full border-t border-white/[0.07] bg-[#080B14] pb-10 pt-14 text-white sm:pt-16">
      <div className="mx-auto max-w-[1220px] px-5 sm:px-8 lg:px-10">
        {/* Upper Multi-Column Navigation */}
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.55fr_0.9fr_0.9fr_0.9fr_0.9fr] lg:gap-8">
          {/* Brand Column */}
          <div className="flex flex-col items-start">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5FF4F]"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M6.5 6.35C6.5 4.86 8.13 3.94 9.41 4.71L22.36 12.36C23.62 13.11 23.62 14.89 22.36 15.64L9.41 23.29C8.13 24.06 6.5 23.14 6.5 21.65V6.35Z"
                  stroke="#D5FF4F"
                  strokeWidth="2.8"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-display text-[22px] font-bold tracking-[-0.02em] text-white">
                ClipVerse
              </span>
            </a>

            <p className="mt-3 font-display text-[14.5px] font-bold tracking-[-0.01em] text-[#D5FF4F]">
              Create. Review. Publish. Grow.
            </p>

            <p className="mt-3 max-w-[290px] text-[13.5px] leading-[1.65] text-[#AEB5C4]">
              Turn long-form videos into short-form content with AI-powered clipping,
              creative editing, and a streamlined publishing workflow.
            </p>
          </div>

          {/* Product Column */}
          <div className="lg:border-l lg:border-white/[0.08] lg:pl-8">
            <h3 className="font-display text-[14px] font-bold tracking-[-0.01em] text-white">
              Product
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-[14px] text-[#AEB5C4]">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('how-it-works', 'How It Works')}
                  className="transition-colors hover:text-[#D5FF4F] cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('the-editor', 'The Editor')}
                  className="transition-colors hover:text-[#D5FF4F] cursor-pointer"
                >
                  The Editor
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('pricing', 'Pricing')}
                  className="transition-colors hover:text-[#D5FF4F] cursor-pointer"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-display text-[14px] font-bold tracking-[-0.01em] text-white">
              Resources
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-[14px] text-[#AEB5C4]">
              <li>
                <button
                  type="button"
                  onClick={() => onUtilityClick?.('Help Center')}
                  className="transition-colors hover:text-[#D5FF4F] cursor-pointer"
                >
                  Help Center
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('faqs', 'FAQs')}
                  className="transition-colors hover:text-[#D5FF4F] cursor-pointer"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onUtilityClick?.('Contact')}
                  className="transition-colors hover:text-[#D5FF4F] cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-display text-[14px] font-bold tracking-[-0.01em] text-white">
              Legal
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-[14px] text-[#AEB5C4]">
              <li>
                <button
                  type="button"
                  onClick={() => onUtilityClick?.('Privacy Policy')}
                  className="transition-colors hover:text-[#D5FF4F] cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onUtilityClick?.('Terms of Service')}
                  className="transition-colors hover:text-[#D5FF4F] cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links Column */}
          <div className="lg:border-l lg:border-white/[0.08] lg:pl-8">
            <h3 className="font-display text-[14px] font-bold tracking-[-0.01em] text-white">
              Follow Us
            </h3>
            <div className="mt-4 flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => onUtilityClick?.('YouTube')}
                aria-label="ClipVerse on YouTube"
                className="inline-flex h-10 w-10 items-center justify-center rounded-[11px] border border-white/15 bg-white/[0.03] text-[#E8ECF5] transition-all duration-150 hover:border-[#D5FF4F]/65 hover:text-[#D5FF4F] cursor-pointer"
              >
                <Youtube className="h-[18px] w-[18px]" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onUtilityClick?.('Instagram')}
                aria-label="ClipVerse on Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-[11px] border border-white/15 bg-white/[0.03] text-[#E8ECF5] transition-all duration-150 hover:border-[#D5FF4F]/65 hover:text-[#D5FF4F] cursor-pointer"
              >
                <Instagram className="h-[18px] w-[18px]" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onUtilityClick?.('LinkedIn')}
                aria-label="ClipVerse on LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-[11px] border border-white/15 bg-white/[0.03] text-[#E8ECF5] transition-all duration-150 hover:border-[#D5FF4F]/65 hover:text-[#D5FF4F] cursor-pointer"
              >
                <Linkedin className="h-[18px] w-[18px]" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Brand Sign-Off */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] pt-6 text-center text-[13px] text-[#AEB5C4] sm:flex-row sm:text-left">
          <p>© 2026 ClipVerse. All rights reserved.</p>
          <p>Made for creators who have more to share.</p>
        </div>
      </div>
    </footer>
  );
}
