import { screen } from '@testing-library/react';
import React from 'react';
import renderWithRouter from '../renderWithRouter';
import About from '../components/About';

describe('teste o componente <About.js />', () => {
  it('teste se a pagina contem informaçẽs do pokedex', () => {
    renderWithRouter(<About />);
    const infoPokede = screen.getByText(/This application simulates a Pokédex,/i);

    expect(infoPokede).toBeInTheDocument();
  });

  it('Teste se a página contém um heading `h2` com o texto `About Pokédex`', () => {
    renderWithRouter(<About />);

    const elementoH2 = screen.getByRole('heading', { name: 'About Pokédex',
      level: 2 });
    expect(elementoH2).toBeInTheDocument();
  });

  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    renderWithRouter(<About />);
    const elementoP1 = screen.getByText(/This application simulates a Pokédex,/i);
    const elementoP2 = screen.getByText(/One can filter Pokémons by type/i);

    expect(elementoP1).toBeInTheDocument();
    expect(elementoP2).toBeInTheDocument();
  });
  // para a img olhei o git de gabriel tarick
  it('Testa se a página contém imagem de uma Pokédex', () => {
    renderWithRouter(<About />);
    const elementoImg = screen.getByRole('img', { name: 'Pokédex' });

    expect(elementoImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
