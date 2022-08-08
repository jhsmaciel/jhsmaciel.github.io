import React from 'react';
import Projects from '../../components/projects'

function ProjectsPage() {
  return (
    <React.Fragment>
      <Projects title='Projetos novos' resourceName='/projetos-novos' />
      <Projects title='Projetos antigos' resourceName='/projetos-antigos' />
    </React.Fragment>
  );
}

export default ProjectsPage;
