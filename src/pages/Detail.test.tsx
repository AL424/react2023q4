import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as reactRouterDom from 'react-router-dom';
import { Detail } from './Detail';
import * as kpApi from '../store/kpApi';

vi.mock('react-router-dom', async () => {
  const mod =
    await vi.importActual<typeof import('react-router-dom')>(
      'react-router-dom'
    );
  return {
    ...mod,
  };
});
vi.spyOn(reactRouterDom, 'useParams').mockReturnValue({ id: '1143242' });

const kpApiMock = vi.spyOn(kpApi, 'useGetFilmByIdQuery');

vi.mock('../components/FilmCard', () => ({
  FilmCard: () => <div data-testid="film-card" />,
}));

describe('Loading indicator is displayed while fetching data', () => {
  test('Loader displayed', () => {
    kpApiMock.mockReturnValue({
      isFetching: true,
      refetch: vi.fn(),
    });
    const component = render(
      <reactRouterDom.BrowserRouter>
        <Detail />
      </reactRouterDom.BrowserRouter>
    );
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
    expect(component).toMatchSnapshot();
  });
  test('Loader doesn`t displayed', async () => {
    kpApiMock.mockReturnValue({
      data: {
        id: 1143242,
        name: 'Джентльмены',
      },
      isFetching: false,
      refetch: vi.fn(),
    });
    const component = render(
      <reactRouterDom.BrowserRouter>
        <Detail />
      </reactRouterDom.BrowserRouter>
    );
    const loader = screen.queryByTestId('loader');
    screen.debug();
    expect(loader).toBeNull();
    expect(component).toMatchSnapshot();
  });
});

describe('Tests for the Card component', () => {
  test('API call to fetch detailed information', () => {
    render(
      <reactRouterDom.BrowserRouter>
        <Detail />
      </reactRouterDom.BrowserRouter>
    );
    expect(kpApi.useGetFilmByIdQuery).toBeCalled();
  });
});
