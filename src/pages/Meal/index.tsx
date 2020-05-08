import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer';
import {
  Container,
  GoBack,
  Content,
  Title,
  Subtitle,
  Recipe,
  Background,
  Ingredients,
} from './styles';

interface MealProps {
  idMeal: string;
  strArea: string;
  strCategory: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strInstructions: string;
  strMeal: string;
  strMealThumb: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strSource: string;
  strTags: string;
  strYoutube: string;
}

const Meal: React.FC = () => {
  const [meal, setMeal] = useState<MealProps>();
  function handleRandom(): void {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(result => {
        setMeal(result.data.meals[0]);
      });
  }
  useEffect(() => {
    handleRandom();
  }, []);
  return (
    <>
      {meal && (
        <Container>
          <Content>
            <Link to="/">
              <GoBack />
            </Link>
            <Title>{meal.strMeal}</Title>
            <Subtitle>
              <li>
                <strong>Category: </strong>
                {meal.strCategory}
              </li>
              <li>
                <strong>Area: </strong>
                {meal.strArea}
              </li>
              <li>
                <strong>Tags: </strong>
                {meal.strTags}
              </li>
            </Subtitle>
            <Recipe>
              <h1>Recipe</h1>

              <p>{meal.strInstructions}</p>
            </Recipe>
            <Ingredients>
              <h1>Ingredients</h1>
              <ul>
                {meal.strIngredient1 && (
                  <li>{`${meal.strMeasure1} - ${meal.strIngredient1}`}</li>
                )}
                {meal.strIngredient2 && (
                  <li>{`${meal.strMeasure2} - ${meal.strIngredient2}`}</li>
                )}
                {meal.strIngredient3 && (
                  <li>{`${meal.strMeasure3} - ${meal.strIngredient3}`}</li>
                )}
                {meal.strIngredient4 && (
                  <li>{`${meal.strMeasure4} - ${meal.strIngredient4}`}</li>
                )}
                {meal.strIngredient5 && (
                  <li>{`${meal.strMeasure5} - ${meal.strIngredient5}`}</li>
                )}
                {meal.strIngredient6 && (
                  <li>{`${meal.strMeasure6} - ${meal.strIngredient6}`}</li>
                )}
                {meal.strIngredient7 && (
                  <li>{`${meal.strMeasure7} - ${meal.strIngredient7}`}</li>
                )}
                {meal.strIngredient8 && (
                  <li>{`${meal.strMeasure8} - ${meal.strIngredient8}`}</li>
                )}
                {meal.strIngredient9 && (
                  <li>{`${meal.strMeasure9} - ${meal.strIngredient9}`}</li>
                )}
                {meal.strIngredient10 && (
                  <li>{`${meal.strMeasure10} - ${meal.strIngredient10}`}</li>
                )}
                {meal.strIngredient11 && (
                  <li>{`${meal.strMeasure11} - ${meal.strIngredient11}`}</li>
                )}
                {meal.strIngredient12 && (
                  <li>{`${meal.strMeasure12} - ${meal.strIngredient12}`}</li>
                )}
                {meal.strIngredient13 && (
                  <li>{`${meal.strMeasure13} - ${meal.strIngredient13}`}</li>
                )}
                {meal.strIngredient14 && (
                  <li>{`${meal.strMeasure14} - ${meal.strIngredient14}`}</li>
                )}
                {meal.strIngredient15 && (
                  <li>{`${meal.strMeasure15} - ${meal.strIngredient15}`}</li>
                )}
                {meal.strIngredient16 && (
                  <li>{`${meal.strMeasure16} - ${meal.strIngredient16}`}</li>
                )}
                {meal.strIngredient17 && (
                  <li>{`${meal.strMeasure17} - ${meal.strIngredient17}`}</li>
                )}
                {meal.strIngredient18 && (
                  <li>{`${meal.strMeasure18} - ${meal.strIngredient18}`}</li>
                )}
                {meal.strIngredient19 && (
                  <li>{`${meal.strMeasure19} - ${meal.strIngredient19}`}</li>
                )}
                {meal.strIngredient20 && (
                  <li>{`${meal.strMeasure20} - ${meal.strIngredient20}`}</li>
                )}
              </ul>
            </Ingredients>

            <VideoPlayer url={meal.strYoutube} width="600px" height="300px" />
          </Content>
          <Background url={meal.strMealThumb} />
        </Container>
      )}
    </>
  );
};

export default Meal;
