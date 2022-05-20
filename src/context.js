import React, { Children, createContext, useEffect, useReducer, useState } from 'react';
import ServiceAPI from './API_SERVICE';
import { reducer } from './reducer';


export const AppContext = createContext();

const initialState = {
	wishList: [],
	allCategories: [],
	allRecipes: []
}

export const ContextProvider = ({ children }) => {
	const [value, dispatch] = useReducer(reducer, initialState);

	// const [categ, setCateg] = useState([]);
	// if (!categ.length) {

	// 	ServiceAPI.getALLFoodCategiries().then(data => {
	// 		dispatch({ type: 'SET_ALL_CATEGORIES', payload: { categories: data.categories } });
	// 		setCateg(data.categories)
	// 	}
	// 	)

	// 	ServiceAPI.getALLRecipes().then(data =>
	// 		dispatch({ type: 'SET_ALL_RECIPES', payload: { recipes: data } })
	// 	)
	// }
	value.addToWishList = (recipe) => {
		dispatch({ type: 'ADD_TO_WISH_LIST', payload: recipe })

	}
	value.removeFromWishList = (id) => {
		dispatch({ type: 'REMOVE_FROM_WISH_LIST', payload: { id: id } })
	}

	value.setALLCategories = (categories) => {
		dispatch({ type: 'SET_ALL_CATEGORIES', payload: { categories } })
	}

	value.setAllRecipes = (recipes) => {
		dispatch({ type: 'SET_ALL_RECIPES', payload: { recipes } })
	}
	return <AppContext.Provider value={value}>
		{children}
	</AppContext.Provider>
}