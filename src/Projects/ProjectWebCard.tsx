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

const ProjectWebCard = (props: ProjectData) => {
  const { content } = props;
  return (
    <div>
      <div className="web-container">
        <div className="web-image">
          <img src={content.image} alt="" />
          {/* <div className="web-tech-stack">{content.techStack}</div> */}
        </div>
        <div className="web-right">
          <div className="card-title">Global Metal Ventures Revamp</div>
          <div>Project Overview</div>
          <div className="card-description">{content.description}</div>
          <div>Key Delierables</div>
          <div>
            <ul>
              <li>{content.delvirable}</li>
              <li>{content.delivirable2}</li>
            </ul>
          </div>
          <div className="web-btn">
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button>Live Link</button>
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button>Github</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectWebCard;
