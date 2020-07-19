import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import { Link } from 'react-router-dom';

import { ButtonBack, ButtonNext } from 'pure-react-carousel';

const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(100px)
  } to {
    opacity: 1;
    transform: translateX(0)
  }
`;

// const slideIn = keyframes`
//   0% {
//     transform: translateX(500px) scale(.2);
//   }
//   100% {
//     transform: translateX(0px) scale(1);
//   }
// `;

const slideUp = keyframes`
  0% {
    transform: translateY(200px);
  }
  100% {
   transform: translateY(0px);
  }
`;

// const expand = keyframes`
//   0% {
//     transform: translateX(1400px);
//   }
//   100% {
//     transform: translateX(0px);
//   }
// `;

export const Container = styled.div`
  transition: all 0.8s ease;
  animation: ${appearFromLeft} 1.5s;
  width: 77%;
  height: 100vh;
  background: ${shade(0.1, '#15142a')};
  margin-left: 340px;
  padding: 20px;
  overflow: auto;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0px;
  }
`;

export const ContainerTitle = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  height: auto;
`;

export const ButtonBackPage = styled(Link)`
  position: absolute;
  left: 10px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleDetail = styled.div`
  width: 150px;
  height: 10px;
  background: #5444e0;
`;

export const Title = styled.h1`
  margin-top: 20px;
  font-size: 30px;
  color: #fff;

  transform: translateY(300px);
  animation: ${slideUp}.5s ease-in-out forwards 0.5s;
`;

export const Content = styled.section`
  margin-top: 40px;
  padding: 20px;
  transform: translateY(900px);
  animation: ${slideUp} 0.8s ease-in-out forwards 0.8s;

  p {
    font-size: 18px;
    line-height: 28px;
  }

  div {
    margin-top: 30px;
    position: relative;

    img {
      margin: 20px;
      width: 90%;
      border-radius: 8px;
    }
  }
`;

export const SlideBack = styled(ButtonBack)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;

  background: #15142a;
`;

export const SlideNext = styled(ButtonNext)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;
  right: 0px;

  background: ${shade(0.1, '#15142a')};
`;
