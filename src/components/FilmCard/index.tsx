import { FC } from 'react';
import { FilmInfo } from '../../types/kp';
import './index.scss';
import { FilmCardInfo } from './FilmCardInfo';
import { FilmCardPoster } from './FilmCardPoster';

export interface FilmCardProps {
  film: FilmInfo;
}

export const FilmCard: FC<FilmCardProps> = ({ film }) => {
  return (
    <article className="film-card">
      <FilmCardPoster film={film} />
      <FilmCardInfo film={film} />
    </article>
  );
};
