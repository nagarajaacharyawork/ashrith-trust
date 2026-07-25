import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/SiteLayout";
import aerial from "@/assets/main-entrence.JPG";
import nursingImg from "@/assets/nursing-college.jpg";
import paramedImg from "@/assets/paramedical-college.jpg";
import puImg from "@/assets/pu-college.jpg";

export const Route = createFileRoute("/institutes/")({
  component: InstitutesIndex,
});

const cards = [
  { to: "/institutes/nursing", title: "Ashrith College & School of Nursing", desc: "GNM · B.Sc Nursing", img: nursingImg,
    long: "Comprehensive nursing programmes with modern skill labs, clinical partnerships and a strong emphasis on ethical, compassionate practice." },
  { to: "/institutes/paramedical", title: "K. R. Hegde College of Paramedical Sciences", desc: "DMLT · DOT & AT · Allied Health", img: paramedImg,
    long: "Industry-aligned diploma programmes in medical laboratory technology, operation theatre and anaesthesia technology, and other allied specialties." },
  { to: "/institutes/pu", title: "Ashrith Pre-University College", desc: "PCMB · PCMC", img: puImg,
    long: "Pre-university science education (Class 11–12) with rigorous academics that prepare students for healthcare and STEM careers." },
];

function InstitutesIndex() {
  return (
    <>
      <PageHero eyebrow="What We Offer" title="Our Institutes" subtitle="Three institutions. One vision. A shared commitment to serving humanity through education." image={aerial} />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-6">
          {cards.map((c, i) => (
            <div key={c.to} className={`grid gap-8 md:grid-cols-2 md:items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="overflow-hidden rounded-2xl shadow-card">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div>
                <div className="eyebrow mb-3">{c.desc}</div>
                <h2 className="section-heading mb-4">{c.title}</h2>
                <p className="text-foreground/80">{c.long}</p>
                <Link to={c.to as never} className="btn-primary mt-6 text-sm">Learn more <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
