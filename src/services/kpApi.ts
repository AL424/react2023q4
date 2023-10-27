import axios from 'axios';
import { KinopoiskResp } from '../types/kp';

export const getResults = async (name?: string) => {
  const resp = await axios.get<KinopoiskResp>(
    'https://api.kinopoisk.dev/v1.3/movie',
    {
      headers: {
        'X-API-KEY': import.meta.env.VITE_API_KEY,
      },
      params: {
        name: name || undefined,
        selectFields: 'id name description year poster.url',
        limit: 10,
      },
    }
  );

  const data = resp.data.docs;
  return data;
};
