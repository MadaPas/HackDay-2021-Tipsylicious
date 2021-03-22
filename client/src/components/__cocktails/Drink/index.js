import React from 'react';
import { withRouter } from 'react-router-dom';
import FormDrink from '../FormDrink/index';
import RandomDrink from '../RandomDrink/index';
import ResultsDrink from '../ResultsDrink/index';

import {
  StyledHeaderWraper,
  StyledList,
  StyledForm,
  StyledRandom,
  StyledSearch,
  StyledFormWrapper,
} from './styles';

const Drink = props => {
  const {
    queryDrinks,
    handleOnSubmit,
    handleOnChange,
    randomCocktail,
    cocktail,
    error,
    randError,
  } = props;

  return (
    <StyledHeaderWraper>
      <StyledList>

        <StyledForm>
          <StyledFormWrapper onSubmit={handleOnSubmit} onChange={handleOnChange}>
            <FormDrink queryDrinks={queryDrinks} />
          </StyledFormWrapper>

          <StyledRandom>
            <RandomDrink randomCocktail={randomCocktail} randError={randError} />
          </StyledRandom>
        </StyledForm>

        <StyledSearch>
          <ResultsDrink cocktail={cocktail} error={error} />
        </StyledSearch>

      </StyledList>
    </StyledHeaderWraper>
  );
};

export default withRouter(Drink);
