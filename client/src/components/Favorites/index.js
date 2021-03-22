import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useLocalStorage from '../__service/useLocalStorage';
import FavMealCard from '../__cards/FavMealCard/index';
import FavDrinkCard from '../__cards/FavDrinkCard/index';
import {
  StyledContainer,
  StyledListCaption,
  StyledFavNumber,
  StyledCardWrapper,
  StyledFavCard,
} from './styles';

const Favs = () => {
  const [favList, setFavList] = useState([]);
  const [favDrinkList, setFavDrinkList] = useState([]);
  const [favoriteList, setFavoriteList] = useLocalStorage('favoritList', []);
  const [favoriteDrinkList, setFavoriteDrinkList] = useLocalStorage('favoriteDrinkList', []);

  const favTotal = () => {
    const myFood = [];
    const myDrink = [];

    if (favoriteList.length !== null) {
      myFood.push(favoriteList.length);
    }

    if (favoriteDrinkList.length !== null) {
      myDrink.push(favoriteDrinkList.length);
    }

    const tally = (((parseFloat(myDrink)) + (parseFloat(myFood))));
    return tally;
  };

  useEffect(() => {
    const fetchMealData = async () => {
      const mealResponse = await JSON.parse(localStorage.getItem('favoritList'));
      if (mealResponse) {
        setFavList(mealResponse);
      }
    };

    const fetchDrinkData = async () => {
      const drinkResponse = await JSON.parse(localStorage.getItem('favoriteDrinkList'));
      if (drinkResponse) {
        setFavDrinkList(drinkResponse);
      }
    };

    fetchMealData();
    fetchDrinkData();
  }, []);

  const history = useHistory();

  const reload = () => {
    const currentPath = window.location.pathname;
    history.replace('/');
    setTimeout(() => {
      history.replace(currentPath);
    }, 0);
  };

  const removeMealFromStorage = meal => {
    const newList = favoriteList.filter(item => item.idMeal !== meal.idMeal);
    setFavoriteList(newList);
    reload();
  };

  const removeDrinkFromStorage = cock => {
    const newList = favoriteDrinkList.filter(item => item.idDrink !== cock.idDrink);
    setFavoriteDrinkList(newList);
    reload();
  };

  const foodCard = favList.map(meal => {
    if (!favList) { return ''; }
    return (
      <StyledFavCard key={meal.idMeal}>
        <FavMealCard
          favList={favList}
          favoriteList={favoriteList}
          meal={meal}
          removeMealFromStorage={removeMealFromStorage} />
      </StyledFavCard>
    );
  });

  const drinkCard = favDrinkList.map(drink => {
    if (!favDrinkList) { return ''; }

    return (
      <StyledFavCard key={drink.idDrink}>
        <FavDrinkCard
          drink={drink}
          favDrinkList={favDrinkList}
          favoriteDrinkList={favoriteDrinkList}
          removeDrinkFromStorage={removeDrinkFromStorage} />
      </StyledFavCard>
    );
  });

  const items = () => {
    if (favTotal() === 1) {
      return <>item</>;
    }
    return <>items</>;
  };
  return (
    <StyledContainer>
      <StyledListCaption>
        <li><h2>My Favorites</h2></li>
        {favTotal() === 0 ? <li><h2>You have No Favorites!</h2></li> : (
          <li>
            <h2>
              You have
              <StyledFavNumber>{favTotal()}</StyledFavNumber>
              {' '}
              {items()}
              {' '}
              in Favorites!
            </h2>
          </li>
        )}
      </StyledListCaption>

      <StyledCardWrapper>
        {(favList) ? <>{foodCard}</> : ''}
        {(favDrinkList) ? <>{drinkCard}</> : ''}
      </StyledCardWrapper>
    </StyledContainer>
  );
};

export default Favs;
