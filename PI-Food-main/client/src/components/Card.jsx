import React from 'react';
// import { NavLink } from 'react-router-dom';
import Style from '../components/styles/Card.module.css';

export default function Card({ name, image, diets, ID }) {
    return (
        <div className={Style.contenedor} >
            <div>
                <div>
                    <h2 className={Style.title} >{name}</h2>
                  
                    <h5>Diet type: {diets && diets.length ? diets : 'N/A'}</h5>
                    <div >
                   
                    </div>
                </div>
                <img src={image} alt="not found" width="300px" height="300px"/>
            </div>
            <div> </div>
        </div>
    )
}






