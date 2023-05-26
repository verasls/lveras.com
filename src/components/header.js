import { IonIcon } from "@ionic/react";
import {
  contrastOutline,
  globeOutline,
  logoGithub,
  logoLinkedin,
  logoTwitter,
} from "ionicons/icons";

import "./header.css";

export function Header() {
  return (
    <header className="header">
      <a href="index.html#hero">
        <img className="logo" src="images/logo.png" alt="Lucas Veras logo" />
      </a>

      <ul className="site-options">
        <li>
          <IonIcon className="options-icon" icon={contrastOutline} />
        </li>
        <li>
          <IonIcon className="options-icon" icon={globeOutline} />
        </li>
      </ul>

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="index.html#about">
              About
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="index.html#tools">
              Tools
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="index.html#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="index.html#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <ul className="social-media">
        <li>
          <a className="social-media-link" href="index.html">
            <IonIcon className="social-media-icon" icon={logoGithub} />
          </a>
        </li>
        <li>
          <a className="social-media-link" href="index.html">
            <IonIcon className="social-media-icon" icon={logoLinkedin} />
          </a>
        </li>
        <li>
          <a className="social-media-link" href="index.html">
            <IonIcon className="social-media-icon" icon={logoTwitter} />
          </a>
        </li>
      </ul>

      <p className="copyright">
        Copyright &copy; <span className="year">0000</span> by Lucas Veras
      </p>
    </header>
  );
}
