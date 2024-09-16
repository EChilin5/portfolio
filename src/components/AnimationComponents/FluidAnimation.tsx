/* eslint-disable */
import React, { useEffect, useRef, useCallback } from "react";
import webGLFluidEnhanced from "webgl-fluid-enhanced"; // Ensure the library is imported correctly
import throttle from "lodash.throttle"; // You can use lodash to throttle

interface SimulationOptions {
  SIM_RESOLUTION: number;
  DENSITY_DISSIPATION: number;
  PRESSURE_ITERATIONS: number;
  COLOR_PALETTE: string[];
}

const FluidAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const simulationInstanceRef = useRef<any>(null); // Store the simulation instance

  // Function to resize the canvas on window resize
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.2; // Adjust height to 20vh
    }
  }, []);

  useEffect(() => {
    // Set up canvas size on mount
    resizeCanvas();

    // Add event listener to handle window resize
    window.addEventListener("resize", resizeCanvas);

    // Cleanup the simulation on component unmount
    return () => {
      if (simulationInstanceRef.current) {
        simulationInstanceRef.current.cleanup(); // Clean up the simulation when unmounted
      }
      // Remove the resize event listener
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [resizeCanvas]);

  // Memoized and throttled event handler for mouse enter
  const handleMouseEnter = useCallback(
    throttle(() => {
      const canvas = canvasRef.current;

      if (canvas && !simulationInstanceRef.current) {
        // Start the fluid simulation when mouse enters the canvas
        simulationInstanceRef.current = webGLFluidEnhanced.simulation(canvas, {
          SIM_RESOLUTION: 10,
          DENSITY_DISSIPATION: 0.6,
          PRESSURE_ITERATIONS: 5,
          COLOR_PALETTE: [
            "#61dafb",
            "#a8dadc",
            "#457b9d",
            "#1d3557",
            "#f1faee",
          ],
        } as SimulationOptions);
      }
    }, 300), // Throttle the mouse enter event to trigger every 300ms
    []
  );

  // Memoized event handler for mouse leave
  const handleMouseLeave = useCallback(() => {
    if (simulationInstanceRef.current) {
      // Stop the simulation when the mouse leaves the canvas
      simulationInstanceRef.current.cleanup();
      simulationInstanceRef.current = null; // Reset the simulation reference
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100vw", height: "100vh" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default FluidAnimation;
