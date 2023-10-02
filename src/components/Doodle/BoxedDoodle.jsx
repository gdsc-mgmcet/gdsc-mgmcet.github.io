import 'css-doodle';

import { forwardRef } from 'react';
import styled from 'styled-components';

function BoxedDoodle({ shapeFrequency = 0.2 }, ref) {
  return (
    <Container>
      <css-doodle use="var(--rule)" ref={ref}>
        {`
          :doodle {
            @grid: 4x8; /* Corrected syntax for the grid */
            @size: 49.5% 80%;

            overflow:hidden;
            text-align:center;
            box-sizing:border-box;
          }
          
          @random {
            border-left: 3px solid @p(white,black);
          }
          @random {
            border-top: 3px solid @p(white,black);
          }
          @random(.5) {
            background: linear-gradient(
              @p(#4285F4,#DB4437,#F4B400,#0F9D58), @lp
            )
            50% / @r(70%) @lr
            no-repeat;
          }
          @random {
            filter: drop-shadow(0 0 10px #fff);
          }
          `}
      </css-doodle>
    </Container>
  );
}

export default forwardRef(BoxedDoodle);

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
