/* eslint-disable react/no-array-index-key */
import React from 'react';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import Option from '../../../assets/images/option.svg';

import {
  StyledMealWrap,
  StyledButtonBack,
  StyledContent,
  StyledImageContainer,
  StyledDetails,
  StyledFavorite,
  StyledFavButton,
  StyledFavButtonAfter,
  StyledMealIngredients,
  StyledMealInstructions,
  StyledVideo,
} from './styles';

const MealCard = props => {
  const {
    meal,
    youtubeVideo,
    ingredients,
    addToStorage,
    favoriteList,
    handleClick,
  } = props;

  const ingredientsCard = ingredients.map((ing, index) => <li key={index}>{ing}</li>);
  const colorToggle = favoriteList.filter(data => data.idMeal === meal.idMeal);

  return (
    <StyledMealWrap>
      <StyledButtonBack onClick={handleClick}><i className="fas fa-arrow-left" /></StyledButtonBack>
      <StyledContent>
        <StyledImageContainer>
          {meal ? <img src={meal.strMealThumb} alt="recipe" /> : <img src={Option} alt="recipe" />}
          <StyledDetails>
            {meal ? (
              <h1>
                {meal.strMeal}
              </h1>
            ) : <span> Name Not Available </span>}

            <StyledFavorite>
              {meal ? <span><h3>{meal.strCategory}</h3></span> : ''}
              {colorToggle.length !== 0 ? (
                <StyledFavButton onClick={() => addToStorage(meal)}>
                  <IoIosHeart style={{ color: 'red', fontSize: '25px', transition: 'all .4s' }} />
                </StyledFavButton>
              ) : (
                <StyledFavButtonAfter onClick={() => addToStorage(meal)}>
                  <IoIosHeartEmpty style={{ color: 'white', fontSize: '25px', transition: 'all .4s' }} />
                </StyledFavButtonAfter>
              )}
            </StyledFavorite>
          </StyledDetails>
        </StyledImageContainer>

        <StyledMealIngredients>
          <div>
            <h2>Ingredients</h2>
            {!(ingredients) ? ''
              : <ul>{ingredientsCard}</ul>}
          </div>
        </StyledMealIngredients>
      </StyledContent>

      {meal ? (
        <StyledMealInstructions>
          <h2>Instructions</h2>
          <><div>{meal.strInstructions}</div></>
        </StyledMealInstructions>
      ) : ''}

      {youtubeVideo
        ? (
          <StyledVideo>
            <h2>Check Out the Video</h2>

            <div>
              <iframe
                margin="auto"
                src={youtubeVideo}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="video" />
            </div>
          </StyledVideo>
        )
        : ''}
    </StyledMealWrap>
  );
};

export default MealCard;
