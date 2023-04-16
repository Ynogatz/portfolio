// components/projects-session.js

import React from 'react';
import ProjectCard from './project-card';
import styles from './projects-session.module.css';
import BackButton from "./back-button";

const ProjectsSession = () => {
    const projects = [
        {
            title: 'portfolio',
            description: 'Este é o link para o repositório deste projeto de portfolio, desenvolvido em React',
            githubLink: 'https://github.com/Ynogatz/portfolio',
        }, {
            title: 'http-rest-errors',
            description: 'Este é um projeto de uma lib para nodeJS, ela tem várias classes de erro ' +
                'com o nome adequado, status (seguindo os padrões http) e possui também um middleware para a manipulação ' +
                'de erros.',
            githubLink: 'https://github.com/Ynogatz/http-rest-errors',
        },
        {
            title: 'cep-service-lib',
            description: 'Este projeto também é uma lib para ser utilizada com nodeJS, o objetivo dela ' +
                'é realizar a consulta de cep. Utilizando esta lib, é possível escolher qual api pública utilizar.',
            githubLink: 'https://github.com/Ynogatz/cep-service-lib/',
        },
    ];

    return (
        <section className={styles.projectsSession}>
            <p className={styles.projectsDescription}>
                Aqui você encontrará uma lista dos meus projetos. Todos estão disponíveis em repositórios públicos do
                GitHub, e você também encontrará uma breve descrição de cada um deles.
            </p>
            <div className={styles.projectsContainer}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
            <BackButton/>
        </section>
    );
};

export default ProjectsSession;
