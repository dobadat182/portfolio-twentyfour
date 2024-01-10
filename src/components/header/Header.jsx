"use client";

import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;

        if (currentScrollPos > prevScrollPos ) {
            setVisible(false);
        } else {
            setVisible(true);
        }

        setPrevScrollPos(currentScrollPos);
    };


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <header
            className={`navbar delay-250 ${
                visible ? "translate-x-0" : "translate-y-28"
            } `}
        >
            <div className="inner">
                <div className="nav-float__inner">
                    {/* Back to top button */}

                    <div className="nav-float__wrapper">
                        <div className="nav-float__top">
                            <h4>This is top of menu float</h4>
                        </div>

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
                                        <i>
                                            <RxHamburgerMenu />
                                        </i>
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
