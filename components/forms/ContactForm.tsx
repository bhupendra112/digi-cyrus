"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/Button";
import { BUSINESS_TYPES } from "@/lib/constants";

const EMAILJS_SERVICE_ID = "service_w5zminr";
const EMAILJS_TEMPLATE_ID = "template_t9irjif";
const EMAILJS_PUBLIC_KEY = "FrCKIalxAagxiviyp";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  useEffect(() => {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string) || "";
    const email = (formData.get("email") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const businessType = (formData.get("businessType") as string) || "";
    const message = (formData.get("message") as string) || "";

    const fullMessage = [
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Business: ${businessType}`,
      "",
      message,
    ].join("\n");

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        to_name: "Digi Cyrus",
        from_name: name,
        message: fullMessage,
      });
      setStatus("done");
      form.reset();
    } catch (err: unknown) {
      setStatus("error");
      // 412 = Precondition Failed: usually template/service config or missing variable in dashboard
      if (err && typeof err === "object" && "text" in err) {
        console.error("EmailJS error:", (err as { text: string }).text);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50"
          placeholder="+91 98765 43210"
        />
      </div>
      <div>
        <label htmlFor="businessType" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Business Type
        </label>
        <select
          id="businessType"
          name="businessType"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50"
        >
          {BUSINESS_TYPES.map((type) => (
            <option key={type} value={type} className="bg-charcoal-card text-white">
              {type}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50"
          placeholder="Tell us about your project..."
        />
      </div>
      {status === "done" && (
        <p className="text-sm text-emerald-400">Thanks! We&apos;ll get back to you soon.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
      )}
      <Button
        type="submit"
        fullWidth
        disabled={status === "sending"}
        className="w-full"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
