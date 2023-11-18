import { FC, useState } from 'react';
import { SearchSection } from '../components/SearchSection';
import { ResultsSection } from '../components/ResultsSection';
import { Outlet } from 'react-router-dom';
import { ErrorButton } from '../components/ErrorButton';
import { FilmInfo } from '../types/kp';
import { FilmsInfo } from '../context/FilmsInfo';

export const Root: FC = () => {
  const [filmsInfo, setFilmsInfo] = useState<FilmInfo[]>([]);

  return (
    <>
      <SearchSection />
      <main className="main">
        <FilmsInfo.Provider
          value={{
            filmsInfo,
            setFilmsInfo,
          }}
        >
          <ResultsSection />
        </FilmsInfo.Provider>
        <Outlet />
      </main>
      <footer className="container">
        <ErrorButton />
      </footer>
    </>
  );
};
