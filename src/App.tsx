import { useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { PublishingSection } from './components/PublishingSection';
import { BuiltForSection } from './components/BuiltForSection';
import { EditorSection } from './components/EditorSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';

export default function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => {
      setNotice((current) => (current === message ? null : current));
    }, 3200);
  };

  const focusInputWithNotice = (message?: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.setTimeout(() => {
      inputRef.current?.focus();
    }, 350);
    if (message) {
      showNotice(message);
    }
  };

  const handleSelectNav = (label: string) => {
    if (label === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (label === 'Product') {
      document.getElementById('the-editor')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (label === 'How it Works') {
      document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (label === 'Pricing') {
      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (label === 'Resources') {
      document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    focusInputWithNotice(`Paste a YouTube link below to explore ${label}.`);
  };

  const handleActionClick = (action: 'login' | 'get-started') => {
    if (action === 'get-started') {
      focusInputWithNotice('Paste any YouTube video link to preview clips — no signup required.');
    } else {
      focusInputWithNotice('Preview your first video right below — no login needed to start.');
    }
  };

  const handleSelectPlan = (planId: string) => {
    if (planId === 'teams') {
      focusInputWithNotice('Start by previewing a video above — team plans can be tailored to your workflow.');
      return;
    }
    focusInputWithNotice('Paste your YouTube link above to preview ClipVerse before choosing a plan.');
  };

  return (
    <div className="min-h-screen bg-[#080B14] text-white">
      <Navbar onSelectNav={handleSelectNav} onActionClick={handleActionClick} />
      <main>
        <HeroSection inputRef={inputRef} />
        <ProblemSection />
        <HowItWorksSection
          onPreviewClick={() =>
            focusInputWithNotice('Paste your YouTube link above to preview clips right away.')
          }
        />
        <PublishingSection />
        <BuiltForSection />
        <EditorSection />
        <PricingSection
          onSelectPlan={handleSelectPlan}
          onStartCreating={() =>
            focusInputWithNotice('Paste your YouTube video link above to start creating clips.')
          }
        />
        <FaqSection
          onContactClick={() =>
            showNotice('Reach our team anytime at hello@clipverse.ai — we’re happy to help.')
          }
        />
        <FinalCtaSection
          onStartCreating={() =>
            focusInputWithNotice('Paste your YouTube video link above to preview your next clip.')
          }
          onExploreHowItWorks={() =>
            document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
          }
        />
      </main>
      <Footer
        onUtilityClick={(label) =>
          showNotice(`${label} — ClipVerse support and legal details are available on launch.`)
        }
      />

      {/* Lightweight non-intrusive feedback toast when nav/CTA triggers input focus */}
      {notice && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2 rounded-xl border border-[#D5FF4F]/30 bg-[#101626]/95 px-4 py-2.5 text-[13px] font-medium text-[#E8EDF7] shadow-[0_12px_32px_rgba(0,0,0,0.6)] backdrop-blur-md whitespace-nowrap max-w-[92vw] truncate"
        >
          {notice}
        </div>
      )}
    </div>
  );
}
