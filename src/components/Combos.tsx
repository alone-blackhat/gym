import { motion } from 'motion/react';
import { ShoppingBag, ShieldCheck, Zap, Gift } from 'lucide-react';
import TiltCard from './TiltCard';
import trainersBg from '../assets/images/transformation_elite_1780714341107.png';

interface CombosProps {
  onOpenJoin: (comboName: string, price: number) => void;
}

export default function Combos({ onOpenJoin }: CombosProps) {
  const combos = [
    {
      id: 'combo_1',
      name: 'Gym + Elite Personal Training',
      tagline: '🚨 MOST PREFERRED FOR SCIENTIFIC DEVELOPMENT',
      price: 8499,
      savings: 4000,
      period: 'Month',
      popular: true,
      features: [
        'All-Access VIP Strength Floors',
        'Daily 1-on-1 Dedicated Trainer Slot',
        'Joint load & kinetic range check-ups',
        'Direct trainer whatsapp log access',
      ],
      glowColor: 'rgba(239, 68, 68, 0.15)', // red
    },
    {
      id: 'combo_2',
      name: 'Gym + Active Diet Plan Pack',
      tagline: '🧬 KILO SHRED / MASS CALIBRATION MATRIX',
      price: 4999,
      savings: 2500,
      period: 'Month',
      features: [
        'All-Access VIP Strength Floors',
        'Customized weekly protein-carb diet logs',
        'Caloric adjustment sheets based on output',
        '2 Free hydration reviews with supplement plans',
      ],
      glowColor: 'rgba(249, 115, 22, 0.15)', // orange
    },
    {
      id: 'combo_3',
      name: 'Ultimate Triple Blast Combo',
      tagline: '⚡ STRENGTH + CARDIO + CROSSFIT CONVERGENCE',
      price: 5499,
      savings: 3000,
      period: 'Month',
      features: [
        'Gym + High-speed Cardio access',
        '3 Crossfit & Boxing HIIT Classes / week',
        'Powerlifting platform custom clearance',
        'Functional capacity reviews',
      ],
      glowColor: 'rgba(59, 130, 246, 0.15)', // blue
    },
    {
      id: 'combo_4',
      name: '6 Months Elite Transformation',
      tagline: '🔥 THE TOTAL COMPREHENSIVE RECONSTRUCTION',
      price: 24999,
      savings: 11000,
      period: '6 Months',
      popular: true,
      features: [
        'Full 6 M membership across all zones',
        'Dedicated Senior Lead Coach',
        'Complete metabolic bio-type scanning panels',
        'Pre & Post achievement photoshoot sessions',
      ],
      glowColor: 'rgba(239, 68, 68, 0.2)', // intense red
    },
  ];

  return (
    <section id="combos" className="relative bg-neutral-950 py-24">
      {/* Background radial accent */}
      <div className="absolute top-[30%] left-[10%] h-[300px] w-[300px] rounded-full bg-orange-600/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Banner Section with trainer showcase side-by-side */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Text and Combos Grid (8 columns) */}
          <div className="lg:col-span-8 space-y-12">
            
            <div className="space-y-3">
              <span className="font-mono text-xs font-black uppercase tracking-widest text-orange-500 flex items-center gap-2">
                <ShoppingBag className="h-4 w-4" /> DYNAMIC COMBO CONVERGENCES
              </span>
              <h2 className="font-sans text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
                SUPERCHARGED <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">COMBO ARCHS</span>
              </h2>
              <p className="max-w-2xl text-xs sm:text-sm text-neutral-400">
                Unlock maximal savings by stacking strength floor clearances with certified professional athlete trainers, biomorphic diet blueprints, and high-intensity HIIT CrossFit loops.
              </p>
            </div>

            {/* Combos Cards Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {combos.map((combo) => (
                <TiltCard
                  key={combo.id}
                  glowColor={combo.glowColor}
                  className={`flex flex-col justify-between border ${
                    combo.popular ? 'border-orange-500/40 bg-neutral-900/60 shadow-xl' : 'border-neutral-900'
                  }`}
                >
                  <div className="space-y-5">
                    {/* Header line with badge */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] font-black uppercase tracking-widest text-orange-500 flex items-center gap-1 bg-orange-500/10 px-2 py-0.5 rounded-md">
                        <Zap className="h-3 w-3 shrink-0" /> SAVE ₹{combo.savings.toLocaleString()}
                      </span>
                      {combo.popular && (
                        <span className="font-sans text-[8px] font-black uppercase tracking-widest text-white bg-gradient-to-r from-orange-600 to-red-600 px-2 py-0.5 rounded">
                          🔥 POPULAR DESI PICK
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="font-sans text-lg font-black uppercase tracking-wide text-white">
                        {combo.name}
                      </h3>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 mt-1 font-bold">
                        {combo.tagline}
                      </p>
                    </div>

                    {/* Features list */}
                    <ul className="space-y-2 border-t border-neutral-900 pt-4">
                      {combo.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-neutral-400">
                          <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price display & action */}
                  <div className="mt-8 border-t border-neutral-900 pt-4 flex items-center justify-between">
                    <div>
                      <span className="block font-mono text-[8px] uppercase tracking-widest text-neutral-500">INDIVIDUAL NET RATE</span>
                      <span className="font-sans text-xl font-bold text-white">₹{combo.price.toLocaleString()}</span>
                      <span className="text-xs text-neutral-500"> / {combo.period}</span>
                    </div>

                    <button
                      onClick={() => onOpenJoin(combo.name, combo.price)}
                      className="rounded-lg bg-orange-500/10 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-400 hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      Book Combo
                    </button>
                  </div>
                </TiltCard>
              ))}
            </div>

          </div>

          {/* Trainer Dynamic Portrait Showcase (4 columns) */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="relative group overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 p-2 shadow-2xl">
              
              {/* Media element using generated trainer portrait */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
                <img
                  src={trainersBg}
                  alt="Elite Certified Personal Trainers back-to-back at Iron Creed"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 border border-neutral-900"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual shade overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                
                {/* Active float texts */}
                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-2.5 py-1 text-[9px] font-mono font-black uppercase tracking-wider text-white shadow-lg shadow-red-600/30">
                    <Gift className="h-3 w-3 animate-bounce" /> CERTIFIED ATHLETE RECON
                  </span>
                  <h3 className="font-sans text-lg font-extrabold uppercase text-white tracking-wide">
                    MEET THE CRUCIBLE LEADERS
                  </h3>
                  <p className="text-[10px] text-neutral-300 leading-relaxed">
                    Personal trainer combinations leverage premium coaches trained under national weightlifting & physique titleboards to systematically optimize joint mobility and load thresholds.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
