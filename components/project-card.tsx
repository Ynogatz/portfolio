// components/project-card.js

import React from 'react';
import GithubIcon from '../icons/github-icon';
import styles from './project-card.module.css';

const ProjectCard = ({ title, description, githubLink }) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.projectTitle}>{title}</h3>
            <p className={styles.projectDescription}>{description}</p>
            <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubLink}
            >
                <GithubIcon className={styles.githubIcon} />
                Ver repositório no GitHub
            </a>
        </div>
    );
};

export default ProjectCard;
