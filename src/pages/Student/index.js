import { LinkedInCursor } from '../../components/LinkedInCursor';
import { LoadingScreen } from '../../components/LoadingScreen';
import { LocomotiveScrollProvider, MouseContextProvider } from '../../context';
import { TransitionColorContext } from '../../context/TransitionColorContext';
import { useHandleAnimationScroll, useMediaQuery, useMount } from '../../hooks';
import { MEDIA_QUERIES } from '../../styles/media';
import { useContext, useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import Banner from './Banner/Banner';
import { MemberSection } from './MemberSection';
import Footer from './Footer/Footer';

function StudentPage() {
  const { handleAnimationStart, handleAnimationComplete } = useHandleAnimationScroll();
  const { transitionColorHandler } = useContext(TransitionColorContext);
  const { color } = useTheme();
  const isMobileOrTablet = useMediaQuery(MEDIA_QUERIES.TABLET);

  const containerRef = useRef(null);

  useMount(() => {
    transitionColorHandler(color.blue);
  });

  return (
    <>
      <LocomotiveScrollProvider.Vertical containerRef={containerRef}>
        <Container data-scroll-container ref={containerRef}>
          <Banner />
          <MouseContextProvider>
            <MemberSection />
            {isMobileOrTablet ? null : <LinkedInCursor />}
          </MouseContextProvider>
          <Footer />
        </Container>
      </LocomotiveScrollProvider.Vertical>
      <LoadingScreen
        handleAnimationStart={handleAnimationStart}
        handleAnimationComplete={handleAnimationComplete}
      />
    </>
  );
}

export default StudentPage;

const Container = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  font-family: 'Google Sans', sans-serif;
  perspective: 1px; // for locomotive-scroll element disappearance bug fix.
  background-color: ${(props) => props.theme.backgroundColor.white};

  content-visibility: auto;
`;