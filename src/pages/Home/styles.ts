import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { transparentize } from 'polished';

const shakeAnimation = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-family: 'Lobster', cursive;
`;

export const Title = styled.h1`
  font-size: 350%;
`;

export const Subtitle = styled.h2`
  font-size: 170%;
`;

export const Button = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0;
  background: none;
  color: #fff;
  margin: 2em;

  &:hover {
    animation: ${shakeAnimation} 0.8s;
    color: ${transparentize(0.2, '#fff')};
  }

  & > svg {
    font-size: 48px;
  }
`;
