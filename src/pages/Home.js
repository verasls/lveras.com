import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Tools } from "../components/Tools";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

import "../index.css";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Tools />
      <Projects />
      <Contact />
    </>
  );
}
