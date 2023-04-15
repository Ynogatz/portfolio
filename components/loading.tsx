// components/Loading.js

import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-left-color: #007bff;
  animation: ${spin} 1s linear infinite;
`;

const Loading = () => {
    return (
        <LoadingContainer>
            <Spinner />
        </LoadingContainer>
    );
};

export default Loading;
