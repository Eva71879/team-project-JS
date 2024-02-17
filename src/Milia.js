//получаем данные обо всех имеющихся продуктах (products)
const categoryRow = document.querySelector(".category");

async function getCardInfo() {
  try {
      const response = await fetch('https://dummyjson.com/products/categories');
      if (!response.ok) {
        throw new Error('Ошибка при загрузке данных');
      }
      const productsCategories = await response.json();
      console.log(productsCategories)
      return productsCategories;
      
  } catch (error) {
      console.error('Ошибка:', error);
  }
}

// создаем эелмент кнопки
function createButtonElement(category) {
  const buttonCategory = `
  <button class="button">${category}</button>
  `;
  return buttonCategory;
}

// функция добавления кнопки в строку
function addButton(categoryRow, category) { 
  const buttonElement = createButtonElement(category); 
  categoryRow.innerHTML += buttonElement; 
} 


// выводим кнопки на страницу
async function createButtons() {

  try {
    const productsCategoriesData = await getCardInfo();
    productsCategoriesData.forEach((category) => {
      addButton(categoryRow, category);
    });

  const buttons = document.querySelectorAll('.button');

  buttons.forEach(button => {
    button.addEventListener('click', async () => {
      if (button.classList.contains('active')) {
        button.classList.remove('active');
      } else {
        // Удаляем класс 'active' у других кнопок
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      };

      // Получаем текст категории из кнопки
      const category = button.textContent;
      await displayCards(category);
      console.log(category)
    });
  });
    
  } catch (error) {
    console.error('Ошибка при отображении категорий:', error);
  }
}

// создаем карточку
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

// выводим карточки на страницу по категориям
async function displayCards(category) {
  const container = document.querySelector(".container");
  try {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    if (!response.ok) {
      throw new Error('Ошибка при загрузке данных');
    }
    const productsData = await response.json();
    const products = productsData.products;
    console.log(products)

    container.innerHTML = "";

    products.forEach((product) => {
      addCardToContainer(container, product);
    });
  } catch (error) {
    console.error('Ошибка при отображении карточек:', error);
  }
}

categoryRow.addEventListener('wheel', function(event) {
  this.scrollLeft += event.deltaY;
  event.preventDefault()
})



createButtons();


