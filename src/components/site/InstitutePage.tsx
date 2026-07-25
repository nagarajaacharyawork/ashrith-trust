import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/SiteLayout";

export function InstitutePage({
  eyebrow, name, tagline, image, overview, courses, facilities, faculty,
}: {
  eyebrow: string;
  name: string;
  tagline: string;
  image: string;
  overview: ReactNode;
  courses: { title: string; duration: string; desc: string }[];
  facilities: string[];
  faculty: { name: string; role: string }[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={name} subtitle={tagline} image={image} />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="eyebrow mb-3">Overview</div>
          <h2 className="section-heading mb-6">About the Institute</h2>
          <div className="prose max-w-none text-foreground/80">{overview}</div>
        </div>
      </section>

      <section className="bg-cream/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <div className="eyebrow mb-3">Programmes</div>
            <h2 className="section-heading">Courses Offered</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <div key={c.title} className="rounded-2xl bg-white p-6 shadow-card transition hover:-translate-y-1">
                <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">{c.duration}</div>
                <h3 className="font-display text-lg font-bold text-primary">{c.title}</h3>
                <p className="mt-2 text-sm text-foreground/75">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div>
            <div className="eyebrow mb-3">Infrastructure</div>
            <h2 className="section-heading mb-6">Facilities</h2>
            <ul className="space-y-3">
              {facilities.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-heal" />
                  <span className="text-foreground/85">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-3">Our Team</div>
            <h2 className="section-heading mb-6">Faculty Highlights</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {faculty.map((f) => (
                <div key={f.name} className="rounded-xl bg-cream p-4">
                  <div className="mb-3 h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20" />
                  <div className="font-display font-bold text-primary">{f.name}</div>
                  <div className="text-xs uppercase tracking-widest text-accent">{f.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Ready to begin your journey?</h2>
          <p className="mt-4 text-white/80">Applications for the 2026-27 academic year are now open.</p>
          <Link to="/application" className="btn-primary mt-8 text-sm">Apply Now <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}
