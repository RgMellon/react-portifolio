import React, { useMemo, useEffect, useState } from 'react';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { RouteComponentProps } from 'react-router-dom';

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

import projectList from '../../services/projects';

interface RouteProp {
  id: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  tecs: Array<string>;
  logo: string;
  largeTitle: string;
  largeDescription: string;
  tecsTitle: string;
  largeTecs: Array<string>;
  imagesPreview: Array<string>;
}

const Project: React.FC<RouteComponentProps<RouteProp>> = ({ match }) => {
  const [project, setProject] = useState({} as Project);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    async function getProjects(): Promise<void> {
      const findProject = projectList.find(
        projectItem => projectItem.id === match.params.id,
      );

      if (findProject) {
        setProject(findProject);
        setLoad(true);
      }
    }

    getProjects();
  }, [match.params.id]);

  const showQuantitySlides = useMemo(() => {
    const { innerWidth } = window;

    if (innerWidth <= 425) {
      return 1;
    }

    if (innerWidth > 425 && innerWidth <= 768) {
      return 2;
    }

    return 3;
  }, []);

  const getTotalSlides = useMemo(() => {
    if (project.imagesPreview) {
      return project.imagesPreview.length;
    }

    return 4;
  }, [project.imagesPreview]);

  return (
    <Container>
      <ContainerTitle>
        <ButtonBackPage to="/">
          <FiChevronLeft size={30} color="#fff" />
        </ButtonBackPage>
        <TitleDetail />
        <Title>{project.largeTitle}</Title>
      </ContainerTitle>

      <Content>
        <p>{project.largeDescription}</p>

        {project.largeTecs && (
          <h4>
            <span role="img" aria-label="laptop">
              💻
            </span>
            Tecnologias utilizadas
          </h4>
        )}
        <ul>{load && project.largeTecs.map(tec => <li>{tec}</li>)}</ul>

        <div>
          <CarouselProvider
            naturalSlideWidth={200}
            naturalSlideHeight={350}
            totalSlides={getTotalSlides}
            visibleSlides={showQuantitySlides}
            isPlaying
          >
            <Slider>
              {load &&
                project.imagesPreview.map((preview, index) => {
                  return (
                    <Slide index={index} key={preview}>
                      {/* <a href={preview} rel="noreferrer" target="_blank"> */}
                      <img src={preview} alt={preview} />
                      {/* </a> */}
                    </Slide>
                  );
                })}
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
