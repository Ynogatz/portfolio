// components/projects-session.js

import React from 'react';
import ProjectCard from './project-card';
import styles from './projects-session.module.css';

const ProjectsSession = () => {
    const projects = [
        {
            title: 'Projeto 1',
            description: 'Breve descrição do Projeto 1',
            githubLink: 'https://github.com/usuario/projeto1',
        },
        {
            title: 'Projeto 2',
            description: 'Breve descrição do Projeto 2',
            githubLink: 'https://github.com/usuario/projeto2',
        },
    ];

    return (
        <section className={styles.projectsSession}>
            <h2>Projetos</h2>
            <p className={styles.projectsDescription}>
                Aqui você encontrará uma lista dos meus projetos. Todos estão disponíveis em repositórios públicos do GitHub, e você também encontrará uma breve descrição de cada um deles.
            </p>
            <div className={styles.projectsContainer}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSession;
