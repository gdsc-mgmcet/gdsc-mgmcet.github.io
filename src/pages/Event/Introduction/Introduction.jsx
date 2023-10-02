import React from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import styled from 'styled-components';
import Progress from '../Progress/Progress';

function Introduction() {
  const { scroll } = useLocomotiveScroll();

  return (
    <Container data-scroll-section>
      <Progress />
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
  // background: linear-gradient(white 0%, #B3B3B3 50%, #999999 100%);


  ${({ theme }) => theme.tablet`
    min-height: calc(var(--vh, 1vh) * 100);
  `}
`;

const LeadContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100vh;
  // background: linear-gradient(white 0%, #B3B3B3 150%);
`;

const CoreContainer = styled.div`
  flex: 1;
  width: 100%;
  // background: #B3B3B3;

  // height: 100vh;
`;

const TeamContainer = styled.div`
  flex: 1;
  width: 100%;
  // height: 200vh;
`;
