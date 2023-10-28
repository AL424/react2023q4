import { Component, ReactNode } from 'react';
import { getResults } from '../../services/kpApi';
import { FilmInfo } from '../../types/kp';
import { FilmCard } from '../FilmCard';
import './index.scss';

interface MyProps {
  searchName?: string;
}

interface MyState {
  filmsInfo: FilmInfo[];
  loading: boolean;
}

class ResultSection extends Component<MyProps, MyState> {
  state: MyState = {
    filmsInfo: [],
    loading: true,
  };

  getFilmsInfo = async () => {
    const data = await getResults(this.props.searchName);
    await this.setState({
      filmsInfo: data,
      loading: false,
    });
  };

  componentDidMount = async () => {
    this.getFilmsInfo();
  };

  componentDidUpdate = async (prevProps: Readonly<MyProps>) => {
    if (prevProps.searchName !== this.props.searchName) {
      await this.setState({ loading: true });
      this.getFilmsInfo();
    }
  };

  render(): ReactNode {
    return (
      <section className="result-section">
        {this.state.loading ? (
          <span className="loader">Searching...</span>
        ) : (
          this.state.filmsInfo.map((film) => {
            return <FilmCard film={film} key={film.id} />;
          })
        )}
      </section>
    );
  }
}

export default ResultSection;
