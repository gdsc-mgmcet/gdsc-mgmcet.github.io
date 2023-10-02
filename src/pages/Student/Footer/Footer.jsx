import React from 'react';
import styled, {keyframes} from 'styled-components';
import { HiOutlineArrowNarrowDown } from '@react-icons/all-files/hi/HiOutlineArrowNarrowDown';
import { useLocomotiveScroll } from 'react-locomotive-scroll';


function Footer() {
  const { scroll } = useLocomotiveScroll();

  return (
    <Container data-scroll-section>
      <TitleContainer>
        <Title>
          Want to become part of our team?
        </Title>
      <Arrow />
      </TitleContainer>
      <TitleEnd>
        Not hiring at the moment, stay connected!
      </TitleEnd>
      <TopButton
        onClick={() => {
          scroll.scrollTo('top');
        }}
      >
        Take me to the top
      </TopButton>
    </Container>
  )
}

export default Footer;

const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  min-height: 250vh;
  position: relative; /* Added to make sure absolute positioning works */

  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.backgroundColor.white} 0%,
    ${(props) => props.theme.backgroundColor.black} 60%
  );

`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.div`
  font-size: 60px;
  padding: 5vh;

  ${({ theme }) => theme.mobile`
    font-size: 30px;
    padding: 5vh;
  `}
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(200px); /* Adjust the bounce distance as needed */
  }
`;

const Arrow = styled(HiOutlineArrowNarrowDown)`
  font-size: 300px; /* Initial size */
  font-weight: 300; /* Reduced weight */
  animation: ${bounce} 5s ease-in-out infinite;

  ${({ theme }) => theme.mobile`
    font-size: 150px; /* Smaller size for mobile */
    font-weight: 150; /* Reduced weight */

  `}
`;

const TitleEnd = styled.div`
  font-size: 60px;
  padding: 5vh;
  color: white;
  position: absolute;
  bottom: 250px;
  left: 20%;
  transform: translateX(-10%);
  text-align: center;

  ${({ theme }) => theme.mobile`
    font-size: 25px;
  `}
`;

const TopButton = styled.div`
  width: 350px;
  height: 50px;
  background-color: white;
  position: absolute;
  bottom: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  border-radius: 10px;
  transform: translateX(-50%);
  font-size: 20px;
  cursor: pointer;


  ${({ theme }) => theme.mobile`
    width: 150px;
    height: 30px;
    font-size: 14px;
  `}

  ${({ theme }) => theme.mobile`
    left: 35%;
    transform: translateX(-10%);
  `}
`;