/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LanguageSelect from '../components/LanguageSelect';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

const TestPage = () => {
  const { t } = useTranslation();
  console.log(t('test:text'));

  return <p>{t('test:text')}</p>;
};

describe('<LanguageSelect />', () => {
  test('renders language selection tool', async () => {
    render(<LanguageSelect />);

    expect(screen.getByTestId('fi-selection'));
  });
  test('changes language to fi', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSelect />
      </I18nextProvider>,
    );

    fireEvent(
      screen.getByTestId('fi-selection'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    expect(i18n.language === 'fi');
  });
  test('changes language to en', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSelect />
      </I18nextProvider>,
    );

    fireEvent(
      screen.getByTestId('en-selection'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    expect(i18n.language === 'en');
  });
  test('translates text to fi', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSelect />
        <TestPage />
      </I18nextProvider>,
    );

    fireEvent(
      screen.getByTestId('fi-selection'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    expect(await screen.findByText('testiteksti suomeksi')).toBeVisible();
  });
});
