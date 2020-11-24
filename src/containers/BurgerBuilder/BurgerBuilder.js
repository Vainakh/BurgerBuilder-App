import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 0,
      cheese: 0,
      salad: 0,
      turkeyBacon: 0
    }
  }
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <div>Build controls</div>
      </Aux>
    )
  }
}



export default BurgerBuilder;