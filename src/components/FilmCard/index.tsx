import { Component, ReactNode } from 'react';
import { FilmInfo } from '../../types/kp';
import './index.scss';
import { FilmCardInfo } from './FilmCardInfo';
import { FilmCardPoster } from './FilmCardPoster';

export interface FilmCardProps {
  film: FilmInfo;
}

export class FilmCard extends Component<FilmCardProps> {
  render(): ReactNode {
    return (
      <article className="film-card">
        <FilmCardPoster film={this.props.film} />
        <FilmCardInfo film={this.props.film} />
      </article>
    );
  }
}
