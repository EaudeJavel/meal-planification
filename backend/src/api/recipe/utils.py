import sys
from generate_recipe import generate_recipe

recipe_name = sys.argv[1]
recipe = generate_recipe(recipe_name)
print(recipe)
