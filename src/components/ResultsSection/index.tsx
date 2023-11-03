import { FC, useEffect, useState } from 'react';
import { getResults } from '../../services/kpApi';
import { FilmInfo } from '../../types/kp';
import { FilmCard } from '../FilmCard';
import './index.scss';

interface MyProps {
  searchName?: string;
}

export const ResultSection: FC<MyProps> = ({ searchName }) => {
  const [loading, setLoading] = useState(true);
  const [filmsInfo, setFilmsInfo] = useState<FilmInfo[]>([]);

  useEffect(() => {
    const getFilmsInfo = async () => {
      const data = await getResults(searchName);
      setFilmsInfo(data);
      setLoading(false);
    };
    getFilmsInfo();
  }, [searchName]);

  return (
    <section className="result-section">
      {loading ? (
        <span className="loader">Searching...</span>
      ) : (
        filmsInfo.map((film) => {
          return <FilmCard film={film} key={film.id} />;
        })
      )}
    </section>
  );
};
