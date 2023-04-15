import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: #343a40;
  padding: 1rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const IconLink = styled.a`
  color: #ffffff;
  font-size: 1.5rem;
`;

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Container>
                <Title>Ygor Nogatz da Silva</Title>
                <IconContainer>
                    <IconLink
                        href="https://github.com/ynogatz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </IconLink>
                    <IconLink
                        href="https://www.linkedin.com/in/ygor-nogatz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </IconLink>
                </IconContainer>
            </Container>
        </HeaderContainer>
    );
};

export default Header;
