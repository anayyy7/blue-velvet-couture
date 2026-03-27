const burger = document.querySelector(".burger");
const meniu = document.querySelector(".meniu");

burger.addEventListener("click", () => {
    meniu.classList.toggle("active");
});