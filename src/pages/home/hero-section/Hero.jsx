"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import avatar from "../../../../public/images/me.webp";
import shapeWawes from "../../../../public/icons/shape-wawes.svg";
import shapeCircle from "../../../../public/icons/shape-circle.svg";

export default function Hero() {
    return (
        <section id="hero" className="px-5 mt-10 mb-20 hero md:mb-28 lg:px-5">
            <div className="container grid home__container gap-y-16">
                <div className="grid items-center mx-auto gap-y-8 md:gap-y-14 home__data md:order-2">
                    <div className="flex flex-col order-3 font-mono text-xl md:text-3xl lg:text-4xl xl:text-5xl home__title md:order-none md:gap-y-4">
                        <p>Hello I&apos;m Brian</p>
                        <p>Frontend Developer</p>
                        <p>Based in Ho Chi Minh</p>
                    </div>

                    <div className="grid order-1 home__blob md:-order-none">
                        <div className="home__perfil">
                            <Image
                                src={avatar}
                                className="pointer-events-none"
                                loading="lazy"
                                draggable="false"
                                alt="home perfil"
                                rel="preload"
                                width={340}
                                height={540}
                            />
                        </div>

                        <Image
                            src={shapeWawes}
                            alt="shape wawes"
                            draggable="false"
                            loading="eager"
                            priority={true}
                            className="pointer-events-none home__shape-wawes"
                            width={100}
                            height={70}
                        />

                        <Image
                            src={shapeCircle}
                            alt="shape circle"
                            draggable="false"
                            loading="eager"
                            priority={true}
                            className="pointer-events-none home__shape-circle"
                            width={300}
                            height={300}
                        />
                    </div>

                    <div className="order-2 home__social md:-order-none">
                        <a
                            href="https://www.linkedin.com/in/badat182/"
                            target="_blank"
                            className="home__social-link"
                            alt="linkedin"
                        >
                            <i>
                                <FaLinkedin />
                            </i>
                        </a>
                        <a
                            href="https://github.com/dobadat182"
                            target="_blank"
                            className="home__social-link"
                            alt="github"
                        >
                            <i>
                                <FaGithub />
                            </i>
                        </a>
                    </div>
                </div>

                <div className="grid-rows-3 mt-60 home__info gap-y-16 md:order-1 !hidden md:!grid">
                    <div>
                        <h3 className="home__info-title">BIOGRAPHY</h3>
                        <p className="home__info-description">
                            Hi, I&apos;m Dat, Frontend Developer. Passionate
                            about designing beautiful web interfaces, Based in
                            Ho Chi Minh city
                        </p>
                    </div>
                    <div>
                        <h3 className="home__info-title">CONTACT</h3>
                        <a
                            href="mailto: badat336@gmail.com"
                            className="home__info-description"
                        >
                            badat336@gmail.com
                        </a>
                    </div>
                    <div>
                        <h3 className="home__info-title">SERVICES</h3>
                        <ul className="home__info-description">
                            <li>Website</li>
                            <li>Animation</li>
                            <li>Wordpress</li>
                            <li>React/Next JS</li>
                        </ul>
                    </div>
                </div>

                <div className="grid-rows-3 mt-60 home__info gap-y-16 md:order-3 !hidden md:!grid">
                    <div>
                        <h3 className="home__info-title">
                            YEARS OF EXPERIENCE
                        </h3>
                        <div className="home__info-number">
                            <span>2</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="home__info-title">COMPLETED PROJECTS</h3>
                        <div className="home__info-number">
                            <span>10</span>+
                        </div>
                    </div>
                    <div>
                        <h3 className="home__info-title">COMPANIES WORKED</h3>
                        <div className="home__info-number">
                            <span>02</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
