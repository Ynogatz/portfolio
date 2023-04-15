import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  margin-top: 2rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
`;

const PersonalInfo = () => {
    return (
        <Container>
            <Title>Informações pessoais</Title>
            <List>
                <ListItem>
                    <Label>Nome:</Label> Ygor Nogatz da Silva
                </ListItem>
                <ListItem>
                    <Label>Nacionalidade:</Label> Brasileiro
                </ListItem>
                <ListItem>
                    <Label>Idade:</Label> 22 anos
                </ListItem>
                <ListItem>
                    <Label>Estado civil:</Label> Solteiro
                </ListItem>
                <ListItem>
                    <Label>Endereço:</Label> R. Ribeirão do Pinhal, 319 - Curitiba, Paraná - Brasil
                </ListItem>
                <ListItem>
                    <Label>Telefone:</Label> +55 (41) 98453-8992
                </ListItem>
                <ListItem>
                    <Label>E-mail:</Label> ynogatzds@gmail.com
                </ListItem>
                <ListItem>
                    <Label>GitHub:</Label> <a href="https://github.com/ynogatz">https://github.com/ynogatz</a>
                </ListItem>
                <ListItem>
                    <Label>LinkedIn:</Label> <a href="https://www.linkedin.com/in/ygor-nogatz">https://www.linkedin.com/in/ygor-nogatz</a>
                </ListItem>
            </List>
        </Container>
    );
};

export default PersonalInfo;
