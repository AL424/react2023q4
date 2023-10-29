import { Component, ReactNode } from 'react';
import { FilmCardProps } from '.';

export class FilmCardSubtittle extends Component<FilmCardProps> {
  render(): ReactNode {
    return (
      <div className="film-card__subtitle">
        {this.props.film.type && (
          <span className="film-card__type">{this.props.film.type}</span>
        )}
        {this.props.film.genres?.slice(0, 3).map((item, index) => {
          return (
            <span className="film-card__genre" key={index}>
              {item.name}
            </span>
          );
        })}
      </div>
    );
  }
}
