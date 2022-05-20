import { API_URL } from "./config";

export default class ServiceAPI {
    static async getALLFoodCategiries() {
        const response = await fetch(API_URL + 'categories.php');
        return response.json();
    }
    static async getALLRecipes() {

        const resp = this.getALLFoodCategiries()
            .then(data => { return data.categories })
            .then(async categs => {
                return Promise.all(
                    categs.map(categ => this.getMealsByCategory(categ.strCategory).then(data => data.meals))
                ).then(values => values)
            });

        return resp;

    }
    static async getMealsByCategory(categoryName) {
        const response = await fetch(API_URL + 'filter.php?c=' + categoryName);
        return response.json();
    }
    static async getRecipeById(id) {
        const response = await fetch(API_URL + 'lookup.php?i=' + id);
        return response.json();
    }

}