import { screen } from '@testing-library/react';
import React from 'react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';

describe('teste o componente <FavoritePokemons.js />', () => {
  it('Teste se é exibida na tela a mensagem No favorite pokemon found`', () => {
    renderWithRouter(<FavoritePokemons />);
    const mensagem = screen.getByText(/No favorite pokemon found/i);
    expect(mensagem).toBeInTheDocument();
  });
});
