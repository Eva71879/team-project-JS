const container = document.querySelector(".container"); //переменная для общего контейнера
const category = document.querySelector('.category'); //переменная для категорий
const inputSearch = document.querySelector('.inputSearch'); //переменная для поля ввода
const btnSearch = document.getElementById('btnSearch'); //переменная для кнопки поиска - лупы
const attention = document.querySelector('.attention'); //переменная для вывода сообщения о результате поиска
const pagination = document.querySelector('.pagination'); //переменная для списка номеров страниц

//разворачиваем-сворачиваем строку поиска и скрываем кнопки категорий по клику на лупу
btnSearch.addEventListener('click', function () {
    category.classList.toggle('hide');
    inputSearch.classList.toggle('hide');
    btnClose.classList.toggle('hide');

    //добавляем курсор в инпут
    inputSearch.focus();
});

//ПОЛЕ ПОИСКА
//по нажатию на Enter на инпуте
inputSearch.addEventListener('keyup', event => {

    //Enter сработает при условии, что набрано больше 2х символов
    if (event.code === "Enter" && inputSearch.value.length > 2) {
        getCardInfoBySearch(); //получаем данные по поиску
        main(); //отображаем данные по поиску
    }

    //получаем данные об имеющихся продуктах по поиску
    async function getCardInfoBySearch() {
        try {
            const asking = inputSearch.value;
            const response = await fetch(`https://dummyjson.com/products/search?q=${asking}`);
            if (!response.ok) {
                throw new Error('Ошибка при загрузке данных');
            }
            const products = await response.json();

            //вывести информацию об отсутствии продуктов
            if (products.total === 0) {
                //выводим предупреждение об отсутствии продуктов, которое показ-ся неск-ко секунд
                attention.innerHTML = `Ничего не найдено, попробуйте изменить запрос.`;
                attention.classList.remove('makeInvsbl');
            } else {
                container.innerHTML = ''; //очищаем страницу
                attention.innerHTML = `найдено ${products.total} шт.`; //указываем СКОЛЬКО товаров найдено
                attention.classList.remove('makeInvsbl');
            }
            return products; //возвращаем массив объектов с найденными товарами

        } catch (error) {
            console.log('Ошибка:', error);
        }
        finally {
            //независимо о того найдены или нет товары. сообщение об итогах исчезает через 3 секунды
            setTimeout(() => {
                attention.classList.add('makeInvsbl');
            }, 3000);
        }
    }

    //создаем функцию вывода данных
    async function main() {
        const productsDataSearch = await getCardInfoBySearch(); //получаем данные в переменную
        const askingProducts = productsDataSearch.products; //получаем массив объектов
        let cardsPerPage = 8; //задаем кол-во товаров на странице 
        let currentPage = 1; //текущая страница выводится первой

        //вывод контента
        function displaySearchContent(askingProducts, cardsPerPage, page) {

            //очищаем страницу
            container.innerHTML = '';
            page--;

            //формируем вывод 10 товаров на нужную страницу
            const start = page * cardsPerPage; //задаем стартовый номeр карточки на странице
            const end = start + cardsPerPage; //задаем конечный номер карточки на странице
            let searchCardsOnPage = askingProducts.slice(start, end); //определяем ТОВАРЫ ТЕКУЩЕЙ СТРАНИЦЫ

            //формируем карточки для каждого товара и добавляем в контент-блок
            searchCardsOnPage.forEach((obj) => {
                const card = document.createElement('div');
                // card.innerHTML = `
                // // <div class='item'>
                // // <div class='item-product'>
                // // <p class='discount'><span class='discount-percentage'>${obj.discountPercentage}</span> off sale</p>
                // // <div class='image-block'><img src="${obj.thumbnail}" alt="thumbnail" class='image'></div>
                // // <p class='rating'><span class='rating-star'>&#10033;</span> ${obj.rating}</p>
                // // <p class='title'>${obj.title}</p>
                // // <p class='description'>${obj.description}</p>
                // // <p class='price'><span class='price-bin'></span>$${obj.price}</p>
                // // </div>
                // // </div>
                // `;

                card.innerHTML = `
                <div class='item'>
                    <div class='item-product'>
                        <p class='discount'>
                            <span class='discount-percentage'>${obj.discountPercentage}</span> off sale
                        </p>
                        <div class='image-block'>
                            <img src="${obj.thumbnail}" alt="thumbnail" class='image'>
                        </div>
                        <p class='rating'><span class='rating-star'>&#10033;</span> ${obj.rating}</p>
                        <p class='title'>${obj.title}</p> <p class='description'>${obj.description}</p>
                        <button class='price putToCartButton' data-product='${JSON.stringify(obj)}'>
                            <span class='price-bin'></span>$${obj.price}
                        </button>
                    </div>
                </div>;
                `

                container.appendChild(card);
            })
        }

        //делаем циферки страниц по текущему количеству элементов массива
        function displayPagesBtn(askingProducts, cardsPerPage) {

            let pagesCount = Math.ceil(askingProducts.length / cardsPerPage); //вычисляем КОЛИЧЕСТВО СТРАНИЦ
            pagination.innerHTML = ''; //очищаем список нумерации

            //выводим номера страниц
            for (let i = 1; i <= pagesCount; i++) {
                let numContent = displayProdutsSearch(i);
                pagination.appendChild(numContent);
            }
        }
        // отображаем страницы
        function displayProdutsSearch(page) {
            //создаем элементы нумерации по количеству найденного
            let pageBtn = document.createElement('div');
            pageBtn.classList.add('pageBtn');
            pageBtn.innerHTML = page;
            pagination.appendChild(pageBtn);

            //меняем стиль активной кнопки нумерации
            function makeActive() {
                if (currentPage == page) pageBtn.classList.add('pageBtn-active');
            }
            makeActive();

            //по клику на номере страницы выводим контент нужной страницы
            pageBtn.addEventListener('click', function () {
                const pagesBtn = document.querySelectorAll('.pageBtn'); //получаем переменую кнопок страниц
                //очистим стиль для каждой
                for (let btn of pagesBtn) {
                    btn.classList.remove('pageBtn-active');
                }
                //присваиваем кликнутой кнопке активный стиль и подтягиваем нужный контент
                currentPage = page;
                makeActive();
                displaySearchContent(askingProducts, cardsPerPage, currentPage)
            })

            return pageBtn;
        }
        displaySearchContent(askingProducts, cardsPerPage, currentPage);
        displayPagesBtn(askingProducts, cardsPerPage);
    }

})
//кнопка сброса поискового запроса, перезапускает страницу
const btnClose = document.querySelector('.button-close');
btnClose.addEventListener('click', function () {
    location.reload();
});