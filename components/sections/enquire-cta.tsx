"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { ChevronDown } from "lucide-react";

import { EmberParticles } from "@/components/effects/ember-particles";

type Status = "idle" | "submitting" | "success" | "error";

// Shared input/select class
const field =
  "w-full rounded-lg border border-brass/15 bg-ink/50 px-4 py-2.5 text-sm text-ivory placeholder-fog/40 outline-none transition-colors duration-200 focus:border-brass/50 focus:ring-1 focus:ring-brass/20";

export function EnquireCta() {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  // Magnetic submit button
  const magX = useMotionValue(0);
  const magY = useMotionValue(0);
  const smx  = useSpring(magX, { stiffness: 240, damping: 18 });
  const smy  = useSpring(magY, { stiffness: 240, damping: 18 });

  const onMagMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    magX.set((e.clientX - r.left - r.width  / 2) * 0.22);
    magY.set((e.clientY - r.top  - r.height / 2) * 0.22);
  };
  const resetMag = () => { magX.set(0); magY.set(0); };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    setStatus("submitting");

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) formRef.current?.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="enquire" className="relative overflow-hidden bg-ink px-6 py-24 lg:py-32">
      <EmberParticles count={4} />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.5fr] lg:gap-20">

          {/* ── Left: intro ── */}
          <div className="lg:pt-2">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs uppercase tracking-[0.35em] text-brass-soft"
            >
              &mdash; Begin your journey &mdash;
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 font-display text-[clamp(2.2rem,5vw,3.8rem)] font-medium text-ivory"
            >
              Enquire Now
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="mt-5 text-fog leading-relaxed"
            >
              Tell us about your occasion and our charter team will craft a
              tailored proposal — usually within one working day. No obligation,
              just possibilities.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24 }}
              className="mt-8 space-y-4"
            >
              <li className="flex items-center gap-3 text-sm text-ivory/80">
                <Phone size={16} className="text-brass shrink-0" strokeWidth={1.6} />
                <a
                  href="tel:+442073577751"
                  className="transition-colors hover:text-brass-soft"
                >
                  +44 (0)20 7357 7751
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-ivory/80">
                <Mail size={16} className="text-brass shrink-0" strokeWidth={1.6} />
                <a
                  href="mailto:charters@thamesluxurycharters.co.uk"
                  className="transition-colors hover:text-brass-soft"
                >
                  charters@thamesluxurycharters.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-ivory/80">
                <MapPin size={16} className="text-brass mt-0.5 shrink-0" strokeWidth={1.6} />
                <address className="not-italic">
                  Butler&rsquo;s Wharf Pier, London, SE1 2LH
                </address>
              </li>
            </motion.ul>

            {/* Decorative rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0 }}
              className="mt-10 h-px max-w-36 bg-linear-to-r from-brass/40 to-transparent"
            />
          </div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-5 rounded-2xl border border-brass/20 bg-navy p-14 text-center">
                <CheckCircle size={48} className="text-brass" strokeWidth={1.2} />
                <h3 className="font-display text-2xl text-ivory">
                  Thank you — your enquiry is on its way.
                </h3>
                <p className="text-sm leading-relaxed text-fog">
                  Our charter team will be in touch shortly. We look forward to
                  welcoming you aboard.
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5 rounded-2xl border border-brass/20 bg-navy p-8"
              >
                {/* Full name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-fog">
                    Full name <span className="text-brass">*</span>
                  </label>
                  <input type="text" id="name" name="name" autoComplete="name" required className={field} />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-fog">
                      Email <span className="text-brass">*</span>
                    </label>
                    <input type="email" id="email" name="email" autoComplete="email" required className={field} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="font-mono text-[10px] uppercase tracking-widest text-fog">
                      Phone
                    </label>
                    <input type="tel" id="phone" name="phone" autoComplete="tel" className={field} />
                  </div>
                </div>

                {/* Occasion + Boat */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="occasion" className="font-mono text-[10px] uppercase tracking-widest text-fog">
                      Occasion <span className="text-brass">*</span>
                    </label>
                    <div className="relative">
                      <select id="occasion" name="occasion" required defaultValue="" className={`${field} appearance-none pr-8`}>
                        <option value="" disabled>Select an occasion</option>
                        <option>Private Party</option>
                        <option>Wedding</option>
                        <option>Corporate Event</option>
                        <option>Birthday / Anniversary</option>
                        <option>Christmas / Festive</option>
                        <option>Other</option>
                      </select>
                      <ChevronDown size={13} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-fog" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="boat" className="font-mono text-[10px] uppercase tracking-widest text-fog">
                      Preferred boat
                    </label>
                    <div className="relative">
                      <select id="boat" name="boat" defaultValue="" className={`${field} appearance-none pr-8`}>
                        <option value="">No preference</option>
                        <option>The Dixie Queen</option>
                        <option>The Elizabethan</option>
                        <option>The Edwardian</option>
                      </select>
                      <ChevronDown size={13} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-fog" />
                    </div>
                  </div>
                </div>

                {/* Date + Guests */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="date" className="font-mono text-[10px] uppercase tracking-widest text-fog">
                      Preferred date
                    </label>
                    <input type="date" id="date" name="date" className={field} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="guests" className="font-mono text-[10px] uppercase tracking-widest text-fog">
                      Number of guests
                    </label>
                    <input type="number" id="guests" name="guests" min={1} max={600} placeholder="e.g. 120" className={field} />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest text-fog">
                    Tell us about your event
                  </label>
                  <textarea
                    id="message" name="message" rows={4}
                    placeholder="Theme, catering preferences, departure pier, special requests…"
                    className={`${field} resize-none`}
                  />
                </div>

                {/* Honeypot */}
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden className="sr-only" />

                {status === "error" && (
                  <p className="text-sm text-ember">
                    Something went wrong — please try again or email us directly.
                  </p>
                )}

                {/* Submit — magnetic + sweep */}
                <motion.button
                  type="submit"
                  disabled={status === "submitting"}
                  style={{ x: smx, y: smy }}
                  onMouseMove={onMagMove}
                  onMouseLeave={resetMag}
                  className="group relative w-full overflow-hidden rounded-full bg-brass py-4 text-sm font-semibold text-ink disabled:opacity-60"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 translate-x-[-105%] bg-brass-soft transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
                  />
                  <span className="relative z-10">
                    {status === "submitting" ? "Sending…" : "Send Enquiry"}
                  </span>
                </motion.button>

                <p className="text-center font-mono text-[10px] uppercase tracking-widest text-fog/50">
                  We respond within one working day &mdash; your details are never shared.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
