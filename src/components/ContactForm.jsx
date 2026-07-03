import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";

const initialForm = { name: "", email: "", phone: "", subject: "", message: "" };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+\-\s()]{7,15}$/;

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  else if (form.name.trim().length < 2) errors.name = "Name looks too short.";

  if (!form.email.trim()) errors.email = "Email is required.";
  else if (!emailPattern.test(form.email.trim())) errors.email = "Enter a valid email address.";

  if (!form.phone.trim()) errors.phone = "Phone number is required.";
  else if (!phonePattern.test(form.phone.trim())) errors.phone = "Enter a valid phone number.";

  if (!form.subject.trim()) errors.subject = "Subject is required.";

  if (!form.message.trim()) errors.message = "Message is required.";
  else if (form.message.trim().length < 10) errors.message = "Message should be at least 10 characters.";

  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    setStatusMessage("");

    try {
      await addDoc(collection(db, "contact_messages"), {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
        createdAt: serverTimestamp(),
      });

      setStatus("success");
      setStatusMessage("Message sent. I'll get back to you soon.");
      setForm(initialForm);
    } catch (err) {
      console.error("Failed to submit contact message:", err);
      setStatus("error");
      setStatusMessage("Something went wrong while sending. Please try again.");
    }
  };

  const fieldClass = (field) =>
    `w-full rounded-xl bg-ink-raised border px-4 py-3 text-[14px] text-paper placeholder:text-paper-faint focus:outline-none focus:ring-2 focus:ring-signal/40 transition-colors ${
      errors[field] ? "border-danger" : "border-ink-border focus:border-signal"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="font-mono text-[12px] text-paper-dim mb-2 block">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={fieldClass("name")}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="mt-1.5 text-danger text-[12px]">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="font-mono text-[12px] text-paper-dim mb-2 block">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={fieldClass("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1.5 text-danger text-[12px]">{errors.email}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="font-mono text-[12px] text-paper-dim mb-2 block">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={fieldClass("phone")}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="mt-1.5 text-danger text-[12px]">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="subject" className="font-mono text-[12px] text-paper-dim mb-2 block">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange}
            placeholder="What's this about?"
            className={fieldClass("subject")}
            aria-invalid={!!errors.subject}
          />
          {errors.subject && <p className="mt-1.5 text-danger text-[12px]">{errors.subject}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="font-mono text-[12px] text-paper-dim mb-2 block">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me a bit about the role or project..."
          className={`${fieldClass("message")} resize-none`}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="mt-1.5 text-danger text-[12px]">{errors.message}</p>}
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 rounded-full bg-signal hover:bg-signal-soft disabled:opacity-60 disabled:cursor-not-allowed text-white font-mono text-[13px] px-6 py-3 transition-colors"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={15} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={15} />
              Send message
            </>
          )}
        </button>

        {status === "success" && (
          <span className="inline-flex items-center gap-1.5 text-mint text-[13px]">
            <CheckCircle2 size={16} />
            {statusMessage}
          </span>
        )}
        {status === "error" && (
          <span className="inline-flex items-center gap-1.5 text-danger text-[13px]">
            <AlertCircle size={16} />
            {statusMessage}
          </span>
        )}
      </div>
    </form>
  );
}
