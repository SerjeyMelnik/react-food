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
                    categs.map(categ =>
                        this.getMealsByCategory(categ.strCategory)
                            .then(data =>
                                data.meals))
                ).then(async values =>
                    Promise.all(
                        values.map(async recipes => {
                            return Promise.all(
                                recipes.map(async item => {

                                    const recipt = await this.getRecipeById(item.idMeal)
                                        .then(data => {

                                            return data.meals[0];
                                        })
                                    return recipt;
                                }
                                )
                            )
                        }
                        )

                    ))
            });
        //resp.then(data => console.log(data))
        return resp;

    }
    static async getMealsByCategory(categoryName) {
        const response = await fetch(API_URL + 'filter.php?c=' + categoryName);
        return response.json()
        // return response.json().meals.then(
        //     async recipes => {
        //         return Promise.all(
        //             recipes.map(async item => {

        //                 const recipt = await this.getRecipeById(item.idMeal)
        //                     .then(data => {

        //                         return data.meals[0];
        //                     })
        //                 return recipt;
        //             }
        //             )
        //         )
        //     }
        // );
    }
    static async getRecipeById(id) {
        const response = await fetch(API_URL + 'lookup.php?i=' + id);
        return response.json();
    }
    static async getRecipesByCoutry(country) {
        const response = await fetch(API_URL + 'filter.php?a=' + country);
        return response.json();
    }
}