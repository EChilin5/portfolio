import React from 'react';
import { useEffect, useRef } from 'react';
import webGLFluidEnhanced from 'webgl-fluid-enhanced';

const FluidAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Set up the fluid simulation config
    webGLFluidEnhanced.config({
      SIM_RESOLUTION: 128,
      DYE_RESOLUTION: 1024,
      CAPTURE_RESOLUTION: 512,
      DENSITY_DISSIPATION: 1,
      VELOCITY_DISSIPATION: 0.2,
      PRESSURE: 0.8,
      PRESSURE_ITERATIONS: 20,
      CURL: 30,
      INITIAL: true,
      SPLAT_AMOUNT: 5,
      SPLAT_RADIUS: 0.25,
      SPLAT_FORCE: 6000,
      SPLAT_KEY: 'Space',
      SHADING: true,
      COLORFUL: true,
      COLOR_UPDATE_SPEED: 10,
      COLOR_PALETTE: ['#61dafb', '#a8dadc', '#457b9d', '#1d3557', '#f1faee'],
      HOVER: true,
      BACK_COLOR: '#000000',
      TRANSPARENT: false,
      BRIGHTNESS: 0.5,
      BLOOM: true,
      BLOOM_ITERATIONS: 8,
      BLOOM_RESOLUTION: 256,
      BLOOM_INTENSITY: 0.8,
      BLOOM_THRESHOLD: 0.6,
      BLOOM_SOFT_KNEE: 0.7,
      SUNRAYS: true,
      SUNRAYS_RESOLUTION: 196,
      SUNRAYS_WEIGHT: 1.0,

    });

    if (canvasRef.current) {
      webGLFluidEnhanced.simulation(canvasRef.current, {
        SIM_RESOLUTION: 256,
        DENSITY_DISSIPATION: 0.8,
        PRESSURE_ITERATIONS: 30,
        COLOR_PALETTE: ['#61dafb', '#a8dadc', '#457b9d', '#1d3557', '#f1faee'],
      });
    }
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default FluidAnimation;
