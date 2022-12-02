import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDarkTheme } from '../../store/theme/themeSelectors.js';
import { toggleTheme } from '../../store/theme/themeActions.js';
import { StyledModeSwitcher, Button, Span } from './ModeSwitcher.styled';
import { IoSunny, IoMoon } from 'react-icons/io5';

const ModeSwitcher = () => {

  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkTheme);

  const handleClick = () => {
    dispatch(toggleTheme());
  }

  return (
    <StyledModeSwitcher>
      <Button onClick={handleClick} darkMode={darkMode}>
        {darkMode ? (
          <IoMoon color="white" />
        ) : (
          <IoSunny color="orange" />
        )}
        <Span>
          {darkMode ? 'Dark Theme' : 'Light Theme'}
        </Span>
      </Button>
    </StyledModeSwitcher>
  );
};

export default ModeSwitcher;
