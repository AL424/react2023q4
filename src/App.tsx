import { Component, ReactNode } from 'react';
import './App.scss';
import { SearchWrap } from './components/SearchWrap';
import { ErrorButton } from './components/ErrorButton';
import { ErrorBoundary } from './components/ErrorBoundary';

class App extends Component {
  render(): ReactNode {
    return (
      <ErrorBoundary>
        <SearchWrap />
        <ErrorButton />
      </ErrorBoundary>
    );
  }
}

export default App;
