import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Header from '../components/header';

const MainContainer = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 500;
  color: #343a40;
`;

const Link = styled.a`
  display: inline-block;
  margin: 1rem;
  font-size: 1.2rem;
  text-decoration: none;
  color: #007bff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const IndexPage = () => {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        // Simulando um tempo de carregamento de 3 segundos
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);
    return (
        <>
            <Head>
                <title>Ygor Nogatz - Portfólio</title>
            </Head>
            <Header />
            <MainContainer>
                <Title>Olá, eu sou o Ygor Nogatz</Title>
                <Subtitle>Bem-vindo ao meu portfólio</Subtitle>
                <p>Conheça mais sobre minha trajetória profissional e habilidades:</p>
                <Link href="/about">Sobre mim</Link>
                <Link href="/experience">Histórico Profissional</Link>
                <Link href="/skills">Competências</Link>
                <Link href="/projects">Projetos</Link>
            </MainContainer>
        </>
    );
};

export default IndexPage;
