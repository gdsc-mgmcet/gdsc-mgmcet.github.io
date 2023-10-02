import { SubHeader } from '../../../components/Header/SubHeader';
import { useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';

import Card from '../Card/Card';

function MainSection() {
  const { color } = useTheme();
  const cardsRef = useRef([]);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const onClickContainer = () => {
    cardsRef.current.forEach((cardRef) => cardRef.update());
  };

  return (
    <Container data-scroll-section onClick={onClickContainer} id="home-container-mainsection">
      <OffsetWrapper data-scroll data-scroll-speed={`-10`}>
        <SubHeader />
        <CardContainer>
          <CardWrapper
            onMouseEnter={() => setHoveredCardIndex(1)}
            onMouseLeave={() => setHoveredCardIndex(null)}
            isHovered={hoveredCardIndex === 1}
          >
            {/* {hoveredCardIndex === 1 && ( */}
              <TitleSpan className="yellow" isHovered={hoveredCardIndex === 1}>Tech</TitleSpan>
            {/* )} */}
            <CardHeight>
              <Card
                leftText={'01'}
                rightText={'Developer'}
                color={color.green}
                linkTarget={'/developer'}
                ref={(el) => {
                  cardsRef.current[1] = el;
                }}
                isHovered={hoveredCardIndex === 1}
              />
            </CardHeight>
          </CardWrapper>
          <CardWrapper
            onMouseEnter={() => setHoveredCardIndex(2)}
            onMouseLeave={() => setHoveredCardIndex(null)}
            isHovered={hoveredCardIndex === 2}
          >
            {/* {hoveredCardIndex === 2 && ( */}
              <TitleSpan className="red" isHovered={hoveredCardIndex === 2}>Team</TitleSpan>
            {/* )} */}
            <CardHeight>
              <Card
                leftText={'02'}
                rightText={'Student'}
                color={color.blue}
                linkTarget={'/student'}
                ref={(el) => {
                  cardsRef.current[2] = el;
                }}
                isHovered={hoveredCardIndex === 2}
              />
            </CardHeight>
          </CardWrapper>
          <CardWrapper
            onMouseEnter={() => setHoveredCardIndex(3)}
            onMouseLeave={() => setHoveredCardIndex(null)}
            isHovered={hoveredCardIndex === 3}
          >
            {/* {hoveredCardIndex === 3 && ( */}
              <TitleSpan className="blue" isHovered={hoveredCardIndex === 3}>Event</TitleSpan>
            {/* )} */}
            <CardHeight>
              <Card
                leftText={'03'}
                rightText={'Clubs'}
                color={color.yellow}
                linkTarget={'/event'}
                ref={(el) => {
                  cardsRef.current[3] = el;
                }}
                isHovered={hoveredCardIndex === 3}
              />
            </CardHeight>
          </CardWrapper>
        </CardContainer>
      </OffsetWrapper>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, white 0%, ${(props) => props.theme.color.offwhite} 100%);
  position: relative;
  z-index: 10;

  font-family: 'Google Sans';

  ${({ theme }) => theme.tablet`
    height: calc(var(--vh, 1vh) * 100);
  `}
`;

const OffsetWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleSpan = styled.span`
  display: inline-block;

  height: 30vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 4.7vw;
  font-weight: 500;
  letter-spacing: 3.6px;

  pointer-events: none;

  &.green {
    color: ${(props) => props.theme.color.green};
  }

  &.red {
    color: ${(props) => props.theme.color.red};
  }

  &.blue {
    color: ${(props) => props.theme.color.blue};
  }

  &.yellow {
    color: ${(props) => props.theme.color.yellow};
  }

  transition: color 0.3s ease, transform 0.3s ease; /* Added transition for color and transform */

`;

const CardHeight = styled.div`
  width: 100%;
  height: 45vh;
`;

const CardContainer = styled.div`
  width: 100%;
  flex: 1;
  padding-bottom: 12.5vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5%;
`;

const CardWrapper = styled.div`
width: ${(props) => (props.isHovered ? '22vw' : '18vw')};

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
opacity: ${(props) => (props.isHovered ? 1 : 0.7)};
cursor: pointer;

transition: width 1.05s ease; /* Added transition for width */

&:hover {
  width: 25vw;
  opacity: 1;
}
`;

export default MainSection;
