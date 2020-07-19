import styled from 'styled-components';

export const Container = styled.menu`
  width: 100%;
  /* height: 60px; */
  background: #15142a;
  display: none;
  padding: 10px 20px;

  img {
    width: 50px;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    display: flex;

    align-items: center;
  }
`;

export const ContentInfo = styled.div`
  margin-left: 20px;

  span {
    color: #666;
  }
`;
