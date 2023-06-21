import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { contrastOutline } from "ionicons/icons";

import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <Logo />
      <MainNav />
      <SiteOptions />
    </header>
  );
}

function Logo() {
  return (
    <Link to="/" smooth={true} duration={500}>
      <img
        className="header__logo"
        src="images/logo.png"
        alt="Lucas Veras logo"
      />
    </Link>
  );
}

function MainNav() {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li>
          <Link
            className="main-nav__link"
            to="/about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="main-nav__link"
            to="/tools"
            smooth={true}
            duration={500}
          >
            Tools
          </Link>
        </li>
        <li>
          <Link
            className="main-nav__link"
            to="/projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="main-nav__link"
            to="/contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
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
