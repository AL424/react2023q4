import { ChangeEvent, FC, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import { SearchString } from '../../context/SearchString';

export const SearchSection: FC = () => {
  const context = useContext(SearchString);
  const [inputString, setInputString] = useState(context.searchString);
  const navigate = useNavigate();

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputString(e.target.value);
  };

  const onClickButton = () => {
    context.setSearchString(inputString.trim());
    localStorage.setItem('searchString', inputString.trim());
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
