import Hero from "@/containers/home-page/hero-section/Hero";
import Projects from "@/containers/home-page/projects-section/Projects";
import Skill from "@/containers/home-page/skill-section/Skill";
import Timeline from "@/containers/home-page/timeline-section/Timeline";

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
