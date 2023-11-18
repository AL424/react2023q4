import { FC } from 'react';
import './index.scss';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changePage } from '../../store/paramsSlice';

interface MyProps {
  totalPages: number;
}

export const PagesNav: FC<MyProps> = ({ totalPages }) => {
  const currentPage = useAppSelector((state) => state.params.page);
  const dispatch = useAppDispatch();

  return (
    <div className="pages-nav">
      <button
        type="button"
        className="prev"
        disabled={currentPage <= 1}
        onClick={() => {
          dispatch(changePage(currentPage - 1));
        }}
      >
        ❮
      </button>
      <span className="current-page">{currentPage}</span>
      <span>/</span>
      <span className="total-pages">{totalPages}</span>
      <button
        type="button"
        className="next"
        disabled={currentPage >= totalPages}
        onClick={() => {
          dispatch(changePage(currentPage + 1));
        }}
      >
        ❯
      </button>
    </div>
  );
};
