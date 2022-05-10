import { screen } from '@testing-library/react';
import React from 'react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../components/NotFound';

describe('teste o componente <NotFound.js />', () => {
  it('Teste se contém um heading `h2` com o texto Page requested not found ', () => {
    renderWithRouter(<NotFound />);

    const elementoH2 = screen.getByRole('heading', { name: /Page requested not found/i,
      level: 2 });

    expect(elementoH2).toBeInTheDocument();
  });

  it('Teste se a página mostra a imagem', () => {
    renderWithRouter(<NotFound />);
    const elemImg = screen.getByRole('img',
      { name: /Pikachu crying because the page requested was not found/i });
    expect(elemImg).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
