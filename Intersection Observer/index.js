let cards = document.querySelectorAll(".card");

let observer = new IntersectionObserver(
  (entries) => {
    // console.log(entries);
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      // if (entry.isIntersecting) observer.unobserve(entry.target); //will stop observing those elements which are on viewport
    });
  },
  {
    threshold: 1,
    // rootMargin: "50px",
  }
);
cards.forEach((card) => {
  console.log(card, "card");
  observer.observe(card);
});

function loadNewCards() {
  let cardContainer = document.querySelector(".card-container");
  for (let i = 0; i < 10; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerText = "New Card";
    observer.observe(card);
    cardContainer.append(card);
  }
}

const lastCardObserver = new IntersectionObserver(
  (entries) => {
    console.log(entries);
    // const lastCard = entries[0];
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      else {
        loadNewCards();
        lastCardObserver.unobserve(entry.target);
        lastCardObserver.observe(document.querySelector(".card:last-child"));
      }
    });
  },
  {
    threshold: 1,
    rootMargin: "100px",
  }
);

lastCardObserver.observe(document.querySelector(".card:last-child"));
