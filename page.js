const usernameEl = document.querySelector(".main-title span");

const loggedInUser = localStorage.getItem("nameOfUser");
usernameEl.textContent = loggedInUser;

const overlay = document.querySelector(".overlay");
const loader = document.querySelector(".preloader");
window.addEventListener("DOMContentLoaded", () => {
  overlay.style.display = "grid";

  setTimeout(() => {
    overlay.classList.add("close-overlay");
  }, 2000);
});
