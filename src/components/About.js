import "./About.css";

export function About() {
  return (
    <section className="section-about" id="about">
      <div className="about">
        <p className="text">Hi,</p>
        <p className="text">
          I'm a sport scientist who began working in data science during my
          master's degree. Through my PhD research, I gained extensive
          experience in data analysis, modeling, and visualization, which has
          enabled me to extract insights from complex data sets. As a frontend
          web developer, I'm passionate about creating intuitive, engaging and
          beautiful user experiences on the web. With my diverse skillset, I'm
          dedicated to developing innovative solutions that bridge the gap
          between sports science, data science, and web development. Thank you
          for visiting my website, and please feel free to{" "}
          <a className="link" href="index.html">
            contact me
          </a>{" "}
          if you have any questions or if you need my help with your project.
        </p>
      </div>
    </section>
  );
}
