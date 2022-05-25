import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context';
import RecipeCart from './RecipeCart';

const ListOfMealsInCategory = ({meals}) => {
	const {addToWishList,wishList} = useContext(AppContext);
	return ( 
	<div className="list_of_meals">
		
		{
			meals.length ?
			meals.map((item) => {
			return <RecipeCart key={item.idMeal} {...item}/>
			 })
			  :
			null
			}
	</div> );
}
 
export default ListOfMealsInCategory;