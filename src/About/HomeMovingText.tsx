import React, { useRef } from "react";
import "./HomeMovingText.scss";
import {
  useScroll,
  motion,
  useTransform,
  type MotionValue,
} from "framer-motion";

interface LetterProps {
  children: string;
  range: [number, number]; // Range is a tuple with two numbers
  progress: MotionValue<number>; // progress should be a MotionValue of number type
}

interface WordProps {
  value: string; // Value should be a string
  range: [number, number]; // Range is a tuple with two numbers
  progress: MotionValue<number>; // progress should be a MotionValue of number type
}

// will allow teh character opacitto be manpulates
function Character(props: LetterProps) {
  const { children, range, progress } = props;
  // will provide the values of opacity change
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span>
      {/* shadow are the text without opactity */}
      <span className="shadow">{children}</span>
      {/* opacity will be change as scrolling increasing */}
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}

// takes the individual word and breaks it down into indivudal characters

function Word(props: WordProps) {
  const { value, range, progress } = props;
  const character = value.split("");
  const amount = range[1] - range[0];
  const step = amount / value.length;

  return (
    <span className="word">
      {character.map((letter, i) => {
        const uniqueKey = `${letter}_${i}`;
        // Calculate the start and end range for each character's animation
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return (
          <Character key={uniqueKey} range={[start, end]} progress={progress}>
            {letter}
          </Character>
        );
      })}
    </span>
  );
}

function HomeTitleComponents() {
  const paragraph1 =
    "Hi, I'm Chilin a software developer passionate about building impactful websites and apps. I love tackling challenges and bringing projects to life with unique animations. Let's team up to create something memorable!";
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph1.split(" ");

  return (
    <div className="home-title-container">
      <div className="home-title-content-heading">About Me</div>
      <div className="home-title-content-main" ref={element}>
        <p className="home-scroll-text">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            const uniqueKey = `key_${word}_${i}`;
            // console.log([start, end]);
            return (
              <Word
                key={uniqueKey}
                value={word}
                range={[start, end]}
                progress={scrollYProgress}
              />
            );
          })}
        </p>
      </div>
    </div>
  );
}

export default HomeTitleComponents;
