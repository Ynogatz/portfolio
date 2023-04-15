import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Header from '../components/header';
import Skills from '../components/skills';

const MainContainer = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const SkillsPage = () => {
    return (
        <>
            <Head>
                <title>Ygor Nogatz - Competências</title>
            </Head>
            <Header/>
            <MainContainer>
                <Skills/>
            </MainContainer>
        </>
    );
};

export default SkillsPage;
