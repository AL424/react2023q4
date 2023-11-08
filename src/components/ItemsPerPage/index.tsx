import { Dispatch, FC, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';

export type ItemPerPageType = 5 | 10 | 20;

interface MyProps {
  itemPerPage: ItemPerPageType;
  setItemPerPage: Dispatch<SetStateAction<ItemPerPageType>>;
}

const ItemPerPageArr: ItemPerPageType[] = [5, 10, 20];

export const ItemsPerPage: FC<MyProps> = ({ itemPerPage, setItemPerPage }) => {
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
              checked={itemPerPage === item}
              onChange={() => {
                navigate('/1');
                setItemPerPage(item);
              }}
            />
            {item}
          </label>
        );
      })}
    </fieldset>
  );
};
