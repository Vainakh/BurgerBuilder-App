import React from 'react';
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Meat', type: 'meat'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Salad', type: 'salad'},
  { label: 'Turkey', type: 'turkey'}
]
const buildControls = (props) => (
  <div className={"BuildControls"}>
  <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map(ctrl => (
        <BuildControl 
          key={ctrl.label} 
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}/>
    ))}
    <button 
    className={"OrderButton"}
    disabled={!props.purchasable}
    onClick={props.ordered}
    >ORDER NOW</button>
  </div>
)
    
export default buildControls;