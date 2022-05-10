import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  render(<App />);
});
