import { LoadingScreen } from '../../components/LoadingScreen';
import { LocomotiveScrollProvider } from '../../context';
import { TransitionColorContext } from '../../context/TransitionColorContext';
import { useHandleAnimationScroll, useMount } from '../../hooks';
import { useContext, useRef } from 'react';
import styled, { useTheme } from 'styled-components';

import Banner from './Banner/Banner';
import Introduction from './Introduction/Introduction';
import MLSection from './JamSection/ML';
import MobileSection from './JamSection/Mobile';
import WebSection from './JamSection/Web';

function DeveloperPage() {
  const { handleAnimationStart, handleAnimationComplete } = useHandleAnimationScroll();

  const { transitionColorHandler } = useContext(TransitionColorContext);
  const { color } = useTheme();
  const containerRef = useRef(null);

  useMount(() => {
    transitionColorHandler(color.green);
  });

  return (
    <>
      <LocomotiveScrollProvider.Vertical containerRef={containerRef}>
        <Container data-scroll-container ref={containerRef}>
          <Banner />
          <Introduction />
          <WebSection />
          <MobileSection />
          <MLSection />
        </Container>
      </LocomotiveScrollProvider.Vertical>
      <LoadingScreen
        handleAnimationStart={handleAnimationStart}
        handleAnimationComplete={handleAnimationComplete}
      />
    </>
  );
}

export default DeveloperPage;

const Container = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  font-family: 'Google Sans', sans-serif;
  perspective: 1px; // for locomotive-scroll element disappearance bug fix.
  background-color: ${(props) => props.theme.backgroundColor.white};
`;
