const input = document.querySelector(".input");
const cardTemplate = document.querySelector("[data-user-template]");
const cardContainer = document.querySelector("[data-user-cards-container]");

let users = [];
const betterFunc = (e) => {
  let value = e.target.value.toLowerCase();
  users.forEach((user) => {
    let isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value);
    user.element.classList.toggle("hide", !isVisible);
  });
};
async function apiCall() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await res.json();
  //   console.log(data);
  users = data.map((user) => {
    const card = cardTemplate.content.cloneNode(true).children[0];
    const header = card.querySelector("[data-name]");
    const body = card.querySelector("[data-body]");
    header.textContent = user.name;
    body.textContent = user.email;
    cardContainer.append(card);
    return {
      name: user.name,
      email: user.email,
      element: card, //to send the card template that we made here to another func through the obj users
    };
  });
}

apiCall();
input.addEventListener("keyup", (e) => betterFunc(e));
