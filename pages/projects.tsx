import React from 'react';
import ProjectsSection from '../components/projects-session';
import Head from "next/head";
import Header from "../components/header";

const Projects = () => {
    return (
        <div>
            <Head>
                <title>Ygor Nogatz - Portfólio</title>
            </Head>
            <Header />

            <h1>Projetos</h1>
            <ProjectsSection />
        </div>
    );
};

export default Projects;
