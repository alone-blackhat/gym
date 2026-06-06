import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Transformations from './components/Transformations';
import Pricing from './components/Pricing';
import Combos from './components/Combos';
import Offers from './components/Offers';
import Contact from './components/Contact';
import JoinModal from './components/JoinModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    planName: 'Choose a plan...',
    price: 0,
    code: '',
  });

  const handleOpenJoin = (planName: string = 'Choose a plan...', codeOrPrice?: string | number) => {
    let price = 0;
    let code = '';

    if (typeof codeOrPrice === 'number') {
      price = codeOrPrice;
    } else if (typeof codeOrPrice === 'string') {
      code = codeOrPrice;
    }

    setModalData({ planName, price, code });
    setModalOpen(true);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-neutral-950 font-sans text-neutral-100 antialiased selection:bg-orange-500 selection:text-black">
      {/* Glossy Header Navbar */}
      <Navbar onOpenJoin={() => handleOpenJoin('1 Year VIP Champion Pack')} />

      {/* Cinematic Hero Section */}
      <Hero onOpenJoin={() => handleOpenJoin('1 Year VIP Champion Pack', 'SPECIAL100')} />

      {/* Structured arenas & Interactive telemetric bio parameter calculator */}
      <Features />

      {/* Before-After athlete transformations & live comparison simulator */}
      <Transformations />

      {/* Membership pricing cards in ₹ INR structure & ticking limited hours timer */}
      <Pricing onOpenJoin={(plan, price) => handleOpenJoin(plan, price)} />

      {/* Combo value packages combined with editorial coach indicators */}
      <Combos onOpenJoin={(combo, price) => handleOpenJoin(combo, price)} />

      {/* High-Contrast Festival coupon grid cards */}
      <Offers onOpenJoin={(offer, code) => handleOpenJoin(offer, code)} />

      {/* Direct Contact links, locator lists & central FAQ togglers */}
      <Contact />

      {/* Real-time VIP Ticket Booking system canvas modal */}
      <JoinModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedPlan={modalData.planName}
        preselectedPrice={modalData.price}
        preselectedCode={modalData.code}
      />
    </main>
  );
}
