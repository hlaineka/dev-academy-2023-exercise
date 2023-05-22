/**
 * @jest-environment jsdom
 */

import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../components/Header/Header';

describe('<Header />', () => {
  test('renders the header', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(screen.getByTestId('header'));
  });
  test('renders the header with text', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(screen.getByTestId('header')).toHaveTextContent('Dashboard');
  });
  test('renders the header with journeys button', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(screen.getByTestId('navigation-Journeys'));
  });
  test('renders App and changes page to Journeys', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    fireEvent(
      screen.getByTestId('navigation-Journeys'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    expect(
      screen
        .getByTestId('navigation-Journeys')
        .classList.contains('selected-item'),
    ).toBe(true);
  });
});
