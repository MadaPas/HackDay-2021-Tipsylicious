/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { withRouter, useParams, useHistory } from 'react-router-dom';
import useLocalStorage from '../../__service/useLocalStorage';
import MealCard from '../../__cards/MealCard/index';
import Spinner from '../../__service/Spinner/index';

const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?';

const ShowMeal = () => {
  const { id } = useParams();

  const [meal, setMeal] = useState([]);
  const [favoriteList, setFavoriteList] = useLocalStorage('favoritList', []);

  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };
  const [baseUrl] = useState(`${url}i=${id}`);

  useEffect(() => {
    const getMealDetails = async () => {
      const details = await fetch(baseUrl);

      if (details) {
        try {
          const selectedMeal = await details.json();
          setMeal(selectedMeal.meals[0]);
        } catch (error) {
          console.log(error);
        }
      } else {
        setMeal([]);
      }
    };

    getMealDetails();
  }, [baseUrl]);

  if (!(meal && Object.keys(meal).length)) {
    return <Spinner />;
  }
  const youtubeVideo = meal.strYoutube.replace('watch?v=', 'embed/');

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]
        }`,
      );
    } else {
      break;
    }
  }

  const addToStorage = food => {
    if (!favoriteList.some(fav => fav.idMeal === food.idMeal)) {
      setFavoriteList([...favoriteList, food]);
    } else {
      const newList = favoriteList.filter(item => item.idMeal !== food.idMeal);
      setFavoriteList(newList);
    }
  };

  return (
    <MealCard
      meal={meal}
      youtubeVideo={youtubeVideo}
      ingredients={ingredients}
      addToStorage={addToStorage}
      favoriteList={favoriteList}
      handleClick={handleClick} />
  );
};

export default withRouter(ShowMeal);
