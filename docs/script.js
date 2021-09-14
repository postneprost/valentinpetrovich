window.onload = function() {
    let page = document.querySelector(".page");
    let buttonTheme = document.querySelector(".button-theme");
    buttonTheme.onclick = function() {
        page.classList.toggle("sea-theme");
        page.classList.toggle("blood-theme");
      };

    let buttonCalculate = document.querySelector(".button-calculate");
    buttonCalculate.onclick = function() {
      let calculator = new Calculator();
      calculator.read();
      alert("Сумма = " + calculator.sum() + "\r" + "Произведение = " + calculator.mul());
      }

    let buttonSymbolCode = document.querySelector(".button-symbol-code");
    buttonSymbolCode.onclick = getSymbolCode;
};

function getDigit(i) {
  let num;
  do {
    num = prompt(`Введите число ${i}`, 0);
  } while (!isFinite(num) ||  num === '');
  return +num;
};

function Calculator() {

  this.read = function() {
    this.x = getDigit(1);
    this.y = getDigit(2);
  },

  this.sum = function() {
    return this.x + this.y;
  },

  this.mul = function() {
    return this.x * this.y;
  }
}

function getSymbolCode() {
  let str = prompt('Введите строку, вернем код первого символа', '');
  alert(`В двоичной: ${str.codePointAt(0)}\nВ шестнадцатиричной: ${str.codePointAt(0).toString(16)}`);
}
