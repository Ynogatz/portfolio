import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import GlobalStyles from "./global.styles";
import theme from "./theme";
import Header from "./header";

const EducationContainer = styled.section`
  margin-top: 2rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const School = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Course = styled.p`
  margin-bottom: 0.5rem;
`;

const Education = () => {
    return (
        <EducationContainer>
            <Title>Formação Acadêmica</Title>
            <School>Universidade Positivo</School>
            <Course>Análise e Desenvolvimento de Sistemas (1 trimestre)</Course>
        </EducationContainer>
    );
};

const MainContainer = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const EducationPage = () => {
    return (
        <>
            <GlobalStyles/>
            <ThemeProvider theme={theme}>
                <Header/>
                <MainContainer>
                    <Education/>
                </MainContainer>
            </ThemeProvider>
        </>
    );
};


export default Education;
