import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
    return (
        <header className="fixed bottom-0 left-0 bg-red-300">
            <nav className="container">
                <div className="nav__brand">
                    <a href="/" className="nav__logo">
                        Brian
                    </a>
                </div>

                <div className="nav__menu" id="nav-menu"></div>

                <div className="nav__buttons">
                    <RxHamburgerMenu />
                </div>
            </nav>
        </header>
    );
}
