import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Building2, Utensils, BookOpen, Bus, Users } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import aerial from "@/assets/main-entrence.JPG";
import g1 from "@/assets/studentsatclass.JPG";
import g2 from "@/assets/Class.JPG";
import g3 from "@/assets/Lab.JPG";
import g4 from "@/assets/Rooms-hostel.JPG";
import nursing from "@/assets/nursing-college.jpg";
import paramed from "@/assets/paramedical-college.jpg";

export const Route = createFileRoute("/campus")({
  component: Campus,
});

const facilities = [
  { icon: Building2, title: "Modern Buildings", text: "Purpose-built academic blocks with well-lit classrooms and modern labs." },
  { icon: Utensils, title: "Dining", text: "Hygienic vegetarian & mixed menu mess with regional & regular fare." },
  { icon: BookOpen, title: "Library", text: "Wide collection of nursing, paramedical and reference material with e-resources." },
  { icon: Bus, title: "Transport", text: "Bus connectivity to Kota, Kundapur, Barkur and surrounding areas." },
  { icon: Users, title: "Community", text: "Cultural events, sports, and co-curricular clubs for holistic growth." },
  { icon: MapPin, title: "Location", text: "Coastal NH-66, minutes from Manipal, Udupi and Kundapur." },
];

function Campus() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Our Home" title="Our Campus @ Kota" subtitle="A serene coastal setting on NH-66 — where academic ambition meets community warmth." image={aerial} />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <img src={aerial} alt="Campus aerial view" className="rounded-2xl shadow-card" loading="lazy" />
          <div>
            <div className="eyebrow mb-3">Location & Accessibility</div>
            <h2 className="section-heading mb-6">Coastal Karnataka, well connected.</h2>
            <p className="text-foreground/80">
              The campus is located at Kota on NH-66, Udupi Taluk & District, Karnataka — a
              picturesque pilgrim and tourism centre in coastal Karnataka, sheltered by the
              Western Ghats to the east and bordered by the Arabian Sea. It is 20 km from Udupi
              Railway Station and 10 km from Barkur & Kundapur Railway Stations. The international
              university town of Manipal is just 10 km away.
            </p>
            <p className="mt-4 text-foreground/80">
              Kota's cosmopolitan culture, progressive population, and thriving educational
              institutions in health, science and technology make it the ideal choice for a
              dream education.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <div className="eyebrow mb-3">Facilities & Amenities</div>
            <h2 className="section-heading">Everything you need to thrive.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f) => (
              <div key={f.title} className="rounded-2xl bg-white p-6 shadow-card">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-primary">{f.title}</h3>
                <p className="mt-2 text-sm text-foreground/75">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="eyebrow mb-3">Hostel Life</div>
              <h2 className="section-heading mb-6">A home away from home.</h2>
              <p className="text-foreground/80">
                Separate, secure hostels for boys and girls with warden supervision, hygienic dining,
                Wi-Fi, common recreation areas, and study spaces designed for focused learning and
                community living.
              </p>
            </div>
            <img src={g4} alt="Hostel building" className="rounded-2xl shadow-card" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="bg-cream/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <div className="eyebrow mb-3">Student Life</div>
            <h2 className="section-heading">Community, care and celebration.</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[g1, g2, g3, nursing, paramed, aerial, g4, g1].map((src, i) => (
              <div key={i} className={`overflow-hidden rounded-2xl shadow-card ${i % 3 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}>
                <img src={src} alt="" className="h-full w-full object-cover transition hover:scale-105" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
