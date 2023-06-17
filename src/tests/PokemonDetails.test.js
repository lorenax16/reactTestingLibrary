import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <PokemonDetails.js />', () => {
  it('Teste se as informações detalhadas são mostradas na tela.', () => {
    renderWithRouter(<App />);
    const linkEl = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkEl);
    const name = screen.getByRole('heading', { name: 'Pikachu Details' });
    expect(name).toBeInTheDocument();

    const Summary = screen.getByRole('heading', { name: 'summary',
      level: 2 });
    expect(Summary).toBeInTheDocument();

    const paragrafo = screen.getByText('This intelligent Pokémon roasts hard berries'
    + 'with electricity to make them tender enough to eat.');
    expect(paragrafo).toBeInTheDocument();
  });

  it('Teste se existe uma seção com os mapas contendo as localizações do pokémon', () => {
    renderWithRouter(<App />);

    const link = screen.getByRole('link', { name: /More details/i });
    userEvent.click(link);
    const h2 = screen.getByRole('heading', { name: /Game Locations of Pikachu/i,
      level: 2 });
    expect(h2).toBeInTheDocument();

    const localizaçao1 = screen.getByText('Kanto Viridian Forest');
    expect(localizaçao1).toBeDefined();

    const localizaçao2 = screen.getByText('Kanto Power Plant');
    expect(localizaçao2).toBeDefined();

    const url1 = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
    const url2 = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';
    expect(url1).toBeDefined();
    expect(url2).toBeDefined();
    expect(url1).toHaveAttribute('src', url1);
    expect(url2).toHaveAttribute('src', url2);

    const locations = screen.getAllByAltText('Pikachu location');
    expect(locations).toBeDefined();
    expect(locations[0]).toHaveAttribute('src', src1);
    expect(locations[1]).toHaveAttribute('src', src2);
  });

  it('Teste se o usuário pode favoritar um pokémon.', () => {
    renderWithRouter(<App />);

    const link = screen.getByRole('link', { name: /More details/i });
    userEvent.click(link);

    const label = screen.getByLabelText('Pokémon favoritado?');
    expect(label).toBeInTheDocument();
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    userEvent.click(checkbox);

    const textoFavorito = screen.getByAltText('Pikachu is marked as favorite');
    expect(checkbox).toBeInTheDocument();
    expect(textoFavorito).toBeInTheDocument();
    userEvent.click(checkbox);
    expect(textoFavorito).not.toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });
});
