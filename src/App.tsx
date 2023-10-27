import { ChangeEvent, Component, ReactNode } from 'react';
import './App.scss';
import ResultSection from './components/ResultsSection';

interface MyState {
  inputString: string;
  searchString: string;
}

class App extends Component<unknown, MyState> {
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
      <>
        <section className="search">
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
      </>
    );
  }
}

export default App;
