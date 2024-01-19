export default function Contact() {
    return (
        <section className="bg-white rounded-xl mb-10 min-w-[90%] mx-5 md:min-w-[80%]">
            <div className="container px-6 py-12 mx-auto">
                <div className="text-center ">
                    <h2 className="heading--title">Contact</h2>

                    <p className="mt-1 font-mono text-xs italic md:text-sm text-slate-400">
                        I&apos;d love to hear from you
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 mt-10 md:gap-12 lg:grid-cols-2 sm:grid-cols-2 ">
                    <div className="p-4 rounded-lg bg-blue-50 md:p-6">
                        <span className="inline-block p-3 rounded-lg text-sky-500 bg-blue-100/80">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                            </svg>
                        </span>

                        <h2 className="mt-4 font-mono text-base font-semibold text-gray-700 uppercase md:text-lg">
                            Email
                        </h2>
                        <p className="text-xs italic text-gray-300 md:text-sm">
                            Speak to our friendly team.
                        </p>
                        <a
                            href="mailto: badat336@gmail.com"
                            className="block mt-2 text-sm text-gray-500"
                        >
                            badat336@gmail.com
                        </a>
                    </div>

                    <div className="p-4 rounded-lg bg-blue-50 md:p-6">
                        <span className="inline-block p-3 rounded-lg text-sky-500 bg-blue-100/80">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                />
                            </svg>
                        </span>

                        <h2 className="mt-4 font-mono text-base font-semibold text-gray-700 uppercase md:text-xl">
                            Chat
                        </h2>
                        <p className="text-xs italic text-gray-300 md:text-sm">
                            Monday - Friday (10:00 AM - 22:00 PM)
                        </p>
                        <ul className="mt-2 text-sm text-gray-500">
                            <li>
                                <a href="https://www.facebook.com/dobadat182">
                                    Facebook
                                </a>
                                <a
                                    className="ml-2"
                                    href="https://www.instagram.com/dbadat182/"
                                >
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
