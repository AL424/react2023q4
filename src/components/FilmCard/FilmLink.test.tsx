import { beforeEach, describe, expect, test } from 'vitest';
import { FilmInfo } from '../../types/kp';
import { render, screen } from '@testing-library/react';
import { FilmLink } from './FilmLink';
import { BrowserRouter } from 'react-router-dom';

const film: FilmInfo = {
  id: 1143242,
  name: 'Джентльмены',
  year: 2019,
};

describe('Tests for the Card component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <FilmLink film={film} />
      </BrowserRouter>
    );
  });
  test('Card component renders the relevant card data', () => {
    screen.debug();
    const title = screen.getByTestId('name');
    const year = screen.getByTestId('year');
    expect(title).toBeInTheDocument();
    expect(year).toBeInTheDocument();
    expect(title.textContent).toBe(film.name);
    expect(year.textContent).toBe(String(film.year));
  });
  test('Clicking on a card opens a detailed card component', () => {
    const link = screen.getByTestId('film-link');
    const href = link.getAttribute('href');
    expect(href).toBe(`/film/${film.id}`);
  });
});
