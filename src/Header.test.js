import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';

import Header from './Header';

test('renders Emoji Search', () => {
  render(<Header />);
  const textElement = screen.getByText(/Emoji Search/i);
  expect(textElement).toBeInTheDocument();
})

