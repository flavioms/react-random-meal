import styled from 'styled-components';
import { FaArrowLeft, FaStar } from 'react-icons/fa';

interface BackgroundProps {
  url: string;
}

export const Container = styled.div`
  height: 100vh;
  max-height: 100%;
  display: flex;
  align-items: stretch;
`;

export const Header = styled.div`
  display: flex;
  padding: 0.5em;
  justify-content: space-between;
  align-items: center;
`;

export const Favorite = styled.button`
  border: none;
  background: none;
`;

export const Star = styled(FaStar)`
  color: yellow;
  font-size: 32px;
`;

export const GoBack = styled(FaArrowLeft)`
  color: ${props => props.theme.colors.secundary};
  font-size: 32px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-button {
    width: 100px;
    height: 100px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.secundary};
    border: 0px none transparent;
    border-radius: 100px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.secundary};
  }
  &::-webkit-scrollbar-thumb:active {
    background: ${props => props.theme.colors.secundary};
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    border: 0px none transparent;
    border-radius: 100px;
  }
  &::-webkit-scrollbar-track:hover {
    background: transparent;
  }
  &::-webkit-scrollbar-track:active {
    background: transparent;
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`;

export const Title = styled.h1`
  margin-bottom: 0.6em;
  font-size: 300%;
  font-family: 'Lobster', cursive;
  text-align: center;
`;

export const Subtitle = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  & > li {
    list-style: none;
    margin: 0 1em;

    & > strong {
      font-weight: 800;
      color: ${props => props.theme.colors.secundary};
    }
  }
`;

export const Recipe = styled.div`
  margin: 2em;
  text-align: justify;

  h1 {
    text-align: center;
  }
`;

export const Ingredients = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2em;

  ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    max-height: 250px;
  }

  li {
    list-style: circle;
  }
`;

export const Background = styled.div<BackgroundProps>`
  flex: 1;
  background: url(${props => props.url}) no-repeat center;
  background-size: cover;
  opacity: 0.6;
  overflow: hidden;
`;
