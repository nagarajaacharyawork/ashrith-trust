import { createFileRoute } from "@tanstack/react-router";
import { InstitutePage } from "@/components/site/InstitutePage";
import img from "@/assets/paramedical-college.jpg";

export const Route = createFileRoute("/institutes/paramedical")({
  component: () => (
    <InstitutePage
      eyebrow="Paramedical Division"
      name="K. R. Hegde College of Paramedical Sciences"
      tagline="Hands-on training in medical lab technology, operation theatre and allied health."
      image={img}
      overview={
        <>
          <p>K. R. Hegde College of Paramedical Sciences prepares skilled technologists who form the
            backbone of modern healthcare. Programmes are built on rigorous scientific fundamentals
            combined with substantial clinical and laboratory practice.</p>
          <p>Students gain exposure to advanced diagnostic equipment, safety protocols and real hospital
            workflows — graduating employment-ready for hospitals, diagnostic labs and OT setups.</p>
        </>
      }
      courses={[
        { title: "Diploma in Medical Laboratory Technology (DMLT)", duration: "2 Years", desc: "Diagnostic techniques across pathology, biochemistry, microbiology and haematology." },
        { title: "Diploma in Operation Theatre & Anaesthesia Technology (DOT & AT)", duration: "2 Years", desc: "Comprehensive OT assistance, sterilisation, anaesthesia support and patient safety." },
        { title: "Diploma in Radiology & Imaging Technology", duration: "2 Years", desc: "Modern imaging modalities including X-ray, CT and MRI fundamentals." },
      ]}
      facilities={[
        "Fully equipped pathology, biochemistry and microbiology labs",
        "Simulated operation theatre for hands-on OT training",
        "Anaesthesia machines and monitoring equipment",
        "Access to partner hospitals for internship postings",
        "Digital library with paramedical resources",
        "Placement support for hospital and diagnostic careers",
      ]}
      faculty={[
        { name: "Dr. Suresh Bhat", role: "Principal" },
        { name: "Mr. Nagaraj Prabhu", role: "HOD – MLT" },
        { name: "Ms. Divya Nayak", role: "OT & Anaesthesia Instructor" },
        { name: "Mr. Vinay Shenoy", role: "Sr. Technician" },
      ]}
    />
  ),
});
