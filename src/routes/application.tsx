import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import nursingImg from "@/assets/nursing-college.jpg";

export const Route = createFileRoute("/application")({
  component: Application,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(20),
  email: z.string().trim().email("Enter a valid email").max(255),
  course: z.enum(["Nursing", "Paramedical", "Pre-University"]),
  message: z.string().trim().max(1000).optional(),
});
type FormValues = z.infer<typeof schema>;

function Application() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { course: "Nursing" },
  });

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 700));
    console.log("Application enquiry:", { name: data.name, course: data.course });
    reset();
    setSubmitted(true);
  };

  return (
    <SiteLayout>
      <PageHero eyebrow="Admissions 2026-27" title="Begin Your Application" subtitle="Tell us a little about yourself and our admissions team will get in touch." image={nursingImg} />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border bg-white p-8 shadow-card">
            {submitted ? (
              <div className="flex flex-col items-center py-16 text-center">
                <CheckCircle2 className="h-16 w-16 text-heal" />
                <h3 className="mt-4 font-display text-2xl font-bold text-primary">Enquiry received!</h3>
                <p className="mt-2 max-w-md text-foreground/70">
                  Thank you for reaching out. Our admissions team will contact you shortly.
                </p>
                <button className="btn-outline mt-6 text-sm" onClick={() => setSubmitted(false)}>Submit another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-primary">Full Name</label>
                  <input id="name" {...register("name")} className="w-full rounded-lg border border-input bg-white px-4 py-3 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" placeholder="Your full name" />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-primary">Phone Number</label>
                    <input id="phone" type="tel" {...register("phone")} className="w-full rounded-lg border border-input bg-white px-4 py-3 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" placeholder="+91 " />
                    {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-primary">Email</label>
                    <input id="email" type="email" {...register("email")} className="w-full rounded-lg border border-input bg-white px-4 py-3 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" placeholder="you@example.com" />
                    {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="course" className="mb-1.5 block text-sm font-semibold text-primary">Course Interested In</label>
                  <select id="course" {...register("course")} className="w-full rounded-lg border border-input bg-white px-4 py-3 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20">
                    <option value="Nursing">Nursing (GNM / B.Sc)</option>
                    <option value="Paramedical">Paramedical (DMLT / DOT & AT)</option>
                    <option value="Pre-University">Pre-University (PCMB / PCMC)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-primary">Message <span className="font-normal text-muted-foreground">(optional)</span></label>
                  <textarea id="message" rows={4} {...register("message")} className="w-full rounded-lg border border-input bg-white px-4 py-3 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" placeholder="Any questions or details you'd like to share..." />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
                </div>
                <button type="submit" disabled={isSubmitting} className="btn-primary w-full text-sm disabled:opacity-70">
                  {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-primary p-8 text-white">
              <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">Prefer to Talk?</div>
              <h3 className="font-display text-2xl font-bold">Call us directly</h3>
              <p className="mt-2 text-sm text-white/80">Our admissions team is available Mon–Sat, 9 AM – 5 PM.</p>
              <div className="mt-6 space-y-3 text-sm">
                <a href="tel:+918202586777" className="flex items-center gap-3 hover:text-accent"><Phone className="h-4 w-4 text-accent" /> +91 820 2586777</a>
                <a href="tel:+919480087860" className="flex items-center gap-3 hover:text-accent"><Phone className="h-4 w-4 text-accent" /> +91 94800 87860</a>
                <a href="tel:+919880058567" className="flex items-center gap-3 hover:text-accent"><Phone className="h-4 w-4 text-accent" /> Director: +91 98800 58567</a>
                <a href="mailto:info@ashritheducationtrust.org" className="flex items-center gap-3 hover:text-accent"><Mail className="h-4 w-4 text-accent" /> info@ashritheducationtrust.org</a>
              </div>
            </div>
            <div className="rounded-2xl bg-cream p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <div className="font-display font-bold text-primary">Visit us</div>
                  <p className="mt-1 text-sm text-foreground/75">
                    NH-66, Kota, Udupi Taluk & District – 576221, Karnataka, India
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
