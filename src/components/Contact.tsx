import { useState } from 'react';
import { MapPin, Phone, MessageSquare, Compass, ShieldAlert, ChevronDown, ChevronUp, Clock, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import TiltCard from './TiltCard';

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const locations = [
    {
      city: 'NEW DELHI Hub',
      address: '2nd Floor, Inner Circle, Connaught Place, Radial Road 3, New Delhi - 110001',
      phone: '+91 98765 43210',
    },
    {
      city: 'MUMBAI Hub',
      address: 'Sea Face Heights, Carter Road, Bandra West, Mumbai, Maharashtra - 400050',
      phone: '+91 98765 43211',
    },
    {
      city: 'BENGALURU Hub',
      address: '100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka - 560038',
      phone: '+91 98765 43212',
    },
  ];

  const faqs = [
    {
      q: "HOW DO I REDEEM MY VIP GOLDEN PASS AFTER ENROLLMENT?",
      a: "After you enter your details in any 'Join Now' modal, our system generates a digital VIP Golden Pass with your unique Code. Simply present the screenshot or printout at any of our Connaught Place (Delhi), Carter Road (Mumbai), or Indiranagar (Bengaluru) receptions. Our staff will immediately activate your 2 free multi-zone test sessions.",
    },
    {
      q: "ARE PERSONAL TRAINERS CERTIFIED IN NATIONAL ATHLETICS?",
      a: "Absolutely. Every personal trainer at Iron Creed holds certified diplomas in clinical diet planning, kinetics analysis, or has competed on state and national powerlifting/physique medal boards. You train under the absolute best athletes in the country.",
    },
    {
      q: "WHAT EQUIPMENT DO YOU PROVIDE EXCLUSIVELY?",
      a: "Our spaces are loaded with premium customized selectorized machines, multi-planar cables, pure steel bumper plates, heavy lifting platforms, curved runners, and biomorphic conditioning modules imported directly from international strength labs.",
    },
    {
      q: "HOW DOES DEPOSIT WORK AND CAN I FREEZE MY MEMBERSHIP?",
      a: "We carry zero joining deposits. Also, we support continuous freezing of memberships! You can temporarily hold your membership up to 30 days per contract semester free of cost (perfect for travels or exams).",
    }
  ];

  return (
    <section id="contact" className="relative bg-neutral-950 py-24 text-white">
      {/* Background glowing particles overlay */}
      <div className="absolute top-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-orange-600/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-[15%] h-[400px] w-[400px] rounded-full bg-red-600/5 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Contact and FAQ columns layout */}
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          
          {/* Form / Direct Locations block (7 columns) */}
          <div className="lg:col-span-7 space-y-12">
            
            <div className="space-y-3">
              <span className="font-mono text-xs font-black uppercase tracking-widest text-orange-500 flex items-center gap-2">
                <Compass className="h-4 w-4 animate-spin" /> HEADQUARTERS & TELEPHONY DIRECTORY
              </span>
              <h2 className="font-sans text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
                SECURE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">BREED ENTRANCE</span>
              </h2>
              <p className="max-w-xl text-xs sm:text-sm text-neutral-400">
                Connect immediately with our duty coaches via direct phone dials or click to instant-chat on WhatsApp for priority lounge clearance maps.
              </p>
            </div>

            {/* Direct Dial CTAs */}
            <div className="grid gap-6 sm:grid-cols-2">
              <TiltCard glowColor="rgba(239, 68, 68, 0.15)" className="flex flex-col justify-between p-8 bg-neutral-900/60 border border-neutral-900 rounded-3xl">
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-lg bg-orange-600/10 flex items-center justify-center text-orange-500">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-bold uppercase text-white">Direct Line</h3>
                    <p className="text-xs text-neutral-400 mt-1">Get instant assistance from our central Desk Officer.</p>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="tel:+919876543210"
                    className="block text-center rounded-xl bg-orange-600/10 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 py-3 text-xs font-bold uppercase tracking-wider text-orange-400 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </TiltCard>

              <TiltCard glowColor="rgba(34, 197, 94, 0.15)" className="flex flex-col justify-between p-8 bg-neutral-900/60 border border-neutral-900 rounded-3xl">
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-lg bg-emerald-600/10 flex items-center justify-center text-emerald-500">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-bold uppercase text-white">WhatsApp Chat</h3>
                    <p className="text-xs text-neutral-400 mt-1">Send an immediate message to claim your digital coupons.</p>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="https://wa.me/919876543210?text=Hi%20Iron%20Creed!%20I%20want%20to%20claim%20my%20VIP%20Golden%20Pass%20for%20a%20free%20gym%20trial%20session."
                    target="_blank"
                    rel="noreferrer"
                    className="block text-center rounded-xl bg-emerald-600/10 hover:bg-emerald-600 py-3 text-xs font-bold uppercase tracking-wider text-emerald-500 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    Instant WhatsApp
                  </a>
                </div>
              </TiltCard>
            </div>

            {/* Indian Hub Locations directory */}
            <div className="space-y-6">
              <h3 className="font-sans text-lg font-bold uppercase tracking-wider text-white">
                LOCATE AN IRON CREED ZONE
              </h3>
              
              <div className="space-y-4">
                {locations.map((loc, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-neutral-900 bg-neutral-900/30 p-5 hover:border-neutral-800 transition-colors"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="h-8 w-8 rounded-lg bg-orange-600/15 flex items-center justify-center text-orange-500 shrink-0 mt-0.5">
                        <MapPin className="h-4.5 w-4.5" />
                      </div>
                      <div className="space-y-1">
                        <span className="block font-sans text-xs font-black uppercase text-orange-400 tracking-wider">
                          {loc.city}
                        </span>
                        <p className="text-xs text-neutral-300 max-w-md leading-relaxed">
                          {loc.address}
                        </p>
                      </div>
                    </div>

                    <a
                      href={`tel:${loc.phone.replace(/\s+/g, '')}`}
                      className="shrink-0 text-xs font-mono font-bold text-neutral-400 hover:text-white transition-colors"
                    >
                      {loc.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Luxury FAQ & Simulated Radar locator (5 columns) */}
          <div className="lg:col-span-5 space-y-12">
            
            <div className="space-y-4">
              <h3 className="font-sans text-xl font-extrabold uppercase text-white tracking-wide flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-orange-500" /> FAQ SECTION
              </h3>
              <p className="text-xs text-neutral-400">
                Everything you require to identify your next training cycle layout.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-neutral-900 bg-neutral-900/10 overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full flex justify-between items-center px-6 py-4.5 text-left font-sans text-xs sm:text-sm font-black uppercase text-white tracking-wide hover:bg-neutral-900/40 transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <ChevronUp className="h-4 w-4 text-orange-400" /> : <ChevronDown className="h-4 w-4 text-neutral-400" />}
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="border-t border-neutral-950 p-6 bg-neutral-950/20"
                        >
                          <p className="text-xs text-neutral-400 leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Embedded Cyberpunk Locator Radar/Graphic */}
            <div className="relative overflow-hidden rounded-3xl border border-neutral-900 bg-neutral-900/40 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-5 w-5 text-orange-500 animate-[pulse_1.5s_infinite]" />
                <div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-white">OPERATIONAL FLOOR HOURS</h4>
                  <p className="text-[10px] text-neutral-400 font-mono">24 HOURS OPEN • EVERY CORE HUB IN INDIA</p>
                </div>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Floor trainers are present round-the-clock. Core sauna and biometric lounge services execute from 06:00 AM up to 11:30 PM daily. Dedicated physiotherapists operate on request mappings.
              </p>
            </div>

          </div>

        </div>

        {/* Humility Trademark & Standard footer branding */}
        <div className="border-t border-neutral-900 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 Iron Creed Fitness India Private Limited. All rights reserved across international platforms.</p>
          <div className="flex gap-4">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <span>•</span>
            <a href="#plans" className="hover:text-white transition-colors">Privacy Charter</a>
            <span>•</span>
            <a href="#contact" className="hover:text-white transition-colors">Terms of Enrollment</a>
          </div>
        </div>

      </div>
    </section>
  );
}
