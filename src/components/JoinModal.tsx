import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Download, CreditCard, Share2, Printer, CheckCircle2 } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPlan?: string;
  preselectedPrice?: number;
  preselectedCode?: string;
}

export default function JoinModal({
  isOpen,
  onClose,
  preselectedPlan = 'Choose a plan...',
  preselectedPrice = 0,
  preselectedCode = '',
}: JoinModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    plan: preselectedPlan,
    code: preselectedCode,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketGenerated, setTicketGenerated] = useState(false);
  const [passCode, setPassCode] = useState('');

  // Update form inputs if parent properties change on separate click actions
  useEffect(() => {
    setFormData({
      name: formData.name,
      phone: formData.phone,
      plan: preselectedPlan,
      code: preselectedCode,
    });
  }, [preselectedPlan, preselectedCode]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreatePass = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);

    // Simulate cybernetic bio-profile mapping
    setTimeout(() => {
      const generatedCode = `IC-DESI-${Math.floor(100000 + Math.random() * 900000)}`;
      setPassCode(generatedCode);
      setIsSubmitting(false);
      setTicketGenerated(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      plan: 'Choose a plan...',
      code: '',
    });
    setTicketGenerated(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              onClose();
              resetForm();
            }}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 p-6 shadow-2xl md:p-8"
          >
            {/* Corner Glow background elements */}
            <div className="absolute top-0 right-0 h-24 w-24 bg-orange-600/10 blur-2xl rounded-full" />
            <div className="absolute bottom-0 left-0 h-24 w-24 bg-red-600/10 blur-2xl rounded-full" />

            {/* Close button */}
            <button
              onClick={() => {
                onClose();
                resetForm();
              }}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {!ticketGenerated ? (
              // STEP 1: Registration Intake Form
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] font-black uppercase tracking-widest text-orange-500 flex items-center gap-1">
                    BIOMETRIC RESERVATION DESK
                  </span>
                  <h3 className="font-sans text-xl font-black uppercase tracking-wide text-white">
                    MAP YOUR ATTRITION LIMITS
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Register your central credentials to assign your custom golden pass, locking down active festival prices instantly.
                  </p>
                </div>

                <form onSubmit={handleCreatePass} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-1.5">
                      Phone Number (For WA confirmation)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-neutral-500">
                        +91
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        required
                        pattern="[0-9]{10}"
                        placeholder="98765 43210"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-neutral-800 bg-neutral-900 pl-14 pr-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Plan Picker dropdown */}
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-1.5">
                      Select Desired Track Plan
                    </label>
                    <select
                      name="plan"
                      value={formData.plan}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-neutral-300 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                    >
                      <option disabled>Choose a plan...</option>
                      <option value="1 Month Starter Pack">1 Month Starter Pack (₹2,999)</option>
                      <option value="3 Months Core Pack">3 Months Core Pack (₹6,999)</option>
                      <option value="6 Months Elite Pack">6 Months Elite Pack (₹10,999)</option>
                      <option value="1 Year VIP Champion Pack">1 Year VIP Champion Pack (₹17,999)</option>
                      <option value="Gym + Elite Personal Training">Gym + Personal Training Combo (₹8,499/M)</option>
                      <option value="Gym + Active Diet Plan Pack">Gym + Nutrition Diet Combo (₹4,999/M)</option>
                    </select>
                  </div>

                  {/* Promo Code Input */}
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-1.5">
                      Promo / Discount Code (Optional)
                    </label>
                    <input
                      type="text"
                      name="code"
                      placeholder="e.g. FESTIVAL20"
                      value={formData.code}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                    />
                  </div>

                  {/* Submitting Status / Action */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-orange-600 via-red-600 to-orange-500 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-xl shadow-red-600/10 cursor-pointer transition-transform active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        BIOMETRIC CORES REGISTRATION...
                      </span>
                    ) : (
                      <span>Generate My Athlete VIP Pass</span>
                    )}
                  </button>
                </form>

                {/* Secure Seal */}
                <div className="flex items-center justify-center gap-2 rounded-xl bg-neutral-900/40 p-3 text-[10px] text-neutral-400 border border-neutral-900">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  <span>No upfront payment required. Bring this pass to reception desk.</span>
                </div>
              </div>
            ) : (
              // STEP 2: Rendered Metallic VIP Athlete Ticket Pass
              <div className="space-y-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                  <CheckCircle2 className="h-6 w-6 animate-bounce" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-sans text-xl font-black uppercase text-white tracking-wide">
                    VIP PASS GENERATED!
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Screenshot or save this metallic voucher and present it at standard desk counters.
                  </p>
                </div>

                {/* METALLIC PASS CARDS GRAPHIC CONTAINER */}
                <div className="relative overflow-hidden rounded-3xl border border-neutral-700 bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 text-left shadow-2xl font-mono relative">
                  {/* Decorative diagonal cyber lines */}
                  <div className="absolute top-0 right-0 h-28 w-28 bg-orange-600/10 blur-xl rounded-full" />
                  <div className="absolute -bottom-6 -right-6 h-12 w-32 border-b-2 border-r-2 border-orange-500/20 rounded-br-2xl" />

                  {/* Header Logo Row */}
                  <div className="flex justify-between items-start border-b border-neutral-800 pb-4 mb-4">
                    <div>
                      <span className="block text-[11px] font-black text-white uppercase tracking-wider">
                        IRON CREED FITNESS
                      </span>
                      <span className="block text-[8px] text-neutral-400 uppercase tracking-widest">
                        VIP GOLDEN ACCESS
                      </span>
                    </div>
                    <span className="rounded bg-orange-500/10 px-2 py-0.5 text-[8px] font-bold text-orange-400 border border-orange-500/25 uppercase">
                      ACTIVE SECTOR
                    </span>
                  </div>

                  {/* Card Values row list */}
                  <div className="space-y-3 font-mono text-[10px] leading-relaxed">
                    <div>
                      <span className="block text-neutral-500 uppercase text-[8px] tracking-wider">ATHLETE NAMESPEC</span>
                      <span className="text-sm font-black text-white uppercase">{formData.name}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="block text-neutral-500 uppercase text-[8px] tracking-wider">UID PASS ID</span>
                        <span className="text-xs font-bold text-orange-400">{passCode}</span>
                      </div>
                      <div>
                        <span className="block text-neutral-500 uppercase text-[8px] tracking-wider">PHONE LINK</span>
                        <span className="text-xs font-bold text-neutral-300">+91 {formData.phone}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-t border-neutral-900 pt-3">
                      <div>
                        <span className="block text-neutral-500 uppercase text-[8px] tracking-wider">LOCKED CONTRACT</span>
                        <span className="text-[10px] font-bold text-white uppercase truncate">{formData.plan}</span>
                      </div>
                      <div>
                        <span className="block text-neutral-500 uppercase text-[8px] tracking-wider">COUPONS ACTIVE</span>
                        <span className="text-[10px] font-bold text-emerald-400 uppercase">
                          {formData.code || 'DIRECT DISCOUNT'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Simulated Scanner System Barcode / Grid Lines */}
                  <div className="mt-6 border-t border-dashed border-neutral-800 pt-4 flex items-center justify-between">
                    {/* Abstract linear barcode bar grids */}
                    <div className="flex gap-[2.5px] items-center h-8 opacity-40 shrink-0">
                      <div className="w-[1.5px] h-full bg-white" />
                      <div className="w-[3px] h-full bg-white" />
                      <div className="w-[1px] h-full bg-white" />
                      <div className="w-[4px] h-full bg-white" />
                      <div className="w-[1px] h-full bg-white" />
                      <div className="w-[2.5px] h-full bg-white" />
                      <div className="w-[1px] h-full bg-white" />
                      <div className="w-[5px] h-full bg-white" />
                      <div className="w-[1.5px] h-full bg-white" />
                      <div className="w-[2px] h-full bg-white" />
                      <div className="w-[1px] h-full bg-white" />
                    </div>

                    <div className="text-right">
                      <span className="block text-[7px] text-neutral-500">SYSTEM STYLING APPROVED</span>
                      <span className="block text-[8px] font-bold text-neutral-400">STATUS: REDEMPTION-READY</span>
                    </div>
                  </div>

                </div>

                 {/* Actions row: Download / Close */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/919876543210?text=Hi!%20My%20name%20is%20${encodeURIComponent(formData.name)}.%20I%20have%20generated%20my%20VIP%20Pass%2520Code%3A%20${passCode}%20for%20the%20${encodeURIComponent(formData.plan)}.%20Please%20reserve%20my%20session!`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-xs font-bold uppercase tracking-wider py-3 transition-colors cursor-pointer"
                  >
                    <Share2 className="h-4 w-4" /> Whatsapp Desk
                  </a>

                  <button
                    onClick={() => {
                      onClose();
                      resetForm();
                    }}
                    className="flex-1 rounded-xl border border-neutral-800 bg-neutral-900 py-3 text-neutral-300 hover:text-white font-sans text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Done & Close
                  </button>
                </div>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
