import styled from 'styled-components';
import { StyledList } from '../../styles/List.styled.js';
import { cardHeight } from '../../utils/constants/generalConstants.js';

export const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 17px;
  background-color: ${({ theme }) => theme.color.bgElem};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  min-height: ${`${cardHeight}px`};
  box-shadow: ${({theme}) => theme.color.shadow};
  cursor: pointer;

  &:hover {
    box-shadow: ${({ theme }) => theme.color.shadowHov};
  }

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
`

export const Img = styled.img`
  height: 160px;
  border-radius: ${({ theme }) => theme.borderRadius.lg} ${({ theme }) => theme.borderRadius.lg} 0 0;
  object-fit: fill;
  object-position: center;

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    height: 145px;
    border-radius: ${({ theme }) => theme.borderRadius.md} ${({ theme }) => theme.borderRadius.md} 0 0;
  }
`

export const InfoWrapper = styled.div`
  padding-left: 15px;
  
  & > h2 {
    font-size: 16px;
    line-height: 17px;
    font-weight: ${({ theme }) => theme.fontWeight.lg};
    margin: 0 0 20px;
    color: ${({ theme }) => theme.color.text};
  }
`
export const ListDescription = styled(StyledList)`
  color: ${({ theme }) => theme.color.text};
  
  & > li {
    display: flex;
    gap: 5px;
  }
`

export const DescriptionTitle = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 15px;
  font-weight: ${({ theme }) => theme.fontWeight.md};
`

export const DescriptionText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 15px;
  font-weight: ${({ theme }) => theme.fontWeight.sm};
`