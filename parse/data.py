import os
import requests
import json
import random
from bs4 import BeautifulSoup
from urllib.parse import urljoin

url = "https://astana.restolife.kz/page-2/?sorting=1&filter=1"

response = requests.get(url)
soup = BeautifulSoup(response.content, "html.parser")

data_list = []

cat_items = soup.find_all("div", {"class": "cat-item"})

for item in cat_items:
    data = {}

    title_block = item.find("div", {"class": "title-block"})
    if title_block is not None:
        category = title_block.find("div", {"class": "category"})
        if category is not None:
            data["type"] = category.text.strip()

        title = title_block.find("h2").text.strip()
        data["title"] = title

    additional_info = item.find_all("div", {"class": "row"})
    for info in additional_info:
        title = info.find("span", {"class": "title"}).text.strip()
        value = info.contents[1].strip()
        data[title] = value

    # Получаем ссылку на картинку
    photo_link = item.find("a", {"class": "main-catalog-box__photo-link"})
    if photo_link is not None:
        relative_path = photo_link["style"].split("url(")[-1].split(")")[0]
        absolute_path = urljoin(url, relative_path)
        data["image"] = absolute_path

    num_stars = random.randint(1, 5)
    randStar = "⭐️" * num_stars
    data["Rating"] = randStar

    data["text"] = 'Приглашаем вас отведать изысканные блюда и насладиться атмосферой уюта в нашем ресторане/баре/кафе. Наше меню порадует вас разнообразием кулинарных шедевров, приготовленных из свежих и качественных ингредиентов. Наш внимательный персонал готов сделать ваше посещение незабываемым и удовлетворить самые изысканные вкусы. Приходите и насладитесь неповторимым гастрономическим опытом в нашем заведении.'

    data_list.append(data)

output_file = "./parse/output.json"

# Сохраняем данные в файл JSON
with open(output_file, "w", encoding="UTF-8") as json_file:
    json.dump(data_list, json_file, ensure_ascii=False, indent=4)

# Получаем абсолютный путь к файлу output.json
output_path = os.path.abspath(output_file)
print("Путь к файлу output.json:", output_path)
