import React, { useContext } from 'react';
import RecipeFullCart from '../components/RecipeFullCart';
import { AppContext } from '../context';

const WishListPage = () => {
	const {wishList} = useContext(AppContext);

	return ( <div className="wish_list_page">
	
		{
			wishList.length ?
			wishList.map(item =>
				<RecipeFullCart key={item.idMeal} {...item}/>
				)
				:
				<h1>Favorites list is empty</h1>
		}
	</div> );
}
 
export default WishListPage;