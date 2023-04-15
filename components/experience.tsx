import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Header from "./header";
import theme from "./theme";
import GlobalStyles from "./global.styles";
import BackButton from "./back-button";

const ExperienceContainer = styled.section`
  margin-top: 2rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Company = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const JobTitle = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  margin-bottom: 0.5rem;
`;

const Experience = () => {
    return (
        <ExperienceContainer>
            <Title>Histórico Profissional</Title>
            <Company>Aires Digital</Company>
            <JobTitle>Programador Back-end Júnior (desde 06/2021)</JobTitle>
            <Description>
                Na Aires Digital, trabalho como programador back-end em NodeJS, sendo responsável por integrações com
                APIs de
                instituições financeiras, desenvolvimento de sistemas de back-office e testes do sistema. Minhas
                contribuições
                vão além do desenvolvimento de código, já que busco sempre dar sugestões de melhoria para a usabilidade
                do
                sistema e para a integração com outras ferramentas.
            </Description>
            <Company>Cado Tecnologia</Company>
            <JobTitle>Suporte (11/2019 - 05/2021)</JobTitle>
            <Description>
                No Cado Tecnologia, realizava o suporte atendendo as empresas que utilizavam o sistema, importação de
                base de
                clientes, realizava consulta no banco de dados (PostgreSQL) para tirar relatórios, como eu já estudava
                JavaScript e Node, também realizava pequenas funcionalidades do sistema, como CRUDS, pequenas
                integrações e
                implementação de testes em Jest.
            </Description>
            <BackButton />
        </ExperienceContainer>
);
};
const MainContainer = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const ExperiencePage = () => {
    return (
        <>
            <GlobalStyles/>
            <ThemeProvider theme={theme}>
                <Header/>
                <MainContainer>
                    <Experience/>
                </MainContainer>
            </ThemeProvider>
        </>
    );
};

export default Experience;
