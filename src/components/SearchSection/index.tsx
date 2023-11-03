import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';

interface MyProps {
  searchString: string;
  setSearchString: Dispatch<SetStateAction<string>>;
}

export const SearchSection: FC<MyProps> = ({
  searchString,
  setSearchString,
}) => {
  const [inputString, setInputString] = useState(searchString);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputString(e.target.value);
  };

  const onClickButton = () => {
    setSearchString(inputString.trim());
    localStorage.setItem('searchString', inputString.trim());
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
