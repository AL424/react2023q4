import { FC, useState } from 'react';
import { SearchSection } from '../components/SearchSection';
import { ResultsSection } from '../components/ResultsSection';
import { Outlet } from 'react-router-dom';
import { ErrorButton } from '../components/ErrorButton';

export const Root: FC = () => {
  const [searchString, setSearchString] = useState(
    localStorage.getItem('searchString') || ''
  );

  return (
    <>
      <SearchSection
        searchString={searchString}
        setSearchString={setSearchString}
      />
      <main className="main">
        <ResultsSection searchName={searchString} />
        <Outlet />
      </main>
      <footer className="container">
        <ErrorButton />
      </footer>
    </>
  );
};
