import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BasicPageLayout from '../components/BasicPageLayout';

describe('<BasicPageLayout />', () => {
  test('renders the BasicPageLayout', async () => {
    render(
      <BasicPageLayout
        pageName='Test Page'
      ></BasicPageLayout>,
    );

    expect(screen.getByTestId('Test Page'));
  });

	test('renders children', async () => {
    render(
      <BasicPageLayout
        pageName='Test Page'
      >
				<p>Renders children</p>
			</BasicPageLayout>,
    );

    expect(screen.getByTestId('Test Page')).toHaveTextContent('Renders children');
  });
});
