import styled from 'styled-components';
import { StyledButton } from '../../styles/Button.styled';

export const StyledNotFound = styled.div`
  width: 100%;
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.p`
  font-size: 51px;
  line-height: 53px;
  font-weight: ${({theme}) => theme.fontWeight.md};
  margin: 0;
  text-align: center;
  color: ${({theme}) => theme.color.text};
  text-shadow: ${({ theme }) => theme.color.shadowText};

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    font-size: 29px;
    line-height: 31px;
  }

  @media (max-width: ${({theme}) => theme.media.tablet.max}) and (min-width: ${({ theme }) => theme.media.tablet.min}) {
    font-size: 39px;
    line-height: 41px;
  }
`

export const SubTitle = styled(Title)`
  font-size: 43px;
  line-height: 45px;
  margin-top: 20px;

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    font-size: 23px;
    line-height: 25px;
    margin-top: 10px;
  }

  @media (max-width: ${({theme}) => theme.media.tablet.max}) and (min-width: ${({ theme }) => theme.media.tablet.min}) {
    font-size: 33px;
    line-height: 35px;
    margin-top: 15px;
  }
`

export const Button = styled(StyledButton).attrs({
  'aria-label': 'Button',
  type: 'button',
})`
  width: 130px;
  padding: 7px;
  color: ${({theme}) => theme.color.text};
  background-color: ${({theme}) => theme.color.bgElem};
  box-shadow: ${({theme}) => theme.color.shadow};
  font-size: 17px;
  line-height: 19px;
  border-radius: ${({theme}) => theme.borderRadius.lg};
  margin-top: 75px;
  
  &:hover {
    box-shadow: ${({theme}) => theme.color.shadowHov};
  }

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    width: 100px;
    padding: 5px;
    font-size: 13px;
    line-height: 14px;
    margin-top: 35px;
  }

  @media (max-width: ${({theme}) => theme.media.tablet.max}) and (min-width: ${({ theme }) => theme.media.tablet.min}) {
    width: 110px;
    font-size: 15px;
    line-height: 17px;
    margin-top: 55px;
  }
`