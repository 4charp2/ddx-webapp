# DDX WEBAPP - Телеграм Веб-Апп Приложение
Веб-Апп приложение - прототип для участия в Хакатоне ЛЦТ 2024

## Содержание
- [Установка](#установка)
- [Участие](#Участие)



## Установка
1. Клонируйте репозиторий git clone
2. Получите токен бота
3. Создайте базу данных DDX-WEBAPP
```
CREATE DATABASE "DDX-WEBAPP";
```
4. Измените .env файл ./backend
```
DataBase=DDX-WEBAPP 
username=postgres
password=
dialect=postgres (По умолчанию postgres)
host=localhost
TOKEN=
```
5. Выполните ```npm i``` в корне каждого проекта
6. Для запуска backend в корне ./backend выполните ```npm start```
7. Для запуска сайта в корне ./frontend выполните ```npm run build```


## Участие
- **Андрей** - *Разработка BackEnd* - [GitHub](https://github.com/4charp2)
- **Анна** - *Разработка FrontEnd* - [GitHub](https://github.com/anna-shatilova)
