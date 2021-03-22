import React from 'react';
import {
  StyledPosition, StyledCircle,
} from './styles';

const Loader = () => (
  <center>
    <StyledPosition>
      <StyledCircle>4</StyledCircle>
      <StyledCircle>O</StyledCircle>
      <StyledCircle>4</StyledCircle>
    </StyledPosition>
  </center>
);

export default Loader;
