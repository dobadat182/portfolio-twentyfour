export default function Skill() {
    return (
        <div className="container mx-auto mb-96" id="skills">
            <div className="inner">
                <div className="inner__wrapper">
                    <div className="mb-10 text-center inner__heading">
                        <h2 className="mb-5 text-3xl font-medium text-center uppercase md:text-5xl">
                            My Skills
                        </h2>
                    </div>

                    <div className="flex flex-col max-w-screen-md px-5 mx-auto skill__list gap-y-8 md:gap-y-12">
                        <div className="flex flex-col items-center mx-auto md:flex-row gap-y-3 md:gap-y-0">
                            <div className="flex">
                                <p className="text-sm font-light">
                                    Underline indicators:
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <span className="ml-2 badge__item frequently">
                                    Frequently Used
                                </span>
                                <span className="ml-2 badge__item occasionally">
                                    Occasionally
                                </span>
                            </div>
                        </div>

                        <div className="flex gap-x-4 md:gap-x-3 skill__topic">
                            <div className="basis-1/4">
                                <h4 className="py-1 text-base font-bold md:text-lg">
                                    Languages:
                                </h4>
                            </div>
                            <ul className="flex flex-wrap justify-end gap-2 text-base md:justify-start basis-3/4 columns-2 text-nowrap">
                                <li className="badge__item frequently">
                                    HTML (Hyper Text Markup Languages)
                                </li>
                                <li className="badge__item frequently">CSS</li>
                                <li className="badge__item">SASS/SCSS</li>
                                <li className="badge__item occasionally">
                                    TypeScript
                                </li>
                                <li className="badge__item occasionally">
                                    JavaScript
                                </li>
                                <li className="badge__item">PHP</li>
                            </ul>
                        </div>

                        <div className="flex gap-x-4 skill__topic">
                            <div className="basis-1/4">
                                <h4 className="py-1 text-base font-bold md:text-lg">CMS:</h4>
                            </div>
                            <ul className="flex flex-wrap justify-end gap-2 text-base md:justify-start basis-3/4 columns-2 text-nowrap">
                                <li className="badge__item frequently">
                                    Wordpress
                                </li>
                                <li className="badge__item frequently">
                                    CraftCMS
                                </li>
                                <li className="badge__item frequently">
                                    Stripe
                                </li>
                                <li className="badge__item frequently">Sapo</li>
                                <li className="badge__item">Wix</li>
                            </ul>
                        </div>

                        <div className="flex gap-x-3 skill__topic">
                            <div className="basis-1/4">
                                <h4 className="py-1 text-base font-bold md:text-lg">
                                    Frameworks:
                                </h4>
                            </div>
                            <ul className="flex flex-wrap justify-end gap-2 text-base md:justify-start basis-3/4 columns-2 text-nowrap">
                                <li className="badge__item frequently">
                                    React JS
                                </li>
                                <li className="badge__item frequently">
                                    Next JS
                                </li>
                                <li className="badge__item frequently">
                                    Nuxt JS
                                </li>
                                <li className="badge__item frequently">
                                    Bootstrap
                                </li>
                                <li className="badge__item">Tailwind</li>
                            </ul>
                        </div>

                        <div className="flex gap-x-3 skill__topic">
                            <div className="basis-1/4">
                                <h4 className="py-1 text-base font-bold md:text-lg">
                                    Tools & Softwares:
                                </h4>
                            </div>
                            <ul className="flex flex-wrap justify-end gap-2 text-base md:justify-start basis-3/4 columns-2 text-nowrap">
                                <li className="badge__item frequently">Git</li>
                                <li className="badge__item">Docker</li>
                                <li className="badge__item frequently">
                                    Bitbucket
                                </li>
                                <li className="badge__item frequently">
                                    Vercel
                                </li>
                                <li className="badge__item frequently">
                                    Figma
                                </li>
                                <li className="badge__item">Ubuntu</li>
                            </ul>
                        </div>

                        <div className="flex gap-x-3 skill__topic">
                            <div className="basis-1/4">
                                <h4 className="py-1 text-base font-bold md:text-lg">
                                    Libraries:
                                </h4>
                            </div>
                            <ul className="flex flex-wrap justify-end gap-2 text-base md:justify-start basis-3/4 columns-2 text-nowrap">
                                <li className="badge__item">Algolia</li>
                                <li className="badge__item">Splide JS</li>
                                <li className="badge__item frequently">
                                    GreenSock
                                </li>
                                <li className="badge__item frequently">
                                    Framer Motion
                                </li>
                                <li className="badge__item frequently">
                                    Barbar JS
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
