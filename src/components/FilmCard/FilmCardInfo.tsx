import { FC } from 'react';
import { FilmCardTittle } from './FilmCardTittle';
import { FilmCardProps } from '.';
import { FilmCardSubtittle } from './FilmCardSubtitle';
import { FilmCardDescription } from './FilmCardDescription';

export const FilmCardInfo: FC<FilmCardProps> = ({ film }) => {
  return (
    <div className="film-card__info">
      <FilmCardTittle film={film} />
      <FilmCardSubtittle film={film} />
      <FilmCardDescription film={film} />
    </div>
  );
};
