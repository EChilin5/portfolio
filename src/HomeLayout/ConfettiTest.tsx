import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize'

const ConfettiTest: React.FC = () => {
  const { width, height } = useWindowSize();
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [wind, setWind] = useState(0);
  const [gravity, setGravity] = useState(0.05);
  const confettiColors = ['#fff', '#fb6f92']; // Customize your colors

  // Function to handle mouse move
  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setMouseX(clientX);
    setMouseY(clientY);

    // Apply wind effect based on mouse X movement
    const windForce = (clientX / window.innerWidth) * 0.5 - 0.25;
    setWind(windForce);

    // Optional: Adjust gravity based on vertical mouse movement
    const gravityForce = (clientY / window.innerHeight) * 0.1;
    setGravity(gravityForce);
  };

  useEffect(() => {
    // Add event listener for mouse movement
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <Confetti
        colors={confettiColors}
        numberOfPieces={300} // Set a static number of confetti pieces
        gravity={gravity} // Dynamic gravity based on mouse Y position
        wind={wind} // Wind force applied based on mouse X position
      />
    </div>
  );
};

export default ConfettiTest;
