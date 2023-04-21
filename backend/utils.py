from generate_recipe import generate_recipe

recipe_name = input("Enter the recipe name: ")
recipe = generate_recipe(recipe_name)
print(recipe)