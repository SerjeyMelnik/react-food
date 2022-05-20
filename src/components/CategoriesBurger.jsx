import React, { useState } from 'react';

const CategoriesBurger = () => {
	const [isOpenCateg,setIsSpenCateg] = useState(false);
	return ( 
		<div className="categories_dropdown">
			<button className={`button main-btn ${isOpenCateg ? 'active' : ''}`} 
					onClick={()=>{setIsSpenCateg(!isOpenCateg)}}>
				<div className={`burger ${isOpenCateg ? 'active' : ''}`}>
					<span className='line'></span>
					<span className='line'></span>
					<span className='line'></span>
				</div>
				<span className='button-text'>Categories</span>
			</button>
		</div>
	 );
}
 
export default CategoriesBurger;