import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeLimit } from '../../store/paramsSlice';

export type ItemPerPageType = 5 | 10 | 20;

const ItemPerPageArr: ItemPerPageType[] = [5, 10, 20];

export const ItemsPerPage: FC = () => {
  const limit = useAppSelector((state) => state.params.limit);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <fieldset>
      <legend>Items per page</legend>
      {ItemPerPageArr.map((item) => {
        return (
          <label key={item} className="items-per-page__label">
            <input
              type="radio"
              name="items"
              value={item}
              checked={limit === item}
              onChange={() => {
                navigate('/1');
                dispatch(changeLimit(item));
              }}
            />
            {item}
          </label>
        );
      })}
    </fieldset>
  );
};
