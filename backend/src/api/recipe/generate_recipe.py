import openai
import os
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_recipe(recipe_name):
    prompt = f"Generate a list of ingredients and notes in French for making {recipe_name}:"

    messages = [
        {"role": "system", "content": "You are a helpful assistant that generates recipes."},
        {"role": "user", "content": prompt}
    ]

    res = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages,
        max_tokens=700,
        n=1,
        stop=None,
        temperature=0.8,
    )

    # log the prompt and response
    print("Prompt: ", prompt)
    print("Response: ", res['choices'][0]['message']['content'])

    return res['choices'][0]['message']['content']


recipe_name = input("Enter the recipe name: ")
recipe = generate_recipe(recipe_name)
print(recipe)
