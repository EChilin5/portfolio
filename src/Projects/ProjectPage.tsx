import React, { useEffect, useRef, useState } from "react";
import chill from "../image/ChillCalories.png";
import zotes from "../image/zotes.png";
import duck from "../image/duck.png";
import globalmetal from "../image/GlobalMetalVentures.png";
import ProjectTemplate from "./ProjectTemplate";
import "./ProjectPage.scss";
import ProjectAppCard from "./ProjectAppCard";
import ProjectWebCard from "./ProjectWebCard";
import { useTransform, useScroll, motion, MotionValue } from "framer-motion";
import useDimension from "../useDimension";
import { useDebounce } from "react-use";
import { transform } from "typescript";

const ProjectPage = () => {
  const projects = [
    {
      id: 0,
      name: "TXT Labs",
      techStack: "Reat JS with TypeScript | Sass",
      description:
        "Collborated with fellow teammates in a website redevelopment: Our focus was on integrating advanced animations to highlight our latest web development capabilities for prospective clients.For example using framer motion to create unique animations appealing to users to demonstrate the high level of website we create for our clients",
      delvirable: "Just Testing the current deliverable 1 section",
      delivirable2:
        " Increased Client Interest: The project showcased our technical capabilities, attracting interest from prospective clients seeking top-tier website functionality and design.",
      git: "",
      liv: "https://txtlabs.io/",
      image: `${duck}`,
    },
    {
      id: 1,
      name: "Global Metal Ventures",
      techStack: "React Js",
      description:
        "Client requested to improve there overall website based on their design in order to improve better design. Additionally incorporate the EMAIL JS API for customers to contact client directly.",
      delvirable: `Revitalized Design: Re-envisioned the website layout to reflect
                a polished, professional look aligned with the client’s vision,
                enhancing ease of navigation and user engagement.`,
      delivirable2: `Seamless Customer Communication: Integrated EMAIL JS API to
                enable direct customer inquiries, simplifying communication and
                streamlining lead generation.`,
      git: "",
      liv: "https://globalmetalventures.com/",
      image: `${globalmetal}`,
    },
    {
      id: 2,
      name: "Chill Calories",
      techStack: "Kotlin, Firebase",
      description:
        "An android application built with Kotlin in order to help user to improve their eating habbits. The app will show users a list of food they have ate in the past, healthy restaurants, and recipes. Additionally the app will be providing the user with the amount of calories they have consumed and how many they have left. This way the user can be more cautious of what they eat.",
      delvirable: "Just Testing the current deliverable 1 section",
      delivirable2: " Just testing devliverable 2",
      git: "https://github.com/EChilin5/iTV",
      liv: "https://play.google.com/store/apps/details?id=eachillz.dev.itv&hl=en",
      image: `${chill}`,
    },
    {
      id: 3,
      name: "Zotes",
      techStack: "Kotlin, Firebase, React Js",
      description:
        "Zote Shop is an web application intended to help users buy different products. A demo application to demonstrate how products will be presented and what infromation will be available to the user.",
      delvirable: "Just Testing the current deliverable 1 section",
      delivirable2: " Just testing devliverable 2",
      git: "https://github.com/EChilin5/Commerce",
      liv: "https://play.google.com/store/apps/details?id=eachillz.dev.itv&hl=en",
      image: `${zotes}`,
    },
    {
      id: 4,
      name: "Chill Calories",
      techStack: "Kotlin, Firebase",
      description:
        "An android application built with Kotlin in order to help user to improve their eating habbits. The app will show users a list of food they have ate in the past, healthy restaurants, and recipes. Additionally the app will be providing the user with the amount of calories they have consumed and how many they have left. This way the user can be more cautious of what they eat.",
      delvirable: "Just Testing the current deliverable 1 section",
      delivirable2: " Just testing devliverable 2",
      git: "https://github.com/EChilin5/iTV",
      liv: "https://play.google.com/store/apps/details?id=eachillz.dev.itv&hl=en",
      image: `${chill}`,
    },
  ];

  const itemRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    // start end is when you want to start tracking
    // stop when it's at the end of the window a new item starts
    offset: ["start end", "end start"],
  });

  const { height } = useDimension();

  const { scrollYProgress: itemScrollYProgress } = useScroll({
    target: itemRef,
    offset: ["end end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [height * 2, 0]);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "rgba(255, 255, 255, 1)", // Start color (white)
      "rgba(0, 0, 0, 1)", // End color (black)
    ]
  );

  return (
    <div>
      <div id="project" className="project-container">
        <div className="project-title">Projects</div>
        <div className="project-sub-title">
          {" "}
          personalized service, expert repairs, quality products, and a
          community-driven experience
        </div>
        <div ref={container} className="web-project-main-container">
          <motion.div style={{ y }} className="web-project-container">
            {projects.map((data, index) => (
              <motion.div
                // Attaches a ref for DOM manipulation
                ref={itemRef}
                // Regular CSS class
                className="web-project-item "
                // Unique key for React list rendering
                key={data.id}
                // Starting state when component mounts
                initial={{
                  opacity: 0.4, // Starts partially transparent
                  y: 16, // Shifted 16px down
                  rotateX: -40, // Tilted backward 12 degrees
                }}
                // Animation that triggers when component comes into view
                whileInView={{
                  opacity: 1, // Becomes fully visible
                  y: 0, // Moves to original vertical position
                  rotateX: 0, // Becomes flat (no tilt)
                  transition: {
                    duration: 2, // Takes 0.5 seconds to animate
                  },
                }}
                // Controls how the whileInView animation triggers
                viewport={{
                  once: false, // Animation will trigger every time it enters viewport
                  amount: 0.5, // Triggers when 50% of component is visible
                }}
              >
                <ProjectWebCard content={data} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
