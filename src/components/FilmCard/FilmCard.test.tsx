import { beforeEach, describe, expect, test, vi } from 'vitest';
import { FilmInfo } from '../../types/kp';
import { render, screen } from '@testing-library/react';
import { FilmCard } from '.';
import * as reactRouterDom from 'react-router-dom';

const film: FilmInfo = {
  id: 1143242,
  type: 'movie',
  name: 'Джентльмены',
  description:
    'Один ушлый американец ещё со студенческих лет приторговывал наркотиками, а теперь придумал схему нелегального обогащения с использованием поместий обедневшей английской аристократии и очень неплохо на этом разбогател. Другой пронырливый журналист приходит к Рэю, правой руке американца, и предлагает тому купить киносценарий, в котором подробно описаны преступления его босса при участии других представителей лондонского криминального мира — партнёра-еврея, китайской диаспоры, чернокожих спортсменов и даже русского олигарха.',
  year: 2019,
  poster: {
    url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/637271d5-61b4-4e46-ac83-6d07494c7645/orig',
  },
  genres: [
    {
      name: 'криминал',
    },
    {
      name: 'комедия',
    },
    {
      name: 'боевик',
    },
  ],
};

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom');
  return {
    ...mod,
  };
});

vi.spyOn(reactRouterDom, 'useParams').mockReturnValue({ page: '1' });

describe('FilmCard component correctly', () => {
  beforeEach(() => {
    render(
      <reactRouterDom.BrowserRouter>
        <FilmCard film={film} />
      </reactRouterDom.BrowserRouter>
    );
  });

  ['type', 'name', 'description', 'year'].forEach((item) => {
    test(`FilmCard ${item} displayed correctly`, () => {
      const element = screen.getByTestId(item);
      const textContent = element.textContent;
      expect(element).toBeInTheDocument();
      expect(textContent).toBe(String(film[item]));
    });
  });

  test('FilmCard poster displayed correctly', () => {
    const poster = screen.getByTestId('poster');
    const url = poster.getAttribute('src');
    expect(poster).toBeInTheDocument();
    expect(url).toBe(film.poster?.url);
  });

  test('FilmCard genres displayed correctly', () => {
    const { genres } = film;
    if (!genres) return;
    const elements = screen.getAllByTestId('genres');
    elements.forEach((item, index) => {
      expect(item).toBeInTheDocument();
      const textContent = item.textContent;
      expect(textContent).toBe(genres[index].name);
    });
  });
});
