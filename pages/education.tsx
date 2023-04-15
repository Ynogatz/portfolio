import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Header from '../components/header';
import Education from '../components/education';

const MainContainer = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const EducationPage = () => {
    return (
        <div>
            <Head>
                <title>Ygor Nogatz - Formação Acadêmica</title>
            </Head>
            <Header />
            <MainContainer>
                <Education />
            </MainContainer>
        </div>
    );
};

export default EducationPage;
