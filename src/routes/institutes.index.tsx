import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/SiteLayout";
import aerial from "@/assets/main-entrence.JPG";
import nursingImg from "@/assets/nursing-college.jpg";
import paramedImg from "@/assets/paramedical-college.jpg";

export const Route = createFileRoute("/institutes/")({
  component: InstitutesIndex,
});

const cards = [
  { to: "/institutes/nursing", title: "Ashrith College & School of Nursing", desc: "B.Sc Nursing · School of Nursing", img: nursingImg,
    long: "Offers B.Sc Nursing and School of Nursing programs with modern infrastructure, experienced faculty, clinical exposure, well-equipped laboratories, and practical learning." },
  { to: "/institutes/paramedical", title: "K. R. Hegde College of Paramedical Sciences", desc: "DMLT · DOT & AT · Dialysis · Ophthalmic", img: paramedImg,
    long: "Offers Diploma programs including DMLT, DOT & AT, Dialysis Technology, and Ophthalmic Technology with practical hospital training and industry-aligned curriculum." },
];

function InstitutesIndex() {
  return (
    <>
      <PageHero eyebrow="What We Offer" title="Our Institutes" subtitle="Two institutions. One vision. A shared commitment to serving humanity through education." image={aerial} />
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
