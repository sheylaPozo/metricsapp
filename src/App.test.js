import { render, screen, fireEvent } from './test-utilities';
import App from './App';

jest.mock('./redux/countries/api.js');

test('home page should fetch and render countries', async () => {
  render(<App />);

  expect(await screen.findByText(/Testing1/)).toBeInTheDocument();
});

test('details page should fetch and render country', async () => {
  render(<App />);

  fireEvent.click(screen.getByText(/Testing1/));

  expect(await screen.findByText(/Testing3/)).toBeInTheDocument();
});
