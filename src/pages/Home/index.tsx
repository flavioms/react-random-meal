import React from 'react';

import { GiChickenOven } from 'react-icons/gi';
import { FaStar } from 'react-icons/fa';

import { Container, Title, Subtitle, Button } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Está com fome?</Title>
      <Subtitle>Clique no botão abaixo e descubra uma receita</Subtitle>
      <Button to="/meal">
        <GiChickenOven />
        Gerar Receita
      </Button>

      <Button to="/favorite">
        <FaStar />
        Favoritos
      </Button>
    </Container>
  );
};

export default Home;
