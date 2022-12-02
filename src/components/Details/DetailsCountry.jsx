import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadNeighboringCountries } from '../../store/details/detailsActions.js';
import { selectNeighboringCountries } from '../../store/details/detailsSelectors.js';
import {StyledDetailsCountry, ImgWrapper, Flip, ImgFlag, ImgPhoto, DataWrapper, Title, ListGroup, List, ButtonGroup, Button, ButtonWrapper } from './DetailsCountry.styled.js';

const DetailsCountry = ({ country, push }) => {

  const { img, name, mainInfo, additionalInfo, borders } = country;

  const dispatch = useDispatch();
  const neighbors = useSelector(selectNeighboringCountries);

  useEffect(() => {

    if (borders.length) {
      dispatch(loadNeighboringCountries(borders))
    }
  }, [borders])

  return (
    <StyledDetailsCountry>
      <ImgWrapper>
        <Flip>
          <ImgFlag src={img} alt="Флаг" />
          <ImgPhoto src={`https://source.unsplash.com/random/?${name},nature`} alt="Фото из страны" />
        </Flip>
      </ImgWrapper>
      <DataWrapper>
        <Title>
          {name}
        </Title>
        <ListGroup>
          <List>
            {mainInfo.map(item =>
              <li key={item.title}>
                <h3>
                  {item.title}
                </h3>
                <p>
                  {item.description}
                </p>
              </li>
            )}
          </List>
          <List>
            {additionalInfo.map(item =>
              <li key={item.title}>
                <h3>
                  {item.title}
                </h3>
                <p>
                  {item.description}
                </p>
              </li>
            )}
          </List>
        </ListGroup>
        <ButtonWrapper>
          <h3>Border countries:</h3>
            {borders.length ? (
              <ButtonGroup>
                {neighbors?.map(c =>
                  <li key={c}>
                    <Button onClick={() => push(`/country/${c}`)}>
                      {c}
                    </Button>
                  </li>
                )}
              </ButtonGroup>
              ) : (
              <p>There is no border countries</p>
            )}
        </ButtonWrapper>
      </DataWrapper>
    </StyledDetailsCountry>
  );
};

export default DetailsCountry;
