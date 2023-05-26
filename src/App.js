import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Tools } from "./components/tools";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";

import "./index.css";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Tools />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
