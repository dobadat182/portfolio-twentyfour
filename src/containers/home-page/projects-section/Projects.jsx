"use client";

import CardProject from "@/components/card/card-project/CardProject";

import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

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
            name: "It's take a village",
            desc: "",
            url: "https://yourvillage.com.au/",
            skills: ["Wordpress", "Javascript", "Ajax", "Greensock"],
        },
        {
            id: 5,
            image: "",
            name: "Integral Lighting",
            desc: "",
            url: "https://www.integrallighting.com.au",
            skills: ["Wordpress", "Javascript", "Ajax", "Greensock"],
        },
        {
            id: 6,
            image: "",
            name: "Conecta App",
            desc: "",
            url: "https://app.conecta.com.au",
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
        {
            id: 9,
            image: "",
            name: "Mintlabo",
            desc: "",
            url: "https://mintlabo.com/",
            skills: ["Wordpress", "Elementer"],
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
                fixedWidth: "90%",
                gap: 20,
                autoScroll: false,
                padding: { right: "20" },
            },
        },
    };

    useEffect(() => {});
    return (
        <section id="projects" className="w-full mb-14 md:mb-32">
            <div className="inner">
                <Splide
                    tag="section"
                    hasTrack={false}
                    options={options}
                    extensions={{ AutoScroll }}
                >
                    <div className="flex justify-between px-5 my-5 splide__arrows md:justify-center md:my-10">
                        <button className="splide__arrow splide__arrow--prev md:hidden">
                            <FaChevronLeft />
                        </button>

                        <h2
                            id="carousel-heading"
                            className="text-3xl font-medium text-center uppercase md:text-5xl"
                        >
                            Projects
                        </h2>

                        <button className="splide__arrow splide__arrow--next md:hidden">
                            <FaChevronRight />
                        </button>
                    </div>

                    <SplideTrack>
                        {projects.map((element, index) => (
                            <SplideSlide key={index}>
                                <CardProject
                                    name={element.name}
                                    url={element.url}
                                />
                            </SplideSlide>
                        ))}
                    </SplideTrack>
                </Splide>
            </div>
        </section>
    );
}
