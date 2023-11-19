import { FC } from 'react';
import './index.scss';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changePage } from '../../store/paramsSlice';
import { useGetFilmsQuery } from '../../store/kpApi';
import { useNavigate } from 'react-router-dom';

export const PagesNav: FC = () => {
  const params = useAppSelector((state) => state.params);
  const dispatch = useAppDispatch();

  const { data } = useGetFilmsQuery(params);
  const navigate = useNavigate();

  const onChangePage = (page: number) => {
    navigate(`/${page}`);
    dispatch(changePage(page));
  };

  return (
    <div className="pages-nav">
      <button
        type="button"
        className="prev"
        disabled={!data || params.page <= 1}
        onClick={() => {
          onChangePage(params.page - 1);
        }}
      >
        ❮
      </button>
      <span className="current-page">{params.page}</span>
      <span>/</span>
      <span className="total-pages">{data?.pages || 0}</span>
      <button
        type="button"
        className="next"
        disabled={!data || params.page >= data.pages}
        onClick={() => {
          onChangePage(params.page + 1);
        }}
      >
        ❯
      </button>
    </div>
  );
};
