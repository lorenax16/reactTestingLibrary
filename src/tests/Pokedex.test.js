import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('teste o componente <Pokedex.js />', () => {
  it('Teste se contém um heading `h2` com o texto `Encountered pokémons`.', () => {
    renderWithRouter(<App />);
    const h2Elemento = screen.getByRole('heading', { name: 'Encountered pokémons',
      level: 2 });

    expect(h2Elemento).toBeInTheDocument();
  });

  it('Teste se é exibido o próximo pokémon da lista quando o botão é clicado.', () => {
    renderWithRouter(<App />);

    const buton = screen.getByRole('button', { name: /Próximo pokémon/i });
    expect(buton).toBeInTheDocument();
    userEvent.click(buton);

    const Charmander = screen.getByText(/Charmander/i);
    expect(Charmander).toBeInTheDocument();

    const pikachu = screen.queryByText(/Pikachu/i);
    expect(pikachu).not.toBeInTheDocument();
  });

  it('Teste se é mostrado apenas um pokémon por vez.', () => {
    renderWithRouter(<App />);
    const pikachu = screen.getByText(/Pikachu/i);
    expect(pikachu).toBeInTheDocument();
    const Charmander = screen.queryByText(/Charmander/i);
    expect(Charmander).not.toBeInTheDocument();
  });

  it('Teste se a Pokédex tem os botões de filtro.', () => {
    renderWithRouter(<App />);
    const butons = ['Electric', 'Fire', 'Bug', 'Poison',
      'Psychic', 'Normal', 'Dragon'];
    butons.forEach((button) => {
      const posicionI = screen.getByRole('button', { name: button });
      expect(posicionI).toBeInTheDocument();
    });
    const butonLength = 7;
    const pokemons = screen.getAllByTestId('pokemon-type-button');
    expect(pokemons).toHaveLength(butonLength);
  });
  // olhei este github https://github.com/tryber/sd-020-a-project-react-testing-library/pull/64/files

  it(' Deve existir um botão de filtragem para cada tipo de pokémon', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const butonElectric = screen.getByRole('button', { name: 'Electric' });
    expect(butonElectric).toBeDefined();

    userEvent.click(butonElectric);
    const pokemon = screen.getByText(/Pikachu/i);
    expect(pokemon).toBeDefined();
  });

  it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);

    const butonAll = screen.getByRole('button', { name: 'All' });
    expect(butonAll).toBeDefined();
    userEvent.click(butonAll);
    const proximo = screen.getByTestId('pokemon-type');
    expect(proximo).toBeDefined();
  });
});
