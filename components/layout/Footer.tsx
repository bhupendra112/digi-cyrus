"use client";

import { useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { NAV_LINKS, SITE, CONTACT } from "@/lib/constants";

const EMAILJS_SERVICE_ID = "service_w5zminr";
const EMAILJS_TEMPLATE_ID = "template_t9irjif";
const EMAILJS_PUBLIC_KEY = "FrCKIalxAagxiviyp";

export function Footer() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const email = (new FormData(form).get("email") as string) || "";
    try {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        to_name: "Digi Cyrus",
        from_name: email,
        message: `Newsletter subscribe request from ${email}`,
      });
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer className="overflow-hidden bg-white text-gray-800">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <p className="text-sm text-gray-500">Contact us at</p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="mt-1 block text-base font-medium text-gray-900 transition hover:text-gray-600"
          >
            {CONTACT.email}
          </a>
          <form
            onSubmit={handleSubscribe}
            className="mt-8 flex max-w-md overflow-hidden rounded-full border border-gray-200 bg-white p-1 shadow-sm"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              className="min-w-0 flex-1 bg-transparent px-5 py-2.5 text-sm text-black placeholder:text-zinc-400 focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:opacity-60"
            >
              {status === "sending" ? "..." : "Subscribe"}
            </button>
          </form>
          {status === "done" && (
            <p className="mt-3 text-sm text-emerald-600">You&apos;re on the list.</p>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm text-red-500">Couldn&apos;t subscribe. Try again.</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Links</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-800 transition hover:text-black">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">More Resources</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-800">
              <li>
                <Link href="/terms" className="transition hover:text-black">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="transition hover:text-black">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-black">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center pb-6">
        <span className="select-none whitespace-nowrap bg-gradient-to-b from-zinc-200 to-zinc-100 bg-clip-text text-center text-[50px] font-normal leading-none text-transparent scale-y-[1.15] sm:text-[80px] md:text-[100px] lg:text-[120px]">
          {SITE.name.replace(" ", "").toUpperCase()}
        </span>
      </div>
    </footer>
  );
}
