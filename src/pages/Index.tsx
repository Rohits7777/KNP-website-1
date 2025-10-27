import { useState } from "react";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Statistics from "@/components/Statistics";
import ProjectStats from "@/components/ProjectStats";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <>
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}
      
      {!showPreloader && (
        <div className="min-h-screen bg-white">
          <Header />
          <main className="bg-white">
            <Hero />
            <About />
            <Services />
            <Process />
            <Statistics />
            <Projects />
            <ProjectStats />
            <Team />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
