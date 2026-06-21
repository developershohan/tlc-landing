export function Footer() {
  return (
    <footer className="border-t border-brass/10 bg-ink px-6 pt-16 pb-10">
      <div className="mx-auto max-w-6xl">

        {/* Top grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <img src="/images/logo.png" alt="Thames Luxury Charters" className="h-10 w-auto" />
            <p className="mt-4 text-sm leading-relaxed text-fog">
              The No.1 choice for private event charters on the River Thames since 1993.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-brass-soft">Explore</p>
            <ul className="mt-4 space-y-2">
              {[
                { label: "The Fleet",  href: "#fleet"       },
                { label: "Occasions",  href: "#occasions"   },
                { label: "Offers",     href: "#winter-sale" },
                { label: "Reviews",    href: "#reviews"     },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-fog transition-colors hover:text-brass-soft">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fleet */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-brass-soft">The Fleet</p>
            <ul className="mt-4 space-y-2">
              {["The Dixie Queen", "The Elizabethan", "The Edwardian"].map((v) => (
                <li key={v}>
                  <a href="#fleet" className="text-sm text-fog transition-colors hover:text-brass-soft">
                    {v}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-brass-soft">Visit Us</p>
            <address className="mt-4 not-italic space-y-2 text-sm text-fog">
              <p>Butler&rsquo;s Wharf</p>
              <p>London</p>
              <p>SE1 2LH</p>
              <a href="tel:+442073577751" className="block pt-1 transition-colors hover:text-brass-soft">
                +44 (0)20 7357 7751
              </a>
              <a href="mailto:charters@thamesluxurycharters.co.uk" className="block transition-colors hover:text-brass-soft">
                charters@thamesluxurycharters.co.uk
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-brass/10 pt-6 text-center text-xs text-fog md:flex-row md:text-left">
          <p>&copy; {new Date().getFullYear()} Thames Luxury Charters. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-brass-soft">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-brass-soft">Terms &amp; Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
