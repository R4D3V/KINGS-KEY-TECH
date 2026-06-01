import ServicePage from "@/components/ServicePage";

export const metadata = { title: "Website Designing — Kings Key Tech" };

export default function Page() {
  return (
    <ServicePage
      icon="🌐" sub="Web Development"
      title="Website Designing"
      description="Your online presence matters. I design and build stunning, fast, and functional websites that represent your brand with excellence."
      images={[
        { src: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg", caption: "UI/UX Design", label: "Design" },
        { src: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg", caption: "Frontend Dev", label: "Development" },
        { src: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg", caption: "Clean Code", label: "Code" },
        { src: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg", caption: "Live Website", label: "Deployment" },
      ]}
      features={["Custom Website Design","Mobile-Responsive Layouts","Business / Portfolio Sites","E-commerce Stores","Landing Pages","SEO Foundation Setup","Google Analytics","Contact Forms","Fast Page Load Speed","Domain & Hosting Guidance","CMS (WordPress / Next.js)","Website Maintenance"]}
      process={[
        { step: "01", title: "Discovery", desc: "We discuss your goals, brand, target audience, and vision." },
        { step: "02", title: "Design", desc: "Wireframes and mockups crafted to match your requirements." },
        { step: "03", title: "Development", desc: "Clean, modern code built for speed and reliability." },
        { step: "04", title: "Review", desc: "You review and request any adjustments or changes." },
        { step: "05", title: "Launch", desc: "Your site goes live — fully tested and optimized." },
      ]}
      sidebarTitle="Start Your Project"
      sidebarDesc="Tell me your vision and I'll bring it online."
      waMessage="Hello Fahad, I need a Website Design service."
      perks={["Custom designs only","Delivered in 3–7 days","Free revisions included","Mobile-first approach"]}
    />
  );
}
