import { Dispatch, SetStateAction, createContext } from 'react';
import { FilmInfo } from '../types/kp';

interface IFilmsInfo {
  filmsInfo: FilmInfo[];
  setFilmsInfo: Dispatch<SetStateAction<FilmInfo[]>>;
}

export const FilmsInfo = createContext<IFilmsInfo>({} as IFilmsInfo);
