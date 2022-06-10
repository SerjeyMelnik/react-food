import React from 'react';

const RecipeCartPreloader = () => {
	return ( 
			<div className="recipe_cart_preloader">
					<div className="recipe_cart_preloader_img">
						<div className="recipe_cart_preloader_flag"></div>
					</div>
					<div className="recipe_cart_preloader-bottom">
						<p className="recipe_cart_preloader-title"></p>
						<div className="recipe_cart_preloader-buttons">
							<div className="recipe_cart_preloader_button-open"></div>
							<div className="recipe_cart_preloader_button-like"></div>
						</div>
					</div>
				</div>
	 );
}
 
export default RecipeCartPreloader;