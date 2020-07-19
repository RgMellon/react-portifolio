import React from 'react';

import { Container, ContentInfo } from './styles';

const MenuMobile: React.FC = () => {
  return (
    <Container>
      <img
        src="https://avatars2.githubusercontent.com/u/29661994?s=460&u=5a125bcc3715ffb9339bb7fb6f3827710e062f14&v=4"
        alt="logo"
      />

      <ContentInfo>
        <p> Renan Melo </p>
        <span> Desenvolvedor Front End </span>
      </ContentInfo>
    </Container>
  );
};

export default MenuMobile;
