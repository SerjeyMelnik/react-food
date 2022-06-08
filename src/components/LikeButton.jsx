import React, { useContext, useEffect, useState } from 'react';
import useSound from 'use-sound';
import { AppContext } from '../context';
import likeSound from '../sounds/like.wav'
import unlikeSound from '../sounds/unlike.wav'
const LikeButton = ({recipe,likeType = window.innerWidth < 768 ? 'small' : 'big'}) => {
	const {wishList,addToWishList,removeFromWishList} = useContext(AppContext);
	const isLikedInit = wishList.filter(item => recipe.idMeal === item.idMeal).length !== 0;
	const [isLiked,setIsLiked] = useState(wishList.filter(item => recipe.idMeal === item.idMeal).length !== 0);
	const [likePlay] = useSound(likeSound,{volume:0.25})
	const [unlikePlay] = useSound(unlikeSound,{volume:0.25})
	const likeFunc = () => {
		
		if (!isLikedInit) {
			addToWishList(recipe);
			
		}
		else {
			removeFromWishList(recipe.idMeal);
			
		}
		isLikedInit ? unlikePlay() : likePlay();

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