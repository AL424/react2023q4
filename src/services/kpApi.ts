import axios from 'axios';
import { FilmInfo, KinopoiskResp } from '../types/kp';

const instance = axios.create({
  baseURL: 'https://api.kinopoisk.dev/v1.3/movie',
  headers: {
    'X-API-KEY': import.meta.env.VITE_API_KEY,
  },
});

export const getResults = async (page: number, name?: string) => {
  const resp = await instance.get<KinopoiskResp>('', {
    params: {
      name: name || undefined,
      selectFields: 'id name description year poster.url type genres',
      page: page,
      limit: 10,
    },
  });

  const data = resp.data;
  return data;
};

export const getFilmById = async (id: string) => {
  const resp = await instance.get<FilmInfo>(`/${id}`);
  return resp.data;
};
