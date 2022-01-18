import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getDetail } from "../actions";
import {NavLink} from 'react-router-dom';
import Style from '../components/styles/Detail.module.css';


export default function Detail() {
    const dispatch = useDispatch();
       const {id } = useParams();
    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch,(id)]);

    const recipe = useSelector(state => state.detail)
     console.log(recipe)
   
    return (

        
        <div className={Style.component}>
         <NavLink to='/home' ><button className={Style.createButton} > Volver al menu principal</button></NavLink>
            {
                recipe.length > 0 ?
                    <div>
                    
                  <div className={Style.imgContainer}>
                    <h1  className={Style.title}>{recipe[0].name}</h1>
                   <img  src={recipe[0].image} alt="" width="400px" height="400px" className={Style.img}/>
                 </div>
                <div className={Style.detailContainer}>
                 <p  className={Style.p}><h5>Resume: {recipe[0].resume.replace(/<[^>]*>?/g, '')}</h5></p>
               <h5 className={Style.h3}>Diet Types: { 
                   recipe[0].diets && recipe[0].diets.length?
                   recipe[0].diets.map(diet => ` ${diet}. `)
                   :
                   recipe[0].diets ? 
                   "No se especificó ningún tipo de dieta para esta receta, lo siento..."
                   :
                   recipe[0].DietTypes && recipe[0].DietTypes.length?                    
                   recipe[0].DietTypes.map(diet => ` ${diet.name}. `) 
                   :
                   "No se especificó ningún tipo de dieta para esta receta, lo siento..."
                } </h5>

                <h5 className={Style.h3} >Score: {recipe[0].score}</h5>
                <h5  className={Style.h3}>Healthy level: {recipe[0].healthylevel}</h5>
                <p className={Style.p}>Step by step: {!recipe[0].createdInDB ? recipe[0].stepbystep?.map((step) => step) : recipe[0].stepbystep}</p>
               </div>
            </div> : 
                <p className={Style.li}>Loading...</p>
            
              }
            
             
        </div>
    
    )
};






// import React from "react";
// import { NavLink } from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";
// import { getDetail } from '../actions/index'
// import {useEffect} from 'react';



// export default function Detail(props) {


//   const dispatch = useDispatch();

  
//   useEffect(() => {
//       dispatch(getDetail(props.match.params.ID))
//   },[dispatch,(props.match.params.ID)])
  
  
//   const recipe = useSelector(state => state.detail); 
      
//   return (
//       <div>
//           {
//               recipe.length > 0?
//               <div>
//                   <h1>{recipe[0].name}</h1>
//                   <img  src={recipe[0].image} alt="" width="200px" height="200px" />
//                 <p ><h5>Resume: {recipe[0].resume.replace(/<[^>]*>?/g, '')}</h5></p>
//               <h5>Diet Types: { 
//                   recipe[0].diets && recipe[0].diets.length?
//                   recipe[0].diets.map(diet => ` ${diet}. `)
//                   :
//                   recipe[0].diets ? 
//                   "No se especificó ningún tipo de dieta para esta receta, lo siento..."
//                   :
//                   recipe[0].DietTypes && recipe[0].DietTypes.length?                    
//                   recipe[0].DietTypes.map(diet => ` ${diet.name}. `) 
//                   :
//                   "No se especificó ningún tipo de dieta para esta receta, lo siento..."
//                } </h5>

//                <h5 >Score: {recipe[0].score}</h5>
//                <h5 >Healthy level: {recipe[0].healthylevel}</h5>
//                <p>Step by step: {!recipe[0].createdInDB ? recipe[0].stepbystep?.map((step) => step) : recipe[0].stepbystep}</p>

//               </div>: <p>Loading....</p>
//           }
               
//           <NavLink to='/home'><button >Volver</button></NavLink>
//       </div>
//   )



//   }

 






