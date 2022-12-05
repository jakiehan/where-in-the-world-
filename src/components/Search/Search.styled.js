import styled from 'styled-components';
import { IoSearchOutline } from 'react-icons/io5';

export const StyledForm = styled.form.attrs({
  name: 'search form',
})`
  position: relative;
  border-radius: ${({theme}) => theme.borderRadius.lg};
  box-shadow: ${({theme}) => theme.color.shadow};
`

export const SearchIcon = styled(IoSearchOutline)`
  width: 13px;
  height: 13px;
  position: absolute;
  left: 13px;
  top: 12px;
  color: ${({ theme }) => theme.color.placeholder};
`

export const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
  name: 'search',
})`
  padding: 10px 10px 10px 45px;
  outline: none;
  border: none;
  border-radius: ${({theme}) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.color.bgElem};
  color: ${({ theme }) => theme.color.text};
  width: 100%;
  
  &::placeholder {
    font-size: 14px;
    line-height: 15px;
    color: ${({ theme }) => theme.color.placeholder};
  }
  
  &:hover {
    box-shadow: 0 1px 5px rgb(122, 135, 151, .9);
  }

  &:focus {
    box-shadow: 0 1px 5px rgb(122, 135, 151, .9);
  }
  
  &:-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0 50px #2b3238;
    -webkit-text-fill-color: ${({ theme }) => theme.color.text};
    -webkit-border-radius: ${({theme}) => theme.borderRadius.lg};
  }

  &:-webkit-autofill:focus {
    box-shadow: ${({ theme }) => theme.color.shadowHov}, inset 0 0 0 50px ${({ theme }) => theme.color.bgElem};
  }

  &:-webkit-autofill:hover {
    box-shadow: ${({ theme }) => theme.color.shadowHov}, inset 0 0 0 50px ${({ theme }) => theme.color.bgElem};
  }

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    border-radius: ${({theme}) => theme.borderRadius.md};
    font-size: 13px;
    line-height: 14px;

    &::placeholder {
      font-size: 12px;
      line-height: 13px;
      color: ${({ theme }) => theme.color.placeholder};
    }
  }

  @media (max-width: ${({theme}) => theme.media.tablet.max}) and (min-width: ${({ theme }) => theme.media.tablet.min}) {
    font-size: 14px;
    line-height: 15px;

    &::placeholder {
      font-size: 13px;
      line-height: 14px;
      color: ${({ theme }) => theme.color.placeholder};
    }
  }
`
