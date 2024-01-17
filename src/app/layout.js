import "./globals.scss";
import "@splidejs/react-splide/css/core";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Open_Sans, Lora } from "next/font/google";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

// Fonts
const openSans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-opensans",
});

const lora = Lora({
    subset: ["latin"],
    display: "swap",
    variable: "--font-lora",
    preload: false,
});

export const metadata = {
    title: "Brian Do",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`${openSans.variable} ${lora.variable} font-sans`}
        >
            <body>
                <Header />
                {children}
                <Footer />

                <SpeedInsights />
            </body>
        </html>
    );
}
