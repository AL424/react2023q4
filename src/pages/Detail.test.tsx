import { beforeEach, describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as reactRouterDom from 'react-router-dom';
import { setImmediate } from 'timers';
import { Detail } from './Detail';

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom');
  return {
    ...mod,
  };
});
vi.spyOn(reactRouterDom, 'useParams').mockReturnValue({ id: '1143242' });
vi.mock('../services/kpApi', () => ({
  getFilmById: vi.fn().mockResolvedValue({
    id: 1143242,
    name: 'Джентльмены',
  }),
}));
vi.mock('../components/FilmCard', () => ({
  FilmCard: () => <div data-testid="film-card" />,
}));

describe('Loader displayed correctly', () => {
  beforeEach(() => {
    render(
      <reactRouterDom.BrowserRouter>
        <Detail />
      </reactRouterDom.BrowserRouter>
    );
  });
  test('Loader displayed', () => {
    const loader = screen.getByTestId('loader');
    const filmCard = screen.queryByTestId('film-card');
    expect(loader).toBeInTheDocument();
    expect(filmCard).toBeNull();
  });
  test('Loader doesn`t displayed', async () => {
    await new Promise(setImmediate);
    const loader = screen.queryByTestId('loader');
    const filmCard = screen.getByTestId('film-card');
    expect(loader).toBeNull();
    expect(filmCard).toBeInTheDocument();
  });
});
