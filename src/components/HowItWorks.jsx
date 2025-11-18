import { ArrowRightCircle, UploadCloud, Send, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: UploadCloud,
    title: "Import your clients",
    desc: "Bring your contacts from CSV, QuickBooks, or your CRM in minutes.",
  },
  {
    icon: Send,
    title: "Create and send",
    desc: "Use templates with taxes, discounts, and payment terms baked in.",
  },
  {
    icon: BarChart3,
    title: "Get paid & track",
    desc: "Payment links and automatic reconciliation give you clarity in real-time.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative z-10 border-t border-white/10 bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">From quote to cash in three steps</h2>
          <p className="mt-3 text-slate-400">Replace a patchwork of tools with a streamlined flow that just works.</p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <li key={title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-sky-400 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{idx + 1}. {title}</h3>
              <p className="mt-2 text-sm text-slate-400">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
