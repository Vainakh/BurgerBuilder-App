import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
  <header className="Toolbar">
    <Logo/>
    <div>MENU</div>
    <nav>
      <NavigationItems/>
    </nav> 
  </header>
);
  
export default toolbar;