# npm_webpack

use npm install

//создаем разметку карточки ----обновила код последней кнопки price------
function createCardElement(obj) {
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

}
