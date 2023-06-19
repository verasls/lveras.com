import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { IonIcon } from "@ionic/react";
import { addOutline } from "ionicons/icons";

import { projectsData } from "../data/projectsData.js";

import "./Projects.css";

export function Projects() {
  return (
    <section className="section-projects" id="projects">
      <span className="subheading">Projects</span>
      <h2>Some of the work I've been doing</h2>

      <ProjectsList data={projectsData} />

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

function ProjectsList({ data }) {
  return (
    <ul className="projects">
      {data.map((data) => (
        <ProjectItem key={data.id} data={data} />
      ))}
    </ul>
  );
}

function ProjectItem({ data }) {
  const [showDescription, setShowDescription] = useState(false);

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
        aria-label="Show project description"
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
