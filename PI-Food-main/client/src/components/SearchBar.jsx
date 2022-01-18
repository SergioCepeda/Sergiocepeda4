import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {getNameRecipes} from '../actions';
import Style from '../components/styles/SearchBar.module.css';

export default function SearchBar () {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

  function handleInputChange(e) {
      e.preventDefault()
   setName(e.target.value)
   console.log(name)
  }
 
  function handleSumit(e){
      e.preventDefault()
      dispatch(getNameRecipes(name))
      setName('')
  }


    return (
    <div>
        <input  className={Style.input}
            type= 'text'            
            placeholder = 'Buscar...'
            value={name}            
            onChange= {(e)=>handleInputChange(e)}
        />
        <button className={Style.buttonSearch} type='submit' onClick={(e)=>handleSumit(e)}>Buscar</button>

    </div>
    )
}