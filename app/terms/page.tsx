import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using Digi Cyrus website and services. Website development, app development, and digital marketing.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our website or services."
      />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300">
          <p className="text-sm text-zinc-500">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

          <section>
            <h2 className="text-xl font-semibold text-white">1. Agreement to Terms</h2>
            <p>
              By accessing or using the website of {SITE.name} (“we”, “us”, “our”) or engaging our services, you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">2. Services</h2>
            <p>
              We provide website development, app development (Android, iOS, cross-platform), and digital marketing services. Scope, deliverables, timelines, and fees will be set out in separate agreements or proposals for each project.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">3. Use of Website</h2>
            <p>
              You may use this website only for lawful purposes. You must not use it in any way that could damage, disable, or impair the site or our systems, or that could infringe the rights of others. Content on this site is for general information only and may be updated without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">4. Intellectual Property</h2>
            <p>
              Unless otherwise agreed in writing, we retain ownership of our pre-existing IP, tools, and methodologies. Upon full payment, clients receive the agreed deliverables and rights as specified in the project agreement. You may not use our name, logo, or branding without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">5. Confidentiality</h2>
            <p>
              We will keep your business and project information confidential in line with our project agreements. You agree not to disclose our confidential information, including pricing and processes, without our consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">6. Limitation of Liability</h2>
            <p>
              To the extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services. Our total liability for any claim shall not exceed the amount paid by you for the relevant project or service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">7. Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts at Indore, Madhya Pradesh.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">8. Contact</h2>
            <p>
              For questions about these Terms &amp; Conditions, contact us at bhupendra.gupta@digicyrus.in or through our contact page.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
