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
          <p>The B.Sc Nursing program is affiliated with Rajiv Gandhi University of Health Sciences
            (RGUHS), Bengaluru and recognized by the Karnataka Nursing Council (KNC). Ashrith College
            and School of Nursing offers modern infrastructure, experienced faculty, clinical exposure,
            well-equipped laboratories, and practical learning.</p>
          <p>Admission is based on eligibility. Candidates must have completed 17 years of age with
            PUC / 10+2 in Physics, Chemistry, Biology and English with a minimum aggregate of 45%,
            good health and character, as per RGUHS regulations.</p>
        </>
      }
      courses={[
        { title: "B.Sc Nursing", duration: "4 Years", desc: "Undergraduate degree affiliated to RGUHS, Bengaluru and recognized by Karnataka Nursing Council (KNC)." },
        { title: "Ashrith School of Nursing", duration: "3 Years", desc: "School of Nursing programme with strong clinical foundation in general and midwifery nursing." },
      ]}
      facilities={[
        "Fundamental Lab",
        "Nutrition Lab",
        "Community Lab",
        "Modern library with nursing journals, e-journals and reference materials",
        "Separate hostels for boys and girls with warden supervision",
        "Clinical postings at Vinaya Hospital, Kundapur and affiliated hospitals",
        "Scholarships, internal assessment and career guidance",
        "Annual examinations, clinical evaluation and academic progress monitoring",
      ]}
      faculty={[
        { name: "Documents Required", role: "SSLC Marks Card · PUC Marks Card · Transfer Certificate" },
        { name: "Conduct Certificate", role: "Migration Certificate (if applicable) · Passport Photos" },
        { name: "Physical Fitness Certificate", role: "Original Certificates mandatory at admission" },
        { name: "Employment", role: "Hospitals · Government Hospitals · Community Health · Research" },
      ]}
    />
  ),
});
