/**
 * recipe router
 */

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/recipe/generate",
      handler: "recipe.generateRecipe",
    },
  ],
};
