import { ChangeEvent, FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeName } from '../../store/paramsSlice';

export const SearchSection: FC = () => {
  const dispatch = useAppDispatch();
  const string = useAppSelector((state) => state.params.name);
  const [inputString, setInputString] = useState(string || '');
  const navigate = useNavigate();

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputString(e.target.value);
  };

  const onClickButton = () => {
    dispatch(changeName(inputString));
    navigate('/1');
  };

  return (
    <header className="search-section container">
      <input
        type="text"
        placeholder="enter film name..."
        value={inputString}
        onChange={onChangeInput}
      />
      <button type="button" onClick={onClickButton}>
        search
      </button>
    </header>
  );
};
