const basket = document.querySelector('.basket');
const category = document.querySelector('.category');

const container = document.querySelector(".container");
const attention = document.querySelector('.attention');


//разворачиваем-сворачиваем строку поиска и скрываем кнопки категорий по клику на лупу
const inputSearch = document.querySelector('.inputSearch');
const btnSearch = document.getElementById('btnSearch');

btnSearch.addEventListener('click', function () {
    category.classList.toggle('hide');
    inputSearch.classList.toggle('hide');
    btnClose.classList.toggle('hide');

    //добавляем курсор в инпут
    inputSearch.focus();
})


//СТРОКА ПОИСКА
inputSearch.addEventListener('keyup', event => {

    //Enter сработает при условии, что набрано больше 2х символов
    if (event.code === "Enter" && inputSearch.value.length > 2) {
        getCardInfoBySearch();
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
                throw new Error('Ничего не найдено, попробуйте изменить запрос.');
            } else {
                container.innerHTML = ''; //очищаем страницу

                //отображаем карточки, если продукты найдены
                displayCardsSearch();
                attention.innerHTML = `найдено ${products.total} шт.`; //указываем сколько товаров найдено
                attention.classList.remove('makeInvsbl');

            }
            return products;


        } catch (error) {
            console.error('Ошибка:', error);

            //выводим предупреждение об отсутствии продуктов, которое показ-ся неск-ко секунд
            attention.innerHTML = `Ничего не найдено, попробуйте изменить запрос.`
            attention.classList.remove('makeInvsbl');
        }
        finally {
            setTimeout(() => {
                attention.classList.add('makeInvsbl');
            }, 3000)
        }
    }


    //создаем разметку карточки
    function createCardElement(obj) {
        const card = `
      <div>
        <p>${obj.discountPercentage}</p>
        <img src="${obj.thumbnail}" alt="thumbnail">
        <p>${obj.rating}</p>
        <p>${obj.title}</p>
        <p>${obj.description}</p>
        <p>${obj.price}</p>
      </div>
    `;
        return card;
    }


    // добавляем разметку в контейнер
    function addCardToContainer(container, card) {
        const item = createCardElement(card);
        container.innerHTML += item;
    }


    // выводим карточки на страницу
    async function displayCardsSearch() {
        try {
            const productsDataSearch = await getCardInfoBySearch();
            const products = productsDataSearch.products;

            products.forEach((product) => {
                addCardToContainer(container, product);
            });
        } catch (error) {
            console.log(error);
        }
    }

})

//сброс запроса с перезагрузкой страницы
const btnClose = document.querySelector('.button-close');

btnClose.addEventListener('click', function () {
    location.reload();
});