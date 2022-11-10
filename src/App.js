import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox/FoodBox';
import FoodList from './components/FoodList/FoodList';


function App() {
  

  return (
    <div className="App">
    <FoodList />
    </div>
  )
}

export default App;
