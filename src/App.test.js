import { render, screen } from '@testing-library/react';
import App from './App';

test('shows mbuthia somewhere', () => {
  render(<App />);
  const mbuthia = screen.getByText('Mbuthia');
  expect(mbuthia).toBeInTheDocument();
});
