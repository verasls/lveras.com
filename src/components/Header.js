import { useEffect } from "react";

import { NavHashLink } from "react-router-hash-link";
import { IonIcon } from "@ionic/react";
import { contrastOutline } from "ionicons/icons";

import "./Header.css";

export function Header({ isHeaderSticky, isOnPublicationsPage }) {
  return (
    <header
      className={`header${isHeaderSticky ? " sticky" : ""}${
        isOnPublicationsPage ? " on-publications" : ""
      }`}
    >
      <LogoLink />
      <MainNav />
      <SiteOptions />
    </header>
  );
}

function LogoLink() {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const logoLinkElement = document.querySelector(".header__logo");
    logoLinkElement.addEventListener("click", scrollToTop);

    return () => {
      logoLinkElement.removeEventListener("click", scrollToTop);
    };
  }, []);

  return (
    <NavHashLink to="" smooth={true} duration={500}>
      <img
        className="header__logo"
        src="images/logo.png"
        alt="Lucas Veras logo"
      />
    </NavHashLink>
  );
}

function MainNav() {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li>
          <NavHashLink
            className="main-nav__link"
            to="/#about"
            smooth={true}
            duration={500}
          >
            About
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            className="main-nav__link"
            to="/#tools"
            smooth={true}
            duration={500}
          >
            Tools
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            className="main-nav__link"
            to="/#projects"
            smooth={true}
            duration={500}
          >
            Projects
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            className="main-nav__link"
            to="/#contact"
            smooth={true}
            duration={500}
          >
            Contact
          </NavHashLink>
        </li>
      </ul>
    </nav>
  );
}

function SiteOptions() {
  return (
    <ul className="site-options">
      <li>
        <span className="site-options__icon site-options__icon--lang">EN</span>
      </li>
      <li>
        <IonIcon className="site-options__icon" icon={contrastOutline} />
      </li>
    </ul>
  );
}
