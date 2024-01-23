import Link from "next/link";

const Footer = () => {
    return (
        <footer class="bg-white rounded-lg shadow">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a
                        href="https://flowbite.com/"
                        class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                    >
                        <span class="self-center text-2xl font-semibold whitespace-nowrap">
                            Brian
                        </span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                        <li>
                            <Link
                                class="hover:underline me-4 md:me-6"
                                href="#hero"
                            >
                                Intro
                            </Link>
                        </li>
                        <li>
                            <Link
                                class="hover:underline me-4 md:me-6"
                                href="#projects"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                class="hover:underline me-4 md:me-6"
                                href="#skills"
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                class="hover:underline me-4 md:me-6"
                                href="#contact"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center">
                    © 2024{" "}
                    <a
                        href="https://www.linkedin.com/in/badat182/"
                        class="hover:underline"
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
