import { render, screen } from '@testing-library/react';
import Home from './Home';
import About from './About';
test('renders learn react link', () => {
  render(<Home />);
  render(<About />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
