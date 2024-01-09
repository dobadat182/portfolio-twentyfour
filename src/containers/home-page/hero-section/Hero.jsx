"use client";

import Image from "next/image";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import avatar from "../../../../public/images/me.jpg";
import shapeWawes from "../../../../public/icons/shape-wawes.svg";
import shapeCircle from "../../../../public/icons/shape-circle.svg";

export default function Hero() {
    return (
        <section className="hero">
            <div className="container grid pt-10 md:pt-8 home__container gap-y-16">
                <div className="grid items-center mx-auto gap-y-8 md:gap-y-14 home__data md:order-2">
                    <div className="flex flex-col order-3 text-2xl home__title md:order-none md:gap-y-4">
                        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Hello I&apos;m Brian</p>
                        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Frontend Developer</p>
                        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Based in Ho Chi Minh</p>
                    </div>

                    <div className="grid order-1 home__blob md:-order-none">
                        <div className="home__perfil">
                            <Image
                                src={avatar}
                                loading="eager"
                                priority={true}
                                alt="home perfil"
                            />
                        </div>

                        <Image
                            src={shapeWawes}
                            alt=""
                            loading="eager"
                            priority={true}
                            className="home__shape-wawes"
                        />
                        <Image
                            src={shapeCircle}
                            alt=""
                            loading="eager"
                            priority={true}
                            className="home__shape-circle"
                        />
                    </div>

                    <div className="order-2 home__social md:-order-none">
                        <a
                            href="https://www.linkedin.com/in/badat182/"
                            target="_blank"
                            className="home__social-link"
                        >
                            <i>
                                <FaLinkedin />
                            </i>
                        </a>
                        <a
                            href="https://github.com/dobadat182"
                            target="_blank"
                            className="home__social-link"
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
                        <h3 className="home__info-title"></h3>
                        <ul className="home__info-description">
                            <li>Website</li>
                            <li>Animation</li>
                            <li>Wordpress</li>
                            <li>React/Next</li>
                        </ul>
                    </div>
                </div>

                <div className="grid-rows-3 mt-60 home__info gap-y-16 md:order-3 !hidden md:!grid">
                    <div>
                        <h3 className="home__info-title">
                            YEARS OF EXPERIENCE
                        </h3>
                        <div className="home__info-number">
                            <span>02</span>+
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
