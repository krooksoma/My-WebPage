import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlashCards from './FlashCards';

describe('<FlashCards />', () => {
  test('it should mount', () => {
    render(<FlashCards />);
    
    const flashCards = screen.getByTestId('FlashCards');

    expect(flashCards).toBeInTheDocument();
  });
});