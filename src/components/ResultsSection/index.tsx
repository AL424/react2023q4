import { Component, ReactNode } from 'react';
import { getResults } from '../../services/kpApi';
import { FilmInfo } from '../../types/kp';
import { FilmCard } from '../FilmCard';

interface MyProps {
  searchName?: string;
}

interface MyState {
  filmsInfo: FilmInfo[];
}

class ResultSection extends Component<MyProps, MyState> {
  state = {
    filmsInfo: [],
  };

  componentDidMount = async () => {
    const data = await getResults(this.props.searchName);
    this.setState({ filmsInfo: data });
  };

  componentDidUpdate = async (prevProps: Readonly<MyProps>) => {
    if (prevProps.searchName !== this.props.searchName) {
      const data = await getResults(this.props.searchName);
      this.setState({ filmsInfo: data });
    }
  };

  render(): ReactNode {
    return (
      <section>
        <h2>{this.props.searchName || 'запрос не введен'}</h2>
        {this.state.filmsInfo.map((film) => {
          return <FilmCard film={film} key={film.id} />;
        })}
      </section>
    );
  }
}

export default ResultSection;
