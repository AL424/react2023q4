import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FilmInfo } from '../types/kp';
import { getFilmById } from '../services/kpApi';
import { FilmCard } from '../components/FilmCard';

export const Detail: FC = () => {
  const [loading, setLoading] = useState(true);
  const [film, setFilm] = useState<FilmInfo | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setLoading(true);
      const getFilm = async () => {
        const data = await getFilmById(id);
        setFilm(data);
        setLoading(false);
      };
      getFilm();
    }
  }, [id]);

  return (
    <section className="detail">
      {loading ? (
        <span className="loader">Loading...</span>
      ) : (
        <>{film && <FilmCard film={film} />}</>
      )}
    </section>
  );
};
