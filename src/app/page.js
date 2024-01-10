import Hero from "@/containers/home-page/hero-section/Hero";
import Projects from "@/containers/home-page/projects-section/Projects";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between min-h-screen">
            <Hero />
            <Projects />
        </main>
    );
}
