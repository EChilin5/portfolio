import React from "react";
import CardAnimationDeck from "./CardAnimationDeck";

function CardAnimationMain(){

    return(
        <div id="project" className="project-content-home">
                <div className="home-cards">
                  <div className="home-wrapper">
                    <div className="card-deck-title">Projects</div>
                    <div>
                      <CardAnimationDeck />
                    </div>
                  </div>
                </div>
              </div>
    )
}

export default CardAnimationMain;