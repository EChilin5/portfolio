/* eslint-disable */
import React, { useRef, useEffect, useState } from "react";
import "./BallEffect.css";

import {
  Engine,
  Render,
  Bodies,
  World,
  Composite,
  Runner,
  Mouse,
  MouseConstraint,
  Body,
  Events,
  Vector,
} from "matter-js";

function BallEffect() {
  const scene = useRef<HTMLDivElement | null>(null);
  const engine = useRef(Engine.create());
  const [cursorRadius, setCursorRadius] = useState<number>(50); // Radius of the cursor effect
  const thickness = 150;
  // Define the number of letters
  const shapeSize = 30;
  const tLineWidth = 10;
  const xLineWidth = 10;
  // Define a base color for letters
  const letterColor = "#00b4d8";
  // Variables to control the drop area
  const dropArea = { x: 0, y: 0, width: 1, height: 1 }; // normalized values (0 to 1)
  // Radius of the exclusion zone around the cursor
  const exclusionRadius = 25; // Adjusted for a smaller cursor effect
  const pushStrength = 0.1; // Reduced value for less dramatic movement
  // Function to convert normalized values to actual pixel values
  const getPixelValue = (value: number, dimension: number): number =>
    value * dimension;
  // Define a function to create a letter
  const createLetter = (
    letter: string,
    x: number,
    y: number,
    scale: number = 1
  ): Body => {
    const size = shapeSize * scale;
    const lineWidth = letter=== "C" || letter === "T" || letter === "H" || letter === "N" ? tLineWidth : xLineWidth;
  
    if (letter === "C") {
      const height = size * 1.4;
      const thickness = lineWidth;
      const arc = Bodies.rectangle(x, y, thickness, height, {
        render: { fillStyle: letterColor },
        isStatic: false,
        angle: -Math.PI / 2,
      });
      return Body.create({
        parts: [arc],
        frictionAir: 0.1,
        friction: 0.1,
        restitution: 0,
      });
    } else if (letter === "H") {
      const height = size * 1.4;
      const width = size;
      const thickness = lineWidth;
      const leftLeg = Bodies.rectangle(
        x - width / 2 + thickness / 2,
        y,
        thickness,
        height,
        { render: { fillStyle: letterColor }, isStatic: false }
      );
      const rightLeg = Bodies.rectangle(
        x + width / 2 - thickness / 2,
        y,
        thickness,
        height,
        { render: { fillStyle: letterColor }, isStatic: false }
      );
      const horizontalBar = Bodies.rectangle(
        x,
        y,
        width,
        thickness,
        { render: { fillStyle: letterColor }, isStatic: false }
      );
      return Body.create({
        parts: [leftLeg, rightLeg, horizontalBar],
        frictionAir: 0.1,
        friction: 0.1,
        restitution: 0,
      });
    } else if (letter === "i") {
      const height = size;
      const thickness = lineWidth;
      const body = Bodies.rectangle(
        x,
        y + height / 4,
        thickness,
        height * 0.8,
        { render: { fillStyle: letterColor }, isStatic: false }
      );
      const dot = Bodies.circle(x, y - height / 2, thickness / 2, {
        render: { fillStyle: letterColor },
        isStatic: false,
      });
      return Body.create({
        parts: [body, dot],
        frictionAir: 0.1,
        friction: 0.1,
        restitution: 0,
      });
    } else if (letter === "L") {
      const width = size;
      const height = size * 1.4;
      const thickness = lineWidth;
      const verticalBar = Bodies.rectangle(
        x - width / 2 + thickness / 2,
        y,
        thickness,
        height,
        { render: { fillStyle: letterColor }, isStatic: false }
      );
      const horizontalBar = Bodies.rectangle(
        x,
        y + height / 2 - thickness / 2,
        width,
        thickness,
        { render: { fillStyle: letterColor }, isStatic: false }
      );
      return Body.create({
        parts: [verticalBar, horizontalBar],
        frictionAir: 0.1,
        friction: 0.1,
        restitution: 0,
      });
    } else if (letter === "N") {
      const height = size * 1.4;
      const width = size;
      const thickness = lineWidth;
      const leftLeg = Bodies.rectangle(
        x - width / 2 + thickness / 2,
        y,
        thickness,
        height,
        { render: { fillStyle: letterColor }, isStatic: false }
      );
      const rightLeg = Bodies.rectangle(
        x + width / 2 - thickness / 2,
        y,
        thickness,
        height,
        { render: { fillStyle: letterColor }, isStatic: false }
      );
      const diagonalBar = Bodies.rectangle(
        x,
        y,
        thickness,
        height,
        {
          render: { fillStyle: letterColor },
          isStatic: false,
          angle: Math.atan2(height, width), // Diagonal line
        }
      );
      return Body.create({
        parts: [leftLeg, rightLeg, diagonalBar],
        frictionAir: 0.1,
        friction: 0.1,
        restitution: 0,
      });
    }
  
    // Default return for the TypeScript compiler
    return Bodies.rectangle(x, y, size, size);
  };
  
  // Function to create letters
  const createLetters = (
    numT: number,
    numX: number,
    numA: number,
    numB: number,
    numL: number,
    dropArea: { x: number; y: number; width: number; height: number },
  ): Body[] => {
    const cw = scene.current?.clientWidth || 0;
    const ch = scene.current?.clientHeight || 0;
    const elements: Body[] = [];
    // Define the initial position based on the drop area
    const initialX = getPixelValue(dropArea.x, cw);
    const initialY = getPixelValue(dropArea.y, ch);
    const dropWidth = getPixelValue(dropArea.width, cw);
    const dropHeight = getPixelValue(dropArea.height, ch);
    for (let i = 0; i < numT; i += 1) {
      const x = initialX + Math.random() * dropWidth - dropWidth / 2;
      const y = initialY + Math.random() * dropHeight - dropHeight / 2;
      elements.push(createLetter("C", x, y));
    }
    for (let i = 0; i < numX; i += 1) {
      const x = initialX + Math.random() * dropWidth - dropWidth / 2;
      const y = initialY + Math.random() * dropHeight - dropHeight / 2;
      elements.push(createLetter("H", x, y));
    }
    for (let i = 0; i < numA; i += 1) {
      const x = initialX + Math.random() * dropWidth - dropWidth / 2;
      const y = initialY + Math.random() * dropHeight - dropHeight / 2;
      elements.push(createLetter("i", x, y));
    }
    for (let i = 0; i < numB; i += 1) {
      const x = initialX + Math.random() * dropWidth - dropWidth / 2;
      const y = initialY + Math.random() * dropHeight - dropHeight / 2;
      elements.push(createLetter("N", x, y));
    }
    for (let i = 0; i < numL; i += 1) {
      const x = initialX + Math.random() * dropWidth - dropWidth / 2;
      const y = initialY + Math.random() * dropHeight - dropHeight / 2;
      elements.push(createLetter("L", x, y));
    }
    return elements;
  };
  useEffect(() => {
    const cw = scene.current?.clientWidth || 0;
    const ch = scene.current?.clientHeight || 0;
    engine.current.world.gravity.x = 0.5;
    const render = Render.create({
      element: scene.current as HTMLElement,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: "white",
      },
    });
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine.current, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        damping: 0.2,
        render: {
          visible: false,
        },
      },
    });
    // Define walls
    const walls = [
      Bodies.rectangle(cw / 2, -thickness / 2, cw + 2 * thickness, thickness, {
        isStatic: true,
        render: { visible: false },
      }),
      Bodies.rectangle(
        cw / 2,
        ch + thickness / 2,
        cw + 2 * thickness,
        thickness,
        { isStatic: true, render: { visible: false } },
      ),
      Bodies.rectangle(-thickness / 2, ch / 2, thickness, ch + 2 * thickness, {
        isStatic: true,
        render: { visible: false },
      }),
      Bodies.rectangle(
        cw + thickness / 2,
        ch / 2,
        thickness,
        ch + 2 * thickness,
        { isStatic: true, render: { visible: false } },
      ),
    ];
    const elements = createLetters(600, 300, 200, 200, 200, dropArea); // Adjust the counts as needed
    Composite.add(engine.current.world, [
      ...walls,
      mouseConstraint,
      ...elements,
    ]);
    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine.current);
    // Handle resizing
    const handleResizer = () => {
      if (render.canvas) {
        render.canvas.width = scene.current?.clientWidth || 0;
        render.canvas.height = scene.current?.clientHeight || 0;
      }
    };
    window.addEventListener("resize", handleResizer);
    handleResizer();
    // Create a visual representation of the cursor effect
    const cursorEffect = Bodies.circle(0, 0, cursorRadius, {
      isStatic: true,
      render: {
        fillStyle: "rgba(255, 255, 255, 0.1)", // Semi-transparent color
        visible: false,
      },
    });
    Composite.add(engine.current.world, cursorEffect);
    // Track mouse movement
    Events.on(mouseConstraint, "mousemove", function (event) {
      const { x, y } = event.mouse.position;
      // Update cursor effect position
      Body.setPosition(cursorEffect, { x, y });
      Composite.allBodies(engine.current.world).forEach((body) => {
        if (body !== mouseConstraint.body) {
          const distance = Vector.magnitude(
            Vector.sub(body.position, { x, y }),
          );
          if (distance < exclusionRadius) {
            // Calculate push direction and apply force
            const direction = Vector.normalise(
              Vector.sub(body.position, { x, y }),
            );
            const pushMagnitude =
              pushStrength * (1 - distance / exclusionRadius);
            Body.applyForce(body, body.position, {
              x: direction.x * pushMagnitude,
              y: direction.y * pushMagnitude,
            });
          } else {
            // Apply damping for smoothness
            Body.setVelocity(body, {
              x: body.velocity.x * 0.888,
              y: body.velocity.y * 0.888,
            });
          }
        }
      });
    });
    return () => {
      Render.stop(render);
      World.clear(engine.current.world, false);
      Engine.clear(engine.current);
      render.canvas?.remove();
      //   render?.canvas = null;
      //   render?.context = null;
    };
  }, []);
  return (
    <div className="txt-lab">
      <div style={{ width: "90vw", height: "900px" }}>
        <div
          className="rotate-content"
          ref={scene}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
export default BallEffect;