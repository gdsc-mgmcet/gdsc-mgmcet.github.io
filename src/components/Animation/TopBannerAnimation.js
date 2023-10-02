import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Import your SVGs
import svg1 from '../../assets/images/icons/Cloud/gclogo.png'; // Replace with your SVG file paths
import svg2 from '../../assets/images/icons/Cloud/gclogo.png'; // Replace with your SVG file paths
import svg3 from '../../assets/images/icons/Cloud/gclogo.png'; // Replace with your SVG file paths
import svg4 from '../../assets/images/icons/Cloud/cloud.svg'; // Replace with your SVG file paths

const SVG = styled.img`
  position: absolute;
  opacity: 0.2;
  width: 100px;
  z-index: -1;

  ${({ theme }) => theme.mobile`
    margin-top: 50px;
    width: 60px;
`}
`;


function getRandomPosition() {
  const minX = 100; // Minimum X coordinate
  const maxX = window.innerWidth - 200; // Maximum X coordinate

  const isLeftToRight = Math.random() < 0.5;
  const initialX = isLeftToRight ? -150 : window.innerWidth;
  const minVelocityX = 0.1;
  const maxVelocityX = 1.0;
  const velocityX = isLeftToRight
    ? Math.random() * (maxVelocityX - minVelocityX) + minVelocityX
    : -(Math.random() * (maxVelocityX - minVelocityX) + minVelocityX);

  const minY = 0; // Minimum Y coordinate (top of the page)
  const maxY = window.innerHeight * 0.15; // Maximum Y coordinate (30vh from the top)

  return {
    x: initialX,
    y: Math.random() * (maxY - minY) + minY, // Random Y within the specified range
    velocityX: velocityX,
    isLeftToRight: isLeftToRight,
  };
}


function AnimatedSVGAnimation() {
  const initialSvgCount = 3;

  const [svgPositions, setSvgPositions] = useState(() =>
    Array.from({ length: initialSvgCount }, (_, index) => getRandomPosition())
  );

  useEffect(() => {
    const animationIntervals = svgPositions.map((_, index) => {
      return setInterval(() => {
        setSvgPositions((prevPositions) => {
          return prevPositions.map((position, i) => {
            const newPosition = { ...position };
            newPosition.x += newPosition.velocityX;
  
            if (
              (newPosition.isLeftToRight && newPosition.x > window.innerWidth) ||
              (!newPosition.isLeftToRight && newPosition.x < -150)
            ) {
              return getRandomPosition(); // Use the updated function to reset position
            }
  
            return newPosition;
          });
        });
      }, 400);
    });
  
    return () => {
      animationIntervals.forEach((intervalId) => clearInterval(intervalId));
    };
  }, [svgPositions]);
  

  useEffect(() => {
    const animationIntervals = svgPositions.map((_, index) => {
      return setInterval(() => {
        setSvgPositions((prevPositions) => {
          return prevPositions.map((position, i) => {
            const newPosition = { ...position };
            newPosition.x += newPosition.velocityX;

            if (
              (newPosition.isLeftToRight && newPosition.x > window.innerWidth) ||
              (!newPosition.isLeftToRight && newPosition.x < -150)
            ) {
              return getRandomPosition();
            }

            return newPosition;
          });
        });
      }, 40);
    });

    return () => {
      animationIntervals.forEach((intervalId) => clearInterval(intervalId));
    };
  }, [svgPositions]);

  const handleSVGClick = (index) => {
    setSvgPositions((prevPositions) =>
      prevPositions.filter((_, i) => i !== index)
    );
  };

  return (
    <div data-scroll data-scroll-position="top" data-scroll-speed="9">
      {svgPositions.map((position, index) => (
        <SVG
          key={index}
          src={
            index === 0
              ? svg1
              : index === 1
              ? svg2
              : index === 2
              ? svg3
              : svg4
          }
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
          onClick={() => handleSVGClick(index)}
        />
      ))}
    </div>
  );
}

export default AnimatedSVGAnimation;