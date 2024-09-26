import React, { useEffect, useRef, useState } from "react";
import "./AnimationCanvas.scss"

interface LeaderType {
  x: number;
  y: number;
  size: number;
  colour: string;
  draw: (c: CanvasRenderingContext2D) => void;
  step: (width: number, height: number) => void;
}

const Leader = (x: number, y: number): LeaderType => ({
  x,
  y,
  size: 40,
  colour: "blue",
  draw(c: CanvasRenderingContext2D) {
    c.fillStyle = this.colour;
    c.beginPath();
    c.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    c.fill();
    c.closePath();
  },
  step(width: number, height: number) {
    if (this.size > 0) {
      this.size -= 1;
    }
  },
});

const AnimationCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [entities, setEntities] = useState<LeaderType[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const c = canvas.getContext("2d");
    if (!c) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const render = () => {
      c.fillStyle = "rgba(0, 0, 0, 0.1)";
      c.fillRect(0, 0, width, height);

      entities.forEach((entity) => {
        entity.draw(c);
        entity.step(width, height);
      });

      requestAnimationFrame(render);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;
      const newLeader = Leader(posX, posY);
      setEntities((prevEntities) => [...prevEntities, newLeader]);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [entities]);

  return <canvas ref={canvasRef} id="animation" />;
};

export default AnimationCanvas;
