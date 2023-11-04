import { FC } from 'react';
import { FilmInfo } from '../../types/kp';
import './index.scss';
import { FilmCardPoster } from './FilmCardPoster';
import { FilmCardDescription } from './FilmCardDescription';
import { FilmCardTittle } from './FilmCardTittle';
import { FilmCardSubtittle } from './FilmCardSubtitle';

export interface FilmCardProps {
  film: FilmInfo;
}

export const FilmCard: FC<FilmCardProps> = ({ film }) => {
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
    </div>
  );
};
