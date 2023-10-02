import React, { useState, useEffect } from 'react';
import { IconContext } from '@react-icons/all-files';
import styled from 'styled-components';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import { GiProcessor } from '@react-icons/all-files/gi/GiProcessor';
import { VscCode } from '@react-icons/all-files/vsc/VscCode';
import { VscDeviceMobile } from '@react-icons/all-files/vsc/VscDeviceMobile';

function Drawers() {
  const [drawerOpen, setDrawerOpen] = useState([false, false, false]);
  const { scroll } = useLocomotiveScroll();

  const Scrollindex = ["#fixed-element-web", "#fixed-element-mobile", "#fixed-element-ML"];

  const toggleDrawer = (index) => {
    // const newDrawerOpen = [...drawerOpen];
    // newDrawerOpen[index] = !newDrawerOpen[index];
    // setDrawerOpen(newDrawerOpen);
    scroll.scrollTo(Scrollindex[index]);
  };

  const IconStyle = {
    width: '40%',
    height: '100%',
    fontSize: '30%',
    color: 'black',
  };

  return (
    <Cabinet>
      <Drawer onClick={() => toggleDrawer(0)}>
        <Wrapper>
          <Label>
            <IconContainer>
              <IconContext.Provider
                value={{
                  style: IconStyle,
                }}
              >
                <VscCode/>
              </IconContext.Provider>
            </IconContainer> 
          </Label>
          <Handle />
        </Wrapper>
        {/* <Files open={drawerOpen[0]}>
          <p>Click me to open!</p>
        </Files> */}
      </Drawer>

      <Drawer onClick={() => toggleDrawer(1)}>
        <Wrapper>
          <Label> 
          <IconContainer>
            <IconContext.Provider
              value={{
                style: IconStyle,
              }}
            >
              <VscDeviceMobile/>
            </IconContext.Provider>
          </IconContainer>  
          </Label>
          <Handle />
        </Wrapper>
        {/* <Files open={drawerOpen[1]}>
          <p>Click me to open!</p>
        </Files> */}
      </Drawer>

      <Drawer onClick={() => toggleDrawer(2)}>
        <Wrapper>
          <Label>
            <IconContainer>
              <IconContext.Provider
                value={{
                  style: IconStyle,
                }}
              >
                <GiProcessor/>
              </IconContext.Provider>
            </IconContainer> 
          </Label>
          <Handle />
        </Wrapper>
        {/* <Files open={drawerOpen[2]}>
          <p>Click me to open!</p>
        </Files> */}
      </Drawer>
    </Cabinet>
  );
}

export default Drawers;

const Cabinet = styled.div`
  perspective: 1000px;
  bottom : 0;
  width: 250px;
  height: 450px;
  padding: 10px;
  margin: 80px auto;
  border-radius: 8px;
  background: linear-gradient(to bottom, #eee, #ccc); /* Cabinet background gradient */
  transform: perspective(1000px) rotateX(-20deg) rotateY(20deg); /* Tilt effect */
  transition: transform 0.2s ease-in-out;
`;

const Drawer = styled.div`
  position: relative;
  width: 100%;
  height: 33.33%;
  border: 2px solid #ddd;
  margin: 0 auto;
  background: #fff;
  background-size: 100%;
  transition: all 0.3s;
  box-shadow: -10 -10 20 rgba(0, 0, 0, 0);
  z-index: 1;

  &:hover {
    background-size: 200%;
    transform: perspective(1000px) rotateY(0deg) translateY(20px) translateX(10px) scale(1.05); /* Tilt effect and opening animation on hover */
    z-index: 2;
    box-shadow: 0px -10px 20px rgba(0, 0, 0, 0.7);

    .files {
      top: 0;
      opacity: 1;
      transform: translateY(1);
    }
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
  position: relative;
  width: 60px;
`;

const Label = styled.div`
  justify-content: center;
  align-items: center;
  display: block;
  width: 75%;
  background-color: #ddd;
  height: 30px;
  border: 0.2px solid #aaa;
  margin-bottom: 30px;
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.5);
  margin: 0 auto 30px auto;
`;

const Handle = styled.div`
  display: block;
  position: relative;
  background: #ddd;
  width: 100%;
  height: 7px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
`;

const Files = styled.div`
  position: absolute;
  background-color: #ffcc00; /* Drawer interior color */
  width: 95%;
  height: ${({ open }) => (open ? '80px' : '0')};
  left: 0;
  right: 0;
  top: -50px;
  margin: auto;
  box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.2);
  transition: top 0.3s ease, height 0.3s ease;
  overflow: hidden;

  &:before,
  &:after {
    position: absolute;
    top: -10px;
    height: 10px;
    width: 50%;
    box-shadow: -1px -2px 5px rgba(0, 0, 0, 0.2);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:before {
    content: '';
    background-color: #ffcc00; /* Drawer interior color */
    left: 0;
  }

  &:after {
    content: '';
    background-color: #ffcc00; /* Drawer interior color */
    right: 0;
  }

  p {
    text-align: center;
    line-height: 80px;
    color: black;
    cursor: pointer;
  }
`;

const IconContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;