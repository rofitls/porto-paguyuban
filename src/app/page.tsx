// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Clients from "./clients";
import Skills from "./skills";
import Events from "./events";
import Resume from "./resume";
import Testimonial from "./testimonial";
import PopularClients from "./popular-clients";
import ContactForm from "./contact-form";
import VisionMission from "./vision-mission";
import Donation from "./donation";
import DoaAcara from "./doa-acara";
import Timeline from "./timeline";
import LaporanKas from "./laporan-kas";
import FamilyTree from "./family-tree";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="vision-mission">
        <VisionMission />
      </section>
      <section id="silsilah">
        <FamilyTree />
      </section>
      {/* <Clients /> */}
      {/* <Skills /> */}
      <section id="timeline">
        <Timeline />
      </section>
      <section id="events">
        <Events />
      </section>
      {/* <Resume /> */}
      {/* <Testimonial /> */}
      {/* <PopularClients /> */}
      <section id="doa">
        <DoaAcara />
      </section>
      <Donation />
      <section id="kas">
        <LaporanKas />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}
