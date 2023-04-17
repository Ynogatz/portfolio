import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaMailBulk, FaWhatsapp } from 'react-icons/fa';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
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

const Header: React.FC = () => {2
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
                    <IconLink
                        href="mailto:ynogatzds@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="E-mail"
                    >
                        <FaMailBulk />
                    </IconLink>
                    <IconLink
                        href="https://wa.me/5541984538992"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="E-mail"
                    >
                        <FaWhatsapp size={24}/>
                    </IconLink>
                </IconContainer>
            </Container>
        </HeaderContainer>
    );
};

export default Header;
