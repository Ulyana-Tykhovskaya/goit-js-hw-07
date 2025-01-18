const ulElement = document.querySelector("#categories");
const liElement = ulElement.querySelectorAll(".item");
console.log(`Number of categories: ${liElement.length}`);
liElement.forEach((items) => {
  const title = items.querySelector("h2").textContent;
  const elementCount = items.querySelectorAll("ul > li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementCount}`);
});
