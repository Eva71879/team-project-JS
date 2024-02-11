const btnSearch = document.getElementById('btnSearch');
const btnClose = document.querySelector('.button-close');
const basket = document.querySelector('.basket');
const category = document.querySelector('.category');
const inputSearch = document.querySelector('.inputSearch');


//добавляем курсор в инпут
inputSearch.focus();


btnSearch.addEventListener('click', function () {
    category.classList.toggle('hide');
    inputSearch.classList.toggle('hide');
    btnClose.classList.toggle('hide');
})


//при Enter на поле ввода.  срабатывает, если в поле введены больше 3 символов
inputSearch.addEventListener('keyup', event => {
    if (event.code === "Enter" && inputSearch.value.length > 2) {
        getCardInfo();
        console.log('mao, Enter was pressed');
    }


    //получаем данные обо всех имеющихся продуктах (products)
    async function getCardInfo() {
        try {
            const container = document.querySelector(".container");
            container.innerHTML = '';
            const asking = inputSearch.value;
            const response = await fetch(`https://dummyjson.com/products/search?q=${asking}`);
            if (!response.ok) {
                throw new Error('Ошибка при загрузке данных');
                // + вывести ошибку на страницу для информирования юзера
            }
            const products = await response.json();
            console.log(products);
            // test2.innerHTML = JSON.stringify(products);
            return products;




        } catch (error) {
            console.error('Ошибка:', error);
            // throw error; // Пробрасываем ошибку дальше
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
        const cardElement = createCardElement(card);
        container.innerHTML += cardElement;
    }


    // выводим карточки на страницу
    async function displayCards() {
        const container = document.querySelector(".container");
        try {
            const productsData = await getCardInfo();
            const products = productsData.products;




            products.forEach((product) => {
                addCardToContainer(container, product);
            });
        } catch (error) {
            console.error('Ошибка при отображении карточек:', error);
        }
    }


    displayCards();
})

btnClose.addEventListener('click', function () {
    location.reload();
});
