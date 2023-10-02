import React, { useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import styled, { theme } from 'styled-components';
import Drawers from '../components/Drawer';


function Introduction() {
  const [hoveredSection, setHoveredSection] = useState(null);
  const { scroll } = useLocomotiveScroll();

  return (
    <Container data-scroll-section hoveredSection={hoveredSection}>
      <Title>Can I help you explore our tech stack?</Title>
      <DrawerContainer>
        <Drawers />
      </DrawerContainer>
    </Container>
  );
}

export default Introduction;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: relative;
  z-index: 2;

  font-family: 'Google Sans', sans-serif;
  background-color: transparent;

  ${({ theme }) => theme.tablet`
    min-height: calc(var(--vh, 1vh) * 100);
  `}
`;

const BackgroundAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const DrawerContainer = styled.div`
  position: fixed; /* Position fixed to keep it at the bottom */
  bottom: 0; /* Place it at the bottom of the window */
  left: 0; /* Optionally, you can adjust the horizontal positioning */
  width: 100%; /* Full width */
  height: 80vh;
`;

const Title = styled.div`
  width: 100%;
  height: 100vh;
  padding: 40px;
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: transparent;
  font-size: 50px;

  ${({ theme }) => theme.mobile`
    font-size: 30px;
  `}
`;