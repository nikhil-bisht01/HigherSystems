import { render, screen } from '@testing-library/react';
import Home from './Home';
import About from './About';
import Connect from './Connect';
import Contact from './Contactform';
import Sahuliyat from './Sahuliyat' ;
import Login from './Login';
import Signup from './Signup';
import Example from './Example'
import Employee from './Employee'
import Business from './Business'
import Infra from './Infra'
test('renders learn react link', () => {
  render(<Home />);
  render(<About />);
  render(<Connect />);
  render(<Contact />);
  render(<Sahuliyat />);
  render(<Login />);
  render(<Signup />);
  render(<Example/>);
  render(<Employee/>);
  render(<Business/>);
  render(<Infra/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
