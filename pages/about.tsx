import React from 'react';
import styled from 'styled-components';

import Header from '../components/header';
import BackButton from '../components/back-button';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Content = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const About = () => {
    return (
        <>
            <Header/>
            <AboutContainer>
                <Title>Sobre mim</Title>
                <Content>
                    Meu nome é Ygor Nogatz da Silva, sou desenvolvedor de software com experiência em NodeJS e um
                    conjunto de tecnologias relacionadas, como Express, Typescript e NestJS. Tenho um bom raciocínio
                    lógico e gosto de aprender novas tecnologias.
                </Content>
                <Content>
                    Além de desenvolver software, eu também tenho experiência em dar suporte técnico, onde tive a
                    oportunidade de atender empresas que utilizavam sistemas CRM e trabalhar com importação de dados e
                    geração de relatórios.
                </Content>
                <Content>
                    Eu acredito que o trabalho em equipe é fundamental para alcançar resultados excepcionais e, por
                    isso, sempre busco colaborar ativamente e dar sugestões para aprimorar o desempenho do grupo de
                    trabalho.
                </Content>
                <Content>
                    Sou um profissional adaptável e estou sempre em busca de me aprimorar. Possuo habilidades em
                    integração de APIs e banco de dados não relacional (MongoDB), o que me permite desenvolver soluções
                    inovadoras e eficientes.
                </Content>
                <Content>
                    Em meu tempo livre, gosto de estudar novas linguagens e ferramentas, pois acredito que a atualização
                    constante é essencial para me manter competitivo no mercado de trabalho e entregar sempre os
                    melhores resultados.
                </Content>
                <BackButton/>
            </AboutContainer>
        </>
    );
};

export default About;

