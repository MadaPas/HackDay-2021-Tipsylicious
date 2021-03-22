import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Loader from '../../__service/Loader/index';
import PaginationAlcohol from '../../__service/__pagination/PaginationAlcohol';
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

const AlcoholDrink = ({ itemsPerPage, alcohol }) => {
  const {
    alcoholPag, pagination, changer,
  } = PaginationAlcohol({ itemsPerPage, alcohol });

  if (!(alcohol && Object.keys(alcohol).length)) {
    return <><Loader /></>;
  }

  const alcoholCard = alcoholPag.map((drink, index) => (
    <StyledListContainer key={alcoholPag[index].idDrink}>

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
          pathname: `/drinks/${alcoholPag[index].idDrink}`,
        }}>
          <StyledButton> Discover </StyledButton>
        </Link>
      </StyledMoreInfo>
    </StyledListContainer>
  ));

  return (
    <StyledContainer>
      <h2>Best of Alcoholic Drinks</h2>
      <StyledCardWrapper>
        {alcoholCard}
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

export default withRouter(AlcoholDrink);
