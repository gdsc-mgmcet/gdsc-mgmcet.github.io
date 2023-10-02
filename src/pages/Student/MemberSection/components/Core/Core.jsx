import React from "react";
import styled, { keyframes } from "styled-components";
import Card from "./Card";
import { ReactComponent as ChromeIcon } from "../../../../../assets/images/icons/chrome.svg";
import { CoreTeamData } from "../../../../../constants/Team/data";

const cardData = [
  { id: 1, text: "Card 1" },
  { id: 2, text: "Card 2" },
  { id: 3, text: "Card 3" },
  { id: 1, text: "Card 1" },
  { id: 2, text: "Card 2" },
  { id: 3, text: "Card 3" },
  { id: 1, text: "Card 1" },
  { id: 2, text: "Card 2" },
  { id: 3, text: "Card 3" },
  // Add more card objects as needed
];

function Core() {
  return (
    <Container data-scroll>
      <TopSection>
        <BackgroundCore>
          <Letter color="#ea443560">C</Letter>
          <Letter color="#4285f460">O</Letter>
          <Letter color="#34a85360">R</Letter>
          <Letter color="#fbbc0560">E</Letter>
        </BackgroundCore>
        <LetterContainer data-scroll data-scroll-speed="6">
          <LetterC color="#EA4435"> C </LetterC>
        </LetterContainer>
        <LetterContainer data-scroll data-scroll-speed="6">
          <LetterO color="#4285F4"> O </LetterO>
        </LetterContainer>
        <LetterContainer data-scroll data-scroll-speed="6">
          <LetterR color="#34A853"> R </LetterR>
        </LetterContainer>
        <LetterContainer data-scroll data-scroll-speed="6">
          <LetterE color="#FBBC05"> E </LetterE>
        </LetterContainer>
      </TopSection>

      {/* <TopSection>
        <LetterContainer data-scroll data-scroll-speed="12">
          <LetterC color="red"> C </LetterC>
        </LetterContainer>
         <LetterContainer data-scroll data-scroll-speed="12">
          <LetterO color="blue"> O </LetterO>
        </LetterContainer>
        <LetterContainer data-scroll data-scroll-speed="12">
          <LetterR color="green"> R </LetterR>
        </LetterContainer>
        <LetterContainer data-scroll data-scroll-speed="12">
          <LetterE color="yellow"> E </LetterE>
        </LetterContainer>
      </TopSection> */}
      <BottomSection>
        <CardGrid>
          {CoreTeamData.map((core, idx) => (
            <Card
              key={idx}
              name={core.name}
              profile={core.profile}
              position={core.position}
              department={core.department}
              gender={core.gender}
              linkedin={core.linkedin}
            />
          ))}
        </CardGrid>
      </BottomSection>
    </Container>
  );
}

export default Core;

const Container = styled.div`
/* background-color: green; */
  display: flex;
  flex-direction: column;
  height: 250vh;
  width: 100vw;
`;

const TopSection = styled.div`
  flex: 1; /* Take up the first 100vh */
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.mobile`
    font-size: 5px;
  `}
`;

const BackgroundCore = styled.div`
  position: absolute;
  font-size: 500px;
  font-weight: 900;
  ${({ theme }) => theme.mobile`
    font-size: 180px;
    // display: none;
  `}
`;

const Letter = styled.span`
  /* border: 1px solid black; */
  color: transparent;
  -webkit-text-stroke-width: 7px;
  -webkit-text-stroke-color: ${(props) => props.color || "red"};
`;

const BottomSection = styled.div`
  flex: 2; /* Take up the next 200vh */
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
`;

const LetterContainer = styled.div`
  padding: 5px;
  margin: 10px;
`;

const LetterC = styled.div`
  font-size: 15em;
  color: ${(props) => props.color || "red"};
  display: inline-block;
  font-weight: 1000;
  position: relative; /* Add relative positioning */

  &:hover {
    /* Apply the flicker animation on hover */
    color: transparent;
    -webkit-text-stroke-width: 7px;
    -webkit-text-stroke-color: ${(props) => props.color || "red"};
  }
`;

const LetterO = styled.div`
  font-size: 15em;
  color: ${(props) => props.color || "red"};
  transition: text-shadow 0.3s;
  display: inline-block;
  font-weight: 1000;

  &:hover {
    color: transparent;
    -webkit-text-stroke-width: 7px;
    -webkit-text-stroke-color: ${(props) => props.color || "red"};
  }
`;

const LetterR = styled.div`
  font-size: 15em;
  color: ${(props) => props.color || "red"};
  transition: text-shadow 0.3s;
  display: inline-block;
  font-weight: 1000;

  &:hover {
    color: transparent;
    -webkit-text-stroke-width: 7px;
    -webkit-text-stroke-color: ${(props) => props.color || "red"};
  }
`;

const LetterE = styled.div`
  font-size: 15em;
  color: ${(props) => props.color || "red"};
  transition: text-shadow 0.3s;
  display: inline-block;
  font-weight: 1000;

  &:hover {
    color: transparent;
    -webkit-text-stroke-width: 7px;
    -webkit-text-stroke-color: ${(props) => props.color || "red"};
  }
`;

const CardGrid = styled.div`
  margin: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Show 4 cards in a row by default */
  gap: 15px; /* Adjust the gap between cards as needed */

  ${({ theme }) => theme.mobile`
    grid-template-columns: 1fr;
  `}

  ${({ theme }) => theme.tablet`
    grid-template-columns: repeat(2, 1fr); /* Show 2 cards in a row for tablets */
  `}
`;
