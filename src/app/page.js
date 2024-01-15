import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/containers/home-page/hero-section/Hero"));
const Projects = dynamic(() => import("@/containers/home-page/projects-section/Projects"));
const Skill = dynamic(() => import("@/containers/home-page/skill-section/Skill"));
const Timeline = dynamic(() => import("@/containers/home-page/timeline-section/Timeline"));

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
