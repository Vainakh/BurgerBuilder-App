import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import './CheckoutSummary.css';

const checkoutSummary = (props) => {
  return (
    <div className="CheckoutSummary">
      <h1>We hope it tastes excellent!</h1>
      <div style={{width: '300px', margin: 'auto'}}>
        <Burger 
            ingredients={props.ingredients}/>
      </div>
      <Button 
        btnType="Danger"
        clicked={props.checkoutCancelled}>Cancel
        </Button>
      <Button 
        btnType="Success"
        clicked={props.checkoutContinued}>Proceed
        </Button>
    </div>
  )
};

export default checkoutSummary;