import { FC } from 'react';
import { FilmCardProps } from '.';

export const FilmCardDescription: FC<FilmCardProps> = ({ film }) => {
  return (
    <p className="film-card__description" data-testid="description">
      {film.description || 'описание отсутствует'}
    </p>
  );
};
