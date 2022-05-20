

const getIngredients = (obj) => {
	const ingredients = Object.keys(obj).map(key => {
		if (key.includes('Ingredient') && obj[key]) {
			return {
				ingredient: obj[key],
				measure: obj[`strMeasure${key.replace('strIngredient', '')}`],
				thumbLarge: `https://www.themealdb.com/images/ingredients/${obj[key]}.png`,
				thumbSmall: `https://www.themealdb.com/images/ingredients/${obj[key]}-Small.png`
			}
		}
		else return null;
	}).filter(ing => ing);

	return ingredients;
}

export { getIngredients }