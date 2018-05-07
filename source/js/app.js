var button = document.querySelector(".page-header__nav-toggle");
var pageHeader = document.querySelector(".page-header");

pageHeader.classList.remove("page-header--no-js");
pageHeader.classList.add("page-header--nav-closed");

button.addEventListener("click", function() {
  pageHeader.classList.toggle("page-header--nav-closed");
  pageHeader.classList.toggle("page-header--nav-opened");
})
