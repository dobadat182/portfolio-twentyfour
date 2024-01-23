import dynamic from "next/dynamic";
const HomePage = dynamic(() => import("@/pages/home"));

export default function Home() {
    return <HomePage />;
}
