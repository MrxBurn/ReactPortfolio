import React from 'react';
import { render, screen } from '@testing-library/react';
import IntroPage from './intro';


test('renders learn react link', () => {
  render(<IntroPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
