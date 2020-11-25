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
      {controls.map(ctrl => (
        <BuildControl 
          key={ctrl.label} 
          label={ctrl.label}
          // type={ctrl.type}
          added={() => props.ingredientAdded(ctrl.type)}
          />
    ))}
  </div>
)
    

export default buildControls;