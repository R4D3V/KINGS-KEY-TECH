import ServicePage from "@/components/ServicePage";

export const metadata = { title: "CV Making — Kings Key Tech" };

export default function Page() {
  return (
    <ServicePage
      icon="📄" sub="Career Documents"
      title="CV Making"
      description="Your CV is your first impression. I craft professionally designed, ATS-optimised CVs that get you noticed and land the interviews you deserve."
      images={[
        { src: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg", caption: "CV Writing", label: "Document" },
        { src: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg", caption: "Professional Format", label: "Design" },
        { src: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg", caption: "ATS Optimised", label: "Structure" },
        { src: "https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg", caption: "Job Ready", label: "Final Result" },
      ]}
      features={["Professional CV Design","ATS Optimised Format","Personal Statement Writing","Skills & Experience Layout","Cover Letter Writing","LinkedIn Profile Review","Academic CV for Universities","Executive / Senior CVs","Fresh Graduate CVs","Industry-Specific Templates","PDF & Word Delivery","Unlimited First Revisions"]}
      process={[
        { step: "01", title: "Consultation", desc: "We discuss your career goals, experience, and target roles." },
        { step: "02", title: "Drafting", desc: "Your CV is crafted with professional structure and design." },
        { step: "03", title: "Review", desc: "You review the draft and provide feedback for refinements." },
        { step: "04", title: "Finalise", desc: "Final tweaks applied based on your feedback." },
        { step: "05", title: "Delivery", desc: "PDF and Word format delivered within the agreed timeframe." },
      ]}
      sidebarTitle="Order Your CV"
      sidebarDesc="Send your details via WhatsApp or the contact form."
      waMessage="Hello Fahad, I need a professional CV made."
      perks={["Delivered in PDF & Word","24–72 hour turnaround","Revisions included","ATS-friendly format"]}
    />
  );
}
