import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledCard, Img, InfoWrapper, ListDescription, DescriptionTitle, DescriptionText  } from './Card.styled.js';

const Card = ({ cardInfo, numberCards }) => {

  const { img, name, info } = cardInfo;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`country/${name}`);
    localStorage.setItem('cards', JSON.stringify(numberCards))
  }

  return (
    <StyledCard onClick={handleClick} >
      <Img src={img} alt="Флаг страны" />
      <InfoWrapper>
        <h2>{name}</h2>
        <ListDescription>
          {info.map(elem =>
            <li key={elem.title}>
              <DescriptionTitle>{elem.title}:</DescriptionTitle>
              <DescriptionText>{elem.description}</DescriptionText>
            </li>
          )}
        </ListDescription>
      </InfoWrapper>
    </StyledCard>
  );
};

export default Card;
