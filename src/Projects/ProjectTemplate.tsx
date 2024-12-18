import React, { useState } from "react";
import "./ProjectTemplate.scss";
import photo from "../image/ChillCalories.png";

interface ProjectContent{
    id:number,
    name:string,
    techStack: string,
      description:string,
      git:string,
      liv:string,
      image:string,
}

interface ProjectData{
    content:ProjectContent
}


function ProjectTemplate(props: ProjectData) {
    const {content} =props;
  const [show, sendShow] = useState(false);

  const onExpandBlock = ()=>{
    sendShow(!show);
  }
  const onOpenLink= () =>{

  }

  return (
    <div>
      <div className="projecth-container">
         <div className="projecth-container-header" onClick={()=>onExpandBlock()}>
          <div className="projecth-name">{content.name}</div>
          <div className="projecth-tech">Tech Stack: {content.techStack}</div>
        </div>
        <div>
          {show ? (
            <div className="overall">
              <div className="overall-left">
                <div>
                  <img src={content.image} alt="" width="180px" height="180px" />
                </div>
              </div>
              <div>
                <div className="overall-right-name">{content.name}</div>
                <div className="overall-right-desc">
                  {content.description}
                </div>

                <div className="overall-btn-group">
                  <div>GitHub</div>
                  <div>Live Link</div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectTemplate;
