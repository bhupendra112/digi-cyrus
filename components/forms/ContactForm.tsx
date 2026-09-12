"use client";

import { useState, useEffect, type ReactNode } from "react";
import emailjs from "@emailjs/browser";

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
    const subject = (formData.get("subject") as string) || "";
    const message = (formData.get("message") as string) || "";

    const fullMessage = [`Email: ${email}`, `Phone: ${phone}`, `Subject: ${subject}`, "", message].join(
      "\n"
    );

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
      if (err && typeof err === "object" && "text" in err) {
        console.error("EmailJS error:", (err as { text: string }).text);
      }
    }
  }

  const field =
    "w-full rounded-full bg-neutral-50 py-3.5 pl-11 pr-4 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field icon={<UserIcon />} id="name" name="name" placeholder="Your Name" required />
        <Field icon={<PhoneIcon />} id="phone" name="phone" type="tel" placeholder="Phone Number" />
        <Field icon={<MailIcon />} id="email" name="email" type="email" placeholder="Email Address" required />
        <Field icon={<TagIcon />} id="subject" name="subject" placeholder="Subject" />
      </div>
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-4 text-gray-400">
          <ChatIcon />
        </span>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${field} resize-none rounded-3xl pt-3.5`}
          placeholder="Message"
        />
      </div>
      {status === "done" && <p className="text-sm text-emerald-600">Thanks! We&apos;ll get back to you soon.</p>}
      {status === "error" && <p className="text-sm text-red-500">Something went wrong. Please try again.</p>}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:scale-105 hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}

function Field({
  icon,
  id,
  name,
  placeholder,
  type = "text",
  required,
}: {
  icon: ReactNode;
  id: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </span>
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-full bg-neutral-50 py-3.5 pl-11 pr-4 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10"
      />
    </div>
  );
}

function UserIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11.04 11.04 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
function TagIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 7h.01M7 3h5.586a1 1 0 01.707.293l7.414 7.414a1 1 0 010 1.414l-5.586 5.586a1 1 0 01-1.414 0L6.293 10.293A1 1 0 016 9.586V4a1 1 0 011-1z" />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h8M8 14h5M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.22-.9L3 20l1.08-3.24A7.7 7.7 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}
