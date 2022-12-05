import styled from 'styled-components';
import { IoChevronDown } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';

export const StyledDropdownContainer = styled.div`
  width: 175px;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.color.shadow};

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    width: 160px;
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
`

export const Wrapper = styled.div`
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.bgElem};
  padding: 0 15px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};

  &:hover {
    box-shadow: ${({ theme }) => theme.color.shadowHov};
  }

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    height: 34px;
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }

  @media (max-width: ${({theme}) => theme.media.tablet.max}) and (min-width: ${({ theme }) => theme.media.tablet.min}) {
    height: 35px;
  }
`

export const TitleWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.p`
  font-size: 15px;
  line-height: 17px;
  margin: 0;
  color: ${({ theme }) => theme.color.text};

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    font-size: 13px;
    line-height: 14px;
  }
  
  @media (max-width: ${({theme}) => theme.media.tablet.max}) and (min-width: ${({ theme }) => theme.media.tablet.min}) {
    font-size: 14px;
    line-height: 15px;
  }
`

export const CloseButton = styled(IoClose)`
  width: 18px;
  height: 18px;
  color: ${({ theme }) => theme.color.text};

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    width: 16px;
    height: 16px;
  }
`

export const Arrow = styled(IoChevronDown)`
  width: 20px;
  height: 20px;
  padding-left: 5px;
  color: ${({ theme }) => theme.color.text};
  border-left: 1px solid ${({ theme }) => theme.color.text};
`

export const List = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.bgElem};
  box-shadow: ${({ theme }) => theme.color.shadow};
  border-radius: ${({ theme }) => theme.borderRadius.sm} ${({ theme }) => theme.borderRadius.sm} ${({ theme }) => theme.borderRadius.lg} ${({ theme }) => theme.borderRadius.lg};
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  position: absolute;
  top: 45px;
  
  &:hover {
    box-shadow: ${({ theme }) => theme.color.shadowHov};
  }
  
  ul {
    padding: 10px 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  p {
    font-size: 15px;
    line-height: 17px;
    margin: 0;
    padding: 3px;
    text-align: center;
    cursor: pointer;
    color: ${({ theme }) => theme.color.text};
  }
  
  & p:hover {
    box-shadow: ${({ theme }) => theme.color.shadowHov};
  }

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    p {
      font-size: 13px;
      line-height: 14px;
      border-radius: ${({ theme }) => theme.borderRadius.sm} ${({ theme }) => theme.borderRadius.sm} ${({ theme }) => theme.borderRadius.md} ${({ theme }) => theme.borderRadius.md};
    }
  }

  @media (max-width: ${({theme}) => theme.media.tablet.max}) and (min-width: ${({ theme }) => theme.media.tablet.min}) {
    p {
      font-size: 14px;
      line-height: 15px;
    }
  }
`