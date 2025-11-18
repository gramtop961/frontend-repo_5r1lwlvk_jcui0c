import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    highlight: false,
    features: ["100 invoices/mo", "Email delivery", "Basic templates", "Analytics lite"],
  },
  {
    name: "Growth",
    price: "$29",
    period: "/mo",
    highlight: true,
    features: ["Unlimited invoices", "Payment links", "Custom branding", "Smart reminders"],
  },
  {
    name: "Scale",
    price: "$99",
    period: "/mo",
    highlight: false,
    features: ["Multi-currency", "Role-based access", "Advanced analytics", "Priority support"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 border-t border-white/10 bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-400">Start free. Upgrade when you’re ready. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-2xl border ${t.highlight ? 'border-indigo-400/60' : 'border-white/10'} bg-white/5 p-6 text-slate-200 shadow-xl ${t.highlight ? 'shadow-indigo-500/20' : 'shadow-black/20'}`}>
              {t.highlight && (
                <div className="absolute -top-3 left-6 rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold text-white">Popular</div>
              )}
              <h3 className="text-lg font-semibold text-white">{t.name}</h3>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-4xl font-bold text-white">{t.price}</span>
                <span className="mb-1 text-slate-400">{t.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-300">
                    <Check className="h-4 w-4 text-emerald-400" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${t.highlight ? 'bg-white text-slate-900 hover:opacity-90' : 'border border-white/20 bg-white/5 text-white hover:bg-white/10'}`}>
                {t.highlight ? 'Start free trial' : 'Choose plan'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
