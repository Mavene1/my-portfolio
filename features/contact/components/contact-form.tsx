"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Send, CheckCircle, Loader2 } from "@/lib/icons";
import { ScrollReveal } from "@/components/motion";
import { useContactForm } from "@/features/contact/hooks/use-contact-form";

export function ContactForm() {
  const { form, formState, setFormState, onSubmit } = useContactForm();

  if (formState === "success") {
    return (
      <ScrollReveal className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
          <CheckCircle className="h-8 w-8 text-green-400" />
        </div>
        <h3 className="text-xl font-bold text-white">Message sent!</h3>
        <p className="text-white-200 max-w-sm text-sm">
          Thanks for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
        <Button
          variant="link"
          onClick={() => setFormState("idle")}
          className="text-purple hover:text-purple/80 mt-2 p-0 h-auto"
        >
          Send another message
        </Button>
      </ScrollReveal>
    );
  }

  return (
    <ScrollReveal className="w-full max-w-2xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white-200 text-sm">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      className="bg-[#0a0d1f] border-white/[0.08] text-white placeholder:text-white/30 focus-visible:ring-purple/40 focus-visible:border-purple/40"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400 text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white-200 text-sm">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-[#0a0d1f] border-white/[0.08] text-white placeholder:text-white/30 focus-visible:ring-purple/40 focus-visible:border-purple/40"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400 text-xs" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white-200 text-sm">Subject</FormLabel>
                <FormControl>
                  <Input
                    placeholder="What's this about?"
                    className="bg-[#0a0d1f] border-white/[0.08] text-white placeholder:text-white/30 focus-visible:ring-purple/40 focus-visible:border-purple/40"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400 text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white-200 text-sm">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell me about your project, role, or just say hello..."
                    rows={6}
                    className="bg-[#0a0d1f] border-white/[0.08] text-white placeholder:text-white/30 focus-visible:ring-purple/40 focus-visible:border-purple/40 resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400 text-xs" />
              </FormItem>
            )}
          />

          {formState === "error" && (
            <p className="text-red-400 text-sm text-center">
              Something went wrong. Please email me directly at{" "}
              <a href="mailto:maveneomondi111@gmail.com" className="underline">
                maveneomondi111@gmail.com
              </a>
            </p>
          )}

          <Button
            type="submit"
            disabled={formState === "submitting"}
            className="w-full bg-purple hover:bg-purple/90 text-white gap-2 h-11 font-medium"
          >
            {formState === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </Form>
    </ScrollReveal>
  );
}
