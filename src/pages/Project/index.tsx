import React from 'react';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import {
  Container,
  TitleDetail,
  Title,
  Content,
  ContainerTitle,
  SlideBack,
  SlideNext,
  ButtonBackPage,
} from './styles';

const Project: React.FC = () => {
  return (
    <Container>
      <ContainerTitle>
        <ButtonBackPage to="/">
          <FiChevronLeft size={30} color="#fff" />
        </ButtonBackPage>
        <TitleDetail />
        <Title> Lorem sit amet </Title>
      </ContainerTitle>

      <Content>
        <p>
          {' '}
          Passagem padrão original de Lorem Ipsum, usada desde o século XVI.
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum." Seção 1.10.32
          de "de Finibus Bonorum et Malorum", escrita por Cícero em 45 AC "Sed
          ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
          ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
          velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
          fugiat quo voluptas nulla pariatur?" Tradução para o inglês por H.
          Rackha, feita em 1914 "But I must explain to you how all this mistaken
          idea of denouncing pleasure and praising pain was born and I will give
          you a complete account of the system, and expound the actual teachings
          of the great explorer of the truth, the master-builder of human
          happiness. No one rejects, dislikes, or avoids pleasure itself,
          because it is pleasure, but because those who do not know how to
          pursue pleasure rationally encounter consequences that are extremely
          painful. Nor again is there anyone who loves or pursues or desires to
          obtain pain of itself, because it is pain, but because occasionally
          circumstances occur in which toil and pain can procure him some great
          pleasure. To take a trivial example, which of us ever undertakes
          laborious physical exercise, except to obtain some advantage from it?
          But who has any right to find fault with a man who chooses to enjoy a
          pleasure that has no annoying consequences, or one who avoids a pain
          that produces no resultant pleasure?"
        </p>

        <div>
          <CarouselProvider
            naturalSlideWidth={200}
            naturalSlideHeight={120}
            totalSlides={3}
            isPlaying
          >
            <Slider>
              <Slide index={0}>
                <img
                  src="https://camo.githubusercontent.com/9e2828a5cd3e52b26f719e709830927c86574c1f/68747470733a2f2f692e696d6775722e636f6d2f3575475570585a2e6a7067"
                  alt=""
                />
                <img
                  src="https://camo.githubusercontent.com/9474f70d1485ccf6db3a15c9aad25b857b86b00c/68747470733a2f2f692e696d6775722e636f6d2f744a6f5a7748742e6a7067"
                  alt=""
                />
                <img
                  src="https://camo.githubusercontent.com/2b8bc041fc0d1829aacea725c10118c658a20017/68747470733a2f2f692e696d6775722e636f6d2f423450527032432e6a7067"
                  alt=""
                />
              </Slide>
              <Slide index={1}>
                <img
                  src="https://camo.githubusercontent.com/9e2828a5cd3e52b26f719e709830927c86574c1f/68747470733a2f2f692e696d6775722e636f6d2f3575475570585a2e6a7067"
                  alt=""
                />
              </Slide>
              <Slide index={2}>
                <img
                  src="https://camo.githubusercontent.com/2b8bc041fc0d1829aacea725c10118c658a20017/68747470733a2f2f692e696d6775722e636f6d2f423450527032432e6a7067"
                  alt=""
                />
              </Slide>
            </Slider>

            <SlideBack>
              <FiChevronLeft color="#fff" />
            </SlideBack>
            <SlideNext>
              <FiChevronRight color="#fff" />
            </SlideNext>
          </CarouselProvider>
        </div>
      </Content>
    </Container>
  );
};

export default Project;
