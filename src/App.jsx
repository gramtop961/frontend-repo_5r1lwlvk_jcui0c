import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <CTA />
      <footer className="border-t border-white/10 bg-slate-950 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} InvoiceFlow. All rights reserved.
      </footer>
    </div>
  )
}

export default App
