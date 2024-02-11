const btnSearch = document.getElementById('btnSearch');
const basket = document.querySelector('.basket');
const category = document.querySelector('.category');
const inputSearch = document.querySelector('.inputSearch');

btnSearch.addEventListener('click', function () {
    category.classList.toggle('hide');
    inputSearch.classList.toggle('hide');
})