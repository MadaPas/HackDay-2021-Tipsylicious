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

const FormMeal = ({ queryMeal }) => (
  <>
    <StyledTextHeading>
      <h2>I am eating just in case I might</h2>
      <h2>get hungry later.</h2>
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
        <span>
          {' '}
          {queryMeal}
          {' '}
        </span>
      </p>
    </StyledQuery>
  </>
);

export default withRouter(FormMeal);
