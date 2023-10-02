import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Slide({ content, index, onFocus, activeIndex, URL }) {
  const onClickSlide = () => {
    onFocus(index);
  };

  return (
    <>
    {index == activeIndex && window.innerWidth > 768 ? (
        <SlideContainer1
        onClick={onClickSlide}
        layout
        layoutId={index + ""}
        whileHover={{
          borderRadius: 0,
          transition: {
            duration: 0.1,
          },
        }}
        isCentered={index === activeIndex}
      >
        <ImageWrapper1>
          <ImageBackground1>
            <Image1 src={require(`/public/assets/events-poster/${content.logo}`)} />
          </ImageBackground1>
          <Title1>{content.name}</Title1>
        </ImageWrapper1>
        <ContentWrapper1>
          <Description1>{content.description}</Description1>
          {
              content.active ? (
                <JoinButton1><a href={content.eventURL[0]} target="__blank">Join Us</a></JoinButton1>
                ):(
                  <a href={content.eventURL[0]} target="__blank">< JoinButton1> Check me </JoinButton1></a>
              )
            }
        </ContentWrapper1>
      </SlideContainer1>
      ):(
        <SlideContainer
          onClick={onClickSlide}
          layout
          layoutId={index + ""}
          whileHover={{
            borderRadius: 0,
            transtiion: {
              duration: 0.1,
            },
          }}
          whileInView={{
            transform: "none",
          }}
          isCentered={index === activeIndex} // Check if the current card is centered
        >
          {/* {(content.active) ? <Badge>ongoing</Badge> : null} */}
          <Image src={require(`/public/assets/events-poster/${content.logo}`)} />
          <DescWrapper>
            <Name>{content.name}</Name>
            <Description>
              {index == activeIndex && window.innerWidth > 768 ? content.description : null}
            </Description>
            {
              content.active ? (
                <a href={content.eventURL[0]} target="__blank">< JoinButton1>Join Us</JoinButton1></a>
                ):(
                  <a href={content.eventURL[0]} target="__blank">< JoinButton1> Check me </JoinButton1></a>
              )
            }
          </DescWrapper>
        </SlideContainer>
      )
    }
      
    </>
  );
}

export default Slide;

const SlideContainer = styled(motion.div)`
  width: 20vw;
  height: 450px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: black;
  overflow: hidden;
  cursor: pointer;
  padding: 15px;
  // position: relative;

  ${({ theme }) => theme.tablet`
    width: 80%;
  `}

  ${({ isCentered }) => isCentered && `
    /* Add styles for the centered card */
    // width: 50vw;
    // flex-grow: 2;
    // margin: 0 auto;
  `}
`;

const Badge = styled.div`
  position: absolute;
  top: 25px;
  right: 125px;
  padding: 3px;
  transform: rotate(45deg);
  transform-origin: center center;
  text-align: center;
  width: 150px;
  background-color: #E63131;
  color: ${(props) => props.theme.backgroundColor.white};
`

const ImageWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  /* justify-content: center;
  align-items: center; */
`;

const ImageBackground = styled.div`
  /* width: 175px;
  height: 175px; */
  width: 100%;
  display: flex;
  /* justify-content: center;
  align-items: center;

  border-radius: 25px; */

  background-color: ${(props) => props.theme.backgroundColor.white};
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 7px;
`;

const DescWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  /* padding: 3% 10%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4vw; */
`;

const Index = styled.span`
  font-size: 64px;

  color: ${(props) => props.theme.backgroundColor.white};
`;

const Name = styled.span`
  display: inline-block;
  font-size: 26px;
  font-weight: bold;
  line-height: 1.2;
  color: ${(props) => props.theme.backgroundColor.white};
  /* white-space: nowrap; */
  text-overflow: ellipsis;

  margin-bottom: 10px;

  ${({ theme }) => theme.mobile`
    font-size: 20px;
  `}
`;

const Description = styled.span`
  display: -webkit-box;
  text-align: justify;
  margin-bottom: 10px;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${(props) => props.theme.backgroundColor.white};
`;


const SlideContainer1 = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Add space between image/title and description/button */
  width: 100%;
  height: 450px;
  background-color: black;
  overflow: hidden;
  cursor: pointer;
  padding: 15px;
  border-radius: 10px;

  ${({ theme }) => theme.tablet`
    width: 80%;
  `}

  ${({ isCentered }) =>
    isCentered &&
    `
    /* Add styles for the centered card */
    width: 60vw;
    margin: 0 0;
  `}
`;

const ImageWrapper1 = styled.div`
  flex: 1; /* Make image/title take up half the width */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center image and title horizontally */
  justify-content: center; /* Center image and title vertically */
  width: 50%;
`;

const Badge1 = styled.div`
  position: absolute;
  top: 25px;
  right: -185%;
  padding: 3px;
  transform: rotate(45deg);
  transform-origin: center center;
  text-align: center;
  width: 150px;
  background-color: #E63131;
  color: ${(props) => props.theme.backgroundColor.white};
`

const ImageBackground1 = styled.div`
  width: 250px; /* Increase image size */
  height: 250px; /* Increase image size */
  border-radius: 7px; /* Make image round */
  background-color: ${(props) => props.theme.backgroundColor.white};
  overflow: hidden; /* Hide overflow if image is larger */
`;

const Image1 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cover the entire container */
`;

const ContentWrapper1 = styled.div`
  flex: 1; /* Make description/button take up half the width */
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  align-items: center; /* Align text content to the left */
  justify-content: center; /* Add space between description and button */
`;

const Title1 = styled.span`
  font-size: 26px;
  font-weight: bold;
  line-height: 1.2;
  color: ${(props) => props.theme.backgroundColor.white};
  margin-top: 20px;

  ${({ theme }) => theme.mobile`
    font-size: 24px;
  `}
`;

const Description1 = styled.span`
  text-align: justify;
  color: ${(props) => props.theme.backgroundColor.white};
  font-size: 20px;
  font-weight: 100px;
  letter-spacing: 1px;
`;

const JoinButton1 = styled.button`
  background-color: #E63131;
  display: flex;
  justify-content: center;
  width: 100px;
  color: ${(props) => props.theme.backgroundColor.white};
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 20px; /* Move the button to the bottom */
`;