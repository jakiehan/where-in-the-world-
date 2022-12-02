# Where in the world?

## Описание
Проект создан для изучения технологий Redux и Styled-Components. Представляет собой сервис по поиску стран, просмотру детальной  
информации, сортировке по континентам. Плюс светлая и темная темы и немного анимаций.

## Функционал
- темная и светлая темы
- пагинация вывода стран (API такой функционал не предоставляет, поэтому сделан рендер карточек в зависимости от  
ширины, высоты экрана и положения скролла)
- живой поиск
- фильтрация по континентам(кастомное выпадающее меню)
- совмещенная фильтрация поиска и выбранного континента
- страница детальной информации о стране
- переход по странам соседям со страницы детальной информации
- анимации переключателя тем и эффект 3d карточки на странице детальной информации(при наведении на флаг, карточка  
переворачивается и отображается рандомное фото из этой страны)
- хранение данных LocalStorage
- адаптация под различные мобильные устройства

## Технологии
- React, react-router
- Redux, redux-thunk, redux-persist
- Styled-Components
- CSS
- JavaScript
- JSX
- работа со сторонними API (получение стран и фото)

## Дальнейшие планы по проекту:
- Redux Toolkit
- TypeScript

### Ссылки:
[]()

### Инструкция по локальному развертыванию проекта
- Клонируйте репозиторий:
```
git clone https://github.com/jakiehan/where-in-the-world-.git
```
- Установите зависимости:
```
npm i
```
- Запустите проект:
```
npm start
```