import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaStar, FaTrash } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Header = styled.div`
  display: flex;
  padding: 0.5em;
  justify-content: space-between;
  align-items: center;
`;

export const GoBack = styled(FaArrowLeft)`
  color: ${props => props.theme.colors.secundary};
  font-size: 32px;
`;

export const Star = styled(FaStar)`
  color: yellow;
  font-size: 32px;
`;

export const Trash = styled(FaTrash)`
  color: ${props => props.theme.colors.secundary};
  font-size: 32px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  width: 100%;
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  list-style: none;
  padding: 2em 1em;
  margin: 0.5em;
  background: ${props => darken(0.2, props.theme.colors.primary)};
  border-radius: 12px;
  transition: all 0.2s;

  & > button {
    position: absolute;
    right: 1em;
    background: none;
    border: none;
    z-index: 2;
  }

  &:hover {
    background: ${props => darken(0.4, props.theme.colors.primary)};
  }
`;

export const ItemLink = styled(Link)`
  margin-left: 1em;
  text-decoration: none;
  color: #fff;
`;
