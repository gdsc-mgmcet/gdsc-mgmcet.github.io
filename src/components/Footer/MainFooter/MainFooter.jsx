import { TransitionColorContext } from '../../../context/TransitionColorContext';
import getRandomArbitrary from '../../../utils/getRandomArbitraryNumber';
import styled, { useTheme } from 'styled-components';
import { useContext } from 'react';
import { DelayedLink } from '../../DelayedLink';
import { TRANSITION_DURATION } from '../../../constants/constants';

function MainFooter() {
  const { transitionColorHandler } = useContext(TransitionColorContext);
  const { color } = useTheme();

  const handleLinkClick = () => {
    transitionColorHandler(color.darkgrey);
  };

  return (
    <Container>
      <LeftEnd data-scroll-section onClick={handleLinkClick}>
      <DelayedLink to={'/aboutUs'} delay={TRANSITION_DURATION}>
          {[..."About"].map((letter) => {
            return (
              <LeftSpan
                data-scroll
                data-scroll-position="top"
                data-scroll-speed={`${getRandomArbitrary(2, 5)}`}
              >
                {letter}
              </LeftSpan>
            );
          })}
        </DelayedLink>
      </LeftEnd>
    </Container>
  );
}

export default MainFooter;

const Container = styled.footer`
  width: 100%;
  min-height: 50px;

  padding: 0 15px;
  border: 1.2px solid #dadce0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0.6;
  background-color: ${(props) => props.theme.color.offwhite};
  font-family: 'Google Sans', sans-serif;
`;

const LeftEnd = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;
`;

const LeftSpan = styled.span`
  display: inline-block;

  font-size: 18px;
  color: ${(props) => props.theme.backgroundColor.black};

  white-space: pre;
  letter-spacing: 0.3px;
  font-weight: bold;

  ${({ theme }) => theme.mobile`
    font-size: 12px;
  `}
`;