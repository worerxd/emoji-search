import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';

import SearchInput from './SearchInput';

test('renders input', () => {
  render(<SearchInput />);
  const inputElement = screen.getByTitle('input')
  expect(inputElement).toBeInTheDocument();
})

