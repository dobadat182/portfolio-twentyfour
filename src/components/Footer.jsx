"use client";

export default function Footer() {
    return (
        <footer class="bg-white mt-24">
            <div class="min-w-[80%] mx-auto max-w-screen-xl p-4 justify-center flex flex-col md:flex-row md:items-center md:justify-between">
                <span class="text-sm text-gray-500 text-center">
                    © 2024{" "}
                    <a href="https://flowbite.com/" class="hover:underline">
                        Brian Do™
                    </a>
                    . All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center justify-center md:justify-normal mt-3 text-sm font-medium text-gray-500 sm:mt-0">
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">
                            Introduce
                        </a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">
                            Skill
                        </a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
