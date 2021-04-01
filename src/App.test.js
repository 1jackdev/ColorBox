import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BoxList', () => {
  render(<App />);
  const linkElement = screen.getByText(/Color Box Maker/i);
  expect(linkElement).toBeInTheDocument();
});
