import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, GraduationCap, Heart, Eye, Target, MapPin, Play } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Ticker } from "@/components/site/Ticker";
import heroCampus from "@/assets/College_Image.JPG";
import nursingImg from "@/assets/nursing-college.jpg";
import paramedImg from "@/assets/paramedical-college.jpg";
import puImg from "@/assets/pu-college.jpg";
import aerial from "@/assets/main-entrence.JPG";
import g1 from "@/assets/studentsatclass.JPG";
import g2 from "@/assets/Class.JPG";
import g3 from "@/assets/Lab.JPG";
import g4 from "@/assets/Rooms-hostel.JPG";

export const Route = createFileRoute("/")({

  component: Home,
});

const slides = [heroCampus, aerial];

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[86vh] min-h-[560px] w-full">
        {slides.map((s, idx) => (
          <img key={idx} src={s} alt="Ashrith campus"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`} />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/85 via-primary/60 to-transparent" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-16 md:pt-0">
          <div className="max-w-3xl animate-fade-up">
            <div className="mb-3 flex items-center gap-3 md:mb-4">
              <span className="h-[2px] w-8 bg-accent md:w-10" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent md:text-xs md:tracking-[0.3em]">Excellence in Professional Education</span>
            </div>
            <h1 className="font-display text-3xl font-bold leading-[1.05] text-white sm:text-4xl md:text-6xl lg:text-7xl">
              Ashrith Group<br />of Institutions
            </h1>
            <p className="mt-4 font-display text-lg italic text-white/90 md:mt-6 md:text-2xl">
              "Study to Serve the Humanity"
            </p>
            <div className="mt-6 flex flex-wrap gap-3 md:mt-8">
              <Link to="/application" className="btn-primary">Enquire Now <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/institutes" className="inline-flex items-center gap-2 rounded-full border border-white/60 px-5 py-2.5 font-display text-sm font-semibold text-white transition hover:bg-white hover:text-primary md:border-[1.5px] md:px-6 md:py-3">
                Explore Institutes
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 flex gap-2 md:bottom-10 md:right-10">
          <button onClick={() => setI((i - 1 + slides.length) % slides.length)} className="rounded-full border border-white/40 bg-black/20 p-2 text-white transition hover:bg-white hover:text-primary" aria-label="Previous">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={() => setI((i + 1) % slides.length)} className="rounded-full border border-white/40 bg-black/20 p-2 text-white transition hover:bg-white hover:text-primary" aria-label="Next">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>


    </section>
  );
}

const instituteCards = [
  { to: "/institutes/nursing", title: "Ashrith College & School of Nursing", desc: "Offers B.Sc Nursing and School of Nursing programs with modern infrastructure, experienced faculty, clinical exposure, laboratories, and practical learning.", img: nursingImg },
  { to: "/institutes/paramedical", title: "K. R. Hegde College of Paramedical Sciences", desc: "Offers Diploma programs including DMLT, DOT & AT, Dialysis Technology, and Ophthalmic Technology with practical hospital training.", img: paramedImg },
  { to: "/institutes/pu", title: "Ashrith Pre-University College", desc: "Science stream with PCMB and PCMC combinations preparing students for higher education and professional careers.", img: puImg },
];

function Institutes() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="eyebrow mb-3">What We Offer</div>
            <h2 className="section-heading">Our Institutes</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Three focused institutions united under one trust — advancing healthcare
            education from foundation to profession.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {instituteCards.map((c) => (
            <Link key={c.to} to={c.to as never} className="group relative block h-[420px] overflow-hidden rounded-2xl shadow-card">
              <img src={c.img} alt={c.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="font-display text-xl font-bold leading-tight md:text-2xl">{c.title}</h3>
                <p className="mt-2 text-sm text-white/85">{c.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Learn More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="bg-cream/40 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div className="relative">
          <img src={aerial} alt="Ashrith Trust campus" className="rounded-2xl shadow-card" loading="lazy" />
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-accent px-6 py-5 text-white shadow-xl md:block">
            <div className="font-display text-4xl font-bold">15+</div>
            <div className="text-xs uppercase tracking-widest">Years of Service</div>
          </div>
        </div>
        <div>
          <div className="eyebrow mb-3">About Us</div>
          <h2 className="section-heading mb-6">Ashrith Trust <span className="text-accent">®</span></h2>
          <p className="text-base leading-relaxed text-foreground/80">
            Ashrith Trust (R) endeavours to meet the challenges of today and tomorrow by focusing
            on the development of an individual intellectually, emotionally, physically,
            socially, and spiritually. Founded by <strong className="text-primary">K. R. Hegde</strong>
            {" "}(Chairman & Managing Trustee) and <strong className="text-primary">Dr. Vidyadhar Shetty K.</strong>
            {" "}(Director & Trustee), the Trust is committed to excellence in healthcare, education, and social service.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            Ashrith College of Nursing, Ashrith School of Nursing, and K. R. Hegde College of
            Paramedical Sciences are established and managed by Ashrith Trust (R). The institutions
            continuously innovate teaching and learning through active involvement of experienced professionals.
          </p>
          <div className="mt-8 flex flex-wrap gap-6">
            {[["15+", "Years of Service"], ["1000+", "Alumni"], ["50+", "Faculty"], ["3", "Institutions"]].map(([n, l]) => (
              <div key={l as string}>
                <div className="font-display text-3xl font-bold text-primary">{n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const mvpItems = [
  { icon: Target, title: "Our Mission", text: "Teach students to practice ethical values in their personal and professional life, rendering nursing service in a committed manner with the spirit of humanity." },
  { icon: Heart, title: "Philosophy", text: "We believe in excellence in the generation and transmission of nursing knowledge through a teaching-learning process that is the responsibility of both faculty and students." },
  { icon: Eye, title: "Our Vision", text: "Our holistic approach to learning promotes the development of every student's mind, body, and soul in an academically stimulating environment." },
  { icon: GraduationCap, title: "Aims & Objectives", text: "To acquire knowledge of theory and principles of nursing and allied subjects involved in delivering comprehensive nursing practice." },
];

function MVP() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <div className="eyebrow mb-3">Our Foundation</div>
          <h2 className="section-heading">Mission · Philosophy · Vision</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {mvpItems.map((m) => (
            <div key={m.title} className="card-soft flex flex-col">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white">
                <m.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-primary">{m.title}</h3>
              <p className="mt-3 flex-1 text-sm italic leading-relaxed text-foreground/75">{m.text}</p>
              <a href="#" className="mt-4 text-xs font-semibold uppercase tracking-widest text-accent hover:underline">...more</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const trustees = [
  { name: "K. R. Hegde", role: "Chairman & Managing Trustee", qual: "" },
  { name: "Dr. Vidyadhar Shetty K.", role: "Director & Trustee", qual: "MBBS, DA, PGDHHM · Anaesthesia · Hospital & Health Care Management" },
  { name: "Dr. Vishwanath Shetty", role: "Trustee", qual: "" },
  { name: "Sarojini R. Hegde", role: "Managing Trustee", qual: "" },
  { name: "Ashrita Hegde", role: "Trustee", qual: "" },
];

function Leadership() {
  return (
    <section className="bg-primary py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Leadership</div>
          <h2 className="font-display text-3xl font-bold md:text-4xl">Meet Our Trustees</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">
            Guided by leaders with decades of combined service in healthcare, education and social work.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {trustees.map((t) => (
            <div key={t.name} className="group rounded-2xl bg-cream p-5 text-primary shadow-card transition hover:-translate-y-1">
              <div className="mb-4 aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="flex h-full items-center justify-center">
                  <span className="font-display text-5xl font-bold text-primary/40">
                    {t.name.split(" ").map((s) => s[0]).slice(0, 2).join("")}
                  </span>
                </div>
              </div>
              <div className="font-display font-bold leading-tight">{t.name}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">{t.role}</div>
              {t.qual && <p className="mt-2 text-xs text-foreground/70">{t.qual}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Campus() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div className="relative overflow-hidden rounded-2xl shadow-card">
          <img src={aerial} alt="Kota campus" className="h-full w-full object-cover" loading="lazy" />
          <button className="absolute inset-0 flex items-center justify-center bg-primary-deep/30 text-white transition hover:bg-primary-deep/50" aria-label="Play campus tour">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent shadow-xl">
              <Play className="h-6 w-6 fill-white" />
            </span>
          </button>
        </div>
        <div>
          <div className="eyebrow mb-3">Our Home</div>
          <h2 className="section-heading mb-6">Our Campus @ Kota</h2>
          <p className="leading-relaxed text-foreground/80">
            The campus is situated at Kota on NH-66 in Udupi Taluk, Karnataka. Kota is a picturesque
            pilgrim and tourism centre sheltered by the Western Ghats on the east and bordered by
            the Arabian Sea on the west.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/80">
            The campus is approximately 20 km from Udupi Railway Station, 10 km from Barkur Railway
            Station, 10 km from Kundapura Railway Station, and 12 km from Manipal. Kota has a
            progressive population and thriving educational institutions in health, science, and
            technology, making it an ideal destination for quality education.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-primary">
            <MapPin className="h-4 w-4 text-accent" /> NH-66, Kota, Udupi Taluk & District, 576221
          </div>
          <Link to="/campus" className="btn-outline mt-8 text-sm">Explore Campus →</Link>
        </div>
      </div>
    </section>
  );
}

function GalleryStrip() {
  const imgs = [g1, g2, g3, g4, nursingImg, paramedImg];
  return (
    <section className="bg-cream/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <div className="eyebrow mb-3">Campus Life</div>
            <h2 className="section-heading">Campus Life in Pictures</h2>
          </div>
          <Link to="/gallery" className="text-sm font-semibold text-accent hover:underline">View all →</Link>
        </div>
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]">
          {imgs.map((src, i) => (
            <div key={i} className="relative aspect-[4/5] w-72 shrink-0 snap-start overflow-hidden rounded-2xl shadow-card">
              <img src={src} alt="Campus" className="h-full w-full object-cover transition hover:scale-105" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Ticker />
      <Institutes />
      <About />
      <MVP />
      <Leadership />
      <Campus />
      <GalleryStrip />
    </SiteLayout>
  );
}
