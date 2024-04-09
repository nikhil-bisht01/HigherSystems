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
import DMS from './DMS'
import Implementation from './Implementation'
import Navbar from './Navbar';
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
  render(<Implementation/>);
  render(<DMS/>);
  render(<Navbar/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
