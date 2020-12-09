import React, { Component } from 'react';
import './Orders.css';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading: true 
  }
  componentDidMount() {
    axios.get("/orders.json")
    .then(res => {
      const fetchedData = [];
      for (let key in res.data) {
        fetchedData.push({
          ...res.data[key],
          id: key
        })
      }
      this.setState({loading: false, orders: fetchedData})
    })
    .catch(err => {
      this.setState({loading: false})
    })
  }
  render() {
    return (
      <div>
        <Order/>
        <Order/>
      </div>
    )
  }
};

export default withErrorHandler(Orders, axios);