"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import confetti from "canvas-confetti";
import { CheckCircle2, AlertCircle, Loader2, Send, PhoneCall } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name (at least 2 characters)"),
  phone: z
    .string()
    .min(10, "Please enter a valid 10-digit phone number")
    .regex(/^[0-9+\s-]{10,15}$/, "Invalid phone format"),
  email: z.string().email("Please enter a valid business email address"),
  service: z.string().min(1, "Please select the service you need"),
  budget: z.string().min(1, "Please choose an estimated budget"),
  message: z.string().min(10, "Please tell us briefly about your project (min 10 characters)"),
  // Honeypot field (bots fill this, humans won't see it)
  bot_trap: z.string().max(0, "Spam detected").optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  defaultService?: string;
  sourceContext?: string;
  compact?: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultService,
  sourceContext = "General Inbound",
  compact = false,
}) => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: defaultService || "",
      budget: "",
      message: "",
      bot_trap: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // If bot trap is filled, silently prevent submission
    if (data.bot_trap && data.bot_trap.length > 0) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          sourceContext,
          timestamp: new Date().toISOString(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send inquiry. Please try again or call us.");
      }

      setStatus("success");
      reset();

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#2563eb", "#06b6d4", "#f59e0b"],
        });
      } catch {
        // Fallback gracefully if confetti fails
      }
    } catch (err: unknown) {
      setStatus("error");
      const message = err instanceof Error ? err.message : "Something went wrong. Please call us directly.";
      setErrorMessage(message);
    }
  };

  if (status === "success") {
    return (
      <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-8 text-center animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600 shadow-inner">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You! Inquiry Received.</h3>
        <p className="text-slate-600 max-w-md mx-auto mb-6">
          Our engineering team in Wilson Garden has received your project details. We will review your request and call you back within <strong>30 minutes</strong> during working hours.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hi%20Eagle%20Tech,%20I%20just%20submitted%20the%20contact%20form%20for%20my%20project.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium text-sm transition-colors shadow-sm"
          >
            Chat on WhatsApp Now
          </a>
          <button
            onClick={() => setStatus("idle")}
            className="text-sm text-slate-600 hover:text-slate-900 underline font-medium px-4 py-2"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 md:space-y-5"
      noValidate
    >
      {/* Honeypot anti-spam field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="bot_trap">Do not fill this</label>
        <input
          id="bot_trap"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("bot_trap")}
        />
      </div>

      {status === "error" && (
        <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-3 text-rose-800 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-600" />
          <div>
            <p className="font-semibold">Submission Failed</p>
            <p className="text-xs text-rose-700 mt-0.5">{errorMessage}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
            Your Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="e.g. Rahul Sharma"
            className={`w-full px-4 py-2.5 rounded-xl border bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 transition-all ${
              errors.name
                ? "border-rose-400 focus:ring-rose-200"
                : "border-slate-300 focus:border-brand-600 focus:ring-brand-100"
            }`}
            {...register("name")}
          />
          {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
            Phone / WhatsApp <span className="text-rose-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="e.g. 98860 12345"
            className={`w-full px-4 py-2.5 rounded-xl border bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 transition-all ${
              errors.phone
                ? "border-rose-400 focus:ring-rose-200"
                : "border-slate-300 focus:border-brand-600 focus:ring-brand-100"
            }`}
            {...register("phone")}
          />
          {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
            Work Email <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="rahul@company.com"
            className={`w-full px-4 py-2.5 rounded-xl border bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 transition-all ${
              errors.email
                ? "border-rose-400 focus:ring-rose-200"
                : "border-slate-300 focus:border-brand-600 focus:ring-brand-100"
            }`}
            {...register("email")}
          />
          {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email.message}</p>}
        </div>

        {/* Service Select */}
        <div>
          <label htmlFor="service" className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
            Required Service <span className="text-rose-500">*</span>
          </label>
          <select
            id="service"
            className={`w-full px-4 py-2.5 rounded-xl border bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 transition-all ${
              errors.service
                ? "border-rose-400 focus:ring-rose-200"
                : "border-slate-300 focus:border-brand-600 focus:ring-brand-100"
            }`}
            {...register("service")}
          >
            <option value="">Select a service...</option>
            <option value="Custom Website Development">Custom Website Development</option>
            <option value="UI/UX & Web Design">UI/UX & Web Design</option>
            <option value="Local SEO & Google Maps Ranking">Local SEO & Google Maps Ranking</option>
            <option value="Mobile App Development (iOS/Android)">Mobile App Development (iOS/Android)</option>
            <option value="Custom CRM Software">Custom CRM Software</option>
            <option value="Enterprise ERP & Automation">Enterprise ERP & Automation</option>
            <option value="Website Redesign & Speed Optimization">Website Redesign & Speed Optimization</option>
          </select>
          {errors.service && <p className="text-xs text-rose-600 mt-1">{errors.service.message}</p>}
        </div>
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="budget" className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
          Estimated Project Budget <span className="text-rose-500">*</span>
        </label>
        <select
          id="budget"
          className={`w-full px-4 py-2.5 rounded-xl border bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 transition-all ${
            errors.budget
              ? "border-rose-400 focus:ring-rose-200"
              : "border-slate-300 focus:border-brand-600 focus:ring-brand-100"
          }`}
          {...register("budget")}
        >
          <option value="">Select an approximate budget range...</option>
          <option value="Under ₹25,000 (Starter Package)">Under ₹25,000 (Starter Package)</option>
          <option value="₹25,000 – ₹50,000 (Growth Business)">₹25,000 – ₹50,000 (Growth Business)</option>
          <option value="₹50,000 – ₹1,00,000 (Advanced Web/CRM)">₹50,000 – ₹1,00,000 (Advanced Web/CRM)</option>
          <option value="₹1,00,000+ (Custom Enterprise / Apps)">₹1,00,000+ (Custom Enterprise / Apps)</option>
          <option value="Need Consultation to Scope">Need Consultation to Scope</option>
        </select>
        {errors.budget && <p className="text-xs text-rose-600 mt-1">{errors.budget.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
          Project Details & Goals <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="message"
          rows={compact ? 3 : 4}
          placeholder="Briefly describe what your business does and what you'd like your website or software to achieve..."
          className={`w-full px-4 py-2.5 rounded-xl border bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 transition-all resize-none ${
            errors.message
              ? "border-rose-400 focus:ring-rose-200"
              : "border-slate-300 focus:border-brand-600 focus:ring-brand-100"
          }`}
          {...register("message")}
        />
        {errors.message && <p className="text-xs text-rose-600 mt-1">{errors.message.message}</p>}
      </div>

      <div className="pt-1">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.99] text-sm md:text-base cursor-pointer"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Sending Details to Wilson Garden Team...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Get Free Quotation & Callback</span>
            </>
          )}
        </button>
      </div>

      <p className="text-center text-xs text-slate-500 pt-1 flex items-center justify-center gap-1.5">
        <PhoneCall className="w-3.5 h-3.5 text-brand-600" />
        <span>Prefer to talk immediately? Call us directly at </span>
        <a href={`tel:${siteConfig.contact.phone}`} className="font-semibold text-brand-700 hover:underline">
          {siteConfig.contact.displayPhone}
        </a>
      </p>
    </form>
  );
};
