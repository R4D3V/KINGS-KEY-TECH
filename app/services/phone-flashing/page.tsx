import ServicePage from "@/components/ServicePage";

export const metadata = { title: "Phone Flashing & Unlocking — Kings Key Tech" };

export default function Page() {
  return (
    <ServicePage
      icon="📱" sub="Mobile Device Services"
      title="Phone Flashing & Unlocking"
      description="Breathe new life into your device. Professional flashing, unlocking, and recovery services for all Android and iOS phones."
      features={["Stock Firmware Flashing","iOS Restore & Support","Carrier Network Unlocking","Factory Reset & Format","FRP / Google Account Bypass","IMEI Repair Services","Bootloader Unlock","Custom ROM Installation","Pattern / PIN Lock Removal","Dead Phone Recovery","Samsung Odin Flash","MIUI / One UI / ColorOS"]}
      process={[
        { step: "01", title: "Diagnosis", desc: "We identify the exact issue with your device accurately." },
        { step: "02", title: "Data Backup", desc: "Contacts, photos, and files backed up where possible." },
        { step: "03", title: "Flashing", desc: "Professional firmware process using certified tools and methods." },
        { step: "04", title: "Testing", desc: "Full functionality test — calls, data, apps, all sensors checked." },
        { step: "05", title: "Delivery", desc: "Your device returned to you working perfectly." },
      ]}
      sidebarTitle="Book This Service"
      sidebarDesc="All Android & iOS brands supported."
      waMessage="Hello Fahad, I need Phone Flashing & Unlocking service."
      perks={["All Android brands","iPhone & iPad","Fast turnaround (same day)","Warranty on service"]}
    />
  );
}
