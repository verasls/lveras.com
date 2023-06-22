import { useState, useEffect } from "react";

import { NavHashLink } from "react-router-hash-link";
import { IonIcon } from "@ionic/react";
import { closeOutline, contrastOutline, menuOutline } from "ionicons/icons";

import "./Header.css";

export function Header({ isHeaderSticky, isOnPublicationsPage }) {
  const [isMobile, setMobile] = useState(false);
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 605);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`header${isHeaderSticky ? " sticky" : ""}${
        isOnPublicationsPage ? " on-publications" : ""
      }${isMobileNavOpen ? " nav-open" : ""}`}
    >
      <LogoLink />
      <MainNav
        isMobile={isMobile}
        isMobileNavOpen={isMobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
      {!isMobile ? <SiteOptions /> : null}
      {isMobile ? (
        <MobileNav
          isMobileNavOpen={isMobileNavOpen}
          setMobileNavOpen={setMobileNavOpen}
        />
      ) : null}
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

function MainNav({ isMobile, isMobileNavOpen, setMobileNavOpen }) {
  const handleClick = () => setMobileNavOpen(!isMobileNavOpen);

  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li>
          <NavHashLink
            className="main-nav__link"
            to="/#about"
            smooth={true}
            duration={500}
            onClick={handleClick}
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
            onClick={handleClick}
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
            onClick={handleClick}
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
            onClick={handleClick}
          >
            Contact
          </NavHashLink>
        </li>
        {isMobile ? (
          <li>
            <SiteOptions />
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

function SiteOptions() {
  return (
    <div className="site-options">
      <IonIcon className="site-options__icon" icon={contrastOutline} />
    </div>
  );
}

function MobileNav({ isMobileNavOpen, setMobileNavOpen }) {
  return (
    <button
      className="mobile-nav__btn"
      onClick={() => setMobileNavOpen(!isMobileNavOpen)}
    >
      {isMobileNavOpen ? (
        <IonIcon className="mobile-nav__icon" icon={closeOutline} />
      ) : (
        <IonIcon className="mobile-nav__icon" icon={menuOutline} />
      )}
    </button>
  );
}
