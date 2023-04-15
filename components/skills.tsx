import React from 'react';
import BackButton from "./back-button";

interface Skill {
    name: string;
    level: string;
}

const skills: Skill[] = [
    {name: 'Git', level: 'Avançado'},
    {name: 'Nodejs', level: 'Intermediário'},
    {name: 'Express', level: 'Intermediário'},
    {name: 'Typescript', level: 'Intermediário'},
    {name: 'NestJS', level: 'Intermediário'},
    {name: 'Banco de dados não relacional (MongoDB)', level: 'Intermediário'},
    {name: 'Deploy com Google Cloud Functions', level: 'Intermediário'},
    {name: 'Testes unitários e e2e com Jest', level: 'Intermediário'},
];

const Skills: React.FC = () => {
    return (
        <div className="skills-container">
            <h2 className="title">Competências</h2>
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <li key={index} className="skill-item">
                        <span className="skill-name">{skill.name}</span> - <span
                        className="skill-level">{skill.level}</span>
                    </li>
                ))}
            </ul>
            <style jsx>{`
              .skills-container {
                padding: 1rem;
                max-width: 600px;
                margin: 0 auto;
                background-color: #f8f9fa;
                border-radius: 8px;
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
              }

              .title {
                font-size: 1.5rem;
                margin-bottom: 1rem;
                text-align: center;
                color: #343a40;
              }

              .skills-list {
                list-style-type: none;
                padding: 0;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
              }

              .skill-item {
                font-size: 1.1rem;
                margin-bottom: 0.5rem;
                padding: 1rem;
                background-color: #ffffff;
                border-radius: 6px;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                display: flex;
                justify-content: space-between;
                align-items: center;
              }

              .skill-name {
                font-weight: 600;
                color: #343a40;
              }

              .skill-level {
                color: #6c757d;
              }
            `}</style>
            <BackButton/>
        </div>
    );
};

export default Skills;
