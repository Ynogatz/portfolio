// components/projects-session.js

import React from 'react';
import ProjectCard from './project-card';
import styles from './projects-session.module.css';
import BackButton from "./back-button";

const ProjectsSession = () => {
    const projects = [
        {
            title: 'http-rest-errors',
            description: 'Este é um projeto de uma lib, ela tem várias classes de erro ' +
                'com o nome adequado, status e possui também um middleware para a manipulação ' +
                'de erros.',
            githubLink: 'https://github.com/Ynogatz/http-rest-errors',
        },
        {
            title: 'Projeto 2',
            description: 'Breve descrição do Projeto 2',
            githubLink: 'https://github.com/usuario/projeto2',
        },
    ];

    return (
        <section className={styles.projectsSession}>
            <p className={styles.projectsDescription}>
                Aqui você encontrará uma lista dos meus projetos. Todos estão disponíveis em repositórios públicos do GitHub, e você também encontrará uma breve descrição de cada um deles.
            </p>
            <div className={styles.projectsContainer}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
            <BackButton />
        </section>
    );
};

export default ProjectsSession;
