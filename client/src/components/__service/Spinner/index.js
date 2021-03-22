import React from 'react';
import Loader from '../../../assets/images/spin.svg';
import { StyledImg } from './styles';

const Spinner = () => (
  <>
    <center>
      <StyledImg src={Loader} />
    </center>
  </>
);

export default Spinner;
