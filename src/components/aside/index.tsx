import React from 'react';

import { FiLinkedin, FiInstagram, FiGithub } from 'react-icons/fi';

import {
  Container,
  AvatarContainer,
  Avatar,
  Name,
  SubName,
  Description,
  Footer,
  ContainerIcon,
} from './styles';

const components: React.FC = () => {
  function handleRedirectTo(url: string): void {
    window.open(url);
  }

  return (
    <Container>
      <AvatarContainer to="/">
        <Avatar src="https://avatars2.githubusercontent.com/u/29661994?s=460&u=5a125bcc3715ffb9339bb7fb6f3827710e062f14&v=4" />
      </AvatarContainer>

      <Name>Renan Melo</Name>
      <SubName> Desenvolvedor Front End </SubName>
      <Description>
        Desenvolvedor web e mobile, formado em ciencia da computação
      </Description>

      <Footer>
        <ContainerIcon
          onClick={() =>
            handleRedirectTo(
              'https://www.linkedin.com/in/renan-melo-2b414a107/',
            )
          }
        >
          <FiLinkedin color="#fff" size={20} />
        </ContainerIcon>

        <ContainerIcon
          onClick={() =>
            handleRedirectTo('https://www.instagram.com/rgmellon/')
          }
        >
          <FiInstagram size={20} />
        </ContainerIcon>

        <ContainerIcon
          onClick={() => handleRedirectTo('https://github.com/RgMellon')}
        >
          <FiGithub size={20} />
        </ContainerIcon>
      </Footer>
    </Container>
  );
};

export default components;
