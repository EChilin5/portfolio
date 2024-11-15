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
        </div>
      </div>
    </div>
  );
};

export default ProjectWebCard;
