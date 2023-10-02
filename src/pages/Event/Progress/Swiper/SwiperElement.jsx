import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { useWindowSize } from '../../../../hooks';
import styled from 'styled-components';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Slide from './Slide';
import { SlideContents } from './SlideContent';
import { useState } from 'react';

function SwiperElement({ onClickElement }) {
  const { width } = useWindowSize();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <Container>
      <Swiper
         modules={[Navigation, Pagination]}
         navigation
         rewind={true}
         slidesPerView={1}
         slidesOffsetBefore={width < 1000 ? width / 10 : width / 20}
         loop={true}
         spaceBetween={width / 3}
         speed={300} // Adjust the speed (in milliseconds) for a slower slide transition
        //  effect="fade" // Use the fade effect for smoother transitions
         breakpoints={{
           1000: {
             slidesPerView: 2,
             slidesOffsetBefore: width / 10,
             spaceBetween: width / 90,
           },
         }}
         onSlideChange={(swiper) => handleSlideChange(swiper)} // Add this event handler
      >
        {SlideContents.map((content, idx, eventURL) => (
          <SwiperSlide key={idx}>
            <Slide
              content={content}
              index={idx}
              activeIndex={activeIndex} // Pass activeIndex to Slide
              onFocus={onClickElement}
              URL={eventURL}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default SwiperElement;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 20vh;
`;
