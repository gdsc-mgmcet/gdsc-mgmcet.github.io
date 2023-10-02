import { GmailGDSCMGMCET, TRANSITION_DURATION } from '../../../constants/constants';
import { TransitionColorContext } from '../../../context/TransitionColorContext';
import { DropdownIcon } from '../../DropdownIcon';
import { useComponentVisible } from '../../../hooks';
import DropdownList from '../../../pages/Home/Hero/components/DropdownList';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import styled, { useTheme } from 'styled-components';
import { useContext } from 'react';
import { DelayedLink } from '../../DelayedLink';

function MainHeader() {
  const { scroll } = useLocomotiveScroll();
  const { ref: outsideRef, isVisible, setIsVisible } = useComponentVisible();
  const { transitionColorHandler } = useContext(TransitionColorContext);
  const { color } = useTheme();
  
  const email = GmailGDSCMGMCET;
  const subject = encodeURIComponent('GDSC-MGMCET Mail');
  const mailtoLink = `mailto:${email}?subject=${subject}`;
  
  const handleLinkClick = () => {
    transitionColorHandler(color.yellow);
  };
  

  return (
    <>
      <Container data-scroll data-scroll-position="top" data-scroll-speed="0.1">
        <LeftEnd>
          <LeftGmailButton>
          <a href={mailtoLink}>Gmail</a>
          </LeftGmailButton>
          <LeftImagesButton onClick={handleLinkClick}>
            <DelayedLink to={'/clubs'} delay={TRANSITION_DURATION}>
              Images
            </DelayedLink>
          </LeftImagesButton>
        </LeftEnd>
        <RightEnd>
          <GmailButton>
          <a href={mailtoLink}>Gmail</a>
          </GmailButton>
          <ImagesButton onClick={handleLinkClick}>
            <DelayedLink to={'/clubs'} delay={TRANSITION_DURATION}>
              Images
            </DelayedLink>
          </ImagesButton>
          <DropdownIcon setIsVisible={setIsVisible} />
          <SinginButton
            className="Singin"
            onClick={() => {
              scroll.scrollTo('bottom', {
                duration: 600,
                easing: [0.06, 0.87, 0.11, 0.96],
              });
            }}
          >
            Signin
          </SinginButton>
        </RightEnd>
      </Container>
      <div ref={outsideRef}>{isVisible && <DropdownList />}</div>
    </>
  );
}

export default MainHeader;

const Container = styled.header`
  width: 100%;

  padding: 20px;

  display: flex;
  justify-content: space-between;

  font-family: 'Google Sans', sans-serif;
`;

const LeftEnd = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

const RightEnd = styled.div`
padding: 0 10px;

display: flex;
justify-content: center;
align-items: center;
gap: 16px;
`;

const SinginButton = styled.button`
  box-sizing: border-box;
  width: 80px;
  height: 36px;

  padding: 9px 15px;

  white-space: nowrap;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.25px;
  line-height: 16px;
  vertical-align: middle;

  background-color: ${(props) => props.theme.color.blue};
  color: ${(props) => props.theme.backgroundColor.white};
  border: 1px solid #4285f4;
  border-radius: 4px;

  cursor: pointer;
`;

const GmailButton = styled.button`

  white-space: nowrap;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.25px;
  line-height: 10px;
  vertical-align: middle;

  border: none;
  background: none;
  cursor: pointer;

  ${({ theme }) => theme.mobile`
    display: none;
  `}

`;

const ImagesButton = styled.button`

white-space: nowrap;
font-size: 14px;
font-weight: 400;
letter-spacing: 0.25px;
line-height: 10px;
vertical-align: middle;

border: none;
background: none;
cursor: pointer;

${({ theme }) => theme.mobile`
    display: none;
  `}

`;

const LeftGmailButton = styled.button`

  white-space: nowrap;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.25px;
  line-height: 10px;
  vertical-align: middle;

  border: none;
  background: none;
  cursor: pointer;
  display: none;

  ${({ theme }) => theme.mobile`
    display: block;
    font-size: 12px;
  `}

`;

const LeftImagesButton = styled.button`

  white-space: nowrap;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.25px;
  line-height: 10px;
  vertical-align: middle;

  border: none;
  background: none;
  cursor: pointer;
  display: none;

  ${({ theme }) => theme.mobile`
    display: block;
    font-size: 12px;
  `}

`;