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

const Spinner = styled.div`
  width: 64px;
  height: 64px;
  margin-bottom: 1rem;
  &:after {
    content: ' ';
    display: block;
    width: 46px;
    height: 46px;
    margin: auto;
    border-radius: 50%;
    border: 5px solid #fff;
    border-color: black transparent black transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const customSpinner = () => {
  return (
    <Wrapper>
      <Spinner />
      <h4>Loading ...</h4>
    </Wrapper>
  );
};

export default customSpinner;
