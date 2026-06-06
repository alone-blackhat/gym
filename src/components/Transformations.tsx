import React, { useState, useRef, MouseEvent, TouchEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, TrendingDown, TrendingUp, Dumbbell, ChevronLeft, ChevronRight, X, Heart, Eye, ArrowRight, Apple, HeartHandshake } from 'lucide-react';
import TiltCard from './TiltCard';

interface TransformationItem {
  id: string;
  name: string;
  age: number;
  location: string;
  duration: string;
  category: 'Fat Loss' | 'Muscle Gain' | 'Athletic Tone' | 'Rehab';
  beforeWeight: string;
  afterWeight: string;
  beforeBodyFat: string;
  afterBodyFat: string;
  quote: string;
  dietBlueprint: string;
  workoutFocus: string;
  coach: string;
  beforeImg: string;
  afterImg: string;
}

const TRANSFORM_DATA: TransformationItem[] = [
  {
    id: 'tr-1',
    name: 'Arjun Malhotra',
    age: 32,
    location: 'New Delhi',
    duration: '6 Months Transformation',
    category: 'Fat Loss',
    beforeWeight: '94 kg',
    afterWeight: '78 kg',
    beforeBodyFat: '29%',
    afterBodyFat: '14%',
    quote: "Iron Creed completely rebooted my metabolic lifestyle. The premium bio-analyser diagnostics and curated low-GI luxury meal boxes made burning 16kg of pure fat feel mechanical, sustainable, and highly energizing.",
    dietBlueprint: "High Protein, Moderate Carb Cycling (Zero Refined Sugar)",
    workoutFocus: "Metabolic Hypertrophy & Olympic Power Chains",
    coach: "Ranbir Singh (Pro Athlete)",
    beforeImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=70&w=600",
    afterImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=70&w=600"
  },
  {
    id: 'tr-2',
    name: 'Rohan Sharma',
    age: 25,
    location: 'Mumbai',
    duration: '8 Months Transformation',
    category: 'Muscle Gain',
    beforeWeight: '61 kg',
    afterWeight: '75 kg',
    beforeBodyFat: '11%',
    afterBodyFat: '13%',
    quote: "Being hard-gainer skinny was always my insecurity in college. Under the heavy bar guides and customized compound loading routines here, I packed on 14kg of clean shredded bulk. Posture and confidence are completely renewed.",
    dietBlueprint: "Hyper-caloric Lean Bulk (3200 kcal clean macros, creatine loaded)",
    workoutFocus: "Restricted Hypertrophy Protocols & Heavy Compound Progressive Overload",
    coach: "Yashvardhan K. (IFBB Pro)",
    beforeImg: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=70&w=600",
    afterImg: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=70&w=600"
  },
  {
    id: 'tr-3',
    name: 'Kshitij Mehra',
    age: 40,
    location: 'Gurugram',
    duration: '12 Months Transformation',
    category: 'Rehab',
    beforeWeight: '106 kg',
    afterWeight: '84 kg',
    beforeBodyFat: '34%',
    afterBodyFat: '18%',
    quote: "Corporate burnout and back slippage practically crippled my lifestyle. The clinical physiotherapist squad integrated with Iron Creed's smart eccentric load machines unlocked pain-free movement, dropping 22 kilos in the cycle.",
    dietBlueprint: "Anti-Inflammatory Mediterranean Keto hybrid",
    workoutFocus: "Joint Stabilisation, Kinetic Chain Alignment & Core Shield Triggers",
    coach: "Dr. Sameer Sen (Kinetic Specialist)",
    beforeImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=70&w=600",
    afterImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=70&w=600"
  },
  {
    id: 'tr-4',
    name: 'Priyanka Sen',
    age: 28,
    location: 'Bengaluru',
    duration: '5 Months Transformation',
    category: 'Athletic Tone',
    beforeWeight: '72 kg',
    afterWeight: '59 kg',
    beforeBodyFat: '31%',
    afterBodyFat: '19%',
    quote: "I always feared muscular loading would make me look bulky. My coach proved the exact opposite. The metabolic pacing here sculpted my definition, enhanced my cardio V02 max, and fixed my metabolic fatigue permanently.",
    dietBlueprint: "High-Density Nutrition, Iso-Caloric Diet with Active Rehydration pacing",
    workoutFocus: "Plyometrics, Explosive HIIT & Biomorphic Resistance Sculpting",
    coach: "Aditi Rao (National Gymnast)",
    beforeImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=70&w=600",
    afterImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=70&w=600"
  },
  {
    id: 'tr-5',
    name: 'Vikram Malhotra',
    age: 35,
    location: 'Chandigarh',
    duration: '9 Months Transformation',
    category: 'Muscle Gain',
    beforeWeight: '78 kg',
    afterWeight: '88 kg',
    beforeBodyFat: '16%',
    afterBodyFat: '11%',
    quote: "Upgrading to VIP member status got me a customized biometric training wristband. The live performance feedback systems during heavy squats kept my focus sharp and safety optimal. Highly recommended for experienced lifters.",
    dietBlueprint: "Clean High Protein, Complex Grain Carbs & Omega-3 optimization",
    workoutFocus: "Powerbuilding hybrid (5/3/1 methodology & volume accessories)",
    coach: "Ranbir Singh (Pro Athlete)",
    beforeImg: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&q=70&w=600",
    afterImg: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=70&w=600"
  },
  {
    id: 'tr-6',
    name: 'Neha Kapoor',
    age: 31,
    location: 'Pune',
    duration: '7 Months Transformation',
    category: 'Fat Loss',
    beforeWeight: '81 kg',
    afterWeight: '64 kg',
    beforeBodyFat: '35%',
    afterBodyFat: '21%',
    quote: "Balancing dual child management and corporate assignments felt impossible. The personalized digital wellness charts and ultra-premium 5 AM female community tracks created a powerful habits loop for me.",
    dietBlueprint: "Low-Carb, High Healthy Fats & Alkaline Hydration",
    workoutFocus: "Cardiac Resistance Overload & High Heart Rate Strength Circuits",
    coach: "Aditi Rao (National Gymnast)",
    beforeImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=70&w=600",
    afterImg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=70&w=600"
  }
];

export default function Transformations() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Fat Loss' | 'Muscle Gain' | 'Athletic Tone' | 'Rehab'>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  // Interactive Slider State
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // 0 to 100 percentage
  const [isDraggingSlider, setIsDraggingSlider] = useState<boolean>(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  // Cheer / Like features with LocalStorage cache
  const [cheers, setCheers] = useState<Record<string, number>>({});
  const [hasCheered, setHasCheered] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Generate base cheer count
    const initialCheers: Record<string, number> = {};
    TRANSFORM_DATA.forEach(item => {
      // Pull saved or generate a high authentic premium number
      const saved = localStorage.getItem(`cheers-${item.id}`);
      initialCheers[item.id] = saved ? parseInt(saved, 10) : Math.floor(Math.abs(item.id.charCodeAt(3) * 12) + 142);
    });
    setCheers(initialCheers);

    // Get user already cheered status
    const initialCheered: Record<string, boolean> = {};
    TRANSFORM_DATA.forEach(item => {
      initialCheered[item.id] = localStorage.getItem(`has-cheered-${item.id}`) === 'true';
    });
    setHasCheered(initialCheered);
  }, []);

  const handleCheer = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    
    if (hasCheered[id]) {
      // Undo
      setCheers(prev => {
        const nextVal = Math.max(0, prev[id] - 1);
        localStorage.setItem(`cheers-${id}`, nextVal.toString());
        return { ...prev, [id]: nextVal };
      });
      setHasCheered(prev => {
        localStorage.setItem(`has-cheered-${id}`, 'false');
        return { ...prev, [id]: false };
      });
    } else {
      // Add cheer
      setCheers(prev => {
        const nextVal = (prev[id] || 0) + 1;
        localStorage.setItem(`cheers-${id}`, nextVal.toString());
        return { ...prev, [id]: nextVal };
      });
      setHasCheered(prev => {
        localStorage.setItem(`has-cheered-${id}`, 'true');
        return { ...prev, [id]: true };
      });
    }
  };

  // Before/After Slider Handling
  const handleSliderMove = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDraggingSlider || e.buttons === 1) {
      handleSliderMove(e.clientX);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  const filteredData = activeCategory === 'All' 
    ? TRANSFORM_DATA 
    : TRANSFORM_DATA.filter(item => item.category === activeCategory);

  const activeSliderItem = TRANSFORM_DATA[sliderIndex];

  // Quick navigation in Lightbox
  const handlePrevLightbox = () => {
    if (lightboxIndex === null) return;
    const targetIdx = lightboxIndex === 0 ? filteredData.length - 1 : lightboxIndex - 1;
    setLightboxIndex(targetIdx);
  };

  const handleNextLightbox = () => {
    if (lightboxIndex === null) return;
    const targetIdx = lightboxIndex === filteredData.length - 1 ? 0 : lightboxIndex + 1;
    setLightboxIndex(targetIdx);
  };

  return (
    <section id="transformations" className="relative bg-carbon py-24 sm:py-32 overflow-hidden border-b border-white/5">
      {/* Decorative premium radial glows */}
      <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-neon-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-12 left-1/12 h-[500px] w-[500px] rounded-full bg-neon-purple/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 px-4 py-1.5 backdrop-blur-md">
            <TrendingUp className="h-4 w-4 text-neon-cyan animate-pulse" />
            <span className="font-mono text-[9px] font-black uppercase tracking-widest text-neon-cyan">
              BIOMORPHIC CASE STUDIES & RESULTS
            </span>
          </div>

          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-none">
            LEGENDARY <span className="text-transparent bg-clip-text bg-gradient-to-r from-burnt-orange via-neon-cyan to-neon-purple glow-cyan">TRANSFORMATIONS</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-neutral-400 max-w-xl mx-auto">
            Real Indian athletes, real clinical parameters, and real physiological architecture. Witness the absolute elite precision of the Iron Creed model.
          </p>
        </div>

        {/* 1. FEATURED INTERACTIVE BEFORE/AFTER SLIDER CARD */}
        <div className="mb-20 glass-card rounded-3xl overflow-hidden border border-white/10 p-6 md:p-8" id="slider-featured">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            
            {/* Left Side: Dynamic Info Panel & Switcher */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
              <div>
                <span className="font-mono text-[10px] font-black text-burnt-orange uppercase tracking-widest bg-burnt-orange/10 px-3 py-1 rounded-md">
                  ★ ACTIVE LIVE COMPARATOR
                </span>
                <h3 className="mt-3 font-bebas text-3xl sm:text-4xl text-white tracking-wide leading-none">
                  INTERACTIVE PHYSICAL PROGRESSION
                </h3>
                <p className="mt-2 font-sans text-xs sm:text-sm text-neutral-300">
                  Slide the horizontal neon light cursor left and right in the active 3D simulator to closely inspect actual structural, posture, and body tissue modifications.
                </p>
              </div>

              {/* Athlete selector buttons */}
              <div className="flex flex-wrap gap-2.5">
                {TRANSFORM_DATA.slice(0, 3).map((item, idx) => (
                  <button
                    key={item.id}
                    id={`btn-${item.id}`}
                    onClick={() => {
                      setSliderIndex(idx);
                      setSliderPosition(50); // reset position
                    }}
                    className={`px-4 py-2 text-xs font-montserrat uppercase font-black tracking-widest rounded-lg transition-all cursor-pointer ${
                      sliderIndex === idx 
                        ? 'bg-gradient-to-r from-burnt-orange to-neon-red text-white shadow-lg shadow-neon-red/10 border-none' 
                        : 'bg-white/5 text-neutral-400 border border-white/10 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {item.name} ({item.category})
                  </button>
                ))}
              </div>

              {/* Quick statistics for active athlete */}
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3 bg-white/[0.03] p-3 rounded-xl border border-white/5">
                  <div className="h-9 w-9 rounded-lg bg-neon-red/10 flex items-center justify-center text-neon-red">
                    <TrendingDown className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 block font-bold">Body Weight</span>
                    <span className="font-bebas text-lg text-white font-bold block leading-none">
                      {activeSliderItem.beforeWeight} <span className="text-neon-cyan font-sans text-xs">→</span> {activeSliderItem.afterWeight}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/[0.03] p-3 rounded-xl border border-white/5">
                  <div className="h-9 w-9 rounded-lg bg-neon-cyan/10 flex items-center justify-center text-neon-cyan">
                    <Dumbbell className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 block font-bold">Body Fat %</span>
                    <span className="font-bebas text-lg text-white font-bold block leading-none">
                      {activeSliderItem.beforeBodyFat} <span className="text-neon-cyan font-sans text-xs">→</span> {activeSliderItem.afterBodyFat}
                    </span>
                  </div>
                </div>
              </div>

              {/* Inspiring quote */}
              <div className="bg-gradient-to-r from-burnt-orange/5 to-transparent p-4 rounded-xl border-l-[3px] border-burnt-orange italic font-sans text-xs text-neutral-300 leading-relaxed">
                "{activeSliderItem.quote}"
              </div>
            </div>

            {/* Right Side: Before-After Slider Container */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div
                id="interactive-comparison-canvas"
                ref={sliderContainerRef}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onMouseDown={() => setIsDraggingSlider(true)}
                onMouseUp={() => setIsDraggingSlider(false)}
                onMouseLeave={() => setIsDraggingSlider(false)}
                className="relative w-full aspect-[4/3] rounded-2.5xl overflow-hidden border border-white/20 select-none shadow-2xl cursor-ew-resize group"
              >
                {/* BEFORE IMAGE CONTAINER (Takes Full Background) */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={activeSliderItem.beforeImg}
                    alt={`${activeSliderItem.name} Before`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Before Label */}
                  <div className="absolute bottom-4 left-4 z-10 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[10px] font-montserrat font-bold uppercase tracking-widest text-neutral-300">
                    BEFORE ({activeSliderItem.beforeWeight})
                  </div>
                </div>

                {/* AFTER IMAGE CONTAINER (Takes Clip-Path Overlay based on slider percentage) */}
                <div 
                  className="absolute inset-0 z-10"
                  style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                >
                  <img
                    src={activeSliderItem.afterImg}
                    alt={`${activeSliderItem.name} After`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* After Label */}
                  <div className="absolute bottom-4 right-4 z-20 bg-neon-cyan/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neon-cyan/30 text-[10px] font-montserrat font-bold uppercase tracking-widest text-neon-cyan">
                    AFTER ({activeSliderItem.afterWeight})
                  </div>
                </div>

                {/* THE ACTIVE LIGHTBAR SLIDER HANDLE */}
                <div 
                  className="absolute top-0 bottom-0 z-30 w-1 bg-gradient-to-b from-neon-cyan via-white to-neon-purple shadow-[0_0_12px_rgba(0,255,240,0.8)] cursor-ew-resize"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Drag Handle Button Visual */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-neon-cyan bg-black shadow-[0_0_15px_rgba(0,255,240,0.6)] flex items-center justify-center transition-transform group-hover:scale-110 active:scale-95">
                    <div className="flex gap-1 items-center justify-center text-neon-cyan">
                      <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                      <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </div>
                  </div>
                </div>

                {/* Duration Indicator top left */}
                <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-xl border border-white/10 text-xs font-bebas text-white flex items-center gap-2">
                  <Calendar className="h-4.5 w-4.5 text-burnt-orange" />
                  <span>{activeSliderItem.duration.toUpperCase()}</span>
                </div>
              </div>

              {/* Slider instruction */}
              <p className="mt-3.5 font-mono text-[9px] uppercase tracking-widest text-neutral-400 flex items-center gap-2">
                <span>← SWIPE OR DRAG THE HANDLE TO COMPARE PROGRESS →</span>
              </p>
            </div>

          </div>
        </div>

        {/* 2. GALLERY INTERACTIVE MAIN TILES CARD */}
        <div className="space-y-10">
          
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-white/5 pb-6">
            {(['All', 'Fat Loss', 'Muscle Gain', 'Athletic Tone', 'Rehab'] as const).map(category => (
              <button
                key={category}
                id={`filter-${category.toLowerCase().replace(' ', '-')}`}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full font-montserrat text-xs uppercase font-extrabold tracking-widest transition-all cursor-pointer ${
                  activeCategory === category
                    ? 'bg-white text-black font-extrabold shadow-lg shadow-white/5'
                    : 'bg-white/5 text-neutral-400 border border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid Layout of Transformations */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredData.map((item, index) => {
                const globalIndex = TRANSFORM_DATA.findIndex(d => d.id === item.id);
                const isItemCheered = hasCheered[item.id];
                return (
                  <motion.div
                    key={item.id}
                    id={`card-${item.id}`}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setLightboxIndex(globalIndex)}
                    className="cursor-pointer group flex flex-col self-stretch"
                  >
                    <TiltCard 
                      className="h-full flex flex-col p-0 overflow-hidden bg-neutral-900/40 hover:border-neon-cyan/40 transition-colors"
                      glowColor={
                        item.category === 'Fat Loss' ? 'rgba(0, 255, 240, 0.15)' :
                        item.category === 'Muscle Gain' ? 'rgba(255, 106, 0, 0.15)' :
                        item.category === 'Athletic Tone' ? 'rgba(155, 92, 255, 0.15)' :
                        'rgba(255, 46, 46, 0.15)'
                      }
                    >
                      {/* Before-After Photo Split Top */}
                      <div className="relative w-full h-56 overflow-hidden bg-neutral-950 flex">
                        <div className="w-1/2 h-full relative border-r border-white/10 overflow-hidden">
                          <img 
                            src={item.beforeImg} 
                            alt={`${item.name} Before`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                          />
                          <span className="absolute bottom-2 left-2 z-10 bg-black/85 backdrop-blur-md px-1.5 py-0.5 rounded text-[8px] font-sans font-bold text-neutral-400 uppercase tracking-widest">
                            {item.beforeWeight} Before
                          </span>
                        </div>
                        <div className="w-1/2 h-full relative overflow-hidden">
                          <img 
                            src={item.afterImg} 
                            alt={`${item.name} After`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                          />
                          <span className="absolute bottom-2 right-2 z-10 bg-neon-cyan/25 backdrop-blur-md px-1.5 py-0.5 rounded text-[8px] font-sans font-bold text-neon-cyan uppercase tracking-widest">
                            {item.afterWeight} After
                          </span>
                        </div>
                        
                        {/* Status Category Badge bottom center */}
                        <div className="absolute top-3 left-3 bg-black/80 border border-white/10 rounded-full px-2.5 py-1 text-[9px] font-montserrat font-bold tracking-widest text-white uppercase">
                          {item.category}
                        </div>
                      </div>

                      {/* Info & Testimonial Bottom Card Details */}
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="font-bebas text-lg tracking-wider text-neutral-400 uppercase">
                              {item.duration}
                            </span>
                            <span className="font-sans text-[10px] text-neutral-500 block">
                              {item.location}
                            </span>
                          </div>

                          <h4 className="font-bebas text-2xl text-white font-extrabold tracking-wide uppercase leading-none group-hover:text-neon-cyan transition-colors">
                            {item.name}, {item.age}
                          </h4>

                          <p className="font-sans text-[11px] text-neutral-400 line-clamp-3 leading-relaxed">
                            "{item.quote}"
                          </p>
                        </div>

                        {/* Interactive counters & trigger line */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                          <button
                            id={`cheer-btn-${item.id}`}
                            onClick={(e) => handleCheer(item.id, e)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                              isItemCheered
                                ? 'bg-neon-red/20 text-neon-red border border-neon-red/30'
                                : 'bg-white/5 text-neutral-400 border border-white/10 hover:text-white hover:bg-white/10'
                            }`}
                          >
                            <Heart className={`h-3 w-3 ${isItemCheered ? 'fill-neon-red text-neon-red' : ''}`} />
                            <span>{cheers[item.id] || 0} Cheers</span>
                          </button>

                          <div className="flex items-center gap-1 text-[10px] font-montserrat font-bold text-neon-cyan group-hover:underline">
                            <span>Read Blueprint</span>
                            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>

                    </TiltCard>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* 3. CINEMATIC FULL SCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            id="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6 md:p-10 backdrop-blur-md"
            onClick={() => setLightboxIndex(null)}
          >
            <motion.div
              id="lightbox-card"
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()} // stop auto close
              className="relative w-full max-w-5xl bg-charcoal border border-white/15 rounded-3xl overflow-hidden shadow-2xl overflow-y-auto max-h-[92vh] flex flex-col lg:flex-row"
            >
              
              {/* Close Button top right */}
              <button
                id="lightbox-close"
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 z-40 h-10 w-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-neon-red hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Left Cinematic Dual Photo View */}
              <div className="relative w-full lg:w-[48%] bg-neutral-950 flex flex-col justify-center min-h-[320px] lg:min-h-auto">
                <div className="flex w-full h-full relative">
                  <div className="w-1/2 h-full relative border-r border-white/10">
                    <img
                      src={TRANSFORM_DATA[lightboxIndex].beforeImg}
                      alt="Before Fullscreen"
                      className="w-full h-full object-cover min-h-[320px] lg:h-[100%]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 z-10 bg-black/90 border border-white/10 rounded-lg px-2.5 py-1 text-[9px] font-montserrat font-bold text-neutral-300">
                      BEFORE ({TRANSFORM_DATA[lightboxIndex].beforeWeight})
                    </div>
                  </div>
                  <div className="w-1/2 h-full relative">
                    <img
                      src={TRANSFORM_DATA[lightboxIndex].afterImg}
                      alt="After Fullscreen"
                      className="w-full h-full object-cover min-h-[320px] lg:h-[100%]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 z-10 bg-neon-cyan/30 border border-neon-cyan/40 rounded-lg px-2.5 py-1 text-[9px] font-montserrat font-bold text-neon-cyan">
                      AFTER ({TRANSFORM_DATA[lightboxIndex].afterWeight})
                    </div>
                  </div>
                </div>

                {/* Switcher Navigation inside photo space on mobile/desktop */}
                <div className="absolute left-4 right-4 bottom-4 flex justify-between items-center z-20 pointer-events-none">
                  <button
                    id="lightbox-prev"
                    onClick={handlePrevLightbox}
                    className="pointer-events-auto h-9 w-9 rounded-full bg-black/80 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-4.5 w-4.5" />
                  </button>
                  <span className="text-[10px] bg-black/80 px-2.5 py-1 rounded-full text-neutral-400 font-mono tracking-widest leading-none border border-white/5">
                    {lightboxIndex + 1} / {TRANSFORM_DATA.length}
                  </span>
                  <button
                    id="lightbox-next"
                    onClick={handleNextLightbox}
                    className="pointer-events-auto h-9 w-9 rounded-full bg-black/80 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
                  >
                    <ChevronRight className="h-4.5 w-4.5" />
                  </button>
                </div>
              </div>

              {/* Right Physiological Diagnostics Data */}
              <div className="w-full lg:w-[52%] p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
                
                {/* Header Information */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-neon-cyan/10 border border-neon-cyan/20 text-[9px] font-mono tracking-widest text-neon-cyan uppercase font-bold">
                      {TRANSFORM_DATA[lightboxIndex].category}
                    </span>
                    <span className="text-neutral-500 font-mono text-[9px] uppercase tracking-wider">
                      {TRANSFORM_DATA[lightboxIndex].duration}
                    </span>
                  </div>

                  <h3 className="font-bebas text-4xl sm:text-5xl text-white tracking-wide leading-none font-bold">
                    {TRANSFORM_DATA[lightboxIndex].name}
                  </h3>
                  <p className="font-sans text-xs text-neutral-400 mt-1 font-bold uppercase tracking-wider">
                    Age: {TRANSFORM_DATA[lightboxIndex].age} • Origin: {TRANSFORM_DATA[lightboxIndex].location}
                  </p>
                </div>

                {/* Progress Indicators */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
                    <span className="font-mono text-[9px] uppercase font-bold text-neutral-500 tracking-wider">Weight Progression</span>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-sm line-through text-neutral-500">{TRANSFORM_DATA[lightboxIndex].beforeWeight}</span>
                      <ArrowRight className="h-3 w-3 text-neon-cyan" />
                      <span className="text-xl font-bebas text-white font-bold tracking-wide">{TRANSFORM_DATA[lightboxIndex].afterWeight}</span>
                    </div>
                  </div>

                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
                    <span className="font-mono text-[9px] uppercase font-bold text-neutral-500 tracking-wider">Body Fat Progression</span>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-sm line-through text-neutral-500">{TRANSFORM_DATA[lightboxIndex].beforeBodyFat}</span>
                      <ArrowRight className="h-3 w-3 text-neon-cyan" />
                      <span className="text-xl font-bebas text-white font-bold tracking-wide">{TRANSFORM_DATA[lightboxIndex].afterBodyFat}</span>
                    </div>
                  </div>
                </div>

                {/* Clinical blueprints details */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
                    <Apple className="h-5 w-5 text-burnt-orange shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-montserrat text-[10px] font-extrabold uppercase tracking-widest text-burnt-orange leading-none mb-1">
                        Diet & Micro-Nutrition Blueprint
                      </h4>
                      <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                        {TRANSFORM_DATA[lightboxIndex].dietBlueprint}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
                    <Dumbbell className="h-5 w-5 text-neon-cyan shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-montserrat text-[10px] font-extrabold uppercase tracking-widest text-neon-cyan leading-none mb-1">
                        Active Biomorphic Workout Focus
                      </h4>
                      <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                        {TRANSFORM_DATA[lightboxIndex].workoutFocus}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
                    <HeartHandshake className="h-5 w-5 text-neon-purple shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-montserrat text-[10px] font-extrabold uppercase tracking-widest text-neon-purple leading-none mb-1">
                        Certified Personal Architect
                      </h4>
                      <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                        {TRANSFORM_DATA[lightboxIndex].coach}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Personal quote message & cheer line */}
                <div className="border-t border-white/10 pt-6 flex items-center justify-between">
                  <button
                    id={`lightbox-cheer-btn-${TRANSFORM_DATA[lightboxIndex].id}`}
                    onClick={() => handleCheer(TRANSFORM_DATA[lightboxIndex].id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-montserrat text-[10px] uppercase font-black tracking-widest transition-all cursor-pointer ${
                      hasCheered[TRANSFORM_DATA[lightboxIndex].id]
                        ? 'bg-neon-red text-white shadow-lg shadow-neon-red/20 border-none'
                        : 'bg-white/5 text-neutral-400 border border-white/10 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Heart className={`h-4.5 w-4.5 ${hasCheered[TRANSFORM_DATA[lightboxIndex].id] ? 'fill-white' : ''}`} />
                    <span>Cheer on {TRANSFORM_DATA[lightboxIndex].name} • {cheers[TRANSFORM_DATA[lightboxIndex].id] || 0}</span>
                  </button>

                  <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500">
                    IRON CREED ATHLETICS
                  </span>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
