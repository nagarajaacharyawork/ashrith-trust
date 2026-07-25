import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, CheckCircle2, Clock } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import aerial from "@/assets/main-entrence.JPG";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(20).optional(),
  message: z.string().trim().min(5, "Message is required").max(1000),
});
type Values = z.infer<typeof schema>;

function Contact() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: Values) => {
    await new Promise((r) => setTimeout(r, 600));
    console.log("Contact message from:", data.name);
    reset();
    setSent(true);
  };

  return (
    <SiteLayout>
      <PageHero eyebrow="Get in Touch" title="Contact Us" subtitle="We'd love to hear from you — reach out with any questions about admissions, programmes or campus visits." image={aerial} />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div>
            <div className="eyebrow mb-3">Send a Message</div>
            <h2 className="section-heading mb-8">Have a question?</h2>
            {sent ? (
              <div className="rounded-2xl bg-cream p-8 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-heal" />
                <p className="mt-4 font-display text-lg font-bold text-primary">Message sent!</p>
                <p className="mt-1 text-sm text-foreground/70">We'll respond within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="cname" className="mb-1.5 block text-sm font-semibold text-primary">Name</label>
                    <input id="cname" {...register("name")} className="w-full rounded-lg border border-input bg-white px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20" />
                    {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="cphone" className="mb-1.5 block text-sm font-semibold text-primary">Phone <span className="font-normal text-muted-foreground">(optional)</span></label>
                    <input id="cphone" {...register("phone")} className="w-full rounded-lg border border-input bg-white px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20" />
                  </div>
                </div>
                <div>
                  <label htmlFor="cemail" className="mb-1.5 block text-sm font-semibold text-primary">Email</label>
                  <input id="cemail" type="email" {...register("email")} className="w-full rounded-lg border border-input bg-white px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20" />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="cmsg" className="mb-1.5 block text-sm font-semibold text-primary">Message</label>
                  <textarea id="cmsg" rows={5} {...register("message")} className="w-full rounded-lg border border-input bg-white px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20" />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
                </div>
                <button type="submit" disabled={isSubmitting} className="btn-primary w-full text-sm disabled:opacity-70">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          <div>
            <div className="eyebrow mb-3">Reach Us</div>
            <h2 className="section-heading mb-8">Visit or call</h2>
            <div className="space-y-5">
              <div className="flex gap-4 rounded-2xl bg-cream p-5">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <div className="font-display font-bold text-primary">Address</div>
                  <p className="mt-1 text-sm text-foreground/75">
                    Ashrith Trust (R), NH-66, Kota,<br />
                    Udupi Taluk & District – 576221,<br />
                    Karnataka, India
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl bg-cream p-5">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <div className="font-display font-bold text-primary">Phone</div>
                  <div className="mt-1 space-y-1 text-sm text-foreground/75">
                    <a href="tel:+918202586777" className="block hover:text-accent">+91 820 2586777</a>
                    <a href="tel:+919480087860" className="block hover:text-accent">+91 94800 87860</a>
                    <a href="tel:+919880058567" className="block hover:text-accent">Director: +91 98800 58567</a>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl bg-cream p-5">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <div className="font-display font-bold text-primary">Email</div>
                  <a href="mailto:info@ashritheducationtrust.org" className="mt-1 block text-sm text-foreground/75 hover:text-accent">
                    info@ashritheducationtrust.org
                  </a>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl bg-cream p-5">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <div className="font-display font-bold text-primary">Office Hours</div>
                  <p className="mt-1 text-sm text-foreground/75">Mon – Sat · 9:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream/40 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-2xl shadow-card">
            <iframe
              title="Ashrith Trust location on Google Maps"
              src="https://www.google.com/maps?q=Kota,+Udupi,+Karnataka+576221&output=embed"
              width="100%" height="440" loading="lazy" className="block"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
