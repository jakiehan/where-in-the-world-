import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadNeighboringCountries } from '../../store/details/detailsActions';
import { selectNeighboringCountries } from '../../store/details/detailsSelectors';
import { bordersConstant, PHOTO_URL } from '../../utils/constants/generalConstants';
import {
  StyledDetailsCountry,
  ImgWrapper,
  Flip,
  ImgFlag,
  ImgPhoto,
  DataWrapper,
  Title,
  ListGroup,
  List,
  ButtonGroup,
  Button,
  ButtonWrapper,
} from './DetailsCountry.styled';

const DetailsCountry = ({ country, push }) => {

  const [isClick, setIsClick] = useState(false);

  const { img, name, mainInfo, additionalInfo, borders } = country;

  const dispatch = useDispatch();
  const neighbors = useSelector(selectNeighboringCountries);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighboringCountries(borders));
    }
  }, [borders, dispatch]);

  return (
    <StyledDetailsCountry>
      <ImgWrapper isClick={isClick}>
        <Flip>
          <ImgFlag
            src={img}
            alt="Флаг"
            onClick={handleClick}
          />
          <ImgPhoto
            src={`${PHOTO_URL}${name},nature`}
            alt="Фото из страны"
            onClick={handleClick}
          />
        </Flip>
      </ImgWrapper>
      <DataWrapper>
        <Title>{name}</Title>
        <ListGroup>
          <List>
            {mainInfo.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </List>
          <List>
            {additionalInfo.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </List>
        </ListGroup>
        <ButtonWrapper>
          <h3>{bordersConstant.title}</h3>
          {borders.length ? (
            <ButtonGroup>
              {neighbors?.map((c) => (
                <li key={c}>
                  <Button onClick={() => push(`/country/${c}`)}>{c}</Button>
                </li>
              ))}
            </ButtonGroup>
          ) : (
            <p>{bordersConstant.notification}</p>
          )}
        </ButtonWrapper>
      </DataWrapper>
    </StyledDetailsCountry>
  );
};

export default DetailsCountry;
