import { createFileRoute } from "@tanstack/react-router";
import { InstitutePage } from "@/components/site/InstitutePage";
import img from "@/assets/nursing-college.jpg";

export const Route = createFileRoute("/institutes/nursing")({
  component: () => (
    <InstitutePage
      eyebrow="Nursing Division"
      name="Ashrith College & School of Nursing"
      tagline="Service · Care · Heal — shaping the next generation of compassionate nurses."
      image={img}
      overview={
        <>
          <p>Established under Ashrith Trust (R), Ashrith College and School of Nursing offers
            recognised programmes affiliated to relevant nursing councils and universities. The
            institution emphasises evidence-based practice, ethical care and hands-on clinical
            exposure across partner hospitals in the Udupi–Manipal region.</p>
          <p>Our curriculum integrates classroom learning with simulation-based skill training,
            community outreach and clinical postings — preparing graduates who are ready to serve
            in hospitals, community health settings and beyond.</p>
        </>
      }
      courses={[
        { title: "B.Sc Nursing", duration: "4 Years", desc: "Undergraduate degree preparing registered nurses for hospital and community practice." },
        { title: "General Nursing & Midwifery (GNM)", duration: "3 Years", desc: "Diploma programme with strong clinical foundation in general and midwifery nursing." },
        { title: "Post Basic B.Sc Nursing", duration: "2 Years", desc: "Bridge programme for registered nurses seeking a graduate qualification." },
      ]}
      facilities={[
        "Fully equipped nursing foundation and skill labs",
        "Anatomy, physiology and microbiology laboratories",
        "Modern library with nursing journals and e-resources",
        "Separate hostels for boys and girls with 24×7 warden supervision",
        "Clinical postings across partner hospitals",
        "Simulation-based OSCE and OSPE training",
      ]}
      faculty={[
        { name: "Prof. Sunitha K.", role: "Principal" },
        { name: "Mrs. Preethi Rao", role: "Vice Principal" },
        { name: "Ms. Anitha Shetty", role: "Sr. Lecturer" },
        { name: "Mr. Rajesh Kumar", role: "Clinical Instructor" },
      ]}
    />
  ),
});
