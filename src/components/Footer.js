import { IonIcon } from "@ionic/react";
import { logoGithub, logoLinkedin, logoTwitter } from "ionicons/icons";

import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <SocialMedia />
      <Copyright />
    </footer>
  );
}

function SocialMedia() {
  return (
    <ul className="social-media">
      <li>
        <a
          className="social-media__link"
          href="https://github.com/verasls"
          aria-label="Lucas Veras Github profile"
        >
          <IonIcon className="social-media__icon" icon={logoGithub} />
        </a>
      </li>
      <li>
        <a
          className="social-media__link"
          href="https://www.linkedin.com/in/lucas-veras-17393115a/"
          aria-label="Lucas Veras Linkedin profile"
        >
          <IonIcon className="social-media__icon" icon={logoLinkedin} />
        </a>
      </li>
      <li>
        <a
          className="social-media__link"
          href="https://twitter.com/lucasdsveras"
          aria-label="Lucas Veras Twitter profile"
        >
          <IonIcon className="social-media__icon" icon={logoTwitter} />
        </a>
      </li>
    </ul>
  );
}

function Copyright() {
  return (
    <p className="copyright">
      Copyright &copy; {new Date().getFullYear()} by Lucas Veras
    </p>
  );
}
