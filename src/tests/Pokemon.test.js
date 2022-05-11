import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  it('Teste se é renderizado um card com as informações de determinado pokémon.', () => {
    renderWithRouter(<App />);

    const name = screen.getByTestId('pokemon-name');
    expect(name).toHaveTextContent('Pikachu');

    const type = screen.getByTestId('pokemon-type');
    expect(type).toHaveTextContent('Electric');

    const average = screen.getByTestId('pokemon-weight');
    expect(average).toHaveTextContent('Average weight: 6.0 kg');

    const img = screen.getByAltText('Pikachu sprite');
    const link = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', link);
  });

  it('Teste se a card do pokémon contém link de navegação para exibir detalhes', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/25');

    const title = screen.getByText('Pikachu Details');
    expect(title).toBeInTheDocument();
  });

  it('teste se ao clicar é redirecionado a detalhes pokemon', () => {
    renderWithRouter(<App />);
    const linkEl = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkEl);
    const title = screen.queryByText('Pikachu Details');
    expect(title).toBeInTheDocument();
  });

  it('Teste também se a URL exibida no navegador muda para /pokemon/<id>', () => {
    const { history } = renderWithRouter(<App />);
    const linkEl = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkEl);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });

  it('Teste se existe um ícone de estrela nos pokémons favoritados.', () => {
    renderWithRouter(<App />);

    const linkEl = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkEl);
    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);
    const src = '/star-icon.svg';
    const iconeEstrela = screen.getByAltText('Pikachu is marked as favorite');
    expect(iconeEstrela).toBeInTheDocument();
    expect(iconeEstrela).toHaveAttribute('src', src);
  });
});

// olhei este github https://github.com/tryber/sd-020-a-project-react-testing-library/pull/35/files
