import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

function EyesLookingDown({ translateZ }) {
  const [eyeColor1, setEyeColor1] = useState(getRandomColor());
  const [eyeColor2, setEyeColor2] = useState(getRandomColor());
  const [containerBorderColor, setContainerBorderColor] = useState(getRandomColor());
  const [eyeBorderColor1, setEyeBorderColor1] = useState(getRandomColor());
  const [eyeBorderColor2, setEyeBorderColor2] = useState(getRandomColor());

  useEffect(() => {
    const interval = setInterval(() => {
      setEyeColor1(getRandomColor());
      setEyeColor2(getRandomColor());
      setContainerBorderColor(getRandomColor());
      setEyeBorderColor1(getRandomColor());
      setEyeBorderColor2(getRandomColor());
    }, 1500); // Change colors every 1.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Container translateZ={translateZ} borderColor={containerBorderColor}>
      <EyeWrapper>
        <Eye color={eyeColor1} borderColor={eyeBorderColor1}>
          <Pupil />
        </Eye>
      </EyeWrapper>
      <EyeWrapper>
        <Eye color={eyeColor2} borderColor={eyeBorderColor2}>
          <Pupil />
        </Eye>
      </EyeWrapper>
    </Container>
  );
}

function getRandomColor() {
  const colors = ['#F44336', '#2196F3', '#4CAF50', '#FFC107'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

const Container = styled.div.attrs((props) => ({
  style: {
    transform: `perspective(400px) translateZ(${props.translateZ}px)`,
    borderColor: `${props.borderColor}`,
  },
}))`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: auto;
  padding-bottom: 20px;
  background-color: transparent;
  border-top-right-radius: 100%;
  border-top-left-radius: 100%;
  border: 5px solid; /* Border color will be applied dynamically */
  overflow: hidden;
`;

const EyeWrapper = styled.div`
  width: 80px;
  height: 100px;
  margin: 0 10px;
  display: flex;
  align-items: flex-end;
  @media screen and (max-width: 768px) {
    width: 60px;
    height: 75px;
  }
`;

const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(17px);
  }
`;

const blink = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.89);
  }
`;

const Eye = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${props => props.color}; /* Color of the eye */
  border: 2px solid ${props => props.borderColor}; /* Border color of the eye */
  position: relative;
  animation: ${blink} 2s infinite alternate;

  &:before {
    left: 20%;
  }

  &:after {
    right: 20%;
  }
`;

const Pupil = styled.div`
  position: absolute;
  bottom: 35%;
  left: 35%;
  transform: translateX(-50%);
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #222;
  animation: ${moveUpDown} 2s ease-in-out infinite alternate;

  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export default EyesLookingDown;
