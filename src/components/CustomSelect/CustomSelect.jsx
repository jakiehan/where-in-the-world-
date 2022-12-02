import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRegion } from '../../store/controls/controlsActions.js';
import { selectRegion } from '../../store/controls/controlsSelectors.js';
import { StyledDropdownContainer, Wrapper, TitleWrapper, Title, CloseButton, Arrow, List } from './CustomSelect.styled.js';
import useOutsideActions from '../../hooks/useOutsideActions';

const CustomSelect = ({ options }) => {

  const dispatch = useDispatch();
  const region = useSelector(selectRegion);

  const { ref, isOpen, setIsOpen } = useOutsideActions();
  const { title, optionsMap } = options;

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const handleClickOption = value => () => {
    setIsOpen(false);
    dispatch(setRegion(value));
  }

  const handleClickCloseBtn = (e) => {
    dispatch(setRegion(''));
    e.stopPropagation();
  }

  return (
    <StyledDropdownContainer ref={ref}>
      <Wrapper onClick={handleClick}>
        <TitleWrapper>
          <Title>
            {region || title}
          </Title>
          {region && (
            <CloseButton onClick={handleClickCloseBtn} />
          )}
        </TitleWrapper>
        <Arrow />
      </Wrapper>
      <List isOpen={isOpen}>
        <ul>
          {optionsMap.map(option =>
            <li
              key={Math.random() + option}
              onClick={handleClickOption(option)}
            >
              <p>{option}</p>
            </li>
          )}
        </ul>
      </List>
    </StyledDropdownContainer>
  );
};

export default CustomSelect;
