from mistralai import Mistral, UserMessage, SystemMessage   #   type: ignore
from dotenv import load_dotenv
import os

load_dotenv()


api_key = os.environ["MISTRAL_API_KEY"]
model = "mistral-large-latest"

client = Mistral(api_key=api_key)


def generate_answer(context, question):
    messages = [
        SystemMessage(content=f"Use the following knowledge to answer: {context}"),
        UserMessage(
            content=question,
        ),
    ]
    response = client.chat.complete(model=model, messages=messages)
    return response.choices[0].message.content


# # Example usage
# prompt = "What is the capital of France?"
# prompt = "Where is Eiffel Tower located?"
# context = f"France, officially known as the French Republic, is a country located in Western Europe. It is one of the most visited countries in the world, known for its rich history, art, fashion, cuisine, and culture. The country has a diverse geography, with mountains, coastlines, and rural areas, offering a wide range of landscapes and activities for tourists and locals alike.\
# France is home to many famous cities, including Paris, the capital, which is often referred to as the 'City of Light.' Paris is famous for its iconic landmarks such as the Eiffel Tower, Notre-Dame Cathedral, and the Louvre Museum, which houses the Mona Lisa. Other notable cities in France include Lyon, Marseille, and Bordeaux, each with its own unique character and attractions.\
# French cuisine is renowned for its sophistication and elegance, with popular dishes such as escargots, ratatouille, and coq au vin. The country is also famous for its wine production, with regions such as Bordeaux, Burgundy, and Champagne producing some of the world's finest wines.\
# France has a long and complex history, with many significant events and figures shaping the country's development. The French Revolution, which took place in the late 18th century, had a profound impact on the country and the world, leading to the establishment of the First French Republic and the rise of Napoleon Bonaparte.\
# Today, France is a modern, democratic country with a strong economy and a high standard of living. It is a member of the European Union and plays an important role in international affairs. The country is also known for its fashion industry, with designers such as Chanel, Dior, and Louis Vuitton being household names.\
# Some popular tourist attractions in France include:\
# * The Eiffel Tower\
# * The Louvre Museum\
# * Notre-Dame Cathedral\
# * The French Riviera\
# * The Palace of Versailles\
# * The Mont Saint-Michel\
# * The Loire Valley\
# Overall, France is a country with a rich history, culture, and natural beauty, making it a popular destination for tourists and a great place to live for its residents."

# # print(generate_answer(context, prompt))


# context = "2+11=14\
#     3+5=9\
#     4+8=13\
#     5+6=12\
#     7+7=15\
#     and so on.."

# print(generate_answer(context, "What is 9+5?"))


# # # openai.api_key = os.getenv("OPENAI_API_KEY")
# # with Mistral(
# #     api_key=os.getenv("MISTRAL_API_KEY", ""),
# # ) as mistral:

# #     res = mistral.models.list()

# #     # Handle response
# #     print(res)
# # def generate_answer(context, question):
# #     prompt = f"Answer the question based on the following context:\n\n{context}\n\nQuestion: {question}"
# #     response = mistral.ChatCompletion.create(
# #         model="gpt-3.5-turbo",
# #         messages=[
# #             {"role": "user", "content": prompt}
# #         ]
# #     )
# #     return response.choices[0].message.content.strip()


# # def generate_response(prompt):
# #     response = client.generate(
# #         model="mistral-tiny",  # or another model provided by Mistral
# #         prompt=prompt,
# #         max_tokens=150
# #     )
# #     return response.choices[0].text.strip()
