import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Tools } from "./components/Tools";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

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
