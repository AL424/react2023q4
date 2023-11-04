import { FC } from 'react';
import './App.scss';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Route, Routes } from 'react-router-dom';
import { Root } from './pages/Root';
import { Detail } from './pages/Detail';

const App: FC = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/:page?" element={<Root />}>
          <Route path="film/:id" element={<Detail />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
