import { ShieldCheck, Clock, Globe2, FileText, BellRing, Wallet } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Compliance-first",
    desc: "Bank-grade security, audit trails, and role-based access out of the box.",
  },
  {
    icon: FileText,
    title: "Beautiful invoices",
    desc: "Polished templates with your brand, VAT/GST-ready, and PDFs that look perfect everywhere.",
  },
  {
    icon: Wallet,
    title: "Faster payments",
    desc: "Payment links, cards, ACH, and auto-reconciliation across currencies.",
  },
  {
    icon: BellRing,
    title: "Smart reminders",
    desc: "Nudge clients automatically before due dates with your tone of voice.",
  },
  {
    icon: Clock,
    title: "Close sooner",
    desc: "Track status in real time and reduce days sales outstanding with insights.",
  },
  {
    icon: Globe2,
    title: "Global-ready",
    desc: "Multi-currency, localized formats, and tax rules for 50+ countries.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 border-t border-white/10 bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Everything you need to invoice beautifully</h2>
          <p className="mt-3 text-slate-400">Designed with fintech simplicity and a minimalist aesthetic inspired by modern digital banking.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 text-slate-200 transition hover:border-white/20 hover:bg-white/10">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-sky-400 text-white shadow-lg shadow-sky-500/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
