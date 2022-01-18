import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  LandingPage from './components/LandingPage';
import Home from "./components/Home.jsx"
import React from 'react';
import RecipeCreator from './components/RecipeCreator.jsx';
import Detail from './components/Detail.jsx';



function App() {
  
  return (
    <BrowserRouter >
    <div className="App">
      <Routes>
      <Route exact path = "/" element={<LandingPage/>}></Route>
      <Route  path = "/home" element={<Home/>}></Route> 
      <Route  path = "/recipe" element={<RecipeCreator/>}></Route>
      <Route  path = '/recipes/:id'  element={<Detail/>}></Route>
     
      </Routes> 
    </div>
    </BrowserRouter>
    );
  
}

export default App;
