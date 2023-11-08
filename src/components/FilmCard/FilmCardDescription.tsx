import { FC } from 'react';
import { FilmCardProps } from '.';

export const FilmCardDescription: FC<FilmCardProps> = ({ film }) => {
  return (
    <p className="film-card__description">
      {film.description || 'описание отсутствует'}
    </p>
  );
};
