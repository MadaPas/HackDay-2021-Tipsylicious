import React from 'react';
import { withRouter } from 'react-router-dom';
import FormMeal from '../FormMeal/index';
import RandomMeal from '../RandomMeal/index';
import ResultsMeal from '../ResultsMeal/index';

import {
  StyledHeaderWraper,
  StyledList,
  StyledForm,
  StyledRandom,
  StyledSearch,
  StyledFormWrapper,
} from './styles';

const Meal = props => {
  const {
    queryMeal,
    onSubmit,
    onChange,
    randomRecipe,
    recipe,
    error,
    randError,
  } = props;

  return (
    <StyledHeaderWraper>
      <StyledList>

        <StyledForm>
          <StyledFormWrapper onSubmit={onSubmit} onChange={onChange}>
            <FormMeal queryMeal={queryMeal} />
          </StyledFormWrapper>

          <StyledRandom>
            <RandomMeal randomRecipe={randomRecipe} randError={randError} />
          </StyledRandom>
        </StyledForm>

        <StyledSearch>
          <ResultsMeal recipe={recipe} error={error} />
        </StyledSearch>

      </StyledList>
    </StyledHeaderWraper>
  );
};

export default withRouter(Meal);
