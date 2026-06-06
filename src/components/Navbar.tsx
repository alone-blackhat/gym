import { useState, useEffect } from 'react';
import { Dumbbell, PhoneCall, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenJoin: (planName?: string) => void;
}

export default function Navbar({ onOpenJoin }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Results', href: '#transformations' },
    { name: 'Plans', href: '#plans' },
    { name: 'Combos', href: '#combos' },
    { name: 'Offers', href: '#offers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'border-b border-neutral-800/60 bg-neutral-950/70 py-4 shadow-xl shadow-black/30 backdrop-blur-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-red-600 via-orange-500 to-red-600 shadow-lg shadow-orange-500/20">
            <Dumbbell className="h-6 w-6 text-white" />
            <span className="absolute -inset-0.5 animate-pulse rounded-xl bg-orange-500/30 blur-sm pointer-events-none" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-xl font-black uppercase tracking-wider text-white">
              IRON<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">CREED</span>
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400">
              India Premium Club
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide text-neutral-300 transition-colors duration-200 hover:text-orange-500"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button & Menu */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+919876543210"
            className="hidden lg:flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-2 text-xs font-semibold text-neutral-300 transition-all duration-300 hover:border-neutral-700 hover:text-white"
          >
            <PhoneCall className="h-3 w-3 text-orange-500" />
            <span>+91 98765 43210</span>
          </a>

          <button
            onClick={() => onOpenJoin()}
            className="relative hidden sm:block overflow-hidden rounded-full bg-gradient-to-r from-orange-600 to-red-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-red-600/20 transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              Claim VIP Pass
            </span>
            <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 hover:opacity-100" />
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/40 text-neutral-300 transition-colors hover:text-white md:hidden cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-neutral-800/80 bg-neutral-950/95 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-4 px-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold tracking-wider text-neutral-300 transition-colors hover:text-orange-500 py-1 border-b border-neutral-900"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-4 pt-4">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900/40 py-3 text-sm font-semibold text-neutral-200"
                >
                  <PhoneCall className="h-4 w-4 text-orange-500" />
                  +91 98765 43210
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenJoin();
                  }}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-red-600/20 cursor-pointer"
                >
                  Claim VIP Pass
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
