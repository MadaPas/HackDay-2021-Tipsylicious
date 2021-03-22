import React, { useState } from 'react';
import { withRouter, NavLink, useHistory } from 'react-router-dom';

import {
  StyledContainer,
  StyledNav,
  StyledLogo,
  StyledList,
} from './styles';

const Navigation = () => {
  const [isopen, setIsopen] = useState(false);

  const history = useHistory();

  const handleClickWelcome = () => {
    history.push('/');
  };

  const closeNavBar = () => {
    setIsopen(false);
  };

  return (
    <StyledContainer>
      <StyledNav>
        <StyledLogo onClick={handleClickWelcome}> tipsylicious☻</StyledLogo>

        <StyledList className={isopen ? 'nav-content__active' : 'nav-content'}>
          <li>
            <NavLink exact activeClassName="activenav" to="/drinks" onClick={closeNavBar}>Drinks</NavLink>
          </li>

          <li>
            <NavLink exact activeClassName="activenav" to="/alcohol" onClick={closeNavBar}>Alcohol Drinks</NavLink>
          </li>

          <li>
            <NavLink exact activeClassName="activenav" to="/nonalcohol" onClick={closeNavBar}>Non-Alcohol Drinks</NavLink>
          </li>

          <li>
            <NavLink exact activeClassName="activenav" to="/recipes" onClick={closeNavBar}>Meals</NavLink>
          </li>

          <li>
            <NavLink activeClassName="activenav" to="/favorites" onClick={closeNavBar}> Your favorites</NavLink>
          </li>

        </StyledList>

      </StyledNav>
    </StyledContainer>
  );
};

export default withRouter(Navigation);
