import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface MyProps {
  searchString: string;
  setSearchString: Dispatch<SetStateAction<string>>;
}

export const SearchSection: FC<MyProps> = ({
  searchString,
  setSearchString,
}) => {
  const [inputString, setInputString] = useState(searchString);
  const navigate = useNavigate();

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputString(e.target.value);
  };

  const onClickButton = () => {
    setSearchString(inputString.trim());
    localStorage.setItem('searchString', inputString.trim());
    navigate('/1');
  };

  return (
    <section className="search-section">
      <input
        type="text"
        placeholder="enter film name..."
        value={inputString}
        onChange={onChangeInput}
      />
      <button type="button" onClick={onClickButton}>
        search
      </button>
    </section>
  );
};
