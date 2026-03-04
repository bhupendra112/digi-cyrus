import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Digi Cyrus. Start your project, book a strategy call, or ask us anything. Vijay Nagar, Indore.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-white/5 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Let&apos;s Build Something Great
            </h1>
            <p className="mt-6 text-lg text-zinc-400">
              Tell us about your project. We&apos;ll get back within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-white">Send a message</h2>
              <p className="mt-2 text-zinc-400">
                Fill out the form and we&apos;ll be in touch soon.
              </p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">Contact details</h2>
              <ul className="mt-6 space-y-4 text-zinc-400">
                <li>
                  <span className="block text-sm font-medium text-zinc-500">Email</span>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-white transition hover:text-gold"
                  >
                    {CONTACT.email}
                  </a>
                </li>
                <li>
                  <span className="block text-sm font-medium text-zinc-500">Phone</span>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    className="text-white transition hover:text-gold"
                  >
                    {CONTACT.phone}
                  </a>
                </li>
                <li>
                  <span className="block text-sm font-medium text-zinc-500">Office</span>
                  <span className="text-white">{CONTACT.address}</span>
                </li>
              </ul>
              <div className="mt-8 flex gap-4">
                <a
                  href={CONTACT.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 p-2 text-zinc-400 transition hover:border-gold/30 hover:text-gold"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </a>
                <a
                  href={CONTACT.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 p-2 text-zinc-400 transition hover:border-gold/30 hover:text-gold"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="h-5 w-5" />
                </a>
                <a
                  href={CONTACT.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 p-2 text-zinc-400 transition hover:border-gold/30 hover:text-gold"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-12">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  Map
                </h3>
                <div className="mt-4 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <iframe
                    title="Office location - Vijay Nagar, Indore"
                    src={CONTACT.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full"
                  />
                </div>
                <p className="mt-2 text-sm text-zinc-500">
                  {CONTACT.address}. We work with clients across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
