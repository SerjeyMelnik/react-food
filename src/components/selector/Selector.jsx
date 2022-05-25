import React, { useContext, useEffect, useState } from 'react';

 const Selector = ({label,data,defaultValue,value,setValue}) => {
	
	// const [selectedValue,setSelectedValue] = useState({value:defaultValue});
	const [droped,setDroped] = useState(false);
	const allVariants = defaultValue;
	const toggleDropDown = () =>{
		setDroped(!droped);
	}
	
	const setSelectedValue = (value) => {
		setValue(value);
		setDroped(!droped);
	}
	
	
	 return ( 
		 <div className='select_wrapper'>
			<label htmlFor="">{label}</label>
			<div className='select'>

				<div 
					className={`selected_value ${droped ? 'active' : ""}`} 
					onClick={toggleDropDown}
					> 			
										<p >
										{
											value.img ?
											<img src={value.img}  /> : 
											null
										}
										<span>
											{value.text}
										</span>
										</p>
								
						 </div>

				<ul className={`drop_down_box ${droped ? 'droped' : ""}`}>
					<li 
						onClick={()=>{setSelectedValue({
							text: allVariants
						})}}
						>{allVariants}</li>
					{ 
						allVariants === 'All country' ?
						data.map(item => {
							return 		<li 
											key={item.country} 
											onClick={()=>{setSelectedValue({
													text: item.country,
													img: item.flag
												})}}
											>
											<div className="drop_down_box-item">
												<img src={item.flag}  />
												<span>
													{item.country}
												</span>
											
											</div>
											
										</li>
						}) : 
						allVariants === 'All ingredients' ?
						data.map((item,indx) => {
							return 		<li 
											key={`${item.ingredient} + ${indx}`} 
											onClick={()=>{setSelectedValue({
												text: item.ingredient,
												img: item.thumbSmall
											})}}
											>
											<div className="drop_down_box-item">
												<img src={item.thumbSmall}  />
												<span>
													{item.ingredient}
												</span>
											
											</div>
											
										</li>
						}) :
						null
					}
				</ul>
			</div>
		 </div>
	  );
 }
  
 export default Selector;