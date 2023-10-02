import GDSCLogo from '../../../../assets/images/gdsclogo.png';
import styled from 'styled-components';

function LogoSection() {
  // Function to handle mousemove event and update the image tilt
  const handleMouseMove = (e) => {
    const logo = document.querySelector('.tilt-img');
    const { clientX, clientY } = e;

    // Calculate the rotation values based on mouse position
    const xRotation = (clientY / window.innerHeight) * 10 - 5;
    const yRotation = (clientX / window.innerWidth) * 10 - 5;

    // Apply the rotation to the image using CSS transform
    logo.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  };

  // Function to reset the image tilt
  const handleMouseLeave = () => {
    const logo = document.querySelector('.tilt-img');
    logo.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <Container
      data-scroll
      data-scroll-position="top"
      data-scroll-speed="2"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <LogoImg src={GDSCLogo} alt="GDSCLogo" width={200} height={200} className="tilt-img" />
    </Container>
  );
}

export default LogoSection;

const Container = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoImg = styled.img`
  margin-top: auto;

  ${({ theme }) => theme.mobile`
    margin-bottom: 16px;
  `};
`;
