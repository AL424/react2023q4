import { Component, ReactNode } from 'react';
import { FilmCardProps } from '.';

export class FilmCardDescription extends Component<FilmCardProps> {
  render(): ReactNode {
    return (
      <p className="film-card__description">
        {this.props.film.description || 'описание отсутствует'}
      </p>
    );
  }
}
