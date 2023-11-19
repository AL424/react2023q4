import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { FilmCard } from '../components/FilmCard';
import { useGetFilmByIdQuery } from '../store/kpApi';

export const Detail: FC = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetFilmByIdQuery(id || '');

  return (
    <section className="detail">
      {isFetching ? (
        <span className="loader" data-testid="loader">
          Loading...
        </span>
      ) : (
        <>{data && <FilmCard film={data} />}</>
      )}
    </section>
  );
};
