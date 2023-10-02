import DinosaurGif from "../../assets/images/notsensible.gif"; // Import the DinosaurGif image
import { Link } from "react-router-dom"; // Import the Link component from 'react-router-dom'
import styled from "styled-components"; // Import the styled-components library
import {
  Page404Line1,
  Page404Line2,
  Page404Line3,
} from "../../constants/constants";

function Page404() {
  return (
    <Container>
      {" "}
      {/* Main container */}
      <DinosaurImage src={DinosaurGif} alt="DinosaurGif" />
      <H1>{Page404Line1}</H1> {/* Main heading */}
      <Span>{Page404Line2}</Span> {/* Subtitle */}
      <BackToMain to={"/"}>{Page404Line3}</BackToMain>{" "}
      {/* Link to the main page */}
    </Container>
  );
}

export default Page404; // Export the Page404 component

// Styled components for styling

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  font-family: "Google Sans", sans-serif;
  background-color: ${(props) => props.theme.backgroundColor.white};

  ${({ theme }) => theme.tablet`
    height: calc(var(--vh, 1vh) * 100);
  `}
`;

const DinosaurImage = styled.img`
  margin-bottom: 10vh;
  height: 50%;

  ${({ theme }) => theme.mobile`
    width: 80vw;
  `}
`;

const H1 = styled.h1`
  font-size: 70px;
  margin-bottom: 1.5vh;

  ${({ theme }) => theme.mobile`
    font-size: 36px;
  `}
`;

const Span = styled.span`
  font-size: 1.5vw;
  margin-bottom: 5vh;

  ${({ theme }) => theme.mobile`
    font-size: 12px;
  `}
`;

const BackToMain = styled(Link)`
  font-size: 32px;
  font-weight: 600;

  padding: 16px 32px;

  border: 2px solid ${(props) => props.theme.backgroundColor.black};
  border-radius: 32px;

  cursor: pointer;
  margin-bottom: 10vh;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.backgroundColor.black};
    color: ${(props) => props.theme.backgroundColor.white};
  }

  ${({ theme }) => theme.mobile`
    font-size: 16px;

    padding: 12px 24px;
  `}
`;
