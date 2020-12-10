import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
// import { withRouter } from 'react-router-dom';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map(ingredientKey => {
    return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
      return <BurgerIngredient key={ingredientKey + i} type={ingredientKey}/>
    });
  }).reduce((array, el) => {
    return array.concat(el);
  }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please, start adding ingredients!</p>
  }
  return (
    <div className={"Burger"}>
      <BurgerIngredient type="bread-top"/>
        {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
}

export default burger;