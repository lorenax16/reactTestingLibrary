// import { screen } from '@testing-library/react';
import React from 'react';
import renderWithRouter from '../renderWithRouter';
import PokemonDetails from '../components/PokemonDetails';

describe('Teste o componente <PokemonDetails.js />', () => {
  it('Teste se as informações detalhadas são mostradas na tela.', () => {
    renderWithRouter(<PokemonDetails />);
  });
});
