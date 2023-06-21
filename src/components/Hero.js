import "./Hero.css";

export function Hero({ isHeaderSticky }) {
  return (
    <section
      className={`section-hero${isHeaderSticky ? " sticky" : ""}`}
      id="hero"
    >
      <div className="hero-logo">
        <div className="hero-logo__text">
          <span className="hero-logo__letter">l</span>
          <span className="hero-logo__letter">u</span>
          <span className="hero-logo__letter">c</span>
          <span className="hero-logo__letter">a</span>
          <span className="hero-logo__letter">s</span>
          <br />
          <span className="hero-logo__letter">v</span>
          <span className="hero-logo__letter">e</span>
          <span className="hero-logo__letter">r</span>
          <span className="hero-logo__letter">a</span>
          <span className="hero-logo__letter">s</span>
        </div>
        <div className="hero-logo__boxes">
          <div className="box box--col1 box--row1"></div>
          <div className="box box--col1 box--row2"></div>
          <div className="box box--col1 box--row3"></div>
          <div className="box box--col1 box--row4"></div>
          <div className="box box--col2 box--row2"></div>
          <div className="box box--col2 box--row3"></div>
          <div className="box box--col2 box--row4"></div>
          <div className="box box--col3 box--row3"></div>
          <div className="box box--col3 box--row4"></div>
          <div className="box box--col4 box--row4"></div>
        </div>
      </div>
    </section>
  );
}
