// HEADER
const serchEl = document.querySelector(".search");
const serchInputEl = serchEl.querySelector("input");
serchEl.addEventListener("click", function () {
  serchInputEl.focus();
});

// header- menu
serchInputEl.addEventListener("focus", function () {
  serchEl.classList.add("focused");
  serchInputEl.setAttribute("placeholder", "통합검색");
});
serchInputEl.addEventListener("blur", function () {
  serchEl.classList.remove("focused");
  serchInputEl.setAttribute("placeholder", "");
});

//YEAR
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); // 올해 년도
