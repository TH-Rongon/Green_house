const categoryContainer = document.getElementById("categoryContainer");
const cardContainer = document.getElementById("cardContainer");
const modalContainer = document.getElementById("modalContainer");
const cartContainer = document.getElementById("cartContainer");
const priceContainer = document.getElementById("priceContainer");
const totalPriceEl = document.getElementById("totalPrice");
let totalPrice = 0;
const loadingSpinner = document.getElementById("loadingSpinner");

// Load Categories
const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data.categories));
};
// Display Category
const displayCategory = (categories) => {
  categories.forEach((category) => {
    categoryContainer.innerHTML += `
      <li id="${category.id}" class="hover:bg-green-600 hover:text-white p-1">${category.category_name}s</li>
    `;
  });
};

loadCategory();
loadAllPlants();
