import { useEffect, useCallback } from "react";

import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Tools } from "../components/Tools";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

import "../styles/general.css";

export function Home({ isHeaderSticky, setHeaderSticky }) {
  const handleScroll = useCallback(() => {
    const heroSection = document.getElementById("hero");
    const scrollPosition = window.pageYOffset;
    setHeaderSticky(scrollPosition > heroSection.offsetHeight);
  }, [setHeaderSticky]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <Hero isHeaderSticky={isHeaderSticky} />
      <About />
      <Tools />
      <Projects />
      <Contact />
    </>
  );
}
