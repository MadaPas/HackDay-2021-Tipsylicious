import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Loader from '../../__service/Loader/index';
import PaginationNonAlcohol from '../../__service/__pagination/PaginationNonAlcohol';

import {
  StyledContainer,
  StyledCardWrapper,
  StyledPagination,
  StyledPaginationList,
  StyledPaginationEl,
} from './stylesContainer';

import {
  StyledListContainer,
  StyledPoster,
  StyledMoreInfo,
  StyledButton,
} from './stylesCard';

const NonAlcoholDrink = ({ nonAlcohol, itemsPerPage }) => {
  const {
    nonAlcoholPag, pagination, changer,
  } = PaginationNonAlcohol({ itemsPerPage, nonAlcohol });

  if (!(nonAlcohol && Object.keys(nonAlcohol).length)) {
    return <><Loader /></>;
  }

  const nonAlcoholCard = nonAlcoholPag.map((drink, index) => (
    <StyledListContainer key={nonAlcoholPag[index].idDrink}>

      <StyledPoster>
        <img src={drink.strDrinkThumb} alt="cocktail" />
      </StyledPoster>

      <StyledMoreInfo>
        <li>
          <p>
            {drink.strDrink}
          </p>
        </li>

        <Link to={{
          pathname: `/drinks/${nonAlcoholPag[index].idDrink}`,
        }}>
          <StyledButton> Discover </StyledButton>
        </Link>
      </StyledMoreInfo>
    </StyledListContainer>
  ));

  return (
    <StyledContainer>
      <h2>Soft Corner</h2>
      <StyledCardWrapper>
        {nonAlcoholCard}
        <StyledPagination>

          <StyledPaginationList>
            {pagination.map(page => {
              if (!page.ellipsis) {
                return (
                  <li key={page.id}>
                    <a
                      href="/#"
                      className={page.current ? 'pagination-link__active' : 'pagination-link'}
                      onClick={e => changer(page.id, e)}>
                      {page.id}
                    </a>
                  </li>
                );
              }
              return <li key={page.id}><StyledPaginationEl>&hellip;</StyledPaginationEl></li>;
            })}
          </StyledPaginationList>
        </StyledPagination>
      </StyledCardWrapper>
    </StyledContainer>
  );
};
export default withRouter(NonAlcoholDrink);
