import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Flame, ChevronRight, Zap } from 'lucide-react';
import heroBg from '../assets/images/luxury_gym_hero_1780714322916.png';

interface HeroProps {
  onOpenJoin: () => void;
}

export default function Hero({ onOpenJoin }: HeroProps) {
  // Counters for the Indian Gym Advertisement
  const [counts, setCounts] = useState({
    members: 0,
    transformations: 0,
    experience: 0,
  });

  useEffect(() => {
    const duration = 2000; // ms
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing curve
      const easeVal = 1 - Math.pow(1 - progress, 3);

      setCounts({
        members: Math.floor(easeVal * 45000),
        transformations: Math.floor(easeVal * 98.7),
        experience: Math.floor(easeVal * 12),
      });

      if (progress === 1) {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black pt-20">
      {/* 1. Cinematic Background Image with Dual Neon Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Cinematic Dark Luxury Indian Gym Atmosphere"
          className="h-full w-full object-cover opacity-50 scale-105 filter brightness-90 animate-[pulse_10s_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        {/* Deep vignettes and gradient covers */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-transparent to-neutral-950/95" />
        
        {/* Vivid custom neon highlights */}
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-600/10 blur-[150px] animate-pulse" />
        <div className="absolute bottom-20 right-10 h-[600px] w-[600px] rounded-full bg-red-600/10 blur-[180px] animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Text and Primary Information */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-8">
            
            {/* Upper Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex max-w-fit items-center gap-2 rounded-full border border-burnt-orange/30 bg-burnt-orange/5 px-4 py-1.5 backdrop-blur-md"
            >
              <Flame className="h-4 w-4 text-burnt-orange animate-pulse" />
              <span className="font-mono text-[10px] font-black uppercase tracking-widest text-burnt-orange">
                ⭐ INDIA'S PREMIER 3D SMART FITNESS CLUB
              </span>
            </motion.div>

            {/* Main Punchy Typography */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="font-bebas text-5xl font-extrabold uppercase tracking-wide text-white sm:text-6xl md:text-7xl lg:text-8xl leading-none">
                TRANSFORM YOUR <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-burnt-orange via-neon-red to-burnt-orange glow-red">
                  BODY
                  <span className="absolute left-0 right-0 bottom-1 h-2 bg-neon-red/20 blur-[2px]" />
                </span>
                <br />
                TRANSFORM YOUR <span className="text-white relative inline-block">LIFE.</span>
              </h1>
              
              <p className="max-w-xl font-sans text-sm sm:text-base text-neutral-300 leading-relaxed">
                Unlock India's premium high-tech training experience. Iron Creed pairs state-of-the-art biomorphic equipment with elite certified athletes to map your transformation cycle.
              </p>
            </motion.div>

            {/* Buttons / CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-[0_auto] flex-col gap-4 sm:flex-row sm:items-center"
            >
              <button
                onClick={onOpenJoin}
                className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-burnt-orange via-neon-red to-burnt-orange px-8 py-4 font-oswald text-sm font-extrabold uppercase tracking-widest text-white shadow-2xl shadow-neon-red/30 transition-transform active:scale-95 cursor-pointer"
              >
                {/* Glow ring */}
                <span className="absolute -inset-0.5 bg-gradient-to-r from-burnt-orange to-neon-red opacity-60 blur-md transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative z-10 flex items-center gap-2">
                  Join Now (Claim Pass)
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>

              <a
                href="#plans"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/40 px-8 py-4 font-oswald text-sm font-bold uppercase tracking-wider text-neutral-200 backdrop-blur-sm transition-all duration-300 hover:border-neutral-500 hover:bg-neutral-900/80 hover:text-white"
              >
                <span>View Plans</span>
                <Zap className="h-4 w-4 text-burnt-orange" />
              </a>
            </motion.div>

            {/* Real-time counters with premium layout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:gap-8"
            >
              <div>
                <span className="font-bebas text-3xl font-black text-white sm:text-4xl md:text-5xl tracking-wide glow-red">
                  {counts.members.toLocaleString()}+
                </span>
                <p className="mt-1 font-montserrat text-[9px] font-extrabold uppercase tracking-widest text-burnt-orange">
                  Active athletes
                </p>
              </div>

              <div>
                <span className="font-bebas text-3xl font-black text-white sm:text-4xl md:text-5xl tracking-wide glow-cyan">
                  {counts.transformations}%
                </span>
                <p className="mt-1 font-montserrat text-[9px] font-extrabold uppercase tracking-widest text-burnt-orange">
                  Success rate
                </p>
              </div>

              <div>
                <span className="font-bebas text-3xl font-black text-white sm:text-4xl md:text-5xl tracking-wide">
                  {counts.experience} Yrs+
                </span>
                <p className="mt-1 font-montserrat text-[9px] font-extrabold uppercase tracking-widest text-burnt-orange">
                  Elite heritage
                </p>
              </div>
            </motion.div>

          </div>

          {/* Graphical/Illustrative Side visual panel */}
          <div className="lg:col-span-5 relative hidden md:flex items-center justify-center">
            {/* Glowing 3D-feeling geometric frames containing gym properties */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative w-full max-w-sm aspect-square rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-1 flex items-center justify-center overflow-hidden shadow-2xl"
            >
              {/* Spinning animated light borders */}
              <div className="absolute inset-0 -z-10 bg-[conic-gradient(from_0deg,#ea580c,#dc2626,transparent)] opacity-20 animate-[spin_6s_linear_infinite]" />
              
              <div className="relative w-full h-full rounded-3xl bg-neutral-950/90 p-8 flex flex-col justify-between overflow-hidden">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-orange-600 to-red-600 flex items-center justify-center text-white shadow-lg shadow-red-500/20">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase text-white">VIP EXCLUSIVE MEMBER LOCK</h3>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                      Every pass booked online registers you for an immediate personalized fit consultation, biochemical body typing, and a tailored diet layout worth ₹5,500 for FREE.
                    </p>
                  </div>
                </div>

                <div className="border-t border-neutral-900 pt-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-neutral-300">
                    <ShieldCheck className="h-4 w-4 text-orange-500" />
                    <span>Certified Olympic-Standard Coaches</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-neutral-300">
                    <ShieldCheck className="h-4 w-4 text-orange-500" />
                    <span>Ultra-modern BioMechanic Equipment</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-neutral-300">
                    <ShieldCheck className="h-4 w-4 text-orange-500" />
                    <span>Secure Biometric Space 24/7 Access</span>
                  </div>
                </div>

                {/* Decorative neon dot */}
                <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-orange-600/20 blur-xl animate-pulse" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
