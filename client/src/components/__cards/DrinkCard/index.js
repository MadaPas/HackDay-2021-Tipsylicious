/* eslint-disable react/no-array-index-key */
import React from 'react';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import Option from '../../../assets/images/option.svg';

import {
  StyledDrinkWrap,
  StyledButtonBack,
  StyledContent,
  StyledImageContainer,
  StyledDetails,
  StyledFavorite,
  StyledFavButton,
  StyledFavButtonAfter,
  StyledDrinkIngredients,
  StyledDrinkInstructions,
} from './styles';

const DrinkCard = props => {
  const {
    drink,
    ingredients,
    addDrinkToStorage,
    favoriteDrinkList,
    handleClick,
  } = props;

  const ingredientsCard = ingredients.map((ing, index) => <li key={index}>{ing}</li>);
  const colorToggle = favoriteDrinkList.filter(data => data.idDrink === drink.idDrink);

  return (
    <StyledDrinkWrap>
      <StyledButtonBack onClick={handleClick}><i className="fas fa-arrow-left" /></StyledButtonBack>
      <StyledContent>
        <StyledImageContainer>
          {drink ? <img src={drink.strDrinkThumb} alt="drink" /> : <img src={Option} alt="drink" />}
          <StyledDetails>
            {drink ? (
              <li>
                <h1>{drink.strDrink}</h1>
              </li>
            ) : <span> Name Not Available </span>}

            <StyledFavorite>
              {drink ? <li><h3>{drink.strCategory}</h3></li> : ''}
              {colorToggle.length !== 0 ? (
                <StyledFavButton onClick={() => addDrinkToStorage(drink)}>
                  <IoIosHeart style={{ color: 'red', fontSize: '25px', transition: 'all .4s' }} />
                </StyledFavButton>
              ) : (
                <StyledFavButtonAfter onClick={() => addDrinkToStorage(drink)}>
                  <IoIosHeartEmpty style={{ color: 'white', fontSize: '25px', transition: 'all .4s' }} />
                </StyledFavButtonAfter>
              )}
            </StyledFavorite>
          </StyledDetails>
        </StyledImageContainer>

        <StyledDrinkIngredients>
          <div>
            <h2>Ingredients</h2>
            {!(ingredients) ? ''
              : <ul>{ingredientsCard}</ul>}
          </div>
        </StyledDrinkIngredients>
      </StyledContent>

      {drink ? (
        <StyledDrinkInstructions>
          <h2>Instructions</h2>
          <>{drink.strInstructions}</>
        </StyledDrinkInstructions>
      ) : ''}
    </StyledDrinkWrap>
  );
};

export default DrinkCard;
