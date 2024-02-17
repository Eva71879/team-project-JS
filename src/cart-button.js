const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body'); //убираем скролл основной страницы
const lockPadding = document.querySelectorAll(".lock-padding"); //все объекты с классом lock-padding

let unlock = true; //чтобы не было двойных нажатий

const timeout = 800; //та же цифра что и в transition в css

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index ++) {//цикл по всем popupLinks
        const popupLink = popupLinks[index];
        popupLink.addEventListener('click', function(e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}


function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();//скрываем скролл body
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')) {//если нет в родителях popup-content
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

export function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock(); //лочим скролл на случай открытия второго попапа
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px' //получаем ширину скролла

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;//всем объектам с классом lock-padding придаем фиксацию, в том числе фиксированном хедеру (если он есть)
        }
    }
    body.style.paddingRight = lockPaddingValue;//ширина скролла
    body.classList.add('lock');

    unlock = false; 
    setTimeout(function () {
        unlock = true; //чтобы не появлялся скролл при двойном нажатии попапа
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function() {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27 ) {// код клавиши Escape
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});

// document.querySelector('.button__backToProducts').addEventListener('click', function () {
//     const popupActive = document.querySelector('.popup.open');
//     popupClose(popupActive);
// });


