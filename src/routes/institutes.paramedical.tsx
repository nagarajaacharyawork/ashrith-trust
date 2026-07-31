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
          <p>Minimum qualification is SSLC / 10th Pass. Course duration is 3 years (SSLC) or 2 years
            (PUC). Age: 15–35 years with relaxation for SC/ST and in-service candidates. Application
            fee: ₹250 by Demand Draft in favour of K. R. Hegde College of Paramedical Sciences.</p>
        </>
      }
      courses={[
        { title: "Diploma in Medical Laboratory Technology (DMLT)", duration: "2–3 Years", desc: "Diagnostic techniques across pathology, biochemistry, microbiology and haematology." },
        { title: "Diploma in Operation Theatre Technology (DOTT)", duration: "2–3 Years", desc: "Comprehensive OT assistance, sterilisation, anaesthesia support and patient safety." },
        { title: "Diploma in Ophthalmic Technology (DOT)", duration: "2–3 Years", desc: "Ophthalmic procedures, vision testing, and eye care technology." },
        { title: "Diploma in Dialysis Technology (DDT)", duration: "2–3 Years", desc: "Renal care, dialysis machine operation, and patient management." },
      ]}
      facilities={[
        "Fully equipped pathology, biochemistry and microbiology labs",
        "Simulated operation theatre for hands-on OT training",
        "Anaesthesia machines and monitoring equipment",
        "Clinical postings at Vinaya Hospital, Kundapur and affiliated hospitals",
        "Digital library with paramedical resources",
        "Placement support for hospital and diagnostic careers",
      ]}
      faculty={[
        { name: "Documents Required", role: "SSLC Certificate · PUC Marks Card · Passport Photos" },
        { name: "Transfer Certificate", role: "Migration Certificate · Conduct Certificate" },
        { name: "Physical Fitness Certificate", role: "Registration Fee Receipt" },
        { name: "Employment", role: "Hospitals · Govt. Hospitals · Medical Labs · Medical Colleges · Research Organizations" },
      ]}
    />
  ),
});
