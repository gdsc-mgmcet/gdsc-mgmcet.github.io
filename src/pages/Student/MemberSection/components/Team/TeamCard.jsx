import React, { useCallback, useContext, useState } from "react";
import styled, { css } from "styled-components";
import { MouseContext } from "../../../../../context/MouseContext";
import { theme } from "../../../../../styles/global-theme";

function TeamCard({
  key,
  name,
  linkedin,
  profile,
  gender,
  department,
  position,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const { cursorChangeHandler } = useContext(MouseContext);

  const cursorChangeLinkedInHandler = useCallback(() => {
    // console.log('click')
    cursorChangeHandler("LinkedIn");
  }, [cursorChangeHandler]);

  const cursorChangeEmptyHandler = useCallback(() => {
    cursorChangeHandler("");
  }, [cursorChangeHandler]);

  const getRandomColor = () => {
    const colors = ["#ED9D97", "#A0C3FF", "#FFE168", "#7BCFA9"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      onMouseEnter={cursorChangeLinkedInHandler}
      onMouseLeave={cursorChangeEmptyHandler}
    >
      <CardContainer
        onMouseEnter={handleCardFlip}
        onMouseLeave={handleCardFlip}
      >
        <a href={linkedin} target="__blank">
          <CardSide className={isFlipped ? "flipped" : ""}>
            <CardFront bgColor={getRandomColor()}>
              <TopSection>
                <TopHorizontalLine />
                <TopLeftText>GDSC MGMCET 2023-24</TopLeftText>
              </TopSection>
              <CenterSection>
                <LargeText>{department}</LargeText>
              </CenterSection>
              <BottomSection>
                <SmallText>[{gender}]</SmallText>
              </BottomSection>
            </CardFront>
            <CardBack bgColor={getRandomColor()}>
              <ProfileContainer>
                <ProfileImage
                  className={isFlipped ? "visible" : "hidden"}
                  src={
                    profile !== ""
                      ? `/assets/Profile/${profile}`
                      : gender === "He"
                      ? "/assets/Profile/male.png"
                      : "/assets/Profile/female.png"
                  }
                  alt="Profile"
                />
                <CardBackContent>
                  <Name>{name}</Name>
                  <Title>
                    {position} {department}
                  </Title>
                </CardBackContent>
              </ProfileContainer>
            </CardBack>
          </CardSide>
        </a>
      </CardContainer>
    </div>
  );
}

const CardContainer = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  perspective: 1000px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  // color: white;
`;

const CardSide = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /*  */
  /* transform: rotateY(180deg); */
  &.flipped {
    /* transform: rotateY(180deg); */
    transform: rotateY(0deg);
    ${({ theme }) => theme.mobile`
    transform: rotateY(0deg);
  `}
  }
`;

const CardFront = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  backface-visibility: hidden;
  padding: 10px 10px 0 10px;
  box-sizing: border-box;
  // background-color: ${(props) => props.bgColor};
  background: #666666;
  z-index: 2;
  color: white;

  /*  */
  opacity: 0;
  ${({ theme }) => theme.mobile`
      opacity: 0;
  `}
`;

const gradientBackground = (props) => css`
  background: linear-gradient(
    45deg,
    white 0%,
    rgba(
        ${parseInt(props.bgColor.slice(1, 3), 16)},
        ${parseInt(props.bgColor.slice(3, 5), 16)},
        ${parseInt(props.bgColor.slice(5, 7), 16)},
        0.4
      )
      50%,
    white 100%
  );
`;

const CardBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  // background-color: ${(props) => props.bgColor};
  ${gradientBackground}

  /*  */
  transform: rotateY(0deg);
  border: 5px solid ${theme.color.darkgrey};
    border-radius: 10px;
    text-align: center;
  ${({ theme }) => theme.mobile`
  transform: rotateY(0deg);
  border: 5px solid #121212;
    border-radius: 10px;
    text-align: center;
  `}
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 10px;
  object-fit: contain;

  ${({ theme }) => theme.tablet`
    width: 100px;
    height: 100px;
`}
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 12px;
`;

const CardBackContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // color: white;
`;

const TopHorizontalLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 2px solid white;
  margin: 10px 0 5px;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 0;
`;

const TopLeftText = styled.div`
  font-size: 12px;
  text-align: left;
`;

const CenterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LargeText = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: left;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  width: 100%;
  margin-top: 5px;
`;

const SmallText = styled.div`
  margin: 10px;
  font-size: 10px;
  text-align: left;
  font-weight: bold;
`;

export default TeamCard;
