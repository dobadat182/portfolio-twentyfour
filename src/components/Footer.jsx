import Link from "next/link";

const Footer = () => {
    return (
        <footer className="mt-24 bg-white rounded-lg shadow">
            <div className="container p-5 mx-auto md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a
                        href="https://flowbite.com/"
                        className="flex items-center mb-4 space-x-3 sm:mb-0 rtl:space-x-reverse"
                    >
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">
                            Brian
                        </span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                        <li>
                            <Link
                                className="hover:underline me-4 md:me-6"
                                href="#hero"
                            >
                                Intro
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:underline me-4 md:me-6"
                                href="#projects"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:underline me-4 md:me-6"
                                href="#skills"
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:underline me-4 md:me-6"
                                href="#contact"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:underline me-4 md:me-6"
                                href="/blog"
                            >
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center">
                    © 2024{" "}
                    <a
                        href="https://www.linkedin.com/in/badat182/"
                        className="hover:underline"
                    >
                        BrianDo™
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
