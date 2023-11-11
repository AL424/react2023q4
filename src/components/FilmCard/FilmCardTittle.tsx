import { FC } from 'react';
import { FilmCardProps } from '.';

export const FilmCardTittle: FC<FilmCardProps> = ({ film }) => {
  return (
    <div className="film-card__title">
      <h3 className="film-card__name" data-testid="name">
        {film.name}
      </h3>
      {film.year && (
        <span className="film-card__year" data-testid="year">
          {film.year}
        </span>
      )}
    </div>
  );
};
