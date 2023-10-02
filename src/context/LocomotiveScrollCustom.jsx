// Club page- Horizontal move

import React from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

function VerticalLocomotiveScrollProvider({ containerRef, children }) {

  const scrollOptions = {
    options: {
      smooth: true,
      reloadOnContextChange: true,
      tablet: {
        breakpoint: 0,
        smooth: true,
        direction: 'vertical',
      },
      smartphone: {
        smooth: true,
        direction: 'vertical',
      },
      direction: 'vertical',
      getDirection: true,
    },
    containerRef: containerRef,
    watch: [],
  };

  return <LocomotiveScrollProvider {...scrollOptions}>{children}</LocomotiveScrollProvider>;
}

function HorizontalLocomotiveScrollProvider({ containerRef, children }) {

  const scrollOptions = {
    options: {
      smooth: true,
      reloadOnContextChange: true,
      tablet: {
        breakpoint: 0,
        smooth: true,
        direction: 'horizontal',
      },
      smartphone: {
        smooth: true,
        direction: 'horizontal',
      },
      direction: 'horizontal',
      getDirection: true,
    },
    containerRef: containerRef,
    watch: [],
  };

  return <LocomotiveScrollProvider {...scrollOptions}>{children}</LocomotiveScrollProvider>;
}

const ScrollProviders = {
  Vertical: VerticalLocomotiveScrollProvider,
  Horizontal: HorizontalLocomotiveScrollProvider,
};

export default ScrollProviders;
