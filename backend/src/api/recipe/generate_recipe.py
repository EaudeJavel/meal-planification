import openai

def generate_recipe(recipe_name):
    prompt = f"Generate a list of ingredients and notes in french for making {recipe_name}:"

    messages = [
        {"role": "system", "content": "You are a helpful assistant that generates recipes."},
        {"role": "user", "content": prompt}
    ]

    res = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages,
        max_tokens= 700,
        n=1,
        stop=None,
        temperature=0.8,
    )

    return res['choices'][0]['message']['content']