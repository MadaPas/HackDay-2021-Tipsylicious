import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  StyledTextHeading,
  StyledContent,
  StyledForm,
  StyledFormInput,
  StyledButton,
  StyledQuery,
} from './styles';

const FormDrink = ({ queryDrinks }) => (
  <>
    <StyledTextHeading>
      <h2>Drink responsively means </h2>
      <h2> do not spill it.</h2>
    </StyledTextHeading>

    <StyledContent>
      <StyledForm>
        <StyledFormInput />
        <StyledButton>
          <i className="fas fa-search" />
        </StyledButton>
      </StyledForm>
    </StyledContent>

    <StyledQuery>
      <p>
        Currently On Display is
        {' '}
        <span>
          {queryDrinks}
        </span>
      </p>
    </StyledQuery>
  </>
);

export default withRouter(FormDrink);
