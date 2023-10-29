import { ChangeEvent, Component, ReactNode } from 'react';
import ResultSection from '../ResultsSection';
import './index.scss';

interface MyState {
  inputString: string;
  searchString: string;
}

export class SearchWrap extends Component<unknown, MyState> {
  state = {
    inputString: localStorage.getItem('searchString') || '',
    searchString: localStorage.getItem('searchString') || '',
  };

  onChangeInput = async (e: ChangeEvent<HTMLInputElement>) => {
    await this.setState({ inputString: e.target.value });
  };

  onClickButton = async () => {
    await this.setState({ searchString: this.state.inputString.trim() });
    localStorage.setItem('searchString', this.state.searchString);
  };

  render(): ReactNode {
    return (
      <main className="search-wrap">
        <section className="search-section">
          <input
            type="text"
            placeholder="enter film name..."
            value={this.state.inputString}
            onChange={this.onChangeInput}
          />
          <button type="button" onClick={this.onClickButton}>
            search
          </button>
        </section>
        <ResultSection searchName={this.state.searchString} />
      </main>
    );
  }
}
