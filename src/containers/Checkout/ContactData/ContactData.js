import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import './ContactData.css';

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      zip: ""
    }
  }
  orderHandler = () => {

  }
  render () {
    return (
      <div className={"ContactData"}>
        <h4>Enter your contact info</h4>
          <form>
            <input className={"Input"} type="text" name="name" placeholder="Name"/>
            <input className={"Input"} type="email" name="email" placeholder="Email"/>
            <input className={"Input"} type="text" name="street" placeholder="Street"/>
            <input className={"Input"} type="text" name="zip" placeholder="Zip"/>
            <Button btnColor={"Success"} clicked={this.orderHandler}>ORDER</Button>
          </form>
      </div>
    )
  }
}


export default ContactData;