import React, { useEffect, useState } from 'react';

import { Container, Project, Tags } from './styles';

import projectList from '../../services/projects';

interface Project {
  id: string;
  title: string;
  description: string;
  tecs: Array<string>;
  logo: string;
}

const Home: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function getProjects(): Promise<void> {
      setProjects(projectList);
    }

    getProjects();
  }, []);
  return (
    <>
      <Container>
        {projects.map(project => (
          <Project key={project.id} to={`project/${project.id}`}>
            <img src={project.logo} alt={project.title} />
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <Tags>
                {project.tecs.map(tec => (
                  <div key={tec}>
                    <p>{tec}</p>
                  </div>
                ))}
              </Tags>
            </div>
          </Project>
        ))}
      </Container>
    </>
  );
};

export default Home;
