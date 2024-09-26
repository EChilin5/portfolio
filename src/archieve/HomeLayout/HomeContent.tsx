import React, { useEffect, useRef, useState } from "react";

import "./HomeContent.css";
import ConfettiTest from "./ConfettiTest";

import globalmetal from "../image/GlobalMetalVentures.png";
import chill from "../image/ChillCalories.png";
import zotes from "../image/zotes.png";
import duck from "../image/duck.png";
import HomeMainContent from "./HomeMainContent";
import HomeFooter from "./HomeFooter";
import Lenis from "lenis";

function HomeContent() {
  return (
    <div>
      <HomeMainContent />
      <HomeFooter />
    </div>
  );
}

export default HomeContent;
