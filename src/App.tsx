import { FC } from 'react';
import './App.scss';
import { SearchWrap } from './components/SearchWrap';
import { ErrorButton } from './components/ErrorButton';
import { ErrorBoundary } from './components/ErrorBoundary';

const App: FC = () => {
  return (
    <ErrorBoundary>
      <SearchWrap />
      <ErrorButton />
    </ErrorBoundary>
  );
};

export default App;
