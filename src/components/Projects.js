import "./projects.css";

export function Projects() {
  return (
    <section className="section-projects" id="projects">
      <span className="subheading">Projects</span>
      <h2>Some of my personal and clients projects</h2>

      <div className="projects">
        <a href="https://verasls.github.io/lvmisc">
          <div className="project__item">
            <img
              className="project__img"
              src="images/projects/lvmisc.png"
              alt="lvmisc R package logo"
            />

            <div className="project__description">
              <p className="project__txt">
                <span className="monospaced semi-bold">lvmisc</span>: An R
                package with miscellaneous functions for data analysis and
                visualization.
              </p>

              <div className="project__tags">
                <p className="project__tag-item">R</p>
              </div>
            </div>
          </div>
        </a>

        <a href="https://verasls.github.io/impactr">
          <div className="project__item">
            <img
              className="project__img"
              src="images/projects/impactr.png"
              alt="impactr R package logo"
            />

            <div className="project__description">
              <p className="project__txt">
                <span className="monospaced semi-bold">impactr</span>: An R
                package with functions to read, process and analyse raw
                accelerometer data related to mechanical loading variables
              </p>

              <div className="project__tags">
                <p className="project__tag-item">R</p>
              </div>
            </div>
          </div>
        </a>

        <div className="project__item new-project">
          <div className="new-project__container">
            <span className="monospaced new-project__txt">
              <br />
              <br />
              <br />
              <br />
              &lt;div <br />
              &nbsp;&nbsp;className="new-project" <br />
              &gt; <br />
              &nbsp;&nbsp;Work in progress... <br />
              &lt;&#47;div&gt; <br />
            </span>
          </div>

          <div className="project__description">
            <p className="project__txt new-project__txt">
              Stay tuned for more of my work!
            </p>
          </div>
        </div>
      </div>

      <p className="text">
        Some of my data science work is in the form of academic publications. If
        you are interested in my scientific papers, check them out{" "}
        <a className="link" href="publications.html">
          here
        </a>
        .
      </p>
    </section>
  );
}
