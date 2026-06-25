"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/features/contact/schemas";

export type FormState = "idle" | "submitting" | "success" | "error";

export function useContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  async function onSubmit(data: ContactFormData) {
    setFormState("submitting");
    try {
      await new Promise((r) => setTimeout(r, 1200));
      // TODO: wire to real endpoint (e.g. Resend, Formspree, or API route)
      console.log("Contact form data:", data);
      setFormState("success");
      form.reset();
    } catch {
      setFormState("error");
    }
  }

  return { form, formState, setFormState, onSubmit };
}
