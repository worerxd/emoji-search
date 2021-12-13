import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';

import EmojiResultRow from './EmojiResultRow';

test('renders Click to copy emoji', () => {
  render(<EmojiResultRow />);
  const textElement = screen.getByText(/Click to copy emoji/i)
  expect(textElement).toBeInTheDocument();
})

