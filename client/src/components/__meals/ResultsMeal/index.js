import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Loader from '../../__service/Loader/index';

import {
  StyledErrorMsg,
  StyledContainer,
} from './stylesContainer';

import {
  StyledListContainer,
  StyledPoster,
  StyledMoreInfo,
  StyledButton,
} from './stylesCard';

const ResultsMeal = props => {
  const { recipe, error } = props;

  if (!(recipe && Object.keys(recipe).length)) {
    return (
      <>
        <Loader />
        <StyledErrorMsg>{error}</StyledErrorMsg>
      </>
    );
  }

  const foodCard = recipe.map((meal, index) => (
    <StyledListContainer key={recipe[index].idMeal}>

      <StyledPoster>
        <img src={meal.strMealThumb} alt="recipe" />
      </StyledPoster>

      <StyledMoreInfo>
        <li>
          <p>
            {meal.strMeal}
          </p>
        </li>

        <Link to={{
          pathname: `/meals/${recipe[index].idMeal}`,
        }}>
          <StyledButton> Discover </StyledButton>
        </Link>
      </StyledMoreInfo>
    </StyledListContainer>
  ));

  return (
    <StyledContainer>
      {foodCard}
    </StyledContainer>
  );
};

export default withRouter(ResultsMeal);
