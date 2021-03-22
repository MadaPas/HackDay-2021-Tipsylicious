import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Option from '../../../assets/images/option.svg';
import Spinner from '../../__service/Spinner/index';

import {
  StyledListContainer,
  StyledPoster,
  StyledName,
  StyledCategory,
  StyledButton,
} from './styles';

const RandomMeal = props => {
  const { randomRecipe } = props;

  if (!(randomRecipe && Object.keys(randomRecipe).length)) {
    return <Spinner />;
  }

  return (
    <StyledListContainer>
      <StyledPoster>
        {randomRecipe ? <img src={randomRecipe[0].strMealThumb} alt="recipe" /> : <img src={Option} alt="recipe" />}
      </StyledPoster>

      <StyledName>
        {randomRecipe ? (
          <p>
            {' '}
            {randomRecipe[0].strMeal}
            {' '}
          </p>
        ) : <span> Name Not Available </span>}
      </StyledName>

      {randomRecipe ? <StyledCategory>{randomRecipe[0].strCategory}</StyledCategory> : null}

      <Link to={{ pathname: `/meals/${randomRecipe[0].idMeal}` }}>
        <StyledButton> Get Details </StyledButton>
      </Link>
    </StyledListContainer>
  );
};

export default withRouter(RandomMeal);
