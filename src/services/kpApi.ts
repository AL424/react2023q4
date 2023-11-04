import axios from 'axios';
import { KinopoiskResp } from '../types/kp';

export const getResults = async (page: number, name?: string) => {
  const resp = await axios.get<KinopoiskResp>(
    'https://api.kinopoisk.dev/v1.3/movie',
    {
      headers: {
        'X-API-KEY': import.meta.env.VITE_API_KEY,
      },
      params: {
        name: name || undefined,
        selectFields: 'id name description year poster.url type genres',
        page: page,
        limit: 10,
      },
    }
  );

  const data = resp.data;
  return data;
};
