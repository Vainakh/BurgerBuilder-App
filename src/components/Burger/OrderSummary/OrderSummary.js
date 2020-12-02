import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
import './OrderSummary.css';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(ingredientKey => {
    return (
      <li key={ingredientKey}>
      <span style={{textTransform: "capitalize"}}>{ingredientKey}</span>: {props.ingredients[ingredientKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious Burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnColor={"Danger"} clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button btnColor={"Success"} clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  );
}

export default orderSummary;