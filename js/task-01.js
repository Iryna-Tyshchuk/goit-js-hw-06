//1
const quantity = document.querySelectorAll(".item");
console.log(`Number of categories: ${quantity.length}`);
//2
const titlesEl = document.querySelectorAll("h2");
const listEl = document.querySelectorAll("ul");

console.log(`Category: ${titlesEl[0].textContent}
Elements: ${listEl[1].childElementCount}`);

console.log(`Category: ${titlesEl[1].textContent}
Elements: ${listEl[2].childElementCount}`);

console.log(`Category: ${titlesEl[2].textContent}
Elements: ${listEl[3].childElementCount}`);
