import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/pages/home/section/hero/Hero"));
const Projects = dynamic(() =>
    import("@/pages/home/section/projects/Projects")
);
const Skill = dynamic(() => import("@/pages/home/section/skills/Skill"));
const Timeline = dynamic(() =>
    import("@/pages/home/section/timeline/Timeline")
);
const Contact = dynamic(() => import("@/pages/home/section/contact/Contact"));

const Index = () => {
    return (
        <div className="flex flex-col items-center justify-between home-page">
            <Hero />
            <Projects />
            <Skill />
            <Timeline />
            <Contact />
        </div>
    );
};
export default Index;
