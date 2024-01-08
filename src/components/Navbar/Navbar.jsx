"use client";

import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;

        if (currentScrollPos > prevScrollPos) {
            setVisible(false);
        } else {
            setVisible(true);
        }

        setPrevScrollPos(currentScrollPos);
    };

    const handleNavbarTop = () => {
        const nav = document.querySelector(".nav"),
        navItems = document.querySelector(".nav-items"),
        navHome = document.querySelector(".nav-home"),
        navTop = document.querySelector(".nav-top"),
        icon = document.querySelector(".hamburger i");

        let isOpen = false;

        gsap.set(nav, { height: "60px" });
        gsap.set(navTop, { opacity: 0, scale: 0.9, display: "none" });
        gsap.set(navItems, { opacity: 1, display: "flex" });
        gsap.set(navHome, { flexGrow: 0 });

        
    }

    useEffect(() => {
    
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <header className={`navbar ${visible ? "translate-y-28" : "translate-x-0"} `}>
            <div className="inner">
                <div className="nav-float__inner">
                    {/* Back to top button */}

                    <div className="nav-float__wrapper">
                        {/* <div class="nav-top">
                            <h4>This is top of menu float</h4>
                        </div> */}

                        <div className="nav-float__bottom">
                            <div className="menu-float__layout menu-float__layout--primary">
                                <div className="menu-float__content">
                                    <a href="/" className="menu-float__logo">
                                        w.
                                    </a>
                                    <div className="menu-float__breadcrumb">
                                        <strong className="menu-float__title">
                                            home
                                        </strong>
                                    </div>
                                    <div
                                        className="menu-float__hamburger"
                                        id="toggle"
                                    >
                                        <RxHamburgerMenu />
                                    </div>
                                </div>
                            </div>

                            <div className="menu-float__layout menu-float__layout--secondary">
                                <div className="menu-float__content">
                                    <strong className="menu-float__title-section">
                                        Home
                                    </strong>

                                    <ul className="menu-float__nav">
                                        <li>
                                            <a
                                                href="#"
                                                className="menu-float__item is-active"
                                            >
                                                Intro
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="menu-float__item"
                                            >
                                                Skills
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="menu-float__item"
                                            >
                                                Timeline
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="menu-float__item"
                                            >
                                                Projects
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
