window.onload = function(){
    let page = document.querySelector(".page");
    let buttonn = document.querySelector(".theme-button");
    buttonn.onclick = function() {
        page.classList.toggle("sea-theme");
        page.classList.toggle("blood-theme");
      };
};
