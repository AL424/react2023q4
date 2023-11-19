import { FC, useEffect } from 'react';
import './index.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { PagesNav } from '../PagesNav';
import { FilmLink } from '../FilmCard/FilmLink';
import { ItemsPerPage } from '../ItemsPerPage';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changePage } from '../../store/paramsSlice';
import { useGetFilmsQuery } from '../../store/kpApi';

export const ResultsSection: FC = () => {
  const params = useAppSelector((state) => state.params);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const { page } = useParams();

  useEffect(() => {
    const pageNumber = Number(page);

    isNaN(pageNumber)
      ? navigate('/1', { replace: true })
      : dispatch(changePage(pageNumber));
  }, [page, navigate, dispatch]);

  const { data, isFetching } = useGetFilmsQuery(params);

  return (
    <section className="result-section">
      {isFetching ? (
        <span className="loader">Searching...</span>
      ) : (
        <>
          <ItemsPerPage />
          {data?.docs.map((film) => {
            return <FilmLink film={film} key={film.id} />;
          })}
          <PagesNav />
        </>
      )}
    </section>
  );
};
