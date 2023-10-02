import { ReactComponent as SiJupyter } from '../../../../assets/images/icons/ML/jupyter.svg';
import { ReactComponent as SiNumpy } from '../../../../assets/images/icons/ML/numpy.svg';
import { ReactComponent as SiPandas } from '../../../../assets/images/icons/ML/pandas.svg';
import { ReactComponent as SiPytorch } from '../../../../assets/images/icons/ML/pytorch.svg';
import { ReactComponent as SiTensorflow } from '../../../../assets/images/icons/ML/tensorflow.svg';
import { ReactComponent as SiPython } from '../../../../assets/images/icons/python.svg';
import { useOnScreen } from '../../../../hooks';
import { useRef } from 'react';
import { Tooltip } from 'react-tooltip';
import { TypeAnimation } from 'react-type-animation';
import styled from 'styled-components';
function MLSection() {
  const observerRef = useRef(null);
  const observerRefSecond = useRef(null);
  const onScreen = useOnScreen(observerRef);
  const onScreenSecond = useOnScreen(observerRefSecond);

  const setTooltip = (content) => {
    return {
      'data-tooltip-id': 'ml-tooltip',
      'data-tooltip-content': content,
      'data-tooltip-place': 'bottom',
      'data-tooltip-hide': 0.5,
    };
  };

  return (
    <Container data-scroll-section>
      <ContentWrapper id="fixed-element-ML">
        <LeftSection>
          <OutlineContainer data-scroll data-scroll-sticky data-scroll-target="#fixed-element-ML">
            <H1>03.</H1>
            <H2>Artificial Intelligence / Machine Learning</H2>
            <Paragraph>
            Presenting cutting-edge technology at the forefront of the IT industry's evolution. <br />
            Our ML study jam prioritizes top-tier model training and customized services, defining new 
            standards of excellence.
            </Paragraph>
          </OutlineContainer>
        </LeftSection>
        <RightSection>
          <SectionWrapper ref={observerRef} id="ml-section-wrapper-first">
            <TitleWrapperFirst
              data-scroll
              data-scroll-sticky
              data-scroll-target="#ml-section-wrapper-first"
            >
              {onScreen && (
                <TypeAnimation sequence={['What we do']} speed={50} wrapper={'span'} repeat={1} />
              )}
            </TitleWrapperFirst>
            <LearnList>
              <List>Learn the fundamentals of AI / ML & basic model optimization.</List>
              <List>Review the latest paper in order to catch up with the industry.</List>
              <List>Manage Dataflow & build model pipeline using Huggingface, WanDB.</List>
              <List>Build basic Pytorch template for further competition.</List>
              <List>Inspect ML ideas with respect to mathematical approach.</List>
            </LearnList>
          </SectionWrapper>
          <SectionWrapper ref={observerRefSecond} id="ml-section-wrapper-second">
            <TitleWrapperSecond
              data-scroll
              data-scroll-sticky
              data-scroll-target="#ml-section-wrapper-second"
            >
              {onScreenSecond && (
                <TypeAnimation
                  sequence={['What we learn']}
                  speed={50}
                  wrapper={'span'}
                  repeat={1}
                />
              )}
            </TitleWrapperSecond>
            <IconList>
              <IconName>Languages</IconName>
              <IconWrapper>
                <SiPython {...setTooltip('Python')} />
              </IconWrapper>
            </IconList>
            <IconList>
              <IconName>ML Frameworks & Libraries</IconName>
              <IconWrapper>
                <SiNumpy {...setTooltip('Numpy')} />
                <SiPandas {...setTooltip('Pandas')} />
                <SiJupyter {...setTooltip('Jupyter')} />
              </IconWrapper>
              <IconWrapper>
                <SiPytorch {...setTooltip('Pytorch')} />
                <SiTensorflow {...setTooltip('TensorFlow')} />
              </IconWrapper>
            </IconList>
          </SectionWrapper>
          
        </RightSection>
      </ContentWrapper>
      <Tooltip id="ml-tooltip" />
    </Container>
  );
}

export default MLSection;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: relative;
  z-index: 2;

  color: ${(props) => props.theme.backgroundColor.white};

  perspective: 1px;

  ${({ theme }) => theme.tablet`
    min-height: calc(var(--vh, 1vh) * 100);
  `}
`;

const ContentWrapper = styled.div`
  width: 100%;
  flex-grow: 1;

  position: relative;

  display: flex;
`;

const LeftSection = styled.div`
  width: 35%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const OutlineContainer = styled.div`
  position: relative;
  z-index: 0;

  padding-top: 25vh;
  padding-right: 20%;
  padding-left: 10%;
  padding-bottom: 20vh;
`;

const H1 = styled.h1`
  font-size: 88px;
  color: ${(props) => props.theme.backgroundColor.black};

  ${({ theme }) => theme.mobile`
    font-size: 9vw;
  `}
`;

const H2 = styled.h2`
  display: inline-block;
  font-size: 30px;
  color: ${(props) => props.theme.backgroundColor.black};

  ${({ theme }) => theme.mobile`
    font-size: 3.5vw;
  `}
`;

const Paragraph = styled.p`
  margin-top: 5vh;

  font-size: 16px;
  font-weight: 400;
  white-space: pre-line;
  line-height: 1.3;

  color: ${(props) => props.theme.backgroundColor.black};

  ${({ theme }) => theme.mobile`
    font-size: 2vw;
  `}
`;

const RightSection = styled.div`
  width: 65%;

  padding: 3% 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  overflow: hidden;
  background-color: ${(props) => props.theme.color.green};
`;

const SectionWrapper = styled.div`
  width: 100%;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 15vh;
  padding: 7% 0;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: 1000;

  background-color: ${(props) => props.theme.color.green};

  span {
    font-weight: 500;

    &::after {
      // cursor styling
      color: ${(props) => props.theme.brightColor.green};
    }
  }

  ${({ theme }) => theme.mobile`
    height: 10vh;
  `}
`;

const TitleWrapperFirst = styled(TitleWrapper)`
  span {
    font-size: 8vw;
  }
`;

const LearnList = styled.ul`
  width: 100%;

  padding: 3% 12%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.3vh;

  list-style-type: decimal;
`;

const List = styled.li`
  font-size: 1.7vw;
  font-weight: 400;

  ${({ theme }) => theme.mobile`
    font-size: 2vw;
  `}
`;

const TitleWrapperSecond = styled(TitleWrapper)`
  span {
    font-size: 7vw;
  }
`;

const IconList = styled.div`
  width: 100%;

  padding: 5% 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.3vh;
`;

const IconName = styled.div`
  width: 100%;

  font-size: 3vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  width: 100%;
  padding: 3% 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  // Icon Styling
  svg {
    width: 5vw;
    height: 5vw;
    cursor: pointer;

    path {
      fill: ${(props) => props.theme.lightColor.green};
      transition: fill 0.1s ease-in;
    }

    &:hover {
      path {
        fill: ${(props) => props.theme.backgroundColor.white};
        /* fill: inherit; */
      }
    }
  }
`;