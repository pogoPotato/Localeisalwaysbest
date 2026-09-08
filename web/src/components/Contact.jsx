import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Globe, Mail } from "lucide-react";
import { GithubIcon } from "./icons.jsx";

const EMAILJS_PUBLIC_KEY = "qOCLEp64oC5Zl84As";
const EMAILJS_SERVICE_ID = "service_z5h7lhb";
const EMAILJS_TEMPLATE_ID = "template_wpxlrbg";
const COOLDOWN_MS = 60 * 1000;

export default function Contact({ toast }) {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = formRef.current;

    // honeypot: real visitors never fill this, bots that fill every field do
    if (form.website.value.trim() !== "") return;

    const last = Number(localStorage.getItem("lastContactSend") || 0);
    const now = Date.now();
    if (now - last < COOLDOWN_MS) {
      toast("Please wait a moment before sending another message.", true);
      return;
    }

    setSending(true);

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          user_name: form.name.value.trim(),
          user_email: form.email.value.trim(),
          message: form.message.value.trim(),
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        localStorage.setItem("lastContactSend", String(now));
        toast("Message sent — thanks for reaching out!");
        form.reset();
      })
      .catch(() => {
        toast("Something went wrong sending that. Try emailing directly instead.", true);
      })
      .finally(() => setSending(false));
  }

  return (
    <section className="page-section contact-grid">
      <div>
        <h2>Say something</h2>
        <p className="section-sub">
          Got a project, a job, or just want to talk engines and bad sleep schedules? Inbox is open. I'm
          probably awake.
        </p>

        <div className="contact-links">
          <a className="contact-link" href="mailto:rijankoirala26@gmail.com">
            <Mail size={16} />
            rijankoirala26@gmail.com
          </a>
          <a className="contact-link" href="https://github.com/pogoPotato" target="_blank" rel="noopener">
            <GithubIcon size={16} />
            github.com/pogoPotato
          </a>
          <a className="contact-link" href="https://rijankoirala.com.np" target="_blank" rel="noopener">
            <Globe size={16} />
            rijankoirala.com.np
          </a>
        </div>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <div className="hp-field" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="field">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />
        </div>

        <button type="submit" className="btn btn-primary" disabled={sending}>
          {sending ? "Sending..." : "Send message"}
        </button>
        <p className="form-note">Goes straight to my inbox. Reply time depends on how many cups deep I am.</p>
      </form>
    </section>
  );
}
