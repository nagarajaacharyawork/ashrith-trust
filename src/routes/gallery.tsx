import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import g1 from "@/assets/studentsatclass.JPG";
import g2 from "@/assets/Class.JPG";
import g3 from "@/assets/Lab.JPG";
import g4 from "@/assets/Rooms-hostel.JPG";
import nursing from "@/assets/nursing-college.jpg";
import paramed from "@/assets/paramedical-college.jpg";
import puc from "@/assets/pu-college.jpg";
import aerial from "@/assets/main-entrence.JPG";
import hero from "@/assets/College_Image.JPG";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
});

const images = [
  { src: g2, alt: "Nursing students group photo", tall: false },
  { src: nursing, alt: "Nursing classroom", tall: true },
  { src: g1, alt: "Skill lab training", tall: false },
  { src: paramed, alt: "Paramedical lab", tall: false },
  { src: aerial, alt: "Campus aerial", tall: true },
  { src: g3, alt: "Library study", tall: false },
  { src: puc, alt: "PU classroom", tall: false },
  { src: g4, alt: "Hostel building", tall: true },
  { src: hero, alt: "Campus building", tall: false },
];

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <SiteLayout>
      <PageHero eyebrow="Life at Ashrith" title="Gallery" subtitle="A glimpse into our campus, classrooms and community." image={g2} />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setOpen(i)}
                className="mb-4 block w-full overflow-hidden rounded-2xl shadow-card transition hover:opacity-90"
              >
                <img src={img.src} alt={img.alt} className="w-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {open !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setOpen(null)}>
          <button className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20" aria-label="Close">
            <X className="h-6 w-6" />
          </button>
          <img src={images[open].src} alt={images[open].alt} className="max-h-[90vh] max-w-full rounded-2xl object-contain" />
        </div>
      )}
    </SiteLayout>
  );
}
