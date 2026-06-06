import { useState } from 'react';
import { Percent, Clipboard, ClipboardCheck, Gift, Award, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import TiltCard from './TiltCard';

interface OffersProps {
  onOpenJoin: (offerName: string, discountCode: string) => void;
}

export default function Offers({ onOpenJoin }: OffersProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(text);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const offers = [
    {
      id: 'festive',
      title: '🪔 Ultimate Festival Offer',
      discountText: 'FLAT 20% OFF',
      description: 'Get deep reductions plus a complimentary 10-day pass coupon for your spouse on any 3 Months+ packages.',
      expiryText: 'Valid till Sunday',
      code: 'FESTIVAL20',
      gradient: 'from-orange-600/90 to-red-600/95',
      glowColor: 'rgba(239, 68, 68, 0.2)',
    },
    {
      id: 'student',
      title: '🎓 Student Warrior Discount',
      discountText: 'EXTRA 15% OFF',
      description: 'Present valid university/school credentials at enrollment to trigger instant flat academic deductions.',
      expiryText: 'Always active',
      code: 'STUDENT15',
      gradient: 'from-blue-600/80 to-indigo-700/95',
      glowColor: 'rgba(59, 130, 246, 0.15)',
    },
    {
      id: 'buddy',
      title: '🤝 Couple & Buddy Offer',
      discountText: '₹3,000 DIRECT OFF',
      description: 'Join together with your fitness partner, relative, or friend, and save instant cash back on both core contracts.',
      expiryText: 'Limited to first 50 pairs',
      code: 'BUDDYPACK',
      gradient: 'from-purple-600/80 to-pink-700/95',
      glowColor: 'rgba(219, 39, 119, 0.15)',
    },
    {
      id: 'new_member',
      title: '🎒 New Member Kit Lock',
      discountText: 'FREE PREMIUM WELCOME KIT',
      description: 'Enroll today and score a limited-edition branded shaker capsule + a biomorphic smart sweat towel worth ₹2,200.',
      expiryText: 'Ends this month',
      code: 'WELCOMEKIT',
      gradient: 'from-emerald-600/80 to-teal-700/95',
      glowColor: 'rgba(16, 185, 129, 0.15)',
    },
  ];

  return (
    <section id="offers" className="relative bg-neutral-900 py-24">
      {/* Background vignette blur circles */}
      <div className="absolute top-[20%] right-[10%] h-[280px] w-[280px] rounded-full bg-red-600/5 blur-[100px]" />
      <div className="absolute bottom-[20%] left-[8%] h-[350px] w-[350px] rounded-full bg-orange-600/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="font-mono text-xs font-black uppercase tracking-widest text-orange-500 flex items-center gap-1.5">
            <Percent className="h-4 w-4" /> FESTIVAL BONANZA & CONTRACT DISCOUNTS
          </span>
          <h2 className="font-sans text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
            EXCLUSIVE SAVINGS <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">OFFER SUITE</span>
          </h2>
          <p className="max-w-2xl text-xs sm:text-sm text-neutral-400">
            Apply these limited-edition codes inside your instant VIP golden pass checkouts to lock down the lowest prices in the elite Indian training space.
          </p>
        </div>

        {/* Offers Bento Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {offers.map((offer) => (
            <TiltCard
              key={offer.id}
              glowColor={offer.glowColor}
              className="flex flex-col justify-between overflow-hidden border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-950/80 p-8 relative"
            >
              <div className="space-y-6">
                
                {/* Header row containing offer title and coupon copying option */}
                <div className="flex items-center justify-between">
                  <h3 className="font-sans text-lg font-black uppercase tracking-wide text-white">
                    {offer.title}
                  </h3>
                  
                  {/* Copy code helper with tooltip feedback */}
                  <button
                    onClick={() => copyToClipboard(offer.code)}
                    className="relative flex items-center gap-1.5 rounded-lg border border-neutral-700 bg-neutral-900/80 px-2.5 py-1.5 text-[10px] font-mono tracking-widest text-neutral-300 transition-all hover:border-neutral-500 hover:text-white cursor-pointer"
                  >
                    {copiedCode === offer.code ? (
                      <>
                        <ClipboardCheck className="h-3.5 w-3.5 text-emerald-500" />
                        <span className="text-emerald-400">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Clipboard className="h-3.5 w-3.5 text-orange-500" />
                        <span>{offer.code}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Offer Discount banner styling */}
                <div className={`rounded-xl p-5 bg-gradient-to-r ${offer.gradient} shadow-lg shadow-black/30 border border-white/5`}>
                  <span className="block font-sans text-2xl font-black text-white tracking-wider">
                    {offer.discountText}
                  </span>
                  <span className="block font-mono text-[9px] font-bold text-white/80 uppercase tracking-widest mt-1">
                    {offer.expiryText}
                  </span>
                </div>

                {/* Offer description text */}
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {offer.description}
                </p>

              </div>

              {/* Interaction button row */}
              <div className="mt-8 pt-4 border-t border-neutral-900 flex items-center justify-between">
                <span className="text-[10px] font-mono text-neutral-500 italic">
                  *Present digital pass at reception desk key redeem.
                </span>

                <button
                  onClick={() => onOpenJoin(offer.title, offer.code)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-orange-500 hover:text-orange-400 uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Apply & Claim →
                </button>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Seasonal Promo banner */}
        <div className="mt-12 rounded-3xl border border-orange-500/20 bg-gradient-to-r from-orange-500/5 to-red-600/5 p-8 relative overflow-hidden text-center md:text-left">
          <div className="absolute top-0 right-0 h-40 w-40 bg-orange-600/5 blur-2xl rounded-full" />
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1 rounded bg-orange-500/10 px-2 py-0.5 font-mono text-[9px] font-black text-orange-400 uppercase tracking-widest">
                🚨 MEGA FLASH SALE TODAY
              </span>
              <h3 className="font-sans text-xl font-bold uppercase text-white tracking-wide">
                FIRST 100 CHROME VIP ENROLLMENTS GET 1 MONTH COMPLEMENTARY COACHING!
              </h3>
              <p className="text-xs text-neutral-400 max-w-2xl leading-relaxed">
                Unlock daily workout alerts, targeted biomechanics guidelines, and a free trial protein shake on every checkout. Rest assured, booking a ticket online carries 100% money back support, no queries!
              </p>
            </div>

            <button
              onClick={() => onOpenJoin('Mega Seasonal Flash Deal', 'FLASH100')}
              className="shrink-0 rounded-full bg-gradient-to-r from-orange-600 to-red-600 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-xl shadow-red-600/15 select-none hover:shadow-red-600/30 cursor-pointer"
            >
              Lock Flash Deal
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
