import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AccordionItem from './AccordionItem';

describe('<AccordionItem />', () => {
  test('it should mount', () => {
    render(<AccordionItem />);
    
    const accordionItem = screen.getByTestId('AccordionItem');

    expect(accordionItem).toBeInTheDocument();
  });
});