import React from 'react';
import BannerSearch from './BannerSearch';

const HomeBaner = () => {
	return ( 
		<div className="home_baner">
			<div className="content">
				<h1 className="home_baner_title">
				Our go-to recipes from all countries
				</h1>
				<BannerSearch/>
			</div>
		</div>
	 );
}
 
export default HomeBaner;