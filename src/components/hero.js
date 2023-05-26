import "./hero.css";

export function Hero() {
  return (
    <section className="section-hero" id="hero">
      <div className="hero">
        <div className="hero-logo--text">
          <span className="logo-text-letter">l</span>
          <span className="logo-text-letter">u</span>
          <span className="logo-text-letter">c</span>
          <span className="logo-text-letter">a</span>
          <span className="logo-text-letter">s</span>
          <br />
          <span className="logo-text-letter">v</span>
          <span className="logo-text-letter">e</span>
          <span className="logo-text-letter">r</span>
          <span className="logo-text-letter">a</span>
          <span className="logo-text-letter">s</span>
        </div>
        <div className="hero-logo--boxes">
          <div className="hero-logo--box box--col1 box--row1"></div>
          <div className="hero-logo--box box--col1 box--row2"></div>
          <div className="hero-logo--box box--col1 box--row3"></div>
          <div className="hero-logo--box box--col1 box--row4"></div>
          <div className="hero-logo--box box--col2 box--row2"></div>
          <div className="hero-logo--box box--col2 box--row3"></div>
          <div className="hero-logo--box box--col2 box--row4"></div>
          <div className="hero-logo--box box--col3 box--row3"></div>
          <div className="hero-logo--box box--col3 box--row4"></div>
          <div className="hero-logo--box box--col4 box--row4"></div>
        </div>
      </div>
    </section>
  );
}
