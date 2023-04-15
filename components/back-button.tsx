import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Button = styled.button`
  background-color: #343a40;
  color: #ffffff;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #495057;
  }
`;

const BackButton: React.FC = () => {
    const router = useRouter();

    const goBack = () => {
        router.back();
    };

    return <Button onClick={goBack}>Voltar</Button>;
};

export default BackButton;
