# Используем официальный образ Node.js
FROM node:14-alpine

# Создаем директорию приложения
WORKDIR /app

# Копируем package.json и package-lock.json в директорию приложения
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы приложения в директорию приложения
COPY . .

# Собираем приложение для production
RUN npm run build

# Используем образ Nginx
FROM nginx:alpine

# Копируем собранное приложение из предыдущего образа в директорию Nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Экспонируем порт 80 для доступа к приложению
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
