import styled from 'styled-components';
import { SubHeaderLine } from '../../../constants/constants';

function SubHeader() {
  return (
    <Container>
      <Span>{SubHeaderLine}</Span>
    </Container>
  );
}

export default SubHeader;

const Container = styled.div`
  width: 90%;
  padding-top: 5vh;
  padding-bottom: 2vh;

  border-bottom: 3px solid ${(props) => props.theme.lightColor.dark};

  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

const Span = styled.span`
  font-size: 20px;
  font-weight: 300;
  color: ${(props) => props.theme.backgroundColor.dark};

  ${({ theme }) => theme.mobile`
    font-size: 14px;
  `}
`;
