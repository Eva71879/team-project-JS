// import { sayHi, sayBye } from './about.js';

//из about.js:
// function sayHi(user) {
//   alert(`Hello, ${user}!`);
// }

// function sayBye(user) {
//   alert(`Bye, ${user}!`);
// }

// export { sayHi, sayBye };

// console.log('hello webpack!');
// console.log('hello webpack1!');

// sayHi('John'); // Hello, John!
// sayBye('Ammi'); // Bye, John!

//! 2. Воспользуемся открытым API — [JSONplaceholder](https://jsonplaceholder.typicode.com/). От этого API можно получить тестовые данные: строки, данные пользователя, набор постов. И все они будут лишены смысла — это идеально для тренировки.

//     Нужно получить с сервера список постов и отобразить его на странице.

//     Создайте функции:

//     - получает на вход объект поста и возвращает строку HTML-разметки;
//     - добавляет полученную разметку в полученный контейнер;
//     - делает GET запрос по адресу `https://jsonplaceholder.typicode.com/posts` и добавит их на страницу (для этого примените метод `forEach` и функции созданные ранее).

//TODO: Сделать функцию, которая будет отправлять запрос на сервер.
//Используем try и catch для обработки ошибок. В случае, если все ок - выводим на страницу, если нет - выводим ошибку в консоль. Можно сделать экран с ошибкой.
async function getPosts() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await response.json();
      return posts;
    } catch (error) {
      console.error("Error:", error);
    }
  }
  //TODO: Сделать фунцию, которая будет возвращатьразметку.
  //Можно сделать как я ниже. На вход принимаем объект.
  function createPostElement(obj) {
    const post = `
      <div>
        <h2>${obj.title}</h2>
        <p>${obj.body}</p>
      </div>
    `;
    return post;
  }
  //TODO: Сделать функцию, которая будет добавлять разметку в контейнер.
  //можно выделить как отдельную функцию, можно просто добавить действия в фукнцию displayPosts,
  function addPostToContainer(container, post) {
    const postElement = createPostElement(post);
    container.innerHTML += postElement;
  }
  
  async function displayPosts() {
    const container = document.getElementById("posts-container");
    const posts = await getPosts();
    posts.forEach((post) => addPostToContainer(container, post));
  }
  
  displayPosts();