import React, { useContext } from 'react';
import { AppContext } from '../context';

const WishListPage = () => {
	const {wishList,removeFromWishList} = useContext(AppContext);

	return ( <div className="wish_list_page">
		{
			wishList.length ?
			wishList.map(item =>
				<div className="wish_list_item" key={item.idMeal}>
					<img src={item.strMealThumb} alt="" />
					<h1>{item.strMeal}</h1>
					<button onClick={()=>{removeFromWishList(item.idMeal)}}>delete item from wish list</button>
				</div>
				)
				:
				''
		}
	</div> );
}
 
export default WishListPage;