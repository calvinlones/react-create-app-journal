import { render, screen } from '@testing-library/react';
import App from './App';

test('main app loads', () => {
  render(<App />);
  const linkElement = screen.getByText(/React Journal App/i);
  expect(linkElement).toBeInTheDocument();
});
