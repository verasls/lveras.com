import { IonIcon } from "@ionic/react";
import {
  barbellOutline,
  barChartOutline,
  codeSlashOutline,
} from "ionicons/icons";
import { NavHashLink } from "react-router-hash-link";

import "./About.css";

export function About({ scrollWithOffset }) {
  const aboutData = [
    {
      title: "Sport scientist",
      icon: barbellOutline,
      text: "PhD researcher interested in how to measure physical activity using wearable devices data",
    },
    {
      title: "Data analyst",
      icon: barChartOutline,
      text: "Specialist in statistical learning, data visualization, time-series and biological signals",
    },
    {
      title: "Developer",
      icon: codeSlashOutline,
      text: "Front-end mobile and web developer, creating digital solutions to everyday problems",
    },
  ];

  return (
    <section className="section-about" id="about">
      <div className="about">
        <span className="subheading">About me</span>
        <h2>Hello there!</h2>
        <p className="text">
          These are my main areas of work. Feel free to{" "}
          <NavHashLink
            className="anchor"
            to="/#contact"
            smooth={true}
            duration={500}
            scroll={(el) => scrollWithOffset(el)}
          >
            reach out
          </NavHashLink>{" "}
          if you have any questions or if you need my help.
        </p>

        <AboutList data={aboutData} />
      </div>
    </section>
  );
}

function AboutList({ data }) {
  return (
    <ul className="about__list">
      {data.map((data) => (
        <AboutItem key={data.title} data={data} />
      ))}
    </ul>
  );
}

function AboutItem({ data }) {
  return (
    <li className="about__item">
      <div className="about__header">
        <IonIcon className="about__icon" icon={data.icon} />
        <span className="about__title">{data.title}</span>
      </div>
      <span className="about__txt">{data.text}</span>
    </li>
  );
}
