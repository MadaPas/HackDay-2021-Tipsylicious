/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { withRouter, useParams, useHistory } from 'react-router-dom';
import useLocalStorage from '../../__service/useLocalStorage';
import DrinkCard from '../../__cards/DrinkCard/index';
import Spinner from '../../__service/Spinner/index';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?';

const ShowDrink = () => {
  const { id } = useParams();

  const [drink, setDrink] = useState([]);
  const [favoriteDrinkList, setFavoriteDrinkList] = useLocalStorage('favoriteDrinkList', []);

  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };

  const [baseUrl] = useState(`${url}i=${id}`);
  useEffect(() => {
    const getDrinksDetails = async () => {
      const details = await fetch(baseUrl);
      if (details) {
        try {
          const selectedCocktail = await details.json();
          setDrink(selectedCocktail.drinks[0]);
        } catch (error) {
          console.log(error);
        }
      } else {
        setDrink([]);
      }
    };

    getDrinksDetails();
  }, [baseUrl]);

  if (!(drink && Object.keys(drink).length)) {
    return <Spinner />;
  }

  const ingredients = [];

  for (let i = 1; i <= 15; i++) {
    if (drink[`strIngredient${i}`]) {
      ingredients.push(
        `${drink[`strIngredient${i}`]} - ${drink[`strMeasure${i}`]
        }`,
      );
      break;
    }
  }

  const addDrinkToStorage = cock => {
    if (!favoriteDrinkList.some(fav => fav.idDrink === cock.idDrink)) {
      setFavoriteDrinkList([...favoriteDrinkList, cock]);
    } else {
      const newList = favoriteDrinkList.filter(item => item.idDrink !== cock.idDrink);
      setFavoriteDrinkList(newList);
    }
  };

  return (
    <DrinkCard
      drink={drink}
      ingredients={ingredients}
      addDrinkToStorage={addDrinkToStorage}
      favoriteDrinkList={favoriteDrinkList}
      handleClick={handleClick} />
  );
};

export default withRouter(ShowDrink);
