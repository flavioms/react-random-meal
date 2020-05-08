import React from 'react';

import { GiHotMeal } from 'react-icons/gi';

import { Container, Title, Subtitle, Button } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Está com fome?</Title>
      <Subtitle>Clique no botão abaixo e descubra uma receita</Subtitle>
      <Button to="/meal">
        <GiHotMeal />
        Gerar Receita
      </Button>
    </Container>
  );
};

export default Home;
