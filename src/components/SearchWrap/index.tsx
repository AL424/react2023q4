import { FC, useState } from 'react';
import { ResultSection } from '../ResultsSection';
import './index.scss';
import { SearchSection } from '../SearchSection';

export const SearchWrap: FC = () => {
  const [searchString, setSearchString] = useState(
    localStorage.getItem('searchString') || ''
  );

  return (
    <main className="search-wrap">
      <SearchSection
        searchString={searchString}
        setSearchString={setSearchString}
      />
      <ResultSection searchName={searchString} />
    </main>
  );
};
