
export function reducer(state, { type, payload }) {
	switch (type) {
		case "ADD_TO_WISH_LIST":
			{
				const newWishList = {
					...state,
					wishList: state.wishList.filter(item => item.idMeal === payload.idMeal).length
						?
						[...state.wishList]
						:
						[...state.wishList, payload]

				}

				return newWishList;
			}
		case 'REMOVE_FROM_WISH_LIST':
			return {
				...state,
				wishList: state.wishList.filter(item => item.idMeal !== payload.id)
			}
		case 'SET_ALL_CATEGORIES':
			return {
				...state,
				allCategories: payload.categories
			}
		case 'SET_ALL_RECIPES':
			{
				let newArr = [];
				payload.recipes.forEach(element => {
					newArr.push(...element)
				})
				return {
					...state,
					allRecipes: newArr
				}
			}

		default:
			return state
	}
}