window.onload = function(){
    let page = document.querySelector(".page");
    let buttonTheme = document.querySelector(".button-theme");
    buttonTheme.onclick = function() {
        page.classList.toggle("sea-theme");
        page.classList.toggle("blood-theme");
      };

      function Calculator() {

        this.read = function() {
          this.x = +prompt('Введите x', 0);
          this.y = +prompt('Введите y', 0);
        },

        this.sum = function() {
          return this.x + this.y;
        }

        this.mul = function() {
          return this.x * this.x;
        }
      };

    let buttonCalculate = document.querySelector(".button-calculate");
    buttonCalculate.onclick = function() {
      let calculator = new Calculator();
      calculator.read();
      alert( "Сумма = " + calculator.sum() );
      alert( "Произведение = " + calculator.mul() );
    }
};
