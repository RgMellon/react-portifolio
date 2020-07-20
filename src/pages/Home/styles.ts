import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import { Link } from 'react-router-dom';

const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(-20px)
  } to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const Container = styled.div`
  width: 77%;
  height: 100vh;
  background: ${shade(0.1, '#15142a')};
  margin-left: 340px;
  padding: 20px;
  overflow: auto;

  @media (max-width: 768px) {
    margin-left: 0px;
    width: 100%;
  }
`;

export const Project = styled(Link)`
  animation: ${appearFromLeft} 1.5s;
  border-bottom: 0.1px solid #fafafa2e;
  width: 100%;
  /* height: 200px; */
  padding: 40px 20px;
  text-decoration: none;
  color: #fff;

  display: flex;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
}
    /* border: 0.4px solid #fff; */
  }

  > div {
    margin-left: 30px;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }

  h3 {
    font-weight: 500;
    font-size: 30px;
  }
`;

export const Tags = styled.section`
  display: flex;

  @media (max-width: 768px) {
    margin-left: -40px;
    margin-top: 20px;
  }

  div {
    display: inline-block;
    height: 30px;
    width: 100px;
    /* width: 20px; */
    background: #5444e0;
    border-radius: 20px;
    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 10px;
    font-weight: bold;
    margin: 20px 10px 20px 0px;
  }
`;
