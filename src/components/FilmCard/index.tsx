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
        <div className="film-card__img-wrap">
          {this.props.film.poster?.url && (
            <img
              src={this.props.film.poster?.url}
              alt="poster"
              className="film-card__img"
            />
          )}
        </div>
        <h3 className="film-card__title">{this.props.film.name}</h3>
        <p className="film-card__discription">
          {this.props.film.description || 'описание отсутствует'}
        </p>
        <span className="film-card__year">
          {this.props.film.year || '9999'}
        </span>
      </article>
    );
  }
}
