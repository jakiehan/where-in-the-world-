import React from 'react';
import { StyledControls } from './Controls.styled';
import Search from '../Search/Search.jsx';
import CustomSelect from '../CustomSelect/CustomSelect.jsx';

const Controls = () => {

  const options = {
    title: 'Filter by Region',
    optionsMap: ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  }

  return (
    <StyledControls>
      <Search />
      <CustomSelect options={options} />
    </StyledControls>
  );
};

export default Controls;
