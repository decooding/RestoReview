import json

# Функция для экранирования символов в строках, чтобы избежать SQL-инъекций
def escape_string(value):
    return value.replace("'", "''")

# Открытие файла JSON для чтения
with open('./parse/output.json', 'r', encoding='utf-8') as json_file:
    data = json.load(json_file)

# Открытие файла SQL для записи
with open('./parse/php.sql', 'w', encoding='utf-8') as f:
    # Генерация запросов SQL INSERT
    for item in data:
        insert_query = "INSERT INTO place (type, title, kuh, time, address, image, text, Rating) VALUES ('{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}', '{7}');".format(
            escape_string(item["type"]),
            escape_string(item["title"]),
            escape_string(item["kuh"]),
            escape_string(item["time"]),
            escape_string(item["address"]),
            escape_string(item["image"]),
            escape_string(item["text"]),
            escape_string(item["Rating"])
        )
        f.write(insert_query + '\n')

print('SQL file generated successfully.')