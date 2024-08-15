import React from "react";
import "./SkillCard.css"

interface CardImage{
    imagePath: string;
}

function SkillCard(props :CardImage){
    const {imagePath} = props;
    return (
        <div>

        <div className="skill-card-holder">
            <div className="skill-card-tape-left"/>
            <div className="skill-card-tape-right"/>
            <img src={imagePath} alt="skill" />
        </div>

        <div className="skill-card-name">
            Test
        </div>
        </div>

    )

}

export default SkillCard;