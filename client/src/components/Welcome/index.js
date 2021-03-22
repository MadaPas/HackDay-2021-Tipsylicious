import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  StyledContent,
  StyledHeading,
  StyledList,
  StyledButton,
} from './styles';

const Welcome = () => {
  const history = useHistory();

  const handleClickHome = () => {
    history.push('/drinks');
  };

  return (
    <StyledContent>
      <StyledHeading>
        <StyledList>
          <li><h1>Welcome</h1></li>
          <li><h1>Home To</h1></li>
          <li><h1>Tipsylicious!</h1></li>
          <li><h1>Find your favorite </h1></li>
          <li><h1>Meals & </h1></li>
          <li><h1>Drinks</h1></li>
          <StyledButton
            onClick={handleClickHome}>
            Find Out What is Drinking today
          </StyledButton>
        </StyledList>
      </StyledHeading>
    </StyledContent>
  );
};

export default Welcome;
