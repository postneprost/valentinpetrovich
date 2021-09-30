function changeTheme() {
  let page = document.querySelector(".page");
  let buttonTheme = document.querySelector(".button-theme");
  buttonTheme.onclick = function() {
      page.classList.toggle("sea-theme");
      page.classList.toggle("blood-theme");
  }
}

changeTheme();
