import React, { useState } from 'react';

const RecipeContentSwitcher = ({description = 'dafault',ingredients,youtubeSrc}) => {
	//console.log(description,ingredients,youtubeSrc);
	
	if(description!== 'dafault'){
		
	description = description.split('\r\n').filter(item => item.length !== 0 && item !== ' ');
	

	}
	const [currentSwitch,setCurrentSwitch] = useState('method')
	const switcher = (e) =>{
		const current = e.target.getAttribute("data-switch-type");
		
		setCurrentSwitch(current);
	}
	return ( 
		<div className="switch">
				<div className="switch_buttons">
					<button className={`switch_button ${currentSwitch === 'method' ? 'active' : ''}`}
							data-switch-type='method'
							onClick={(e)=>{switcher(e)}}>
						Method
					</button>
					<button className={`switch_button ${currentSwitch === 'ingredients' ? 'active' : ''}`}
							data-switch-type='ingredients'
							onClick={(e)=>{switcher(e)}}>
						Ingredients	
					</button>
					<button className={`switch_button ${currentSwitch === 'video' ? 'active' : ''}`}
							data-switch-type='video'
							onClick={(e)=>{switcher(e)}}>
						Video recipe
					</button>
				</div>
				<div className="switch_content">
						{
							currentSwitch === 'method' ?
							
							<ol className='recipe_description'>
								{
									description !== "dafault" ?
									description.map(item => 
										<li key={item}>{item}</li>
										)
										: null
								}
							</ol> :
							currentSwitch === 'ingredients' ?
							<div className="ingredients">
								{
										ingredients.length ? 
										ingredients.map((ing,indx) => 
											{
												return <div className='ingredient' key={ing.ingredient + ing.measure + indx}>
													<span className="ingredient_num">
														{indx + 1}
													</span>
													<span className="ingredient_img">
														<img src={ing.thumbSmall} />
													</span>
													<span className="ingredient_name">
														{ing.ingredient}
													</span>
													<span className="ingredient_measure">
														{ing.measure}
													</span>
												</div>
											}
											) :
											<tr></tr>
									}
							</div>	
								 :
							currentSwitch === 'video' ?
						
								<iframe src={youtubeSrc}
										className='recipe_video'
										frameBorder="0" 
										allowFullScreen 
									></iframe> 
							
							: null
						}
				</div>
		</div>
	 );
}
 
export default RecipeContentSwitcher;