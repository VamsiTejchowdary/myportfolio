"use client";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";
import GoodWords from "@/components/Clients";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";

// Dynamically import Grid to avoid server-side rendering issues
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Education />
        <GoodWords />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
