import React, { useContext, useState } from 'react';
import { AppContext } from '../context';

const LikeButton = ({recipe,likeType}) => {
	const {wishList,addToWishList,removeFromWishList} = useContext(AppContext);
	const isLikedInit = wishList.filter(item => recipe.idMeal === item.idMeal).length !== 0;
	const [isLiked,setIsLiked] = useState(isLikedInit);
	const likeFunc = () => {
		if (!isLiked) {
			addToWishList(recipe);
		}
		else removeFromWishList(recipe.idMeal);

		setIsLiked(!isLiked);
	}

	return ( 
		<button className={`button like-btn ${isLikedInit ? 'liked' : ''} ${likeType ? likeType : ''}`} 
				onClick={likeFunc}>
			<div className="inner-btn">
				<i className="material-icons">
					{isLikedInit ? 'favorite' : 'favorite_border'}
				</i>
				{
					likeType !== 'small' ?
					<span className="btn-text">
						{isLikedInit ? 'Done!' : 'Add to favorites'}
					</span> :
					''
				}
				
			</div>
		</button>
	 );
}
 
export default LikeButton;