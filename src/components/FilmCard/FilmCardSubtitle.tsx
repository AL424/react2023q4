import { FC } from 'react';
import { FilmCardProps } from '.';

export const FilmCardSubtittle: FC<FilmCardProps> = ({ film }) => {
  return (
    <div className="film-card__subtitle">
      {film.type && (
        <span className="film-card__type" data-testid="type">
          {film.type}
        </span>
      )}
      {film.genres?.slice(0, 3).map((item, index) => {
        return (
          <span className="film-card__genre" key={index} data-testid="genres">
            {item.name}
          </span>
        );
      })}
    </div>
  );
};
