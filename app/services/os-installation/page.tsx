import ServicePage from "@/components/ServicePage";

export const metadata = { title: "OS & Program Installation — Kings Key Tech" };

export default function Page() {
  return (
    <ServicePage
      icon="💻" sub="System Setup & Software"
      title="OS & Program Installation"
      description="Get your computer running at peak performance with a clean OS installation and all the software you need — configured perfectly from day one."
      features={["Windows 10 / 11 Clean Installation","Ubuntu & Linux Setup","macOS Configuration","All Drivers Installation","Microsoft Office Suite","Antivirus & Security Software","Adobe Creative Suite","Custom Software Packages","BIOS / UEFI Configuration","Dual Boot Setup","Performance Optimization","Post-install Backup Setup"]}
      process={[
        { step: "01", title: "Assessment", desc: "We evaluate your device specs and requirements before any work begins." },
        { step: "02", title: "Data Backup", desc: "Your existing data is safely backed up before any changes are made." },
        { step: "03", title: "Installation", desc: "Clean OS install with all required drivers and software packages." },
        { step: "04", title: "Optimization", desc: "System tuning for maximum speed, performance, and stability." },
        { step: "05", title: "Handover", desc: "Full walkthrough of the new setup and everything delivered to you." },
      ]}
      sidebarTitle="Book This Service"
      sidebarDesc="Fast, reliable OS and software installation."
      waMessage="Hello Fahad, I need OS & Program Installation service."
      perks={["Same-day service available","On-site or remote support","Satisfaction guaranteed","Free follow-up support"]}
    />
  );
}
