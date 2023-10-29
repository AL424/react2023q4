import { Component } from 'react';
import { FilmCardTittle } from './FilmCardTittle';
import { FilmCardProps } from '.';
import { FilmCardSubtittle } from './FilmCardSubtitle';
import { FilmCardDescription } from './FilmCardDescription';

export class FilmCardInfo extends Component<FilmCardProps> {
  render() {
    return (
      <div className="film-card__info">
        <FilmCardTittle film={this.props.film} />
        <FilmCardSubtittle film={this.props.film} />
        <FilmCardDescription film={this.props.film} />
      </div>
    );
  }
}
