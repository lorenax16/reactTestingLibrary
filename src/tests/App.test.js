import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('testando o App', () => {
  it('Teste os textos dos links de navegação', () => {
    renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: 'Home' });
    const linkAbout = screen.getByRole('link', { name: 'About' });
    const linkFavorite = screen.getByRole('link', { name: 'Favorite Pokémons' });

    expect(linkHome).toBeInTheDocument();
    expect(linkAbout).toBeInTheDocument();
    expect(linkFavorite).toBeInTheDocument();
  });

  it('Teste se a aplicação é redirecionada para a página inicial', () => {
    const { history } = renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: 'Home' });
    userEvent.click(linkHome);
    // console.log(history);
    const { pathname } = history.location;

    expect(pathname).toBe('/');
  });

  it('Teste se a aplicação é redirecionada para a página About', () => {
    const { history } = renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: 'About' });
    userEvent.click(linkAbout);
    // console.log(history);
    const { pathname } = history.location;

    expect(pathname).toBe('/about');
  });

  it('Teste se a aplicação é redirecionada para a página Favoritos', () => {
    const { history } = renderWithRouter(<App />);
    const linkFavorite = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(linkFavorite);
    // console.log(history);
    const { pathname } = history.location;

    expect(pathname).toBe('/favorites');
  });

  it('Teste se a aplicação é redirecionada para a página Favoritos', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/not-found');
    const undefine = screen.getByText(/Page requested not found/i);
    expect(undefine).toBeInTheDocument();
  });
});
// olhei o git de adriano costa e nina
