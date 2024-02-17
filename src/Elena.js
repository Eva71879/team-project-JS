const container = document.querySelector(".container");

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

//создаем разметку карточки ----обновила код последней кнопки price------
function createCardElement(obj) {
    const card = `
    <div class='item'>
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
}

// добавляем разметку в контейнер
function addCardToContainer(container, card) {
    const cardElement = createCardElement(card);
    container.innerHTML += cardElement;
}

// выводим карточки на страницу
async function displayCards() {
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

// Вызываем функцию отображения карточек
displayCards();

//создаем объект корзины
let cart = {};

function createProductToAdd(obj) {
    return {
        "id": obj.id,
        "title": obj.title,
        "description": obj.description,
        "price": obj.price,
        "discountPercentage": obj.discountPercentage,
        "rating": obj.rating,
        "stock": obj.stock,
        "brand": obj.brand,
        "category": obj.category,
        "thumbnail": obj.thumbnail,
        "images": obj.images,
        "count" : 1
    };
}

document.addEventListener('click', function(event) {
    // кнопка добавления продукта в корзину
    const putToCartButton = event.target.classList.contains('putToCartButton');
    if (putToCartButton) {
        console.log('Кнопка "Добавить в корзину" была нажата');
        const productData = JSON.parse(event.target.getAttribute('data-product'));
        const productToAdd = createProductToAdd(productData);
        const newProductId = 'product_' + productToAdd.id;

        // Проверяем, есть ли товар уже в корзине
        if (cart[newProductId]) {
            // Увеличиваем количество товара в корзине
            cart[newProductId].count++;
            // Обновляем отображение количества товара в соответствующем элементе
            const productAmountElement = document.querySelector(`[data-product-id="${newProductId}"] .productAmount`);
            if (productAmountElement) {
                productAmountElement.textContent = cart[newProductId].count;
            }
            updateCartAmount()
        } else {
            // Добавляем новый товар в корзину
            cart[newProductId] = {
                "product": productToAdd,
                "count": 1
            };

            updateCartAmount()

            // Добавляем разметку нового товара в корзину
            const cartList = document.querySelector('.popup__container');
            const cartItemHTML = `
                <li class="cart-list__item" data-product-id="${newProductId}">
                    <div class="cart-list__item-container">
                        <div class="thumbnailWrapper">
                            <img src="${productToAdd.thumbnail}" alt="thumbnail" class="productThumbnail">
                        </div>
                        <div class="productTitleWrapper">
                            <p class="productTitle">${productToAdd.title}</p>
                        </div>
                        <div class="productAmounWrapper">
                            <button class="minus" data-product-id="${newProductId}">-</button>
                            <span class="productAmount">${productToAdd.count}</span>
                            <button class="plus" data-product-id="${newProductId}">+</button>
                        </div>
                        <div class="productPriceWrapper">
                            <p class="productPrice">$${productToAdd.price}</p>
                        </div>
                        <div class="deleteFromCartWrapper">
                            <button class="deleteFromCart" id="deleteFromCart"></button>
                        </div>
                    </div>
                </li>
            `;
            cartList.insertAdjacentHTML('beforeend', cartItemHTML);
            updateCartContents();
            updateCartAmount();
            
        }

        // Устанавливаем цвет кнопки, если продукт добавлен в корзину
        const addButton = event.target;
        if (addButton) {
            addButton.style.backgroundColor = '#0C0099';
            addButton.dataset.productId = newProductId; // Привязываем id продукта к кнопке
        }

        updateTotalPrice(); // Вызываем функцию для обновления общей суммы цен
    }

    // кнопка "plus"
    if (event.target.classList.contains('plus')) {
        const productId = event.target.getAttribute('data-product-id');
        plusFunction(productId);
    }

    // кнопка "minus"
    if (event.target.classList.contains('minus')) {
        const productId = event.target.getAttribute('data-product-id');
        minusFunction(productId);
    }

    // кнопка удаления из корзины
    if (event.target.classList.contains('deleteFromCart')) {
        const productId = event.target.closest('.cart-list__item').getAttribute('data-product-id');
        deleteFunction(productId);
    }
});

// увеличение количества товара
const plusFunction = id => {
    cart[id].count++;
    const productAmountElement = document.querySelector(`[data-product-id="${id}"] .productAmount`);
    if (productAmountElement) {
        productAmountElement.textContent = cart[id].count;

        // Обновляем цену продукта
        const productPriceElement = document.querySelector(`[data-product-id="${id}"] .productPrice`);
        if (productPriceElement) {
            productPriceElement.textContent = `$${cart[id].product.price * cart[id].count}`; // умножаем цену на количество
        }
    }
    updateTotalPrice(); 

    // обновляем содержимое корзины после увеличения количества товара
    updateCartContents();
    updateCartAmount();
}

const minusFunction = id => {
    if (cart[id].count > 1) {
        cart[id].count--;
        const productAmountElement = document.querySelector(`[data-product-id="${id}"] .productAmount`);
        if (productAmountElement) {
            productAmountElement.textContent = cart[id].count;

            // Обновляем цену продукта
            const productPriceElement = document.querySelector(`[data-product-id="${id}"] .productPrice`);
            if (productPriceElement) {
                productPriceElement.textContent = `$${cart[id].product.price * cart[id].count}`; // умножаем цену на количество
            }
        }
    }

    updateTotalPrice(); // Вызываем функцию для обновления общей суммы цен
    // обновляем содержимое корзины после уменьшения количества товара
    updateCartContents();
    updateCartAmount();
}

// функция удаления товара из корзины с анимацией
const deleteFunction = id => {
    const cartItemElement = document.querySelector(`[data-product-id="${id}"]`);
    if (cartItemElement) {
        cartItemElement.classList.add('removing');
        setTimeout(() => {
            delete cart[id];
            cartItemElement.remove();
            updateTotalPrice(); // Вызываем функцию для обновления общей суммы цен
            updateCartContents();
            updateCartAmount();
        }, 500); // Задержка должна соответствовать времени анимации в CSS
    }

    // Возвращаем цвет кнопки к прежнему состоянию
    const addButton = document.querySelector(`.putToCartButton[data-product-id="${id}"]`);
    if (addButton) {
        addButton.style.backgroundColor = ''; // Убираем цвет
    }
}

function updateTotalPrice() {
    // Находим элемент, в который нужно вывести общую стоимость
    const totalPriceElement = document.querySelector('.cart-list__TotalPrice p');

    // Вычисляем общую стоимость
    let totalPrice = 0;
    for (const productId in cart) {
        const product = cart[productId].product;
        const count = cart[productId].count;
        totalPrice += product.price * count;
    }

    // Выводим общую стоимость в элемент
    totalPriceElement.textContent = `$${totalPrice}`;
}

// Вызываем функцию для обновления общей суммы цен при инициализации и каждом изменении корзины
updateTotalPrice();


import { popupClose } from './cart-button.js'; //импорт функции закрытия модального окна

// Функция для отображения содержимого корзины
function displayCartContents() {
    const cartList = document.querySelector('.popup__container');
    cartList.innerHTML = ''; // Очищаем содержимое контейнера перед обновлением

    // Создаем пустую строку для хранения HTML-кода элементов корзины
    let cartItemsHTML = '';
    let popupFooterButtonContainer = document.querySelector('.popup__footer');


    // Если корзина не пуста
    if (Object.keys(cart).length > 0) {
        for (const productId in cart) {
            const product = cart[productId].product;
            const count = cart[productId].count;

            popupFooterButtonContainer.innerHTML = `<button class="button__backToProducts">place an order</button>`;

            // Добавляем HTML-код для текущего элемента корзины к общей строке
            cartItemsHTML += `
                <li class="cart-list__item" data-product-id="${productId}">
                    <div class="cart-list__item-container">
                        <div class="thumbnailWrapper">
                            <img src="${product.thumbnail}" alt="thumbnail" class="productThumbnail">
                        </div>
                        <div class="productTitleWrapper">
                            <p class="productTitle">${product.title}</p>
                        </div>
                        <div class="productAmounWrapper">
                            <button class="minus" data-product-id="${productId}">-</button>
                            <p class="productAmount">${count}</p>
                            <button class="plus" data-product-id="${productId}">+</button>
                        </div>
                        <div class="productPriceWrapper">
                            <p class="productPrice">$${product.price * count}</p>
                        </div>
                        <div class="deleteFromCartWrapper">
                            <button class="deleteFromCart" id="deleteFromCart"></button>
                        </div>
                    </div>
                </li>
            `;
        }
    } else {
        popupFooterButtonContainer.innerHTML = `<button class="button__backToProducts">back to products</button>`;

        // Если корзина пуста, добавляем соответствующее сообщение в строку HTML
        cartItemsHTML = `
            <div class="cart-empty">
                <p class="cart__text">cart is empty :-(</p>
            </div>
        `;

    }

    // Устанавливаем содержимое контейнера корзины равным строке HTML с элементами корзины
    cartList.innerHTML = cartItemsHTML;

    // Обновляем общую сумму цен
    updateTotalPrice();

    //по кнопке закрывается корзина (функция импортирована)
    const backToProductsButton = document.querySelector('.button__backToProducts');
    backToProductsButton.addEventListener('click', function () {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    });
}

// Обновляем содержимое корзины при загрузке страницы
displayCartContents();

// Функция для обновления содержимого корзины после каждого действия пользователя
function updateCartContents() {
    displayCartContents();
}

function updateCartAmount() {
    // Вычисляем общее количество товаров в корзине
    let totalCount = 0;
    for (const productId in cart) {
        totalCount += cart[productId].count; // Добавляем количество каждого товара к общему количеству
    }

    // Находим элемент .cartAmount
    const cartAmountElement = document.querySelector('.cartAmount');

    // Если общее количество товаров в корзине равно 0 и элемент .cartAmount существует, удаляем его
    if (totalCount === 0 && cartAmountElement) {
        cartAmountElement.remove();
    } else {
        // Если общее количество товаров в корзине больше 0 и элемент .cartAmount отсутствует, создаем его и добавляем в корзину
        if (!cartAmountElement) {
            const newCartAmountElement = document.createElement('span');
            newCartAmountElement.classList.add('cartAmount');
            newCartAmountElement.textContent = totalCount;
            const cartButton = document.querySelector('.cart');
            cartButton.appendChild(newCartAmountElement);
        } else {
            // Обновляем текстовое содержимое элемента .cartAmount
            cartAmountElement.textContent = totalCount;
        }
    }
}







