import { useEffect, useCallback } from "react";
import { NavHashLink } from "react-router-hash-link";

import "../styles/general.css";
import "./NotFound.css";

export function NotFound({ setHeaderSticky, setOnNotFoundPage }) {
  const handleScroll = useCallback(() => {
    const scrollPosition = window.pageYOffset;
    setHeaderSticky(scrollPosition > 0);
  }, [setHeaderSticky]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    setOnNotFoundPage(true);
    return () => {
      setOnNotFoundPage(false);
    };
  }, [setOnNotFoundPage]);

  return (
    <section className="not-found">
      <div className="logo__text">
        <span className="logo__letter">e</span>
        <span className="logo__letter">r</span>
        <span className="logo__letter">r</span>
        <span className="logo__letter">o</span>
        <span className="logo__letter">r</span>
      </div>

      <div className="not-found__numbers">
        <Four />
        <O />
        <Four />
      </div>

      <div className="not-found__txt">
        <p>Sorry, this page doesn't exist.</p>
        <p>
          If you need some content that is no longer available, please,{" "}
          <NavHashLink
            className="link"
            to="/#contact"
            smooth={true}
            duration={500}
          >
            let me know
          </NavHashLink>
          .
        </p>
      </div>
    </section>
  );
}

function Four() {
  return (
    <div className="logo__boxes logo__boxes--404">
      <div className="box box--404 box--col1 box--row1"></div>
      <div className="box box--404 box--col1 box--row2"></div>
      <div className="box box--404 box--col1 box--row3"></div>
      <div className="box box--404 box--col2 box--row3"></div>
      <div className="box box--404 box--col3 box--row1"></div>
      <div className="box box--404 box--col3 box--row2"></div>
      <div className="box box--404 box--col3 box--row3"></div>
      <div className="box box--404 box--col3 box--row4"></div>
      <div className="box box--404 box--col3 box--row5"></div>
    </div>
  );
}

function O() {
  return (
    <div className="logo__boxes logo__boxes--404">
      <div className="box box--404 box--col1 box--row1"></div>
      <div className="box box--404 box--col1 box--row2"></div>
      <div className="box box--404 box--col1 box--row3"></div>
      <div className="box box--404 box--col1 box--row4"></div>
      <div className="box box--404 box--col1 box--row5"></div>
      <div className="box box--404 box--col2 box--row1"></div>
      <div className="box box--404 box--col2 box--row5"></div>
      <div className="box box--404 box--col3 box--row1"></div>
      <div className="box box--404 box--col3 box--row2"></div>
      <div className="box box--404 box--col3 box--row3"></div>
      <div className="box box--404 box--col3 box--row4"></div>
      <div className="box box--404 box--col3 box--row5"></div>
    </div>
  );
}
