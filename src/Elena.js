
//получаем данные обо всех имеющихся продуктах (products)
async function getCardInfo() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
            throw new Error('Ошибка при загрузке данных');
            // + вывести ошибку на страницу для информирования юзера
        }
        const products = await response.json();
        // console.log(products);
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
    <div class='item'>
            <div class='item-product'>
            <p class='discount'><span class='discount-percentage'>${obj.discountPercentage}</span> off sale</p>
            <div class='image-block'><img src="${obj.thumbnail}" alt="thumbnail" class='image'></div>
            <p class='rating'><span class='rating-star'>&#10033;</span> ${obj.rating}</p>
            <p class='title'>${obj.title}</p>
            <p class='description'>${obj.description}</p>
            <p class='price'><span class='price-bin'></span>$${obj.price}</p>
        </div>
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




//подсматриваю наименования категорий:
// // {"id":16,
// // "title":"Hyaluronic Acid Serum",
// // "description":"L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
// // "price":19,
// // "discountPercentage":13.31,
// // "rating":4.83,
// // "stock":110,
// // "brand":"L'Oreal Paris",
// // "category":"skincare",
// // "thumbnail":"https://cdn.dummyjson.com/product-images/16/thumbnail.jpg",
// // "images":["https://cdn.dummyjson.com/product-images/16/1.png","https://cdn.dummyjson.com/product-images/16/2.webp","https://cdn.dummyjson.com/product-images/16/3.jpg","https://cdn.dummyjson.com/product-images/16/4.jpg","https://cdn.dummyjson.com/product-images/16/thumbnail.jpg"]},
