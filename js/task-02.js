const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsListEl = document.querySelector("ul");
console.log(ingredientsListEl);
// Функція для створення li
const makeIngredientsLi = (name) => {
  const ingredientsItemEl = document.createElement("li");
  ingredientsItemEl.textContent = name;
  ingredientsItemEl.classList.add("item");

  return ingredientsItemEl;
};

// Перебір масиву ingredients через map
const ingredientsCardsEl = ingredients.map((el) => makeIngredientsLi(el));

// Вставка колекції li на сторінку
ingredientsListEl.append(...ingredientsCardsEl);
