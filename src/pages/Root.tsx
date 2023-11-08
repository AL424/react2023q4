import { FC, useState } from 'react';
import { SearchSection } from '../components/SearchSection';
import { ResultsSection } from '../components/ResultsSection';
import { Outlet } from 'react-router-dom';
import { ErrorButton } from '../components/ErrorButton';
import { SearchString } from '../context/searchString';

export const Root: FC = () => {
  const [searchString, setSearchString] = useState(
    localStorage.getItem('searchString') || ''
  );

  return (
    <SearchString.Provider
      value={{
        searchString,
        setSearchString,
      }}
    >
      <SearchSection />
      <main className="main">
        <ResultsSection />
        <Outlet />
      </main>
      <footer className="container">
        <ErrorButton />
      </footer>
    </SearchString.Provider>
  );
};
