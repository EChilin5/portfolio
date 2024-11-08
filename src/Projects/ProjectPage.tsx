import React, { useEffect, useRef, useState } from "react";
import chill from "../image/ChillCalories.png";
import zotes from "../image/zotes.png";
import duck from "../image/duck.png";
import tio from "../image/tio.png";

import globalmetal from "../image/GlobalMetalVentures.png";
import ProjectTemplate from "./ProjectTemplate";
import "./ProjectPage.scss";
import ProjectAppCard from "./ProjectAppCard";
import ProjectWebCard from "./ProjectWebCard";
import { useTransform, useScroll, motion, MotionValue } from "framer-motion";
import useDimension from "../useDimension";
import { useDebounce } from "react-use";
import { transform } from "typescript";
import ProjectWebCardText from "./ProjectWebCardText";
import { over, update } from "lodash";

const ProjectPage = () => {
  const projects = [
    {
      id: 0,
      name: "TXT Labs",
      techStack: "Reat JS with TypeScript | Sass",
      description:
        "Collaborated closely with a team to revamp our website, focusing on integrating cutting-edge animations using Framer Motion. We crafted visually dynamic experiences that captivate users and showcase our advanced web development skills. These unique, user-centered animations highlight our commitment to creating high-quality, engaging websites that set our clients apart in a competitive digital landscape",
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
        "Revamped the client’s website to elevate its design and user experience, aligning closely with their vision for a modern, cohesive look. Integrated the EMAIL JS API to enable seamless direct customer contact, enhancing accessibility and engagement.",
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
        "Developed an Android app in Kotlin designed to empower users in building healthier eating habits. The app tracks food history, suggests nutritious restaurants and recipes, and provides real-time calorie insights, helping users make mindful dietary choices and stay on track with their wellness goals.",
      delvirable: "Just Testing the current deliverable 1 section",
      delivirable2: " Just testing devliverable 2",
      git: "https://github.com/EChilin5/iTV",
      liv: "https://play.google.com/store/apps/details?id=eachillz.dev.itv&hl=en",
      image: `${chill}`,
    },
    {
      id: 3,
      name: "TIO CR",
      techStack: "Kotlin, Firebase",
      description:
        "Zote Shop, a powerful demo web application crafted to showcase an engaging, user-friendly shopping experience. With sleek product presentation and streamlined information access, Zote Shop sets the stage for a compelling e-commerce solution ready to elevate online retail.",
      delvirable: "Just Testing the current deliverable 1 section",
      delivirable2: " Just testing devliverable 2",
      git: "https://github.com/EChilin5/Commerce",
      liv: "https://play.google.com/store/apps/details?id=eachillz.dev.itv&hl=en",
      image: `${zotes}`,
    },
    {
      id: 4,
      name: "Tio CR",
      techStack: "Kotlin, Firebase",
      description:
        "Presenting Tio CR, an innovative Android app powered by Google ML, enabling users to capture and convert text from any document, book, or poster instantly. Tio CR transforms photos into editable, savable notes, with the added feature of text-to-speech, allowing users to listen to their saved content—bringing unparalleled convenience and accessibility to everyday tasks.",
      delvirable: "Just Testing the current deliverable 1 section",
      delivirable2: " Just testing devliverable 2",
      git: "",
      liv: "https://play.google.com/store/apps/details?id=com.eachilin.imagecut",
      image: `${tio}`,
    },
  ];

  const itemRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [overallState, setOverallState] = useState("black");

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

  const updateBackground = (id: number) => {
    const color = ["black", "darkred", "teal", "green", "orange", "orange"];
    console.log(color[id + 1]);
    setOverallState(color[id]);

    return color[id];
  };

  return (
    <div>
      <div
        id="project"
        className="project-container"
        style={{ backgroundColor: overallState }}
      >
        <div className="project-title">Projects</div>
        <div className="project-sub-title"> web and android based projects</div>
        <div
          ref={container}
          className="web-project-main-container"
          // style={{ backgroundColor: overallState }}
        >
          <motion.div style={{ y }} className="web-project-container">
            {projects.map((data, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <div key={index} className="card-carousel-projects">
                <div>
                  <motion.div
                    // Attaches a ref for DOM manipulation
                    ref={itemRef}
                    // Regular CSS class
                    className="web-project-item"
                    // Unique key for React list rendering
                    key={data.id}
                    // Starting state when component mounts
                    initial={{
                      opacity: 0.4, // Starts partially transparent
                      y: 16, // Shifted 16px down
                      rotateX: 30, // Becomes flat (no tilt)
                      rotateY: 30,
                    }}
                    // Animation that triggers when component comes into view
                    whileInView={{
                      opacity: 1,
                      y: [-10, 0, -10], // Combined floating animation
                      rotateX: 30,
                      rotateY: 30,
                      transition: {
                        opacity: {
                          duration: 0.8,
                          // delay: index * 0.1,
                        },
                        y: {
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        },
                        rotateX: {
                          type: "spring",
                          damping: 20,
                          stiffness: 100,
                          duration: 0.8,
                          delay: index * 0.1,
                        },
                        rotateY: {
                          type: "spring",
                          damping: 20,
                          stiffness: 100,
                          duration: 0.8,
                          delay: index * 0.1,
                        },
                      },
                    }}
                    // Controls how the whileInView animation triggers
                    viewport={{
                      once: false, // Animation will trigger every time it enters viewport
                      amount: 0.7, // Triggers when 50% of component is visible
                    }}
                  >
                    <ProjectWebCard content={data} />
                  </motion.div>
                </div>
                <motion.div
                  className="card-carousel-projects-description"
                  ref={itemRef}
                  // Regular CSS class
                  // Unique key for React list rendering
                  key={data.id}
                  // Starting state when component mounts

                  initial={{
                    opacity: 0, // Starts partially transparent
                    y: 16, // Shifted 16px down
                    // rotateX: 12, // Tilted backward 12 degrees

                    // rotateZ:10,
                  }}
                  // Animation that triggers when component comes into view
                  whileInView={{
                    opacity: 1, // Becomes fully visible
                    y: 0, // Moves to original vertical position

                    // rotateZ:10,
                    transition: {
                      // duration: 2, // Takes 0.5 seconds to animate
                      type: "spring",
                      damping: 20,
                      stiffness: 100,
                      duration: 0.8,
                      delay: index * 0.1, // Stagger effect
                    },
                  }}
                  // Controls how the whileInView animation triggers
                  viewport={{
                    once: false, // Animation will trigger every time it enters viewport
                    amount: 0.7, // Triggers when 50% of component is visible
                  }}
                  onViewportEnter={() => updateBackground(data.id)}
                >
                  <ProjectWebCardText content={data} />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
