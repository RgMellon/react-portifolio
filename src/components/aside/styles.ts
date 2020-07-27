import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.aside`
  height: 100vh;
  background: #15142a;
  width: 350px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const AvatarContainer = styled(Link)`
  width: 100px;
  height: 100px;
  /* border: 1px solid #fafafa; */
  margin-top: 50px;
  border-radius: 50px;
`;

export const Avatar = styled.img`
  width: 100%;
  border-radius: 50px;
`;

export const Name = styled.p`
  color: #fafafa;
  margin-top: 20px;
  font-weight: bold;
  font-size: 25px;
`;

export const SubName = styled.p`
  color: #ccc;
  margin-top: 5px;
`;

export const Description = styled.p`
  margin-top: 15px;
  text-align: center;
  line-height: 25px;
  color: #ccc;
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  padding: 20px;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
`;

export const ContainerIcon = styled.button`
  margin: 10px;
  width: 40px;
  height: 40px;
  border: 1px solid #fff;
  background: inherit;
  color: #fff;

  padding: 10px;
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;
