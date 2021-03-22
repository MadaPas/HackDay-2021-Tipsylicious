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

const ResultsDrink = props => {
  const { cocktail, error } = props;

  if (!(cocktail && Object.keys(cocktail).length)) {
    return (
      <>
        <Loader />
        <StyledErrorMsg>{error}</StyledErrorMsg>
      </>
    );
  }
  const drinkCard = cocktail.map((drink, index) => (
    <StyledListContainer key={cocktail[index].idDrink}>

      <StyledPoster>
        <img src={drink.strDrinkThumb} alt="cocktail" />
        <span>{drink.strAlcoholic}</span>
      </StyledPoster>

      <StyledMoreInfo>
        <li>
          <p>
            {drink.strDrink}
          </p>
        </li>

        <Link to={{
          pathname: `/drinks/${cocktail[index].idDrink}`,
        }}>
          <StyledButton> Discover </StyledButton>
        </Link>
      </StyledMoreInfo>
    </StyledListContainer>
  ));

  return (
    <StyledContainer>
      {drinkCard}
    </StyledContainer>
  );
};

export default withRouter(ResultsDrink);
