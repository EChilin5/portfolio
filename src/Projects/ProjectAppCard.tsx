import React from "react";
import "./ProjectAppCard.scss";

interface ProjectContent {
  id: number;
  name: string;
  techStack: string;
  description: string;
  git: string;
  liv: string;
  image: string;
}

interface ProjectData {
  content: ProjectContent;
}

const ProjectAppCard = (props: ProjectData) => {
  const { content } = props;

  return (
    <div className="card-container">
      <div className="card-image">
        <img src={content.image} alt="" />
      </div>
      <div className="card-bottom">
        <div className="card-title">{content.name}</div>
        <div className="card-description">{content.description}</div>
      </div>
    </div>
  );
};

export default ProjectAppCard;
