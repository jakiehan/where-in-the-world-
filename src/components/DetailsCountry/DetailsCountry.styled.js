import styled from 'styled-components';
import { StyledList } from '../../styles/List.styled';
import { StyledButton } from '../../styles/Button.styled';

export const StyledDetailsCountry = styled.div`
  display: grid;
  grid-template-columns: minmax(470px, 570px) minmax(440px, 610px);
  gap: 45px;
  align-items: start;

  @media (max-width: ${({theme}) => theme.media.portraitTablets.max}) {
    grid-template-columns: minmax(280px, 670px)
  }

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    gap: 35px;
  }

  @media (max-width: ${({theme}) => theme.media.tablet.max}) and (min-width: ${({ theme }) => theme.media.tablet.min}) {
    gap: 40px;
  }
`

export const ImgWrapper = styled.div`
  width: 100%;
  height: 360px;
  cursor: pointer;
  perspective: 1000px;

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    height: 200px;
  }

  @media (max-width: ${({theme}) => theme.media.tablet.max}) and (min-width: ${({ theme }) => theme.media.tablet.min}) {
    height: 290px;
  }

  @media (max-width: ${({theme}) => theme.media.portraitTablets.max}) and (min-width: ${({ theme }) => theme.media.portraitTablets.min}) {
    height: 330px;
  }

  div {
    transform: ${({isClick}) => isClick && 'rotateY(180deg)'}
  }
  
  &:hover > div {
    box-shadow: ${({theme}) => theme.color.shadowImgHov};
  }
`

export const Flip = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: ${({ theme }) => theme.color.shadow};
  position: relative;
  transform-style: preserve-3d;
  transition: .6s;
`

export const ImgFlag = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  backface-visibility: hidden;
  transform: rotateY(0);
`

export const ImgPhoto = styled(ImgFlag)`
  object-fit: cover;
  object-position: center;
  transform: rotateY(180deg);
  z-index: 1;
`

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 20px;
`

export const Title = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.lg};
  font-size: 23px;
  line-height: 25px;
  margin: 0;
  color: ${({ theme }) => theme.color.text};

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    font-size: 19px;
    line-height: 21px;
  }

  @media (max-width: ${({theme}) => theme.media.tablet.max}) and (min-width: ${({ theme }) => theme.media.tablet.min}) {
    font-size: 20px;
    line-height: 21px;
  }
`

export const ListGroup = styled.div`
  display: flex;
  gap: 70px;
  margin: 30px 0 50px;

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    flex-direction: column;
    gap: 45px;
  }
`

export const List = styled(StyledList)`
  display: flex;
  flex-direction: column;
  gap: 7px;
  
  li {
    display: flex;
    align-items: baseline;
    gap: 8px;
  }
  
  h3 {
    margin: 0;
    font-weight: ${({ theme }) => theme.fontWeight.md};
    font-size: 14px;
    line-height: 15px;
    color: ${({ theme }) => theme.color.text};
    white-space: nowrap;
  }

  p {
    margin: 0;
    font-size: 14px;
    line-height: 15px;
    color: ${({ theme }) => theme.color.text};
  }

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    h3 {
      font-size: 13px;
      line-height: 14px;
    }
    
    p {
      font-size: 13px;
      line-height: 14px;
    }
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 20px;
  
  h3 {
    font-weight: ${({ theme }) => theme.fontWeight.md};
    font-size: 14px;
    line-height: 15px;
    color: ${({ theme }) => theme.color.text};
    white-space: nowrap;
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 14px;
    line-height: 15px;
    color: ${({ theme }) => theme.color.text};
  }

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    gap: 15px;
    
    h3 {
      font-size: 13px;
      line-height: 14px;
    }
  }

  @media (max-width: ${({theme}) => theme.media.portraitTablets.max}) {
    flex-direction: column;
  }
`

export const ButtonGroup = styled(List)`
  flex-direction: row;
  gap: 15px;
  flex-wrap: wrap;
  align-items: baseline;
`

export const Button = styled(StyledButton)`
  width: 90px;
  padding: 5px 3px;
  background-color: ${({ theme }) => theme.color.bgElem};
  border-radius: ${({theme}) => theme.borderRadius.sm};
  box-shadow: ${({ theme }) => theme.color.shadow};
  color: ${({ theme }) => theme.color.text};
  font-size: 14px;
  line-height: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
  &:hover {
    box-shadow: ${({ theme }) => theme.color.shadowHov};
  }

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    font-size: 13px;
    line-height: 14px;
    width: 80px;
    padding: 4px 2px;
  }
`