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

const RandomDrink = props => {
  const { randomCocktail } = props;

  if (!(randomCocktail && Object.keys(randomCocktail).length)) {
    return <Spinner />;
  }

  return (
    <StyledListContainer>
      <StyledPoster>
        {randomCocktail ? <img src={randomCocktail[0].strDrinkThumb} alt="drinks" /> : <img src={Option} alt="drinks" />}
      </StyledPoster>

      <StyledName>
        {randomCocktail ? (
          <p>
            {' '}
            {randomCocktail[0].strDrink}
            {' '}
          </p>
        ) : <span> Name Not Available </span>}
      </StyledName>

      {randomCocktail ? <StyledCategory>{randomCocktail[0].strAlcoholic}</StyledCategory> : null}

      <Link to={{ pathname: `/drinks/${randomCocktail[0].idDrink}` }}>
        <StyledButton> Get Details </StyledButton>
      </Link>
    </StyledListContainer>
  );
};

export default withRouter(RandomDrink);
