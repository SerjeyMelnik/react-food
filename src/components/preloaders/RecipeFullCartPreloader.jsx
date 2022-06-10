import React from 'react';

const RecipeFullCartPreloader = () => {
	return ( 
		<div className="recipe_full_cart-preloader-wrapper">
			<div className="recipe_full_cart-preloader">
				<div className="preloader_img"></div>
				<div className="preloader_content">
					<div className="preloader_title"></div>
					<div className="preloader_flag"></div>
					<div className="preloader_text-wrapper">
						<div className="preloader_text"></div>
						<div className="preloader_text"></div>
						<div className="preloader_text"></div>
					</div>
					<div className="preloader_buttons">
						<div className="preloader_button-open"></div>
						<div className="preloader_button-like"></div>
					</div>
				</div>
			</div>
		</div>
	 );
}
 
export default RecipeFullCartPreloader;