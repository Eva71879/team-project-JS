Проект вёрстки маркетплейса "Randomberries" с функциональностью поиска, категорий и корзины на базе API:
https://dummyjson.com/docs/products
// -в вставить ссылку опубликованного сайта -


ПРОЕКТНАЯ КОМАНДА
- Елена Кошелева (https://github.com/Eva71879)
- Миляуша Хуснуллина (https://github.com/Milia-K)
- Юлия Старикова (https://github.com/CodeMeYulia)



ФУНКЦИОНАЛЬНОСТЬ И ОПИСАНИЕ САЙТА
Проект был создан командой в рамках практических работ в школе IT Girls. 
При разработке макета за основу взят 
[интерактивный макет](https://www.figma.com/proto/YhCP9TQiZu3b9ptLj7qyBL/%D0%9C%D0%B0%D0%BA%D0%B5%D1%82%D1%8B?page-id=31%3A2188&type=design&node-id=31-2189&viewport=1133%2C540%2C0.2&t=6KIxNuEEBMvG83Rz-1&scaling=scale-down&starting-point-node-id=250%3A10636)

ГЛАВНАЯ СТРАНИЦА
реализован вывод всех товаров на базе заданного API (на странице есть блок категорий, корзина, поисковая строка)
  
КАТЕГОРИИ
при выборе категории выводятся товары данной категории 
кнопка all возвращает все товары
реализован горизонтальный скролл для маленьких экранов

ПОИСК
при нажатии на значок лупы, разворачивается поисковая строка, предлагающая найти товар
поиск запускается клавшией Enter при условии, что запрос не менее трех символов 
успешный поиск выведет нужные товары на страницу и исчезающее сообщение для пользователя о количестве найденных товаров
неуспешный поиск выведеочистит страницу товаров и выведетвременное сообщение для пользователя о необходимости изменить запрос
кнопка сброса в поисковой строке очистит строку и обновит страницу с выводом всех товаров
реализована пагинация по 8 карточек на странице

КОРЗИНА
реализована возможность добавления товара в корзину с указанием наименования. количества. цены и общей суммы
для просмотра содержимого корзины используется попап по вызову на кнопке корзины
в корзине пользователель может удалять товар или менять его количество
удаление товаров из корзины приводит к обновлению итоговой стоимости и количества
товаров.


ИСПОЛЬЗОВАННЫЕ ТЕХНОЛОГИИ И БИБЛИОТЕКИ:

HTML5 (grid, flex)
Scss, Css
JS
API
NODE.JS
Webpack
GitHub

Инструкция по установке
- устанвить NODE.JS
- установить Webpack
- чтобы перенести проект себе на компьтер, необходимо выполнить команду https://github.com/Eva71879/team-project-JS.git в терминале VS Code
- https://github.com/Eva71879/team-project-JS.git
- запуск проекта по команде npm run start

<!-- # npm_webpack
use npm install -->

<!-- //создаем разметку карточки ----обновила код последней кнопки price------ -->
<!-- function createCardElement(obj) {
const card = `   <div class='item'>
            <div class='item-product'>
            <p class='discount'><span class='discount-percentage'>${obj.discountPercentage}</span> off sale</p>
            <div class='image-block'><img src="${obj.thumbnail}" alt="thumbnail" class='image'></div>
            <p class='rating'><span class='rating-star'>&#10033;</span> ${obj.rating}</p>
            <p class='title'>${obj.title}</p>
            <p class='description'>${obj.description}</p>
            <button class='price putToCartButton' data-product='${JSON.stringify(obj)}'><span class='price-bin'></span>$${obj.price}</button>
        </div>
    </div>
  `;

    return card;

} -->
