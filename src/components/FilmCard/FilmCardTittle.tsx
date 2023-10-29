import { Component, ReactNode } from 'react';
import { FilmCardProps } from '.';

export class FilmCardTittle extends Component<FilmCardProps> {
  render(): ReactNode {
    return (
      <div className="film-card__title">
        <h3 className="film-card__name">{this.props.film.name}</h3>
        {this.props.film.year && (
          <span className="film-card__year">{this.props.film.year}</span>
        )}
      </div>
    );
  }
}
