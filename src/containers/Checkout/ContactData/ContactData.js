import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      zip: ""
    },
    loading: false
  }
  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true})
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Adlan",
        address: {
          street: "California Street",
          zipCode: "94108",
          country: "USA"
        },
        email: "test@test.com"
      },
      deliveryMethod: "Fastest"
    }
    axios.post('/orders.json', order)
         .then(response => {
           this.setState({ loading: false });
           this.props.history.push('/');
        })
         .catch(error => {
           this.setState({ loading: false });
        });
  }
  render () {
    let form = (
      <form>
        <input className={"Input"} type="text" name="name" placeholder="Name"/>
        <input className={"Input"} type="email" name="email" placeholder="Email"/>
        <input className={"Input"} type="text" name="street" placeholder="Street"/>
        <input className={"Input"} type="text" name="zip" placeholder="Zip"/>
        <Button btnColor={"Success"} clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner/>
    }
    return (
      <div className={"ContactData"}>
        <h4>Enter your contact info</h4>
          {form}
      </div>
    )
  }
}


export default ContactData;