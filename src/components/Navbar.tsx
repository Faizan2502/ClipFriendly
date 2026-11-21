import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onSelectNav?: (label: string) => void;
  onActionClick?: (action: 'login' | 'get-started') => void;
}

const NAV_LINKS = ['Product', 'How it Works', 'Pricing', 'Resources'] as const;

export function Navbar({ onSelectNav, onActionClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (label: string) => {
    setMobileMenuOpen(false);
    onSelectNav?.(label);
  };

  const handleAction = (action: 'login' | 'get-started') => {
    setMobileMenuOpen(false);
    onActionClick?.(action);
  };

  return (
    <header className="relative z-30 w-full border-b border-white/[0.08] bg-[#080B14]/85 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1380px] items-center justify-between gap-6 px-5 sm:px-8 md:grid md:grid-cols-[1fr_auto_1fr] lg:px-12">
        {/* Zone 1: Brand Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            onSelectNav?.('Home');
          }}
          className="group inline-flex w-fit shrink-0 items-center gap-2.5 whitespace-nowrap rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5FF4F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B14]"
          aria-label="ClipVerse home"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0 transition-transform duration-200 group-hover:scale-105"
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

        {/* Zone 2: Desktop Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center justify-center gap-8 md:flex lg:gap-11"
        >
          {NAV_LINKS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleLinkClick(item)}
              className="relative shrink-0 whitespace-nowrap rounded-md py-1 text-[15px] font-medium text-[#E5E9F2] transition-colors duration-150 hover:text-[#D5FF4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5FF4F] cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#D5FF4F] after:transition-all after:duration-200 hover:after:w-full"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Zone 3: Auth & Primary CTA */}
        <div className="hidden shrink-0 items-center justify-end gap-3 md:flex">
          <button
            type="button"
            onClick={() => handleAction('login')}
            className="shrink-0 whitespace-nowrap rounded-[14px] border border-white/18 bg-white/[0.02] px-5 py-2.5 text-[14px] font-medium text-white transition-all duration-150 hover:border-white/35 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5FF4F] cursor-pointer"
          >
            Log in
          </button>
          <button
            type="button"
            onClick={() => handleAction('get-started')}
            className="shrink-0 whitespace-nowrap rounded-[14px] bg-[#D5FF4F] px-6 py-2.5 text-[14px] font-semibold text-[#080B14] shadow-[0_0_24px_rgba(213,255,79,0.24)] transition-all duration-150 hover:bg-[#E2FF7A] hover:shadow-[0_0_32px_rgba(213,255,79,0.38)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B14] cursor-pointer"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] text-white transition-colors hover:bg-white/[0.08] md:hidden cursor-pointer"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-white/[0.08] bg-[#0B0F1C]/95 px-5 pb-6 pt-4 backdrop-blur-xl md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => handleLinkClick(item)}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-left text-[15px] font-medium text-[#E5E9F2] transition-colors hover:bg-white/[0.06] hover:text-[#D5FF4F]"
              >
                {item}
              </button>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2.5 border-t border-white/[0.08] pt-4">
            <button
              type="button"
              onClick={() => handleAction('login')}
              className="flex min-h-[44px] w-full items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] text-[14px] font-medium text-white transition-colors hover:bg-white/[0.08]"
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => handleAction('get-started')}
              className="flex min-h-[44px] w-full items-center justify-center rounded-xl bg-[#D5FF4F] text-[14px] font-semibold text-[#080B14] transition-colors hover:bg-[#E2FF7A]"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
