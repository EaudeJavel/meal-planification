/**
 * recipe router
 */

module.exports = {
  routes: [
    {
        method: "GET",
        path: "/recipe",
        handler: "recipe.find",
    },
    {
      method: "POST",
      path: "/recipe/generate",
      handler: "recipe.generateRecipe",
    },
  ],
};
