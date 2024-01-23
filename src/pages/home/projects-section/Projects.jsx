"use client";

import CardProject from "@/components/card/card-project/CardProject";

import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { projects } from "@/app/api/data";

export default function Projects() {
    const options = {
        type: "loop",
        focus: "center",
        padding: "20%",
        arrows: true,
        rewind: true,
        pagination: false,
        drag: "free",
        snap: true,
        gap: "2rem",
        fixedWidth: "26rem",
        autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: true,
            rewind: false,
            speed: 1.5,
        },

        mediaQuery: "max",
        breakpoints: {
            768: {
                focus: "1",
                fixedWidth: "90%",
                autoScroll: false,
                gap: 20,
                padding: { right: "20%" },
            },
        },
    };

    return (
        <section id="projects" className="w-full mb-14 md:mb-32">
            <div className="inner">
                <Splide
                    tag="section"
                    hasTrack={false}
                    options={options}
                    extensions={{ AutoScroll }}
                >
                    <div className="flex justify-between px-5 my-5 mb-10 splide__arrows md:justify-center md:my-10">
                        <button className="splide__arrow splide__arrow--prev md:hidden">
                            <FaChevronLeft />
                        </button>

                        <h2 id="carousel-heading" className="heading--title">
                            Projects
                        </h2>

                        <button className="splide__arrow splide__arrow--next md:hidden">
                            <FaChevronRight />
                        </button>
                    </div>

                    <SplideTrack className="!pl-5 !pr-5 sm:!pr-0 md:!pl-0 md:ml-0">
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
