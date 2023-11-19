import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FilmInfo, KinopoiskResp } from '../types/kp';
import { Params } from './paramsSlice';

export const kpApi = createApi({
  reducerPath: 'kpApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.kinopoisk.dev/v1.3/movie',
    headers: {
      'X-API-KEY': import.meta.env.VITE_API_KEY,
    },
  }),
  endpoints: (builder) => ({
    getFilms: builder.query<KinopoiskResp, Params>({
      query: (params) => {
        return {
          url: '',
          params: {
            ...params,
            selectFields: 'id name description year poster.url type genres',
          },
        };
      },
    }),
    getFilmById: builder.query<FilmInfo, string>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetFilmsQuery, useGetFilmByIdQuery } = kpApi;
