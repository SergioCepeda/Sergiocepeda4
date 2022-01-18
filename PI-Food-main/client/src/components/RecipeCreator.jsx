import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getRecipeType, postRecipe } from "../actions";
import { useDispatch } from "react-redux";
import Style from '../components/styles/RecipeCreator.module.css';


export default function RecipeCreator() {
  const dispatch = useDispatch();
  //const history = useHistory();
  // const diets = useSelector((state) => state.diets);
  const [err, setErr] = useState({});

  function validate(input) {
    let err = {};
    if (!input.name) {
      err.name = "Name must be filled";
    }
    if (!input.resume) {
      err.resume = "Resume must be filled";
    }
    return err;
  }

  const [input, setInput] = useState({
    name: '',
    resume: '',
    score: '',
    healthylevel: '',
    stepbystep: '',
    image: '',
    diets: []
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErr(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleCheck(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        diets: [...input.diets, e.target.value],
        
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postRecipe(input));
    alert("Recipe successfully created");
    setInput({
        name: '',
        resume: '',
        score: '',
        healthylevel: '',
        stepbystep: '',
        image: '',
        diets: []
    });
    //history.push("/home");
  }

  useEffect(() => {
    dispatch(getRecipeType());
  }, [dispatch]);

  return (
    <div className={Style.container} >
    <div className={Style.bkg}/>
    <div className={Style.bkgcolor}>
    <div className ={Style.form}>
    
      <NavLink to="/home"  >
        <button  className={Style.createButton}>Volver</button>
      </NavLink>
      <h1  >Crea tu Receta</h1>
      <form   onSubmit={(e) => handleSubmit(e)}>
        <div className={Style.n} >
          <label>Name</label>
          <input 
           
            type="text"
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
          {err.name && <p> </p>}
        </div>
        <div>
          <label>Resume</label>
          <input 
           
            type="text"
            value={input.resume}
            name="resume"
            onChange={(e) => handleChange(e)}
          />
          {err.resume && <p ></p>}
        </div>
        <div >
          <label>Score</label>
          <input  
       
            type="number"
            value={input.score}
            name="score"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Healthy Level</label>
          <input 
            
            type="number"
            value={input.healthylevel}
            name="healthylevel"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div >
          <label>Step by step</label>
          <input 
           
            type="text"
            value={input.stepbystep}
            name="stepbystep"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Image</label>
          <input 
            
            type="text"
            value={input.image}
            name="image"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          
      
          <label>Diet type</label>
          <label >
            <input
              type="checkbox"
              name="Gluten Free"
              value="gluten free"
              onChange={(e) => handleCheck(e)}
            />
            Gluten Free
          </label>
          <label>
            <input
              type="checkbox"
              name="Dairy Free"
              value="dairy free"
              onChange={(e) => handleCheck(e)}
            />
            Dairy Free
          </label>
          <label >
            <input
              type="checkbox"
              name="Lacto Ovo Vegetarian"
              value="lacto ovo vegetarian"
              onChange={(e) => handleCheck(e)}
            />{" "}
            Lacto Ovo V
          </label>
          <label >
            <input
              type="checkbox"
              name="Vegan"
              value="vegan"
              onChange={(e) => handleCheck(e)}
            />
            Vegan
          </label>
          <label>
            <input
              type="checkbox"
              name="Paleolithic"
              value="paleolithic"
              onChange={(e) => handleCheck(e)}
            />
            Paleolithic
          </label>
          <label >
            <input
              type="checkbox"
              name="Primal"
              value="primal"
              onChange={(e) => handleCheck(e)}
            />
            Primal
          </label>
          <label >
            <input
              type="checkbox"
              name="Pescatarian"
              value="pescatarian"
              onChange={(e) => handleCheck(e)}
            />
            Pescatarian
          </label>
          <label>
            <input
              type="checkbox"
              name="Fodmap Friendly"
              value="fodmap friendly"
              onChange={(e) => handleCheck(e)}
            />
            Fodmap Friendly
          </label>
          <label >
            <input
              type="checkbox"
              name="Whole 30"
              value="whole 30"
              onChange={(e) => handleCheck(e)}
            />
            Whole 30
          </label>
        </div>
  
        <button className={Style.createButton} type="submit">
          Crear Receta
        </button>
      </form>

      </div>
     </div>     
    </div>
  );
}



































// import React,{useState, useEffect} from 'react';
// import {Link,useNavigate } from 'react-router-dom';
// import { getRecipeType, postRecipe } from '../actions';
// import { useDispatch, useSelector} from 'react-redux';

// export default function RecipeCreator() {
//     const dispatch = useDispatch()
//      const diets = useSelector(state => state.diets);
  
//     const navigate = useNavigate();
//     const [err, setErr] = useState({});


   

//      function validate(input) {
//          let err = {};
//          if (!input.name) {
//              err.name = "*Name must be filled*";
//          }
//          if (!input.resume) {
//              err.resume = "*Resume must be filled*";
//          }
//          return err;
//      }



 
//     const [input, setInput] = useState({
//         name: '',
//         resume: '',
//         score: '',
//         healthylevel: '',
//         stepbystep: '',
//         image: '',
//         diets: []
//     })

    
    
//     function handleChange(e) {
//         setInput({
//             ...input,
//             [e.target.name]: e.target.value
//         })
//         setErr(validate({
//             ...input,
//             [e.target.name]: e.target.value,
//         }))
        
//     }
    
    
    
//     function handleCheck(e) {
//         if (e.target.checked) {
//             setInput({
//                 ...input,
//                 diets: [...input.diets, e.target.value],
//                 //diets: e.target.value,
//             })
//         }
//     }
    
//     function handleSelector(e){
//         setInput({
//             ...input,
//             diets: [...input.diets, e.target.value]
//         })
//     }
    
    
//     function handleSubmit(e) {
//         e.preventDefault();
//         dispatch(postRecipe(input))
//         alert('Recipe successfully created')
//         setInput({
//             name: '',
//             resume: '',
//             score: '',
//             healthylevel: '',
//             stepbystep: '',
//             image: '',
//             diets: []
//         })
//         navigate.push('/home')
//     }

//     function handleDelete(e){
//         setInput({
//             ...input,
//             diets: input.diets.filter(occ=>occ !==e)
//         })
            
//         }
     
    
    
//     useEffect(() => {
//     dispatch(getRecipeType())
//      }, [dispatch]);
    
    
//     return (
//         <div>
//            <Link to= '/home'><button>Volver</button></Link>
//            <h1>Crea tu receta</h1>
//            <form onSubmit={(e) => handleSubmit(e)} >
//                <div>
//                    <label>Nombre</label>
//                    <input
//                        type='text'
//                        value= {input.name}
//                        name= 'name'
//                        onChange={(e) => handleChange(e)}
//                    />
//                  <div/> 

//                    <div>
//                        <label>Resumen</label>
//                        <input
//                            type='text'
//                            value={input.resume}
//                            name= 'resume'
//                            onChange={(e) => handleChange(e)}
//                        />
//                    </div>

//                    <div>
//                        <label>Score</label>
//                        <input 
//                         type='number'                        
//                         value={input.score}
//                         name='score'
//                         onChange={(e) => handleChange(e)}
//                          />
//                    </div>

//                    <div>
//                        <label>HealthyLevel</label>
//                        <input 
//                        type='number'                       
//                        value= {input.healthylevel}
//                        name='healthylevel'
//                        onChange={(e) => handleChange(e)}
                       
//                          />
                           
//                    </div>

//                    <div>
//                        <label>Instrucciones</label>
//                        <input
//                            type= 'text'
//                            value={input.stepbystep}
//                            name='stepbystep'
//                            onChange={(e) => handleChange(e)}
//                        />
//                    </div>

//                    <div>
//                        <label>Imagen</label>
//                        <input
//                        type='text'
//                        value= {input.image}
//                        name='image'
//                        onChange={(e) => handleChange(e)}
//                        autocomplete="off"
//                         />
//                    </div>

//                    <div>
//                        <label>Tipo de dieta</label>
//                        <input
//                         type='checkbox'
//                         name='Dairy Free'
//                         value='dairy free' 
//                         onChange={(e) => handleCheck(e)}
//                        />
//                        <label ><input
//                         type='checkbox'
//                         name='Gluten Free'
//                         value='gluten free'
//                         onChange={(e) => handleCheck(e)}
//                     />Gluten Free</label>
//                     <label><input
//                         type='checkbox'
//                         name='Dairy Free'
//                         value='dairy free'
//                         onChange={(e) => handleCheck(e)}
//                     />Dairy Free</label>
//                      <label><input
//                         type='checkbox'
//                         name='Lacto Ovo Vegetarian'
//                         value='lacto ovo vegetarian'
//                         onChange={(e) => handleCheck(e)}
//                     /> Lacto Ovo V</label>
//                     <label ><input
//                         type='checkbox'
//                         name='Vegan'
//                         value='vegan'
//                         onChange={(e) => handleCheck(e)}
//                     />Vegan</label>

//                      <label><input
//                         type='checkbox'
//                         name='Paleolithic'
//                         value='paleolithic'
//                         onChange={(e) => handleCheck(e)}
//                     />Paleolithic</label>
//                     <label ><input
//                         type='checkbox'
//                         name='Primal'
//                         value='primal'
//                         onChange={(e) => handleCheck(e)}
//                     />Primal</label>
//                     <label ><input
//                         type='checkbox'
//                         name='Pescatarian'
//                         value='pescatarian'
//                         onChange={(e) => handleCheck(e)}
//                     />Pescatarian</label>
//                     <label ><input
//                         type='checkbox'
//                         name='Fodmap Friendly'
//                         value='fodmap friendly'
//                         onChange={(e) => handleCheck(e)}
//                     />Fodmap Friendly</label>
//                      <label><input
//                         type='checkbox'
//                         name='Whole 30'
//                         value='whole 30'
//                         onChange={(e) => handleCheck(e)}
//                     />Whole 30</label>                   
//                    </div>
//                 <select onChange={(e) => handleSelector(e)}>
//                    {diets.map((occ)=>(
//                    <option value={occ.name}>{occ.name} </option>
//                    ))}
                 
//                 </select> 
//                 <ul>
//                 <li>{input.diets.map((el) => el + ",")}</li>
//                 </ul>                
                

           

//                </div>

//                <button  type='submit'>Crea tu receta</button>

//            </form>

           
//            {input.diets.map(el=>
//            <div>
//                <p>{el}</p>
//                <button className="botonX" onClick={()=> handleDelete(el)}>X</button>
//            </div>
//            )}

//         </div>
//     )


// }








