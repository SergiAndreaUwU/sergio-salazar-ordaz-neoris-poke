/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen } from '@testing-library/react';
import App from './App';

it('Renders a div with "cardList" className', () => {
  const { container } = render(<App/>)
  expect(container.getElementsByClassName('cardList').length).toBe(1);
});

it('Renders a card', async() => {
  render(<App />);
  const cards = await screen.findAllByText("# ",{exact:false},{timeout:2000});
  expect(cards[0]).toBeInTheDocument()
});

it('Renders correct title', async() => {
  render(<App />);
  const title = await screen.findByText("Listado de Pokemon");
  expect(title).toContainHTML("h1")
});

it('Renders 4 cards', async() => {
  render(<App />);
  const cards = await screen.findAllByText("# ",{exact:false},{timeout:2000});
  expect(cards[0]).toBeInTheDocument()
  expect(cards[1]).toBeInTheDocument()
  expect(cards[2]).toBeInTheDocument()
  expect(cards[3]).toBeInTheDocument()

});

it('Renders a div with "navbar" className', () => {
  const { container } = render(<App/>)
  expect(container.getElementsByClassName('navbar').length).toBe(1);
});


it('Renders backward button with "primary" classname', async() => {
  await render(<App/>)
  const buttonBackwards = await screen.findByText("< Atras");
  expect(buttonBackwards).toHaveClass("primary")
  expect(buttonBackwards).toContainHTML("button")
});

it('Renders forward button with "primary" classname', async() => {
  await render(<App/>)
  const buttonBackwards = await screen.findByText("Siguiente >");
  expect(buttonBackwards).toHaveClass("primary")
  expect(buttonBackwards).toContainHTML("button")
});
