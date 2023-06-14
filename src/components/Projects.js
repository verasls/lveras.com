import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { IonIcon } from "@ionic/react";
import { addOutline, globeOutline, logoGithub } from "ionicons/icons";

import "./Projects.css";

export function Projects() {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <section className="section-projects" id="projects">
      <span className="subheading">Projects</span>
      <h2>Some of the work I've been doing</h2>

      <ProjectsList
        data={projectsData}
        showDescription={showDescription}
        setShowDescription={setShowDescription}
      />

      <p className="text">
        Some of my data science work is in the form of academic publications. If
        you are interested in my scientific papers, check them out{" "}
        <HashLink className="link" to="/publications#publications">
          here
        </HashLink>
        .
      </p>
    </section>
  );
}

function ProjectsList({ data, showDescription, setShowDescription }) {
  return (
    <ul className="projects">
      {data.map((data) => (
        <ProjectItem
          key={data.id}
          data={data}
          showDescription={showDescription}
          setShowDescription={setShowDescription}
        />
      ))}
    </ul>
  );
}

function ProjectItem({ data, showDescription, setShowDescription }) {
  return (
    <li
      className={`project__item project__item--background${
        showDescription ? " active" : ""
      }`}
    >
      <ProjectDisplay data={data} showDescription={showDescription} />
      <ProjectDescription data={data} showDescription={showDescription} />

      <button
        className={`project__btn${showDescription ? " rotated" : ""}`}
        onClick={() => {
          setShowDescription(!showDescription);
        }}
      >
        <IonIcon
          className={`project__icon--more${showDescription ? " rotated" : ""}`}
          icon={addOutline}
        />
      </button>
    </li>
  );
}

function ProjectDisplay({ data, showDescription }) {
  return (
    <div className={`project__display${showDescription ? " active" : ""}`}>
      {data.display}
    </div>
  );
}

function ProjectDescription({ data, showDescription }) {
  return (
    <div className={`project__description${showDescription ? " active" : ""}`}>
      <p className="project__txt">
        <span className="monospaced semi-bold">{data.title}</span>:{" "}
        {data.description}
      </p>

      <ul className="project__tags">
        {data.tags.map((tags) => (
          <ProjectTags key={tags.id} data={tags} />
        ))}
      </ul>

      <ul className="project__links">
        {data.links.map((links) => (
          <ProjectLinks key={links.id} data={links} />
        ))}
      </ul>
    </div>
  );
}

function ProjectTags({ data }) {
  return (
    <li>
      <p className="project__tag-item">{data.tagName}</p>
    </li>
  );
}

function ProjectLinks({ data }) {
  return <li>{data.link}</li>;
}

const projectsData = [
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
          <a className="project__link-item" href="https://lveras.com/lvmisc/">
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
      "An R package with functions to read, process and analyse raw accelerometer data related to mechanical loading variables",
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
          <a className="project__link-item" href="https://lveras.com/impactr/">
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
          >
            <IonIcon icon={logoGithub} />
          </a>
        ),
      },
    ],
  },
  {
    id: 3,
    title: "test",
    description: "Stay tuned for more of my work!",
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
