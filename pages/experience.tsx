import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Experience from "../components/experience";
import Header from "../components/header";


const MainContainer = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const ExperiencePage = () => {
    return (
        <>
            <Head>
                <title>Ygor Nogatz - Histórico Profissional</title>
            </Head>
            <Header/>
            <MainContainer>
                <Experience/>
            </MainContainer>
        </>
    );
};

export default ExperiencePage;
