import Spline from '@splinetool/react-spline';
import { Check } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/60 to-slate-950"></div>
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl py-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
              <span className="inline-flex items-center gap-1">
                <Check className="h-3.5 w-3.5 text-emerald-400" /> PCI-ready
              </span>
              <span className="text-slate-400">•</span>
              <span className="inline-flex items-center gap-1">
                <Check className="h-3.5 w-3.5 text-emerald-400" /> Multi-currency
              </span>
              <span className="text-slate-400">•</span>
              <span className="inline-flex items-center gap-1">
                <Check className="h-3.5 w-3.5 text-emerald-400" /> Smart reminders
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Invoice management for modern teams
            </h1>
            <p className="mt-4 text-lg leading-7 text-slate-300 sm:text-xl">
              Create, send, and get paid faster. A minimalist, fintech-grade platform for quotes, invoices, and automated reconciliation.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-white/10 transition hover:opacity-90">
                Start free trial
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
                Explore features
              </a>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-2 gap-4 text-sm text-slate-300 sm:grid-cols-3">
              {[
                'Unlimited invoices',
                'Payment links',
                'Real-time status',
                'Auto tax & fees',
                'PDF & email',
                'Analytics'
              ].map((f) => (
                <div key={f} className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
