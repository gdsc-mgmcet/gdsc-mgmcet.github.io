import 'css-doodle';

import { forwardRef } from 'react';
import styled from 'styled-components';

function BlossomDoodle({ shapeFrequency = 0.2 }, ref) {
  return (
    <Container>
      <css-doodle use="var(--rule)" ref={ref}>
        {`
          :doodle {
            @grid: 10x10; /* Corrected syntax for the grid */
            @size: 80% 80%;
            @shape: circle;
            text-align: center;
            box-sizing: border-box;
          }
          
          transition: 0.2s @r(0.6s);
          border-radius: @pick(50% 0, 0 50%);
          transform: scale(@r(.1, 1));
          
          background: @pick(#4285F4,#DB4437,#F4B400,#0F9D58, #A0C3FF, #ED9D97, #FFE168, #7BCFA9);
          
          border: 2px solid rgba(0, 0, 0, 0.2);

          :hover {
            transform: scale(1.5);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          }
          `}
      </css-doodle>
    </Container>
  );
}

export default forwardRef(BlossomDoodle);

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
