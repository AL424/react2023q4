import { Component, ReactNode } from 'react';
import { FilmCardProps } from '.';

export class FilmCardPoster extends Component<FilmCardProps> {
  render(): ReactNode {
    return (
      <>
        {this.props.film.poster?.url && (
          <img
            src={this.props.film.poster?.url}
            alt="poster"
            className="film-card__img"
          />
        )}
      </>
    );
  }
}
