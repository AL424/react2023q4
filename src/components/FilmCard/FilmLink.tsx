import { FC } from 'react';
import './index.scss';
import { FilmCardProps } from '.';
import { Link } from 'react-router-dom';
import { FilmCardTittle } from './FilmCardTittle';

export const FilmLink: FC<FilmCardProps> = ({ film }) => {
  return (
    <Link to={`./film/${film.id}`} className="film-link">
      <FilmCardTittle film={film} />
    </Link>
  );
};
