import { FC } from 'react';
import { FilmInfo } from '../../types/kp';
import './index.scss';
import { FilmCardPoster } from './FilmCardPoster';
import { FilmCardDescription } from './FilmCardDescription';
import { FilmCardTittle } from './FilmCardTittle';
import { FilmCardSubtittle } from './FilmCardSubtitle';
import { Link, useParams } from 'react-router-dom';

export interface FilmCardProps {
  film: FilmInfo;
}

export const FilmCard: FC<FilmCardProps> = ({ film }) => {
  const { page } = useParams();

  return (
    <div className="film-card">
      <div className="film-card__header">
        <FilmCardPoster film={film} />
        <div className="film-card__info">
          <FilmCardTittle film={film} />
          <FilmCardSubtittle film={film} />
        </div>
      </div>
      <FilmCardDescription film={film} />
      <Link to={`/${page}`} className="close">
        close
      </Link>
    </div>
  );
};
