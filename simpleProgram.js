const modal = document.querySelector(".modal");
const btn = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  modal.style.display = "flex";
  overlay.style.display = "flex";
});

btn.addEventListener("click", () => {
  modal.style.display = "none";
  overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
  modal.style.display = "none";
  overlay.style.display = "none";
});
