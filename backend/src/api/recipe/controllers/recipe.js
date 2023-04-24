"use strict";

const { spawn } = require("child_process");
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::recipe.recipe", ({ strapi }) => ({
  async generateRecipe(ctx) {
    const { recipe_name } = ctx.request.body;

    // Wrap the Python script execution in a Promise so that we can properly handle the results.
    return new Promise((resolve, reject) => {
      const pythonProcess = spawn("python3", [
        "src/api/recipe/utils.py",
        recipe_name,
      ]);
      let result = "";

      // Listen for output data from the Python script.
      pythonProcess.stdout.on("data", (data) => {
        result += data.toString();
      });

      // Listen for the end of the Python script output.
      pythonProcess.stdout.on("end", () => {
        resolve(result);
      });

      // Listen for errors from the Python script.
      pythonProcess.stderr.on("data", (data) => {
        console.error(`stderr: ${data}`);
        reject(data);
      });

      pythonProcess.on("close", (code) => {
        if (code !== 0) {
          console.error(`python script exited with code ${code}`);
          reject(`python script exited with code ${code}`);
        }
      });
    })
      .then((result) => {
        // If the Promise is resolved, set the response body to the result string.
        ctx.body = { result };
      })
      .catch((err) => {
        ctx.throw(500, err);
      });
  },

  async find(ctx) {
    const sanitizedQueryParams = await this.sanitizeQuery(ctx);

    // Call the find method of the "recipe" service to retrieve the recipes that match the query.
    const { results, pagination } = await strapi
      .service("api::recipe.recipe")
      .find(sanitizedQueryParams);
    const sanitizedResults = await this.sanitizeOutput(results, ctx);

    return this.transformResponse(sanitizedResults, { pagination });
  },
}));
