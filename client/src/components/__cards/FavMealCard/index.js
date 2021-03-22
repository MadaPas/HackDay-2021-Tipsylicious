import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoTrashOutline } from 'react-icons/io5';

import {
  StyledPopup,
  StyledAlertBox,
  StyledClsButton,
  StyledPopupContent,
  StyledYesButton,
  StyledPoster,
  StyledPosterTitle,
  StyledDiscoverButton,
} from './styles';

const FavMealCard = props => {
  const { removeMealFromStorage, meal } = props;
  const [isopen, setIsopen] = useState(false);

  const handleClick = () => {
    setIsopen(!isopen);
  };

  return (
    <>
      <button type="button" className={isopen ? 'exit' : 'active'} onClick={handleClick}>
        <IoTrashOutline style={{
          color: '#5f3568', fontSize: '20px', fontWeight: 'bold', transition: 'all .4s',
        }} />
      </button>

      <div className={isopen ? 'confirm' : 'confirm-annex'}>
        <StyledPopup>
          <StyledAlertBox>
            <li>
              <StyledClsButton onClick={handleClick}>&times;</StyledClsButton>
            </li>
          </StyledAlertBox>

          <StyledPopupContent>
            <li>
              <p>Remove</p>
            </li>
            <li>
              <p>
                {meal.strMeal}
                ?
              </p>
            </li>
          </StyledPopupContent>

          <StyledYesButton onClick={() => removeMealFromStorage(meal)}>Yes</StyledYesButton>
        </StyledPopup>
      </div>

      <StyledPoster>
        <img src={meal.strMealThumb} alt="favList" />
      </StyledPoster>
      <StyledPosterTitle>
        <div>
          <p>
            {meal.strMeal}
          </p>
        </div>

        <Link to={{ pathname: `/meals/${meal.idMeal}` }}>
          <StyledDiscoverButton> Discover </StyledDiscoverButton>
        </Link>
      </StyledPosterTitle>
    </>
  );
};
export default FavMealCard;
