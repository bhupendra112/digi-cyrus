import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SITE, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Digi Cyrus. How we collect, use, and protect your information when you use our website and services.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information."
      />
      <article className="bg-white py-16 text-black">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-none space-y-8 text-zinc-600">
          <p className="text-sm text-zinc-500">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

          <section>
            <h2 className="text-xl font-semibold text-black">1. Introduction</h2>
            <p>
              {SITE.name} (“we”, “us”, “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. We are based in India and operate in accordance with applicable Indian data protection practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">2. Information We Collect</h2>
            <p>
              We may collect information that you provide directly, such as name, email address, phone number, business type, and message content when you fill out our contact form or communicate with us. We may also collect usage data (e.g. pages visited, device type) through cookies or similar technologies to improve our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">3. How We Use Your Information</h2>
            <p>
              We use your information to respond to your enquiries, provide our services, send project-related communications, improve our website and services, and comply with legal obligations. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">4. Sharing of Information</h2>
            <p>
              We may share your information with trusted service providers (e.g. email delivery, hosting) who assist us in operating our business, subject to confidentiality obligations. We may also disclose information where required by law or to protect our rights and safety.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">5. Data Security</h2>
            <p>
              We take reasonable technical and organisational measures to protect your personal information against unauthorised access, alteration, or destruction. No method of transmission over the internet is fully secure; we encourage you to share only necessary details when contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">6. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information by contacting us at {CONTACT.email}. We will respond to such requests in line with applicable law. You may also opt out of marketing communications at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">7. Cookies</h2>
            <p>
              Our website may use cookies and similar technologies for functionality and analytics. You can adjust your browser settings to refuse or limit cookies; some features may not work fully if you do so.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The “Last updated” date at the top will reflect the latest version. Continued use of our website or services after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black">9. Contact Us</h2>
            <p>
              For privacy-related questions or requests, contact us at {CONTACT.email}, or at {CONTACT.address}.
            </p>
          </section>
        </div>
        </div>
      </article>
    </>
  );
}
