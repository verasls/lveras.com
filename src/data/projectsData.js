import { IonIcon } from "@ionic/react";
import { globeOutline, logoGithub } from "ionicons/icons";

export const projectsData = [
  {
    id: 1,
    title: "lvmisc",
    description:
      "An R package with miscellaneous functions for data analysis and visualization.",
    display: (
      <img
        className="project__img"
        src="images/projects/lvmisc.png"
        alt="lvmisc R package logo"
      />
    ),
    tags: [{ id: 1, tagName: "R" }],
    links: [
      {
        id: 1,
        link: (
          <a
            className="project__link-item"
            href="https://lveras.com/lvmisc/"
            aria-label="lvmisc homepage"
          >
            <IonIcon icon={globeOutline} />
          </a>
        ),
      },
      {
        id: 2,
        link: (
          <a
            className="project__link-item"
            href="https://github.com/verasls/lvmisc/"
            aria-label="lvmisc github repository"
          >
            <IonIcon icon={logoGithub} />
          </a>
        ),
      },
    ],
  },
  {
    id: 2,
    title: "impactr",
    description:
      "An R package with functions to read, process and analyse raw accelerometer data related to mechanical loading variables.",
    display: (
      <img
        className="project__img"
        src="images/projects/impactr.png"
        alt="impactr R package logo"
      />
    ),
    tags: [{ id: 1, tagName: "R" }],
    links: [
      {
        id: 1,
        link: (
          <a
            className="project__link-item"
            href="https://lveras.com/impactr/"
            aria-label="impactr homepage"
          >
            <IonIcon icon={globeOutline} />
          </a>
        ),
      },
      {
        id: 2,
        link: (
          <a
            className="project__link-item"
            href="https://github.com/verasls/impactr/"
            aria-label="impactr github repository"
          >
            <IonIcon icon={logoGithub} />
          </a>
        ),
      },
    ],
  },
  {
    id: 3,
    title: "Stay tuned",
    description: "There is more to come!",
    display: (
      <span className="monospaced new-project__txt">
        &lt;div <br />
        &nbsp;&nbsp;className="new-project" <br />
        &gt; <br />
        &nbsp;&nbsp;Work in progress... <br />
        &lt;&#47;div&gt; <br />
      </span>
    ),
    tags: [],
    links: [],
  },
];
