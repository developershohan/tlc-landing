export function Footer() {
  return (
    <footer className="border-t border-brass/10 bg-ink px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-xs text-fog md:flex-row md:text-left">
        <p>&copy; {new Date().getFullYear()} Thames Luxury Charters. All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="tel:02073577751" className="hover:text-brass-soft">
            020 7357 7751
          </a>
          <a href="#" className="hover:text-brass-soft">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-brass-soft">
            Winter Sale Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
