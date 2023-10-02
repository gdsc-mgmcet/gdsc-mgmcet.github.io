import { LoadingScreen } from '../../components/LoadingScreen';
import { LocomotiveScrollProvider, MouseContextProvider } from '../../context';
import { TransitionColorContext } from '../../context/TransitionColorContext';
import { useHandleAnimationScroll, useMount } from '../../hooks';
import { useContext, useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import Banner from './Banner/Banner';
import Introduction from './Introduction/Introduction';

function EventPage() {
  const { handleAnimationStart, handleAnimationComplete } = useHandleAnimationScroll();

  const { transitionColorHandler } = useContext(TransitionColorContext);
  const { color } = useTheme();
  const containerRef = useRef(null);


  useMount(() => {
    transitionColorHandler(color.yellow);
  });

  return (
    <>
      <LocomotiveScrollProvider.Vertical containerRef={containerRef}>
        <Container data-scroll-container ref={containerRef}>
          <Banner />
          <Introduction />
        </Container>
      </LocomotiveScrollProvider.Vertical>
      <LoadingScreen
        handleAnimationStart={handleAnimationStart}
        handleAnimationComplete={handleAnimationComplete}
      />
    </>
  );
}

export default EventPage;

const Container = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  font-family: 'Google Sans', sans-serif;
  perspective: 1px;
  background-color: ${(props) => props.theme.backgroundColor.white};
`;