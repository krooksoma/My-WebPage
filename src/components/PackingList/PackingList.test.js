import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PackingList from './PackingList';

describe('<PackingList />', () => {
  test('it should mount', () => {
    render(<PackingList />);
    
    const packingList = screen.getByTestId('PackingList');

    expect(packingList).toBeInTheDocument();
  });
});