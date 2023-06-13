import { dataScienceTools, otherTools, webDevTools } from "./ToolsData.js";

import "./Tools.css";

export function Tools() {
  return (
    <section className="section-tools" id="tools">
      <div className="tools__card">
        <span className="subheading">Tools and skills</span>
        <h2>Tech stack I use in my projects</h2>

        <div className="tools__container">
          <ToolsCategory categoryName="Web development" tools={webDevTools} />
          <ToolsCategory categoryName="Data science" tools={dataScienceTools} />
          <ToolsCategory categoryName="Other tools" tools={otherTools} />
        </div>
      </div>
    </section>
  );
}

function ToolsCategory({ categoryName, tools }) {
  return (
    <div className="tools__category">
      <h3>{categoryName}</h3>
      <ul className="tools__list">
        {tools.map((tools) => (
          <ToolsItem key={tools.id} tools={tools} />
        ))}
      </ul>
    </div>
  );
}

function ToolsItem({ tools }) {
  return (
    <li>
      <div className="tools__item">
        {tools.icon}
        <p className="tools__name">{tools.name}</p>
      </div>
    </li>
  );
}
