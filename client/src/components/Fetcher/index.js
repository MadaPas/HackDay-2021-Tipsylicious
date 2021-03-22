/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Drink from '../__cocktails/Drink/index';
import AlcoholDrink from '../__cocktails/AlcoholDrink/index';
import NonAlcoholDrink from '../__cocktails/NonAlcoholDrink/index';
import ShowDrink from '../__cocktails/ShowDrink/index';

import Meal from '../__meals/Meal/index';
import ShowMeal from '../__meals/ShowMeal/index';

import Welcome from '../Welcome/index';
import Spinner from '../__service/Spinner/index';
import Favs from '../Favorites';
import Navigation from '../__partials/Navigation/index';

const mealUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?';
const cocktailsUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';
const AlcoholicUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';
const nonAlcoholicUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

const Fetcher = () => {
  const location = useLocation();

  /* random selection of  meal and cocktail for landing pages */
  const cocktails = ['smoothie', 'margarita', 'coffee', 'chocolate'];
  const defaultCocktail = cocktails.sort(() => Math.random() - 0.5)[0];

  const meals = ['meat', 'butter', 'cheese', 'fish'];
  const defaultMeal = meals.sort(() => Math.random() - 0.5)[0];

  const [meal, setMeal] = useState([]);
  const [randomMeal, setRandomMeal] = useState('');
  const [queryMeal, setQueryMeal] = useState(defaultMeal);

  const [alcohol, setAlcohol] = useState([]);
  const [nonAlcohol, setNonAlcohol] = useState([]);
  const [cocktail, setCocktail] = useState([]);
  const [queryDrinks, setQueryDrinks] = useState(defaultCocktail);
  const [randomCocktail, setRandomCocktail] = useState('');

  const [error, setError] = useState(false);
  const [randError, setRandError] = useState(false);

  /* Search cocktails */
  const lookForDrinks = async () => {
    const drinkFeed = await fetch(`${cocktailsUrl}s=${queryDrinks}`);

    if (queryDrinks !== '') {
      try {
        const searchedcocktail = await drinkFeed.json();
        setCocktail(searchedcocktail.drinks);
        setError('');

        if (searchedcocktail.drinks === null) {
          setError(
            <span>
              Cocktail
              <h4 style={{ color: 'red' }}>{queryDrinks}</h4>
              {' '}
              is Not Available
            </span>,
          );
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      setError(<span> Enter search please</span>);
    }
  };

  /* Search meals */
  const lookForMeals = async () => {
    const mealFeed = await fetch(`${mealUrl}s=${queryMeal}`);

    if (queryMeal !== '') {
      try {
        const thisMeal = await mealFeed.json();
        setMeal(thisMeal.meals);
        setError('');

        if (thisMeal.meals === null) {
          setError(
            <span>
              This meal
              <h4 style={{ color: 'red' }}>{queryMeal}</h4>
              {' '}
              is Not Available
            </span>,
          );
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      setError(<span> Enter search please</span>);
    }
  };

  const onChange = e => setQueryMeal(e.target.value);
  const handleOnChange = e => setQueryDrinks(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    lookForMeals();
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    lookForDrinks();
  };

  const [RandomUrl] = useState('https://www.themealdb.com/api/json/v1/1/random.php');
  const [RandomCocktailUrl] = useState('https://www.thecocktaildb.com/api/json/v1/1/random.php');

  useEffect(() => {
    const randomRecipe = async () => {
      const mealFeed = await fetch(RandomUrl);

      if (mealFeed) {
        try {
          const randomMeal = await mealFeed.json();
          setRandomMeal(randomMeal.meals);
          setRandError(null);
        } catch (err) {
          console.log(err);
        }
      } else {
        setRandError(<span>Not Available</span>);
      }
    };

    lookForMeals();
    randomRecipe();
  }, [RandomUrl]);

  useEffect(() => {
    const randomizedCocktail = async () => {
      const drinkFeed = await fetch(RandomCocktailUrl);

      if (drinkFeed) {
        try {
          const randomDrink = await drinkFeed.json();
          setRandomCocktail(randomDrink.drinks);
          setRandError(null);
        } catch (err) {
          console.log(err);
        }
      } else {
        setRandError(<span>Not Available</span>);
      }
    };

    lookForDrinks();
    randomizedCocktail();
  }, [RandomCocktailUrl]);

  useEffect(() => {
    const alcoholicCocktail = async () => {
      const alcoholFeed = await fetch(AlcoholicUrl);

      if (alcoholFeed) {
        try {
          const alcoholCocktail = await alcoholFeed.json();
          setAlcohol(alcoholCocktail.drinks);
          setError(null);

          if (alcoholCocktail.drinks === null) {
            setError(<span> Cocktail Not Available</span>);
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        setError(<span>Not Available</span>);
      }
    };

    const nonAlcoholicCocktail = async () => {
      const nonAlcoholFeed = await fetch(nonAlcoholicUrl);
      if (nonAlcoholFeed) {
        try {
          const nonalcoholCocktail = await nonAlcoholFeed.json();
          setNonAlcohol(nonalcoholCocktail.drinks);
          setError(null);

          if (nonalcoholCocktail.drinks === null) {
            setError(<span> Cocktail Not Available</span>);
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        setError(<span>Not Available</span>);
      }
    };

    alcoholicCocktail();
    nonAlcoholicCocktail();
  }, []);

  return (
    <>
      <Navigation />
      {((randomMeal && Object.keys(randomMeal).length))
        ? (
          <>
            <Switch location={location} key={location.pathname}>

              <Route exact path="/">
                <Welcome />
              </Route>

              <Route path="/nonalcohol">
                <NonAlcoholDrink
                  nonAlcohol={nonAlcohol}
                  itemsPerPage={8}
                  startFrom={1} />
              </Route>

              <Route path="/alcohol">
                <AlcoholDrink
                  alcohol={alcohol}
                  itemsPerPage={8}
                  startFrom={1} />
              </Route>

              <Route path="/favorites">
                <Favs />
              </Route>

              <Route path="/meals/:id">
                <ShowMeal recipe={meal} />
              </Route>

              <Route path="/drinks/:id">
                <ShowDrink cocktail={cocktail} />
              </Route>

              <Route exact path="/drinks">
                <Drink
                  cocktail={cocktail}
                  randError={randError}
                  lookForDrinks={lookForDrinks}
                  queryDrinks={queryDrinks}
                  handleOnChange={handleOnChange}
                  randomCocktail={randomCocktail}
                  error={error}
                  handleOnSubmit={handleOnSubmit} />
              </Route>

              <Route exact path="/recipes">
                <Meal
                  recipe={meal}
                  randError={randError}
                  lookForMeals={lookForMeals}
                  queryMeal={queryMeal}
                  randomRecipe={randomMeal}
                  error={error}
                  onChange={onChange}
                  onSubmit={onSubmit} />
              </Route>
            </Switch>
          </>
        ) : (
          <>
            <Spinner />
            <span style={{ display: 'none' }}>{error}</span>
          </>
        )}
    </>
  );
};

export default Fetcher;
