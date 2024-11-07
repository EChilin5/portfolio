import React from 'react'
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
    const { content } = props;

  return (
    <div>
        <div className="web-right">
           <h1 className="card-title">{content.name}</h1>
          <div>Project Overview</div>
          <div className="card-description">{content.description}</div>
        
          <div className="web-btn">
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button>Live Link &#8594;</button>
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button>Github &#8594;</button>
          </div>
          </div>
    </div>
  )
}

export default ProjectWebCardText