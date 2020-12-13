import * as actionTypes from './actions';

const initialState = {
  ingredients: {
    meat: 0,
    cheese: 0,
    salad: 0,
    turkey: 0
  },
  totalPrice: 0
};

const INGREDIENT_PRICES = {
  meat: 2,
  cheese: 1,
  salad: 1,
  turkey: 2
} 

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT: 
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    };
    case actionTypes.REMOVE_INGREDIENT: 
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
    };
    default:
      return state;
  }
};

export default reducer;