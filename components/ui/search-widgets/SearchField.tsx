import React from 'react';

import { ExitIcon, SearchIcon } from '../../shared/Icons';

interface SearchFieldProps {
  searchQuery: string;
  onChangeCallback: any;
  inputPlaceholder: string;
  clearSearch: () => void;
  hasResults?: boolean;
}

const SearchField: React.FC<SearchFieldProps> = ({
  searchQuery,
  onChangeCallback,
  inputPlaceholder,
  clearSearch,
}) => {
  return (
    <span className='relative'>
      <input
        id='plant-search-field'
        placeholder={inputPlaceholder}
        className='w-full p-2 pl-10 border-none rounded-md focus:ring-0 peer'
        type='search'
        value={searchQuery}
        onChange={(event) => onChangeCallback(event.target.value)}
        autoComplete='off'
      />

      <SearchIcon
        id='customer-search-field-icon'
        customStyles='h-4 w-4 text-gray-medium peer-focus:text-green-mediumLight absolute left-3 top-[3px]'
      />

      {searchQuery && (
        <ExitIcon
          clickHandler={() => clearSearch()}
          id='customer-search-clear-button'
          customStyles='h-4 w-4 cursor-pointer text-gray-medium absolute peer-focus:text-green-mediumLight right-3 top-[3px]'
        />
      )}
    </span>
  );
};

export default SearchField;
