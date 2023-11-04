import { FC, useEffect, useState } from 'react';
import { getResults } from '../../services/kpApi';
import { FilmInfo } from '../../types/kp';
import { FilmCard } from '../FilmCard';
import './index.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { PagesNav } from '../PagesNav';

interface MyProps {
  searchName?: string;
}

export const ResultsSection: FC<MyProps> = ({ searchName }) => {
  const [loading, setLoading] = useState(true);
  const [filmsInfo, setFilmsInfo] = useState<FilmInfo[]>([]);
  const [currentPage, setCurrentPage] = useState<number>();
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();
  const { page } = useParams();

  useEffect(() => {
    const pageNumber = Number(page);

    isNaN(pageNumber)
      ? navigate('/1', { replace: true })
      : setCurrentPage(pageNumber);
  }, [page, navigate]);

  /* 
    При изменении поискового запроса и перенаправлении на первую страницу
    дважды обращаемся к серверу, надо решить эту проблему
  */

  useEffect(() => {
    setLoading(true);
    if (currentPage) {
      const getFilmsInfo = async () => {
        const data = await getResults(currentPage, searchName);
        setFilmsInfo(data.docs);
        setTotalPages(data.pages);
        setLoading(false);
      };
      getFilmsInfo();
    }
  }, [searchName, currentPage]);

  return (
    <section className="result-section">
      {loading ? (
        <span className="loader">Searching...</span>
      ) : (
        <>
          {filmsInfo.map((film) => {
            return <FilmCard film={film} key={film.id} />;
          })}
          <PagesNav currentPage={currentPage || 1} totalPages={totalPages} />
        </>
      )}
    </section>
  );
};
