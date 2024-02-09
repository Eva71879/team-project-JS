// // пробую кнопку 

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('active')) {
      button.classList.remove('active');
    } else {
      button.classList.add('active');
    }
  })
});