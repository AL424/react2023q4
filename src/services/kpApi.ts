import axios from 'axios';
import { FilmInfo, KinopoiskResp } from '../types/kp';
import { ItemPerPageType } from '../components/ItemsPerPage';

const instance = axios.create({
  baseURL: 'https://api.kinopoisk.dev/v1.3/movie',
  headers: {
    'X-API-KEY': import.meta.env.VITE_API_KEY,
  },
});

export type Params = {
  page: number;
  limit: ItemPerPageType;
  name?: string;
};

export const getResults = async (params: Params) => {
  const resp = await instance.get<KinopoiskResp>('', {
    params: {
      ...params,
      selectFields: 'id name description year poster.url type genres',
    },
  });

  const data = resp.data;
  return data;
};

export const getFilmById = async (id: string) => {
  const resp = await instance.get<FilmInfo>(`/${id}`);
  return resp.data;
};
