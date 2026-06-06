import { useState } from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Heart, Zap, Apple, Users, Flame, ChevronRight, Activity } from 'lucide-react';
import TiltCard from './TiltCard';

export default function Features() {
  const [calculator, setCalculator] = useState({
    weight: '70',
    height: '175',
    age: '24',
    bmi: 22.9,
    status: 'Normal Weight',
    maxHr: 196,
    caloriesNeeded: 2150,
  });

  const [activeTab, setActiveTab] = useState<'features' | 'calculator'>('features');

  const calculateFitness = (w: string, h: string, a: string) => {
    const weightNum = parseFloat(w);
    const heightNum = parseFloat(h) / 100; // in meters
    const ageNum = parseInt(a);

    if (isNaN(weightNum) || isNaN(heightNum) || isNaN(ageNum) || heightNum <= 0) return;

    const bmiVal = parseFloat((weightNum / (heightNum * heightNum)).toFixed(1));
    let statusText = 'Normal Weight';
    if (bmiVal < 18.5) statusText = 'Underweight (Recommended Bulking Pack)';
    else if (bmiVal >= 25 && bmiVal < 30) statusText = 'Overweight (Recommended Lean Pack)';
    else if (bmiVal >= 30) statusText = 'Obese Class (Recommended Transformation Elite)';

    // Formula for Max Heart Rate: 220 - age
    const hr = 220 - ageNum;

    // Basal calorie approximation: (10 * weight) + (6.25 * height_cm) - (5 * age) + 5
    const caloriesVal = Math.floor((10 * weightNum) + (6.25 * parseFloat(h)) - (5 * ageNum) + 5) * 1.375;

    setCalculator({
      weight: w,
      height: h,
      age: a,
      bmi: bmiVal,
      status: statusText,
      maxHr: hr,
      caloriesNeeded: Math.round(caloriesVal),
    });
  };

  const handleInputChange = (field: 'weight' | 'height' | 'age', value: string) => {
    const updated = { ...calculator, [field]: value };
    setCalculator(updated);
    calculateFitness(updated.weight, updated.height, updated.age);
  };

  const features = [
    {
      id: 'trainers',
      title: 'Olympic Certified Trainers',
      description: 'Train with international and national champions with premium certification portfolios in kinetics and biochem sciences.',
      metric: '50+ Elite Coaches',
      icon: Award,
      glowColor: 'rgba(239, 68, 68, 0.15)', // red
    },
    {
      id: 'equip',
      title: 'Bio-Mechanic Equipment',
      description: 'Biomorphically-loaded custom selectorized strength systems engineered to isolate muscle target groups seamlessly.',
      metric: 'Imported Biomorph Gear',
      icon: Activity,
      glowColor: 'rgba(249, 115, 22, 0.15)', // orange
    },
    {
      id: 'cardio',
      title: 'High-Octane Cardio Zone',
      description: 'Slam workouts on screen-integrated interactive skillmill runners, smart rowers, and dynamic stairclimbers.',
      metric: 'Heart-Rate Tracked',
      icon: Heart,
      glowColor: 'rgba(59, 130, 246, 0.15)', // blue
    },
    {
      id: 'weight',
      title: 'Olympic Weight Training',
      description: 'Pristine anti-vibe lifting platforms loaded with certified solid-steel bumper plates, bar collars, and pro power racks.',
      metric: '25+ Heavy Racks',
      icon: Flame,
      glowColor: 'rgba(239, 68, 68, 0.15)',
    },
    {
      id: 'crossfit',
      title: 'Integrated CrossFit HIIT Ring',
      description: 'Heavy duty rigs built for high intensity functional conditioning, kettlebell drills, battle ropes, and climbing logs.',
      metric: '6,000 sq.ft Arena',
      icon: Zap,
      glowColor: 'rgba(249, 115, 22, 0.15)',
    },
    {
      id: 'diet',
      title: 'Precision Nutrition & Diet Docs',
      description: 'Custom bio-profile reports formulated by on-floor nutrition experts mapping exact target carbohydrate and protein profiles.',
      metric: 'Weekly Reports',
      icon: Apple,
      glowColor: 'rgba(59, 130, 246, 0.15)',
    },
  ];

  return (
    <section id="features" className="relative bg-neutral-950 py-24">
      {/* Absolute neon overlay elements */}
      <div className="absolute top-1/4 right-[10%] h-[350px] w-[350px] rounded-full bg-blue-500/5 blur-[120px]" />
      <div className="absolute bottom-1/4 left-[5%] h-[400px] w-[400px] rounded-full bg-red-500/5 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Toggleable Selector for Features vs Interactive Simulator */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="font-mono text-xs font-black uppercase tracking-widest text-orange-500">
            🥇 SUPERIOR DESIGN FEATURES
          </span>
          <h2 className="font-sans text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
            HYPER-SPECIFIED TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">CRUSH LIMITS</span>
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-neutral-400">
            Interactive, biomechanically customized training hubs engineered for unparalleled aesthetic development.
          </p>

          <div className="inline-flex rounded-xl bg-neutral-900 border border-neutral-800 p-1 mt-6">
            <button
              onClick={() => setActiveTab('features')}
              className={`rounded-lg px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === 'features'
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Explore Club Arenas
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`rounded-lg px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === 'calculator'
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              📊 Interactive Bio-Predictor
            </button>
          </div>
        </div>

        {/* Dynamic Display Area */}
        {activeTab === 'features' ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <TiltCard key={feat.id} glowColor={feat.glowColor} className="flex flex-col justify-between group">
                  <div className="space-y-6">
                    {/* Icon element with active neon glow framing */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 transition-all duration-300 group-hover:border-orange-500/50 group-hover:bg-gradient-to-r group-hover:from-orange-600/10 group-hover:to-red-600/10">
                      <Icon className="h-6 w-6 text-orange-500 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-sans text-xl font-bold uppercase tracking-wide text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-orange-100">
                        {feat.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-neutral-400">
                        {feat.description}
                      </p>
                    </div>
                  </div>

                  {/* Dynamic metric footer row */}
                  <div className="mt-8 border-t border-neutral-900 pt-4 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-orange-500 font-bold">
                      {feat.metric}
                    </span>
                    <ShieldCheck className="h-4 w-4 text-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                </TiltCard>
              );
            })}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-4xl rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8 backdrop-blur-md"
          >
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              {/* Inputs side */}
              <div className="md:col-span-5 space-y-6">
                <div>
                  <h3 className="text-lg font-bold uppercase text-white tracking-wide">Enter Bio Parameters</h3>
                  <p className="text-xs text-neutral-400">Calculate immediately to identify index levels & recommended plans.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-2">
                      Weight (KG)
                    </label>
                    <input
                      type="range"
                      min="40"
                      max="150"
                      value={calculator.weight}
                      onChange={(e) => handleInputChange('weight', e.target.value)}
                      className="w-full accent-orange-500 bg-neutral-800"
                    />
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-neutral-500">40 kg</span>
                      <span className="text-sm font-bold text-white">{calculator.weight} kg</span>
                      <span className="text-xs text-neutral-500">150 kg</span>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-2">
                      Height (CM)
                    </label>
                    <input
                      type="range"
                      min="130"
                      max="220"
                      value={calculator.height}
                      onChange={(e) => handleInputChange('height', e.target.value)}
                      className="w-full accent-orange-500 bg-neutral-800"
                    />
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-neutral-500">130 cm</span>
                      <span className="text-sm font-bold text-white">{calculator.height} cm</span>
                      <span className="text-xs text-neutral-500">220 cm</span>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-2">
                      Age (Years)
                    </label>
                    <input
                      type="range"
                      min="15"
                      max="80"
                      value={calculator.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      className="w-full accent-orange-500 bg-neutral-800"
                    />
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-neutral-500">15 yrs</span>
                      <span className="text-sm font-bold text-white">{calculator.age} yrs</span>
                      <span className="text-xs text-neutral-500">80 yrs</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Readout Output side with high-tech visualization */}
              <div className="md:col-span-7 bg-black/60 border border-neutral-800/80 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 h-20 w-20 bg-orange-600/5 blur-xl rounded-full" />
                
                <h4 className="font-mono text-xs uppercase tracking-widest text-orange-500 font-black mb-4 flex items-center gap-2">
                  <Users className="h-4 w-4" /> Live Bio-Telemetry Result
                </h4>

                <div className="grid grid-cols-2 gap-4">
                  
                  {/* BMI Readout */}
                  <div className="border border-neutral-800/50 bg-neutral-900/30 p-4 rounded-xl">
                    <span className="block text-xs font-semibold text-neutral-400">Body Mass Index</span>
                    <span className="font-sans text-3xl font-black text-white">{calculator.bmi}</span>
                    <span className="block text-[10px] font-mono uppercase tracking-tight text-orange-400 mt-1">
                      {calculator.status}
                    </span>
                  </div>

                  {/* Max HR */}
                  <div className="border border-neutral-800/50 bg-neutral-900/30 p-4 rounded-xl">
                    <span className="block text-xs font-semibold text-neutral-400">Target Max Heart-Rate</span>
                    <span className="font-sans text-3xl font-black text-white">{calculator.maxHr} <span className="text-xs text-neutral-500">BPM</span></span>
                    <span className="block text-[10px] font-mono uppercase tracking-tight text-blue-400 mt-1">
                      Anaerobic Peak Zone
                    </span>
                  </div>

                  {/* Target Calories */}
                  <div className="col-span-2 border border-neutral-800/50 bg-neutral-900/30 p-4 rounded-xl">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="block text-xs font-semibold text-neutral-400">Estimated Core Maintenance Calories</span>
                        <span className="font-sans text-2xl font-black text-white">{calculator.caloriesNeeded.toLocaleString()} <span className="text-xs text-neutral-500">KCAL/day</span></span>
                      </div>
                      <ChevronRight className="h-6 w-6 text-orange-500 animate-pulse hidden sm:block" />
                    </div>
                  </div>

                </div>

                <p className="mt-4 text-[10px] text-neutral-500 italic">
                  *Approximations calibrated on standard biomorphic baselines. Elite customized dietary profile charts and body metabolic tests will be produced in-house on Day 1.
                </p>
              </div>

            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
