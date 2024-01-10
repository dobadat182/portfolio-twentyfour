"use client";

import ProjectCard from "@/components/cards/Project-card/Project-card";

import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import { motion } from "framer-motion";
import { useEffect } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function Projects() {
    const projects = [
        {
            id: 1,
            image: "",
            name: "Safety Path",
            desc: "Online sales page for custom-designed signs",
            url: "https://safetypath.com",
            skills: ["Wordpress", "Javascript", "Ajax", "Greensock"],
        },
        {
            id: 2,
            image: "",
            name: "Reveal Group",
            desc: "",
            url: "https://revealgroup.com/",
            skills: ["Wordpress", "Javascript", "Ajax", "Greensock"],
        },
        {
            id: 3,
            image: "",
            name: "Lacoste Viet Nam",
            desc: "",
            url: "https://lacoste.com.vn/",
            skills: ["Wordpress", "Javascript", "Ajax", "Greensock"],
        },
        {
            id: 4,
            image: "",
            name: "It's take your village",
            desc: "",
            url: "https://yourvillage.com.au/",
            skills: ["Wordpress", "Javascript", "Ajax", "Greensock"],
        },
        {
            id: 5,
            image: "",
            name: "Integra Lighting",
            desc: "",
            url: "https://www.integrallighting.com.au",
            skills: ["Wordpress", "Javascript", "Ajax", "Greensock"],
        },
        {
            id: 6,
            image: "",
            name: "App - Conecta",
            desc: "",
            url: "https://app.conecta.com.au/login?redirect=%2F",
            skills: ["NuxtJS", "Typescript", "Axios", "Greensock"],
        },
        {
            id: 7,
            image: "",
            name: "Conecta",
            desc: "",
            url: "https://conecta.com.au/",
            skills: ["Wordpress", "Javascript", "Ajax", "Greensock"],
        },
        {
            id: 7,
            image: "",
            name: "Boss Hunting",
            desc: "",
            url: "https://www.bosshunting.com.au/",
            skills: ["Wordpress", "Javascript", "Ajax", "Greensock"],
        },
        {
            id: 8,
            image: "",
            name: "Bongiorno",
            desc: "",
            url: "https://bongiorno.com.au/",
            skills: ["Wordpress", "Javascript", "Ajax", "Greensock"],
        },
    ];
    const options = {
        type: "loop",
        focus: "center",
        padding: "20%",
        arrows: true,
        rewind: true,
        pagination: false,
        drag: "free",
        snap: true,

        autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: true,
            rewind: false,
            speed: 1.5,
        },

        gap: "2rem",
        fixedWidth: "26rem",

        breakpoints: {
            768: {
                padding: "20px",
                gap: "10px",
                fixedWidth: "100%",
                autoScroll: false,
            },
        },
    };

    useEffect(() => {});
    return (
        <section id="projects" className="w-full my-32">
            <div className="inner">
                <Splide
                    tag="section"
                    hasTrack={false}
                    options={options}
                    extensions={{ AutoScroll }}
                >
                    <h2
                        id="carousel-heading"
                        className="text-5xl font-bold text-center uppercase"
                    >
                        Projects
                    </h2>

                    <div className="flex justify-center my-5 custom-arrows">
                        <div class="splide__arrows flex gap-x-3">
                            <button class="splide__arrow splide__arrow--prev">
                                <FaChevronLeft />
                            </button>
                            <button class="splide__arrow splide__arrow--next">
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>

                    <SplideTrack>
                        {projects.map((element, index) => (
                            <SplideSlide key={index}>
                                <ProjectCard name={element.name} />
                            </SplideSlide>
                        ))}
                    </SplideTrack>
                </Splide>
            </div>
        </section>
    );
}
