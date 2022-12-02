import styled from 'styled-components';

export const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 17px;
  background-color: ${({ theme }) => theme.color.bgElem};
  border-radius: 6px;
  min-height: 310px;
  box-shadow: ${({theme}) => theme.color.shadow};
  cursor: pointer;

  &:hover {
    box-shadow: ${({ theme }) => theme.color.shadowHov};
  }
`

export const Img = styled.img`
  height: 160px;
  border-radius: 6px 6px 0 0;
  object-fit: fill;
  object-position: center;

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    height: 145px;
  }
`

export const InfoWrapper = styled.div`
  padding-left: 15px;
  
  & > h2 {
    font-size: 16px;
    line-height: 17px;
    font-weight: 800;
    margin: 0 0 20px;
    color: ${({ theme }) => theme.color.text};
  }
`
export const ListDescription = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
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
  font-weight: 600;
`

export const DescriptionText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 15px;
  font-weight: 300;
`