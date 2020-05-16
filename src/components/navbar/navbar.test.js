import React from 'react';
import { render } from '@testing-library/react';
import NavBarComponent from './navbar.jsx'

test('renders learn react link', () => {
  const { getByText } = render(<NavBarComponent />);
  const linkElement = getByText(/Home/gi);
  expect(linkElement).toBeInTheDocument();
});