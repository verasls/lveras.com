import { NavHashLink } from "react-router-hash-link";
import { IonIcon } from "@ionic/react";
import {
  contrastOutline,
  globeOutline,
  logoGithub,
  logoLinkedin,
  logoTwitter,
} from "ionicons/icons";

import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <NavHashLink to="/#hero">
        <img
          className="header__logo"
          src="images/logo.png"
          alt="Lucas Veras logo"
        />
      </NavHashLink>

      <SiteOptions />
      <MainNav />
      <SocialMedia />

      <p className="copyright">
        Copyright &copy; {new Date().getFullYear()} by Lucas Veras
      </p>
    </header>
  );
}

function SiteOptions() {
  return (
    <ul className="site-options">
      <li>
        <IonIcon className="site-options__icon" icon={contrastOutline} />
      </li>
      <li>
        <IonIcon className="site-options__icon" icon={globeOutline} />
      </li>
    </ul>
  );
}

function MainNav() {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li>
          <NavHashLink className="main-nav__link" to="/#about">
            About
          </NavHashLink>
        </li>
        <li>
          <NavHashLink className="main-nav__link" to="/#tools">
            Tools
          </NavHashLink>
        </li>
        <li>
          <NavHashLink className="main-nav__link" to="/#projects">
            Projects
          </NavHashLink>
        </li>
        <li>
          <NavHashLink className="main-nav__link" to="/#contact">
            Contact
          </NavHashLink>
        </li>
      </ul>
    </nav>
  );
}

function SocialMedia() {
  return (
    <ul className="social-media">
      <li>
        <a className="social-media__link" href="index.html">
          <IonIcon className="social-media__icon" icon={logoGithub} />
        </a>
      </li>
      <li>
        <a className="social-media__link" href="index.html">
          <IonIcon className="social-media__icon" icon={logoLinkedin} />
        </a>
      </li>
      <li>
        <a className="social-media__link" href="index.html">
          <IonIcon className="social-media__icon" icon={logoTwitter} />
        </a>
      </li>
    </ul>
  );
}
