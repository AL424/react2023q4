import { FC } from 'react';
import { FilmCardProps } from '.';

export const FilmCardPoster: FC<FilmCardProps> = ({ film }) => {
  return (
    <>
      {film.poster?.url && (
        <img src={film.poster?.url} alt="poster" className="film-card__img" />
      )}
    </>
  );
};
