import { useLocomotiveScrollPosition, useWindowSize } from '../../../hooks';
import styled from 'styled-components';

import { BackgroundVideo, GoBackArrow, SearchBar } from '../components';
import { GDSCCOORDINATOR, GDSCCOORDINATORCONNECT } from '../../../constants/constants';

function Hero() {
  const scrollPos = useLocomotiveScrollPosition(10, false);
  const { height } = useWindowSize();

  return (
    <Container data-scroll-section id="aboutus-container">
      <MainWrapper data-scroll data-scroll-sticky data-scroll-target="#aboutus-container">
        <TextSection>
          <MainSpan blur={scrollPos / 40} opacity={Math.max(1 - scrollPos / height, 0)}>
            Want to know us?
          </MainSpan>
          <SearchBar translateZ={scrollPos / 6} />
        </TextSection>
      </MainWrapper>
      <TextWrapper>
        <H1>Welcome to GDSC MGMCET!</H1>
        <P>
          Ignite Your Tech Passion with <a href="https://gdsc.community.dev/mgms-college-of-engineering-and-technology-navi-mumbai/" target="_blank"><BLUE>MGM CET's GDSC Chapter!</BLUE></a>  Join our pixel-powered party, where bugs are just disco lights and code is the dance floor. Let's geek out, create wonders, and sprinkle a little coding stardust together! 🎉 Let's turn bugs into features and errors into laughter – welcome to MGM CET's GDSC Chapter.👾
        </P>
      </TextWrapper>
      <TextWrapper2>
        <H1>Expressing Gratitude</H1>
        <P>
          • Our heartfelt gratitude to <a href={GDSCCOORDINATORCONNECT} target="_blank"><BLUE>{GDSCCOORDINATOR}</BLUE></a> Ma'am, Our GDSC Coordinator, for her invaluable support, guidance, and motivation.
          <br />
          • Our sincere thanks to <a href="https://github.com/gdsc-ys" target="_blank"><BLUE>GDSC-YS</BLUE></a> for their valuable guidance in our portfolio.
        </P>
      </TextWrapper2>
      <BackgroundVideo />
      <GoBackArrow />
    </Container>
  );
}

export default Hero;

const Container = styled.div`
  width: 100vw;
  height: auto; /* Adjust as needed based on your content */

  background-color: ${(props) => props.theme.backgroundColor.black};

  font-family: 'Google Sans', sans-serif;
`;

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;
  z-index: 10;

  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: transparent;

  ${({ theme }) => theme.tablet`
    height: calc(var(--vh, 1vh) * 100);
  `}
`;

const TextSection = styled.div`
  width: 100%;
  height: 100vh;

  padding: 0 3%;

  position: relative;

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2.5vw;

  background-color: transparent;

  z-index: 4;

  @media screen and (max-width: 1350px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    gap: 5vh;
  }

  ${({ theme }) => theme.tablet`
    height: calc(var(--vh, 1vh) * 100);
  `}
`;

const MainSpan = styled.span.attrs((props) => ({
  style: {
    filter: `blur(${props.blur}px)`,
    opacity: `${props.opacity}`,
  },
}))`
  display: inline-block;
  font-size: 100px;

  background-color: transparent;

  color: ${(props) => props.theme.backgroundColor.white};

  filter: blur(${(props) => `${props.blue}px`});

  @media screen and (max-width: 1350px) {
    font-size: 120px;
  }

  ${({ theme }) => theme.mobile`
    font-size: 72px;
  `}
`;

const TextWrapper = styled.main`
  width: 80vw;
  height: 80vh;

  margin-left: 10vw;
  margin-top: 260vh;
  padding: 3%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 5vh;

  position: relative;
  z-index: 10;

  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.4);

  border-radius: 32px;

  ${({ theme }) => theme.tablet`
    height: calc(var(--vh, 1vh) * 100);

    margin-top: 240vh;
  `}

  ${({ theme }) => theme.mobile`
    height: 120vh;

    margin-top: 220vh;
  `}
`;

const TextWrapper2 = styled.main`
  width: 80vw;
  height: auto; /* Adjust as needed based on your content */

  margin-bottom: 5vw;
  margin-top: 5vw;
  margin-left: 10vw;
  padding: 3%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 5vh;

  position: relative;
  z-index: 10;

  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.4);

  border-radius: 32px;

  ${({ theme }) => theme.tablet`
    height: auto; /* Adjust as needed based on your content */
  `}
  
  ${({ theme }) => theme.mobile`
    height: auto; /* Adjust as needed based on your content */
  `}
`;

const H1 = styled.h1`
  font-size: 72px;
  color: ${(props) => props.theme.backgroundColor.white};

  ${({ theme }) => theme.mobile`
    font-size: 36px;
  `}
`;

const P = styled.p`
  font-size: 24px;
  color: ${(props) => props.theme.backgroundColor.white};

  line-height: 1.2;

  ${({ theme }) => theme.mobile`
    font-size: 16px;
  `}
`;

const BLUE= styled.span`
  color: #4285F4;
  cursor: pointer;
`;  