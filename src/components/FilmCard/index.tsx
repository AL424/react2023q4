import { Component, ReactNode } from 'react';
import { FilmInfo } from '../../types/kp';
import './index.scss';

interface MyProps {
  film: FilmInfo;
}

export class FilmCard extends Component<MyProps> {
  render(): ReactNode {
    return (
      <article className="film-card">
        {this.props.film.poster?.url && (
          <img
            src={this.props.film.poster?.url}
            alt="poster"
            className="film-card__img"
          />
        )}
        <div className="film-card__info">
          <div className="film-card__title">
            <h3 className="film-card__name">{this.props.film.name}</h3>
            {this.props.film.year && (
              <span className="film-card__year">{this.props.film.year}</span>
            )}
          </div>
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
          <p className="film-card__description">
            {this.props.film.description || 'описание отсутствует'}
          </p>
        </div>
      </article>
    );
  }
}
