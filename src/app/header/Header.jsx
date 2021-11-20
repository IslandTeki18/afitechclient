import React from "react";
import "./Header.scss";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4">
            <div className="container-fluid">
                <a className="navbar-brand text-uppercase" href="/">
                    AFI Tech
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                aria-current="page"
                                href="/"
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/projects">
                                Projects
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="btn-group">
                                <button
                                    type="button"
                                    className="btn btn-link nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Services
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/services"
                                        >
                                            All Services
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/services/one-page"
                                        >
                                            1 Page Web Applications
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/services/full-stack"
                                        >
                                            Full Stack Web Applications
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/services/mobile-app"
                                        >
                                            Mobile Applications
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <div className="btn-group">
                                <button
                                    type="button"
                                    className="btn btn-link nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Other
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/blogs"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/about"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/contact"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
