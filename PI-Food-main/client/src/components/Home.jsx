
 import {Link} from 'react-router-dom';
 import {  useEffect, useState } from 'react';
 import { useDispatch, useSelector } from 'react-redux';
 import {  getRecipes,filterRecipesByDiet, filterCreated, orderByAlphabetics, orderByScore } from '../actions';
 import Card from './Card';
 import Paginado from './Paginado';
 import  SearchBar from './SearchBar';
 import Style from '../components/styles/Home.module.css';


 



export default function Home()  {

    const dispatch = useDispatch()
    const allRecipes = useSelector((state) => state.recipes)
    const [order, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [recipesPerPage] = useState(9)
    const indexOfLastRecipe = currentPage * recipesPerPage
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)


    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    useEffect(() => {
        dispatch(getRecipes());
    }, [dispatch])

   
     


       function handleClick(e){
          e.preventDefault()
          dispatch(getRecipes(e))
        }
        function sortByScore(e) {
            e.preventDefault();
            dispatch(orderByScore(e.target.value));
            setCurrentPage(1);
           order? setOrden(false) : setOrden(`Ordenado ${e.target.value}`)
        }

    
        function handleFilterDietTypes(e) {
         dispatch(filterRecipesByDiet(e.target.value))

    
        }
     
      function handleFilterCreated(e) {
          dispatch(filterCreated(e.target.value))
        }
     
    

      function sortByAlpha(e) {
          e.preventDefault();
          dispatch(orderByAlphabetics(e.target.value))
          setCurrentPage(1);
          order?  setOrden(false)  :   setOrden(`Ordenado ${e.target.value}`)
      }





    return (
        <div>         
      
             
          
          
  

           <Link to= '/recipe'><button  className={Style.homeCreate} >Crea tu receta</button></Link> 

           <button className={Style.homeButton} onClick={e=>{handleClick(e)}}>
            Volver a cargar todas las recetas
        </button>   <SearchBar/>   




           <div>
             <select onChange={e => sortByScore(e) } className={Style.homeselect} >
                 <option value=''>Ordenar por puntuacion</option>
                 <option value='UP'>Hacia arriba</option>
                 <option value='DOWN'>Hacia abajo</option>
             </select>

             <select onChange={e =>sortByAlpha(e) } className={Style.homeselect}>
                <option value=''>Orden alfabetico</option>
                <option value='A-Z'>A a Z</option>
                <option value='Z-A'>Z a A</option> 
            </select> 

             <select onChange={e => handleFilterDietTypes(e)} className={Style.homeselect}>
             <option value='ALL'>Tipo de dieta</option>
             <option value="gluten free">Libre de gluten</option>
             <option value= "dairy free">Libre de lacteos</option>
             <option value="lacto ovo vegetarian">Lacto vegetariano</option>
             <option value="vegan">Vegano</option>
             <option value="paleolithic">Paliolitica</option>
            <option value="primal">Primitiva</option>
            <option value='pescatarian'>Pescatariano</option>
            <option value="fodmap friendly">Compatible con foodmap</option>
            <option value="whole 30">Todo 30</option>
             </select>

          
             <select onChange={e =>handleFilterCreated(e)}className={Style.homeselect} >
                    <option value='all'>Todas las recetas</option>
                    <option value='created'>Creadas</option>
                    <option value='current'>Actuales </option>
                </select>


              

                <Paginado
                    recipesPerPage={recipesPerPage}
                    allRecipes={allRecipes.length}
                    paginado={paginado}
                />

              

              
          

        <div>

        <span className={Style.recipes}>
           { 
           
            currentRecipes?.map( (el) =>{
                    return (
                       
                        <div>
                            <Link to ={ "/recipes/" + el.ID  }className={Style.cardRead} > 
                            <Card name= {el.name} image= {el.image} diets={el.diets}  key={el.ID} ID={el.ID}/>
                            </Link>
                        </div>
                     
                    )
                   
                })
            }   
            </span>
            </div>


        
        

          </div>  
     </div>
  )

   
}


