import React from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styled from 'styled-components';
import cloudlogo from '../../../assets/images/icons/Cloud/gclogo.png';

function Cloud() {
  const { scroll } = useLocomotiveScroll();

  return (
    <Container data-scroll-section>
      <Parallax pages={4}>

        <ParallaxLayer
          offset={0}
          speed={0.2}
          factor={1}
          style={{
            backgroundImage: `url(${cloudlogo})`,
            backgroundSize: 'cover',
          }}
        >
          <h1> I'm a </h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.5}
          speed={0.2}
          factor={1}
        >
          <h1>GdSC Project</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.2}
          factor={1}
          style={{
            backgroundImage: `url(${cloudlogo})`,
          }}
        >
          <h1>Head Web</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.5}
          speed={0.2}
        >
          <h1>Head Web</h1>
        </ParallaxLayer>

      </Parallax>
    </Container>
  );
}

export default Cloud;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  font-family: 'Google Sans', sans-serif;
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  * {
    scrollbar-width: none;
  }

  * {
    overflow: -moz-scrollbars-none;
  }

  ${({ theme }) => theme.tablet`
    min-height: calc(var(--vh, 1vh) * 100);
  `}
`;
