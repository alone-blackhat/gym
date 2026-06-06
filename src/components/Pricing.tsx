import { useState, useEffect } from 'react';
import { Check, ShieldAlert, Flame, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import TiltCard from './TiltCard';

interface PricingProps {
  onOpenJoin: (planName: string, price: number) => void;
}

export default function Pricing({ onOpenJoin }: PricingProps) {
  // Limited time offer countdown state
  const [timeLeft, setTimeLeft] = useState({
    hours: '11',
    minutes: '58',
    seconds: '24',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      // Calculate remaining hours, mins, secs of current day as dummy ticking countdown
      const hours = 23 - now.getHours();
      const mins = 59 - now.getMinutes();
      const secs = 59 - now.getSeconds();

      setTimeLeft({
        hours: hours.toString().padStart(2, '0'),
        minutes: mins.toString().padStart(2, '0'),
        seconds: secs.toString().padStart(2, '0'),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const plans = [
    {
      id: 'month_1',
      name: '1 Month Starter Pack',
      duration: '1 Month',
      originalPrice: 4500,
      discountPrice: 2999,
      badgeText: 'KICKSTART',
      features: [
        'Premium Floor Gym Access',
        'Certified Coach Guidance',
        'Equilibrium Locker Access',
        '1 Free Physio Session',
        'Standard Fitness Blueprint',
      ],
      glowColor: 'rgba(59, 130, 246, 0.12)', // blue glow
    },
    {
      id: 'month_3',
      name: '3 Months Core Pack',
      duration: '3 Months',
      originalPrice: 12000,
      discountPrice: 6999,
      badgeText: 'BEST VALUE',
      features: [
        'Floor Gym + Group Cardio Access',
        '2 Personal Diet Counselling Charts',
        'Digital Workout Tracking App',
        'Steam & Shower Locker Access',
        '2 Complimentary Guest Passes',
      ],
      popular: true,
      glowColor: 'rgba(239, 68, 68, 0.16)', // red glow
    },
    {
      id: 'month_6',
      name: '6 Months Elite Pack',
      duration: '6 Months',
      originalPrice: 22000,
      discountPrice: 10999,
      badgeText: 'RECOMMENDED',
      features: [
        'Floor Gym + Unlimited CrossFit',
        'Custom Nutrition Plans',
        'Dedicated Personal Coach Reviews',
        'Unlimited VIP Lounge & Sauna',
        '4 Complimentary Guest Passes',
        'Weekly Bio-impedance Tests',
      ],
      glowColor: 'rgba(249, 115, 22, 0.14)', // orange glow
    },
    {
      id: 'month_12',
      name: '1 Year VIP Champion Pack',
      duration: '1 Year',
      originalPrice: 40000,
      discountPrice: 17999,
      badgeText: 'ULTIMATE SAVINGS',
      features: [
        'All-Access VIP Priority Pass 24/7',
        'Structured Diet & Supplement Charts',
        'Direct 1-on-1 Physiotherapist Consultation',
        'Dedicated Premium Locker Suite',
        '10 Complimentary Guest Passes',
        'Official Cyber-Gym Premium Shaker + Gym Bag Kit',
      ],
      glowColor: 'rgba(239, 68, 68, 0.18)', // red gold glow
    },
  ];

  return (
    <section id="plans" className="relative bg-neutral-900 py-24">
      {/* Background visual overlays */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Title and Countdown Banner */}
        <div className="flex flex-col items-center justify-between gap-6 border-b border-neutral-800 pb-12 lg:flex-row">
          <div className="space-y-3 text-center lg:text-left">
            <span className="font-mono text-xs font-black uppercase tracking-widest text-orange-500">
              💎 CHOOSE YOUR CONTRACT
            </span>
            <h2 className="font-sans text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
              EXCLUSIVE MEMBERSHIP <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">PASSES</span>
            </h2>
            <p className="max-w-xl text-xs sm:text-sm text-neutral-400">
              All online pass bookings lock in the current festival price tags and grant complementary fitness assessments worth ₹5,500. No joining fees!
            </p>
          </div>

          {/* Countdown Clock banner */}
          <div className="flex flex-col items-center rounded-2xl border border-red-500/30 bg-red-500/5 px-6 py-4 backdrop-blur-md relative overflow-hidden">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-600 opacity-10 animate-pulse pointer-events-none" />
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-orange-500 animate-spin" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-orange-400 font-bold">
                ⚠️ LIMITED SEATS IN FESTIVAL DEALS
              </span>
            </div>
            
            <div className="flex gap-2">
              <div className="flex flex-col items-center">
                <span className="font-mono text-xl font-black text-white bg-neutral-950 px-2.5 py-1 rounded-md border border-neutral-800">
                  {timeLeft.hours}
                </span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 font-bold mt-1">Hrs</span>
              </div>
              <span className="text-neutral-500 font-sans text-2xl font-black">:</span>
              <div className="flex flex-col items-center">
                <span className="font-mono text-xl font-black text-white bg-neutral-950 px-2.5 py-1 rounded-md border border-neutral-800">
                  {timeLeft.minutes}
                </span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 font-bold mt-1">Mins</span>
              </div>
              <span className="text-neutral-500 font-sans text-2xl font-black">:</span>
              <div className="flex flex-col items-center">
                <span className="font-mono text-xl font-black text-white bg-neutral-950 px-2.5 py-1 rounded-md border border-neutral-800">
                  {timeLeft.seconds}
                </span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 font-bold mt-1">Secs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => {
            const savingsPercent = Math.round(((plan.originalPrice - plan.discountPrice) / plan.originalPrice) * 100);
            return (
              <TiltCard
                key={plan.id}
                glowColor={plan.glowColor}
                className={`relative flex flex-col justify-between overflow-hidden border ${
                  plan.popular
                    ? 'border-orange-500/50 bg-neutral-950 shadow-2xl shadow-orange-500/5'
                    : 'border-neutral-800'
                }`}
              >
                {/* Popular label / tag */}
                {plan.popular && (
                  <div className="absolute -right-16 top-5 rotate-45 bg-gradient-to-r from-orange-600 to-red-600 py-1 text-center w-48 text-[9px] font-sans font-black tracking-widest text-white uppercase shadow-md">
                    👑 BESTSELLER
                  </div>
                )}

                <div>
                  {/* Badge Text */}
                  <span className="inline-block rounded-md bg-neutral-800 border border-neutral-700 px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-orange-400">
                    {plan.badgeText}
                  </span>

                  {/* Plan Name */}
                  <h3 className="mt-4 font-sans text-lg font-black uppercase tracking-wide text-white">
                    {plan.name}
                  </h3>

                  {/* Price Block */}
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-sans text-3xl font-black text-white">
                      ₹{plan.discountPrice.toLocaleString()}
                    </span>
                    <span className="text-xs text-neutral-400 line-through">
                      ₹{plan.originalPrice.toLocaleString()}
                    </span>
                    <span className="rounded bg-orange-500/10 px-1.5 py-0.5 font-mono text-[10px] font-bold text-orange-400">
                      {savingsPercent}% OFF
                    </span>
                  </div>
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-neutral-500 font-bold mt-1">
                    GST INCLUDED • SINGLE PASS RETAILER
                  </span>

                  {/* Features List */}
                  <div className="mt-8 border-t border-neutral-800/80 pt-6">
                    <ul className="flex flex-col gap-3.5">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                          <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Interactive CTA to generate ticket */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={() => onOpenJoin(plan.name, plan.discountPrice)}
                    className={`relative w-full rounded-xl py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 cursor-pointer ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-xl shadow-red-600/15 hover:shadow-red-600/30'
                        : 'border border-neutral-700 bg-neutral-850 text-neutral-300 hover:border-neutral-500 hover:text-white'
                    }`}
                  >
                    Select Plan
                  </button>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Security / Quality Check row */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-xl border border-neutral-800/50 bg-neutral-950/40 px-6 py-4 sm:flex-row sm:gap-0">
          <div className="flex items-center gap-3">
            <ShieldAlert className="h-5 w-5 text-orange-500" />
            <span className="text-xs text-neutral-400 font-medium">
              We stand by our coaching quality. Try us for <strong>2 FREE Session Trials</strong> before finalizing your membership check.
            </span>
          </div>
          <button
            onClick={() => onOpenJoin('2-Day VIP Free Trial', 0)}
            className="font-mono text-xs font-bold text-orange-500 hover:text-orange-400 uppercase tracking-widest flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Claim Free Trials →</span>
          </button>
        </div>

      </div>
    </section>
  );
}
