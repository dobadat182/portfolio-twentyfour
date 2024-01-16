import "./globals.scss";
import "@splidejs/react-splide/css/core";

import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/header/Header";
import { Open_Sans, Cardo, Inter } from "next/font/google";

// Fonts
const openSans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-opensans",
});

const cardo = Cardo({
    weight: ["400", "700"],
    subset: ["latin"],
    display: "swap",
    variable: "--font-cardo",
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
            className={`${openSans.variable} ${cardo.variable} font-sans`}
        >
            <body>
                <Header />
                {children}

                <SpeedInsights />
            </body>
        </html>
    );
}
