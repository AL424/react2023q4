import { ChangeEvent, Component, ReactNode } from 'react';
import './App.scss';
import ResultSection from './components/ResultsSection';

interface MyState {
  inputString: string;
  searchString: string;
}

class App extends Component<unknown, MyState> {
  state = {
    inputString: '',
    searchString: '',
  };

  onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputString: e.target.value });
  };

  onClickButton = () => {
    this.setState({ searchString: this.state.inputString });
  };

  render(): ReactNode {
    return (
      <>
        <section className="search">
          <input type="text" onChange={this.onChangeInput} />
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
