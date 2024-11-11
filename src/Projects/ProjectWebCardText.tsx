import React from "react";
import "./ProjectWebCard.scss";

interface ProjectContent {
  id: number;
  name: string;
  techStack: string;
  description: string;
  delvirable: string;
  delivirable2: string;
  git: string;
  liv: string;
  image: string;
}

interface ProjectData {
  content: ProjectContent;
}

const ProjectWebCardText = (props: ProjectData) => {
  const openEmail = (web: string) => {
    window.open(web);
  };

  const { content } = props;

  return (
    <div>
      <div className="web-right">
        <div className="card-title">{content.name}</div>
        <div className="card-description">{content.description}</div>

        <div className="web-btn">
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          {content.liv !== "" ? (
            // biome-ignore lint/a11y/useButtonType: <explanation>
            <button onClick={() => openEmail(content.liv)}>
              Live Link &#8594;
            </button>
          ) : (
            ""
          )}

          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          {content.git !== "" ? (
            // biome-ignore lint/a11y/useButtonType: <explanation>
            <button onClick={() => openEmail(content.git)}>
              Github &#8594;
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectWebCardText;
