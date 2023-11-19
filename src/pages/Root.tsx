import { FC } from 'react';
import { SearchSection } from '../components/SearchSection';
import { ResultsSection } from '../components/ResultsSection';
import { Outlet } from 'react-router-dom';
import { ErrorButton } from '../components/ErrorButton';

export const Root: FC = () => {
  return (
    <>
      <SearchSection />
      <main className="main">
        <ResultsSection />
        <Outlet />
      </main>
      <footer className="container">
        <ErrorButton />
      </footer>
    </>
  );
};
