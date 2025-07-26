// script.js

const images = [
  "https://www.nilkamalfurniture.com/cdn/shop/files/Desktop-banner_IFFS_Bed_e52f0b0d-d0ce-428d-957d-076bba952fb9.jpg?v=1752724595",
  "https://www.nilkamalfurniture.com/cdn/shop/files/Desktop-banner_IFFS_Sofa_bcb97e6f-db7f-40f2-ab51-bd7b5abf0976.jpg?v=1752724614",
  "https://www.nilkamalfurniture.com/cdn/shop/files/Desktop-banner_IFFS_Dining_18c7b794-9e84-46a6-98eb-06aaa826b4be.jpg?v=1752724635"
];

let index = 0;
const slider = document.getElementById("slider-image");

function changeImage() {
  index = (index + 1) % images.length;
  slider.src = images[index];
}

setInterval(changeImage, 3000);

// Cart button alert
const cartButton = document.getElementById("cart-button");
if (cartButton) {
  cartButton.addEventListener("click", () => {
    alert("Cart clicked!");
  });
}

// Nav links alert
// const navLinks = document.querySelectorAll("nav a");
// navLinks.forEach(link => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     alert(`You clicked ${link.textContent}`);
//   });
// });
// Dropdown functionality for Furniture
const furnitureDropdown = document.getElementById("furniture-dropdown");
const furnitureLink = document.getElementById("furniture-link");

if (furnitureDropdown && furnitureLink) {
  furnitureLink.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent it from closing immediately
    furnitureDropdown.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!furnitureDropdown.contains(e.target)) {
      furnitureDropdown.classList.remove("open");
    }
  });
}


// Manual slider buttons
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

if (prevButton && nextButton) {
  prevButton.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    slider.src = images[index];
  });

  nextButton.addEventListener("click", () => {
    index = (index + 1) % images.length;
    slider.src = images[index];
  });
}