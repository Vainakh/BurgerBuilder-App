import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';



const INGREDIENT_PRICES = {
      meat: 1.5,
      cheese: 1,
      salad: 1,
      turkey: 2
} 

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
      meat: 0,
      cheese: 0,
      salad: 0,
      turkey: 0,
      error: false,
      totalPrice: 0,
      purchasable: false,
      purchasing: false,
      loading: false
  
    }

  componentDidMount() {
    console.log(this.props)
    axios.get("https://react-my-burger-86396-default-rtdb.firebaseio.com/ingredients.json")
         .then(response => {
           this.setState({ingredients: response.data})
         })
         .catch(error => {}); 
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients).map((ingredientKey) => {
      return ingredients[ingredientKey];
    }).reduce((sum, el) => {
      return sum + el;
    }, 0);
    this.setState({purchasable: sum > 0});
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState( {totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) return;
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceSubstruction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceSubstruction;
    this.setState( {totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false, totalPrice: 0})
  }

  purchaseContinueHandler = () => {
    // this.setState({loading: true})
    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: "Adlan",
    //     address: {
    //       street: "California Street",
    //       zipCode: "94108",
    //       country: "USA"
    //     },
    //     email: "test@test.com"
    //   },
    //   deliveryMethod: "Fastest"
    // }
    // axios.post('/orders.json', order)
    //      .then(response => this.setState({ loading: false, purchasing: false }))
    //      .catch(error => this.setState({ loading: false, purchasing: false }));
    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    }
    const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: 'checkout',
      search: '?' + queryString
    });
  };


  render() {
    const disabledInfo = {
      ...this.state.ingredients 
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients cant be loaded!</p> : <Spinner/>
      if (this.state.ingredients) {
        burger = (
          <Aux>
              <Burger ingredients={this.state.ingredients}/>
              <BuildControls 
                ingredientAdded={this.addIngredientHandler} 
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                purchasable={this.state.purchasable}
                ordered={this.purchaseHandler}
                price={this.state.totalPrice}
              />
          </Aux>
        )
        orderSummary = <OrderSummary 
        ingredients={this.state.ingredients}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        price={this.state.totalPrice}
      />
    }
    if (this.state.loading) {
      orderSummary = <Spinner/>
    }
      
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    )
  }
}

export default withErrorHandler(BurgerBuilder, axios);