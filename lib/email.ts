import emailjs from "@emailjs/browser";

export const EMAILJS = {
  serviceId: "service_w5zminr",
  templateId: "template_t9irjif",
  publicKey: "FrCKIalxAagxiviyp",
};

export type SiteEmailPayload = {
  fromName: string;
  fromEmail: string;
  phone?: string;
  subject?: string;
  message: string;
};

export function getEmailJsErrorText(err: unknown): string {
  if (err && typeof err === "object" && "text" in err && typeof (err as { text: unknown }).text === "string") {
    return (err as { text: string }).text;
  }
  return "";
}

export async function sendSiteEmail(payload: SiteEmailPayload) {
  return emailjs.send(
    EMAILJS.serviceId,
    EMAILJS.templateId,
    {
      to_name: "Digi Cyrus",
      from_name: payload.fromName,
      from_email: payload.fromEmail,
      reply_to: payload.fromEmail,
      phone: payload.phone || "—",
      subject: payload.subject || "Website enquiry",
      business_type: payload.subject || "—",
      message: payload.message,
    },
    { publicKey: EMAILJS.publicKey }
  );
}
