const menuBtn = document.querySelector("#menu-btn");
const navBar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("fa-times");
  navBar.classList.toggle("active");
});
window.addEventListener("scroll", () => {
  menuBtn.classList.remove("fa-times");
  navBar.classList.remove("active");
});

// Filter Selectors
const filterButtons = document.querySelectorAll(".filter__button .buttons");
const filterItems = document.querySelectorAll(".product__box");
// Filter Function
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    const dataFilter = button.getAttribute("data-filter");
    filterItems.forEach((item) => {
      const dataItem = item.getAttribute("data-item");
      if (dataItem == dataFilter || dataFilter == "all") {
        item.classList.add("show");
        item.classList.remove("hide");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  });
});
