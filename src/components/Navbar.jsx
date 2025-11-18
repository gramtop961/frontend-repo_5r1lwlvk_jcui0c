import { Menu, X, Receipt, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-full border border-white/10 bg-slate-900/60 px-4 py-3 backdrop-blur-md">
          <a href="#" className="flex items-center gap-2 text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-sky-400 shadow-lg shadow-sky-500/20">
              <Receipt className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">InvoiceFlow</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((it) => (
              <a key={it.href} href={it.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                {it.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#pricing" className="rounded-full px-4 py-2 text-sm font-medium text-slate-200 hover:text-white">Pricing</a>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-white/10 transition hover:opacity-90">
              Start free trial <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen((s) => !s)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-md md:hidden">
            <div className="space-y-1 p-2">
              {navItems.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-slate-200 hover:bg-white/5"
                >
                  {it.label}
                </a>
              ))}
              <a href="#cta" onClick={() => setOpen(false)} className="mt-2 block rounded-lg bg-white px-4 py-3 text-center font-semibold text-slate-900">
                Start free trial
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
