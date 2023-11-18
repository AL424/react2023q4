import { FC, useContext, useEffect, useState } from 'react';
import { getResults } from '../../services/kpApi';
import './index.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { PagesNav } from '../PagesNav';
import { FilmLink } from '../FilmCard/FilmLink';
import { ItemsPerPage } from '../ItemsPerPage';
import { FilmsInfo } from '../../context/FilmsInfo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changePage } from '../../store/paramsSlice';

export const ResultsSection: FC = () => {
  const { filmsInfo, setFilmsInfo } = useContext(FilmsInfo);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

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

  useEffect(() => {
    setLoading(true);
    const getFilmsInfo = async () => {
      const data = await getResults(params);
      setFilmsInfo(data.docs);
      setTotalPages(data.pages);
      setLoading(false);
    };
    const timer = setTimeout(() => {
      getFilmsInfo();
    }, 100);

    return () => clearTimeout(timer);
  }, [params, setFilmsInfo]);

  return (
    <section className="result-section">
      {loading ? (
        <span className="loader">Searching...</span>
      ) : (
        <>
          <ItemsPerPage />
          {filmsInfo.map((film) => {
            return <FilmLink film={film} key={film.id} />;
          })}
          <PagesNav totalPages={totalPages} />
        </>
      )}
    </section>
  );
};
