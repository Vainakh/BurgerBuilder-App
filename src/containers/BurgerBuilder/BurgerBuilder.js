import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 2,
      cheese: 2,
      salad: 1,
      turkeyBacon: 2
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