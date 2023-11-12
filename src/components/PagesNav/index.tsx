import { FC } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

interface MyProps {
  currentPage: number;
  totalPages: number;
}

export const PagesNav: FC<MyProps> = ({ currentPage, totalPages }) => {
  return (
    <div className="pages-nav">
      {currentPage <= 1 ? (
        <span className="prev">❮</span>
      ) : (
        <Link to={`/${currentPage - 1}`} className="prev">
          ❮
        </Link>
      )}
      <span className="current-page">{currentPage}</span>
      <span>/</span>
      <span className="total-pages">{totalPages}</span>
      {currentPage >= totalPages ? (
        <span className="next">❯</span>
      ) : (
        <Link to={`/${currentPage + 1}`} className="next">
          ❯
        </Link>
      )}
    </div>
  );
};
