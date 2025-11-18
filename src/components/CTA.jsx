export default function CTA() {
  return (
    <section id="cta" className="relative z-10 border-t border-white/10 bg-slate-950 py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Start invoicing in minutes</h2>
        <p className="mt-3 text-slate-400">Try InvoiceFlow free for 14 days. No credit card required.</p>
        <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <input type="email" required placeholder="Enter your work email" className="w-full rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-slate-400 focus:border-white/40 focus:outline-none" />
          <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-white/10 transition hover:opacity-90">Get started</button>
        </form>
        <p className="mt-3 text-xs text-slate-500">By signing up, you agree to our Terms and Privacy Policy.</p>
      </div>
    </section>
  );
}
