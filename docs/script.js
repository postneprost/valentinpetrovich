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

    let buttonSymbolCount = document.querySelector(".button-symbol-count");
    buttonSymbolCount.onclick = getSymbolCount;

    let buttonForArray = document.querySelector(".button-for-array");
    buttonForArray.onclick = on;
}

function getDigit(i) {
  let num;
  do {
    num = prompt(`Введите число ${i}`, 0);
  } while (isNaN(parseFloat(num)) || !isFinite(num));
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

function getSymbolCount() {
  let str;
  do {
    str = prompt(`Введите строку`, '');
  } while (str.length < 1);

  let symb;
  do {
    symb = prompt(`Введите один интересующий символ`, '');
  } while (symb.length != 1);

  let count = 0;
  let pos = -1;
  while ((pos = str.indexOf(symb, pos + 1)) != -1) {
    count++;
  }
  alert(`Количество символов '${symb}' в строке: ${count}`);
}

function getUserText() {
  return document.querySelector(".array-textarea").value;
}

function sortArrayByLengthWord(arr) {
  return arr.split(' ').slice().sort((a, b) => b.length - a.length);
}

function arrayToText(arr) {
  return arr.join('\t');
}

function on() {
  overlay.style.display = "block";
  document.querySelector(".lightbox-content").textContent = arrayToText(sortArrayByLengthWord(getUserText()));
}

function off() {
  overlay.style.display = "none";
}
