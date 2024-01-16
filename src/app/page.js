import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/pages/home/hero-section/Hero"));
const Projects = dynamic(() => import("@/pages/home/projects-section/Projects"));
const Skill = dynamic(() => import("@/pages/home/skill-section/Skill"));
const Timeline = dynamic(() => import("@/pages/home/timeline-section/Timeline"));

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between min-h-screen test">
            <Hero />
            <Projects />
            <Skill />
            <Timeline />
        </main>
    );
}
