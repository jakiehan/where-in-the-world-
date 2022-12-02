import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearch } from '../../store/controls/controlsSelectors.js';
import { StyledForm, SearchIcon, Input } from './Search.styled';
import { setSearch } from '../../store/controls/controlsActions.js';

const Search = () => {

  const dispatch = useDispatch();
  const search = useSelector(selectSearch);

  const handleChange = (e) => {
    dispatch(setSearch(e.target.value))
  }

  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <SearchIcon />
      <Input onChange={handleChange} value={search} />
    </StyledForm>
  );
};

export default Search;
