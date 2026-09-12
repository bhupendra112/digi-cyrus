import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { MovingMarquee } from "@/components/home/MovingMarquee";
import { ContactForm } from "@/components/forms/ContactForm";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Digi Cyrus. Start your project, book a strategy call, or ask us anything. Vijay Nagar, Indore.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        tone="light"
        orbs
        title="Contact Us"
        subtitle="From idea to launch, we design and develop tailor-made websites & apps that scale with your business."
      />
      <MovingMarquee />

      <section className="bg-white py-16 text-black sm:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-medium text-gray-400">Contact Form</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
              Have a question?
              <br /> Contact us now
            </h2>
            <p className="mt-5 max-w-md font-poppins text-[15px] leading-7 text-gray-500">
              Have questions or need assistance? Our friendly team is ready to provide all the info
              you need — just get in touch.
            </p>
            <ul className="mt-10 space-y-4 font-poppins text-sm text-gray-600 sm:text-[15px]">
              <li className="flex items-start gap-3">
                <PinIcon />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <MailGlyph />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-black">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <PhoneGlyph />
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-black">
                  {CONTACT.phone}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="h-[280px] w-full overflow-hidden sm:h-[360px]">
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
      </section>
    </>
  );
}

function PinIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 21s7-5.4 7-11a7 7 0 10-14 0c0 5.6 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.2" strokeWidth={1.8} />
    </svg>
  );
}

function MailGlyph() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function PhoneGlyph() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11.04 11.04 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
    </svg>
  );
}
