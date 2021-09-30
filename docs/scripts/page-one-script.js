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

    let buttonAddSalary = document.querySelector(".button-add-salary");
    buttonAddSalary.onclick = addSalary;

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

  let salaryId = 1;

function addSalary() {
  let div = document.createElement('div');
  div.className = "salary-input";
  div.innerHTML = `<label for='nameInputId${salaryId}'>Имя</label> <input id='nameInputId${salaryId}'> <label for='salaryInpurId${salaryId}'>Зарплата</label> <input id='salaryInpurId${salaryId}'>`;
  buttonAddSalaryId.before(div);
  salaryId++;
}

  function calculateSalary() {
    let salaryMap = new Map();

    let salaryArr = document.querySelectorAll("div.salary-input");

    salaryArr.forEach(e => {
      salaryMap.set(e.querySelector("input[id*='nameInputId']").value,
        +e.querySelector("input[id*='salaryInpurId']").value);
    })

    let salaryObj = Object.fromEntries(salaryMap.entries());

    console.log(salaryArr);
    console.log(salaryMap);
    console.log(salaryObj);
    let {zxc, qwe, asd, ...rest} = salaryObj;
    console.log(qwe);
    console.log(asd);
    console.log(zxc);
    console.log(rest.xxx);
    console.log(rest.sss);

    let resultSalaryFromMap = ((Array.from(salaryMap.values())).reduce((sum, current) => sum + current));
    let resultSalaryFromObj = ((Object.values(salaryObj)).reduce((sum, current) => sum + current));
    let maxSalary = Math.max(...Object.values(salaryObj));
    let resultSalaryElement = document.querySelector(".results-salary");
    resultSalaryElement.style.display = "block";
    resultSalaryElement.innerHTML = `Общая зарплата Map: ${resultSalaryFromMap}<br>Общая зарплата Obj: ${resultSalaryFromObj}<br>Максимальная зарплата: ${maxSalary}`;

  }

  function off() {
    overlay.style.display = "none";
  }
