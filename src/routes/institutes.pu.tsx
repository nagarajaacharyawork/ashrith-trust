import { createFileRoute } from "@tanstack/react-router";
import { InstitutePage } from "@/components/site/InstitutePage";
import img from "@/assets/pu-college.jpg";

export const Route = createFileRoute("/institutes/pu")({
  component: () => (
    <InstitutePage
      eyebrow="Pre-University Division"
      name="Ashrith Pre-University College"
      tagline="A strong academic foundation for careers in medicine, science and technology."
      image={img}
      overview={
        <>
          <p>Ashrith Pre-University College offers the Karnataka PU science stream with a focus on
            conceptual understanding, disciplined study habits and holistic student development.</p>
          <p>Our faculty blends traditional academic rigour with mentoring and career guidance —
            preparing students for CET, NEET and other competitive entrance examinations.</p>
        </>
      }
      courses={[
        { title: "PCMB", duration: "2 Years", desc: "Physics, Chemistry, Mathematics, Biology — ideal for medical & engineering aspirants." },
        { title: "PCMC", duration: "2 Years", desc: "Physics, Chemistry, Mathematics, Computer Science — for STEM and engineering paths." },
      ]}
      facilities={[
        "Well-equipped physics, chemistry and biology laboratories",
        "Computer science lab with modern workstations",
        "Library and reference materials for competitive exams",
        "Regular mentoring and doubt-clearing sessions",
        "CET / NEET preparation guidance",
        "Sports and co-curricular facilities",
      ]}
      faculty={[
        { name: "Mr. Ramesh Rao", role: "Principal" },
        { name: "Mrs. Lakshmi Kamath", role: "Sr. Lecturer — Physics" },
        { name: "Mr. Anil Pai", role: "Sr. Lecturer — Chemistry" },
        { name: "Ms. Shreya Bhat", role: "Sr. Lecturer — Biology" },
      ]}
    />
  ),
});
