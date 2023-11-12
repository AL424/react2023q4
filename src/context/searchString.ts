import { Dispatch, SetStateAction, createContext } from 'react';

interface ISearchString {
  searchString: string;
  setSearchString: Dispatch<SetStateAction<string>>;
}

export const SearchString = createContext<{
  searchString: string;
  setSearchString: Dispatch<SetStateAction<string>>;
}>({} as ISearchString);
