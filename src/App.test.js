/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { findByText, render, screen,waitFor } from '@testing-library/react';
import App from './App';

it('Renders a div with "cardList" className', () => {
  const { container } = render(<App/>)
  expect(container.getElementsByClassName('card-list').length).toBe(1);
});

it('Renders a div with at least one "card" className', async() => {
  render(<App />);
  const cards = await screen.findAllByText("#",{},{timeout:2000});
  expect(cards[0]).toHaveClass("card")
});

it('Renders correct title', async() => {
  render(<App />);
  const title = await screen.findByText("Listado de Pokemon");
  expect(title).toContainHTML("h2")
});

it('Renders 4 divs with "card" className', async() => {
  render(<App />);
  const cards = await screen.findAllByText("#",{},{timeout:2000});
  expect(cards[0]).toHaveClass("card")
  expect(cards[1]).toHaveClass("card")
  expect(cards[2]).toHaveClass("card")
  expect(cards[3]).toHaveClass("card")

});

it('Renders a div with "navbar" className', () => {
  const { container } = render(<App/>)
  expect(container.getElementsByClassName('navbar').length).toBe(1);
});


it('Renders backward button with "primary" classname', async() => {
  await render(<App/>)
  const buttonBackwards = await screen.findByText("Atras");
  expect(buttonBackwards).toHaveClass("primary")
  expect(buttonBackwards).toContainHTML("button")
});

it('Renders forward button with "primary" classname', async() => {
  await render(<App/>)
  const buttonBackwards = await screen.findByText("Siguiente");
  expect(buttonBackwards).toHaveClass("primary")
  expect(buttonBackwards).toContainHTML("button")
});
