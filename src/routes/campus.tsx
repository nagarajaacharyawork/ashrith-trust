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
  { icon: Building2, title: "Infrastructure", text: "Spacious classrooms, modern laboratories, library, internet facility, and a peaceful campus environment." },
  { icon: BookOpen, title: "Library", text: "Large collection of books, international nursing journals, reference materials, e-journals, previous year question papers, and audio-visual resources." },
  { icon: Utensils, title: "Dining", text: "Vegetarian and non-vegetarian food available. Hygienic mess with regional and regular fare." },
  { icon: Users, title: "Hostel", text: "Separate hostels for boys and girls. Safe and secure environment with rooms for parents during visiting hours." },
  { icon: Bus, title: "Transport", text: "Bus connectivity to Kota, Kundapur, Barkur and surrounding areas." },
  { icon: MapPin, title: "Location", text: "NH-66, Kota — 20 km from Udupi, 10 km from Barkur & Kundapura, 12 km from Manipal." },
];

function Campus() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Our Home" title="Our Campus @ Kota" subtitle="A serene coastal setting on NH-66 — where academic ambition meets community warmth." image={aerial} />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <img src={aerial} alt="Campus view" className="rounded-2xl shadow-card" loading="lazy" />
          <div>
            <div className="eyebrow mb-3">Location & Accessibility</div>
            <h2 className="section-heading mb-6">Coastal Karnataka, well connected.</h2>
            <p className="text-foreground/80">
              The campus is situated at Kota on NH-66 in Udupi Taluk, Karnataka. Kota is a
              picturesque pilgrim and tourism centre sheltered by the Western Ghats on the east
              and bordered by the Arabian Sea on the west.
            </p>
            <ul className="mt-4 space-y-1 text-sm text-foreground/80">
              <li>• 20 km from Udupi Railway Station</li>
              <li>• 10 km from Barkur Railway Station</li>
              <li>• 10 km from Kundapura Railway Station</li>
              <li>• 12 km from Manipal</li>
            </ul>
            <p className="mt-4 text-foreground/80">
              Kota has a progressive population and thriving educational institutions in health,
              science, and technology, making it an ideal destination for quality education.
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
                Separate hostels for boys and girls. Safe and secure environment with warden
                supervision. Vegetarian and non-vegetarian food available. Rooms for parents
                during visiting hours.
              </p>
            </div>
            <img src={g4} alt="Hostel building" className="rounded-2xl shadow-card" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="bg-cream/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <div className="eyebrow mb-3">Clinical Training</div>
            <h2 className="section-heading">Hospital Affiliations.</h2>
          </div>
          <p className="mb-6 text-foreground/80">Students undergo clinical training at Vinaya Hospital, Kundapur, with additional postings at:</p>
          <ul className="mb-10 grid gap-2 text-sm text-foreground/80 md:grid-cols-2">
            {["District Government Hospital, Udupi","Taluk Government Hospital, Kundapur","Manjunatha Hospital","Mahesh Hospital","A.V. Baliga Hospital","Dr. N. R. Acharya Memorial Hospital","Other affiliated healthcare institutions"].map((h) => (
              <li key={h} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" />{h}</li>
            ))}
          </ul>
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
