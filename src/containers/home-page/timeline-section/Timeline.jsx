"use client";

import Image from "next/image";
import profilePic from "../../../../public/images/profile-picture.jpeg";

export default function Timeline() {
    return (
        <div className="mb-14 md:mb-32 timeline">
            <div className="container">
                <h2
                    id="carousel-heading"
                    className="text-3xl font-medium text-center uppercase md:text-5xl"
                >
                    Timeline
                </h2>
                <ul className="max-w-screen-lg p-4 mx-auto lg:p-8">
                    <li>
                        <article>
                            <div className="flex flex-col overflow-hidden md:flex-row">
                                <div className="mb-4 md:mb-0 md:p-3 columns-1 md:basis-1/5">
                                    <Image
                                        className="rounded"
                                        src={profilePic}
                                        width={150}
                                        height={150}
                                        alt="company logo"
                                    />
                                </div>  
                                <div className="flex flex-col md:p-3 columns-2 md:basis-4/5">
                                    <div className="company__info md:ms-6">
                                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                                            FG Organization
                                        </h3>
                                        <address className="block mb-2 text-sm font-normal leading-none text-gray-400">
                                            District 3, Ho Chi Minh City, Viet
                                            Nam
                                        </address>
                                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                                            Aug 2023 - Present · 6 mos
                                        </time>
                                    </div>
                                    <div className="pl-4 md:px-7 company__experience">
                                        <ol className="relative border-gray-200 border-s">
                                            <li className="mb-10 ms-6">
                                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
                                                    <svg
                                                        className="w-2.5 h-2.5 text-blue-800"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                    </svg>
                                                </span>
                                                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                                                    Frontend Developer
                                                </h3>
                                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                                                    Aug 2021 - Sep 2021 · 2 mos
                                                </time>
                                                <ul className="pl-2 space-y-1 text-gray-500 list-disc list-outside md:pl-3">
                                                    <li className="text-sm font-normal text-gray-500 md:text-base">
                                                        Develop and maintain
                                                        user interface with
                                                        cross-browser
                                                        compatibility, based on
                                                        cms platform
                                                    </li>
                                                    <li className="text-sm font-normal text-gray-500 md:text-base">
                                                        Programming and giving
                                                        suggestions on optimal
                                                        functions for the
                                                        website
                                                    </li>
                                                    <li className="text-sm font-normal text-gray-500 md:text-base">
                                                        Cooperate with other
                                                        departments to improve
                                                        product's qualities.
                                                    </li>
                                                    <li className="text-sm font-normal text-gray-500 md:text-base">
                                                        Optimize SEO techniques
                                                    </li>
                                                </ul>

                                                <div className="mt-3 text-sm bg-red-100 md:text-base">
                                                    <b>Skills:</b>{" "}
                                                    <span>
                                                        Wix · Sapo · WordPress
                                                    </span>
                                                </div>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article>
                            <div className="flex flex-col overflow-hidden md:flex-row">
                                <div className="md:p-3 columns-1 md:basis-1/5">
                                    <Image
                                        className="rounded"
                                        src={profilePic}
                                        width={150}
                                        height={150}
                                        alt="company logo"
                                    />
                                </div>
                                <div className="flex flex-col md:p-3 columns-2 md:basis-4/5 ">
                                    <div className="company__info md:ms-6">
                                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                                            Namtech Solutions Pte Ltd.
                                        </h3>
                                        <address className="block mb-2 text-sm font-normal leading-none text-gray-400">
                                            Tan Binh, Ho Chi Minh City, Viet Nam
                                            · Hyrid
                                        </address>
                                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                                            Full-time · 1 yr 11 mos
                                        </time>
                                    </div>
                                    <div className="pl-4 md:px-7 company__experience">
                                        <ol className="relative border-gray-200 border-s">
                                            <li className="mb-10 ms-6">
                                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
                                                    <svg
                                                        className="w-2.5 h-2.5 text-blue-800"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                    </svg>
                                                </span>
                                                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                                                    Wordpress Developer
                                                </h3>
                                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                                                    Aug 2022 - Oct 2022 · 3 mos
                                                </time>
                                                <ul className="space-y-1 text-gray-500 list-disc list-outside md:pl-3">
                                                    <li className="text-sm font-normal text-gray-500 md:text-base">
                                                        Setup projects from
                                                        scratch
                                                    </li>
                                                    <li className="text-sm font-normal text-gray-500 md:text-base">
                                                        Collaborate with the
                                                        development team to
                                                        create websites from
                                                        scratch and fix bugs in
                                                        old projects
                                                    </li>
                                                    <li className="text-sm font-normal text-gray-500 md:text-base">
                                                        Support new members
                                                    </li>
                                                    <li className="text-sm font-normal text-gray-500 md:text-base">
                                                        Convert figma website
                                                        layouts to code for
                                                        desktop and mobile users
                                                        with cross-browser
                                                        compatibility.
                                                    </li>
                                                    <li className="text-sm font-normal text-gray-500 md:text-base">
                                                        Hook functions Wordpress
                                                    </li>
                                                </ul>

                                                <p className="mt-3">
                                                    <b>Skills:</b>{" "}
                                                    <span>
                                                        Craft CMS · Perfect
                                                        Pixel · WooCommerce ·
                                                        WPML · AJAX · jQuery ·
                                                        SCSS · Cascading Style
                                                        Sheets (CSS) · HTML ·
                                                        PHP · WordPress ·
                                                        JavaScript
                                                    </span>
                                                </p>
                                            </li>

                                            <li className="mb-10 ms-6">
                                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
                                                    <svg
                                                        className="w-2.5 h-2.5 text-blue-800"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                    </svg>
                                                </span>
                                                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                                                    Nuxt JS
                                                </h3>
                                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                                                    Aug 2022 - Oct 2022 · 3 mos
                                                </time>
                                                <ul className="space-y-1 text-gray-500 list-disc list-outside md:pl-3">
                                                    <li className="text-sm font-normal text-gray-500 md:text-base">
                                                        Split large components
                                                        to small components
                                                    </li>
                                                    <li className="text-sm font-normal text-gray-500 md:text-base">
                                                        CRUD
                                                    </li>
                                                    <li className="text-sm font-normal text-gray-500 md:text-base">
                                                        Transform interface from
                                                        figma to code for
                                                        desktop & mobile users
                                                    </li>
                                                    <li className="text-sm font-normal text-gray-500 md:text-base">
                                                        Learn to write concise
                                                        and logical code
                                                    </li>
                                                </ul>

                                                <p className="mt-3">
                                                    <b>Skills:</b>{" "}
                                                    <span>
                                                        Perfect Pixel · Nuxt.js
                                                        · TypeScript
                                                    </span>
                                                </p>
                                            </li>

                                            <li className="mb-10 ms-6">
                                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
                                                    <svg
                                                        className="w-2.5 h-2.5 text-blue-800"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                    </svg>
                                                </span>
                                                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                                                    Internship
                                                </h3>
                                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                                                    Aug 2021 - Sep 2021 · 2 mos
                                                </time>
                                                <ul className="space-y-1 text-gray-500 list-disc list-outside md:pl-3">
                                                    <li className="text-sm font-normal text-gray-500 md:text-base">
                                                        Develop website
                                                        interface (UI/UX)
                                                    </li>
                                                    <li className="text-sm font-normal text-gray-500 md:text-base">
                                                        Transform interface from
                                                        figma to code for
                                                        desktop & mobile users
                                                    </li>
                                                    <li className="text-sm font-normal text-gray-500 md:text-base">
                                                        Learn workflow
                                                    </li>
                                                </ul>

                                                <p className="mt-3">
                                                    <b>Skills:</b>{" "}
                                                    <span>
                                                        Perfect Pixel ·
                                                        Bitbucket · SASS · HTML5
                                                        · Cascading Style Sheets
                                                        (CSS)
                                                    </span>
                                                </p>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </li>
                </ul>
            </div>
        </div>
    );
}
