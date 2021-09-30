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

    let buttonSalaryLightbox = document.querySelector(".button-sum-salary");
    buttonSalaryLightbox.onclick = lightboxSumSalary;

    let buttonCalculateSalary = document.querySelector(".button-calculate-salary");
    buttonCalculateSalary.onclick = calculateSalary;

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
    while ((pos = str.indexOf(symb, pos + 1)) != -1) {count++;}
    alert(`Количество символов '${symb}' в строке: ${count}`);
  }

  function lightboxSumSalary() {
    overlay.style.display = "block";
  }

  function calculateSalary() {
    let salary = {
        [document.querySelector("input[type='name1']").value]: +document.querySelector("input[type='salary1']").value,
        [document.querySelector("input[type='name2']").value]: +document.querySelector("input[type='salary2']").value,
        [document.querySelector("input[type='name3']").value]: +document.querySelector("input[type='salary3']").value,
    }

    let resultSalary = ((Object.values(salary)).reduce((sum, current) => sum + current));
    let resultSalaryElement = document.querySelector(".results-salary");
    resultSalaryElement.style.display = "block";
    resultSalaryElement.innerHTML = `Общая зарплата: ${resultSalary}`;

  }

  function off() {
    overlay.style.display = "none";
  }
