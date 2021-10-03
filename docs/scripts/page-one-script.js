let buttonCalculate = document.querySelector(".button-calculate");
buttonCalculate.onclick = function() {
  let calculator = new Calculator();
  alert(`Результат: ` + calculator.calculate(prompt(`Введите выражение`, 0)));
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

let buttonDateTime = document.querySelector(".button-date-time");
buttonDateTime.onclick = timeBeforeNewYear;

let buttonObjToJson = document.querySelector(".button-obj-json");
buttonObjToJson.onclick = objToJson;

let buttonSumTo = document.querySelector(".button-sum-to");
buttonSumTo.onclick = sumTo;



function getDigit(i) {
  let num;
  do {
    num = prompt(`Введите число ${i}`, 0);
  } while (isNaN(parseFloat(num)) || !isFinite(num));
  return +num;
};

function Calculator() {

  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  }

  this.calculate = function(str) {
    let expression = str.split(' ');
    a = +expression[0];
    op = expression[1];
    b = +expression[2];

    return this.methods[op](a, b);
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

function timeBeforeNewYear() {

  let dateNow = new Date();
  let dateNewYear = new Date(dateNow.getFullYear() + 1, 0);
  let seconds = Math.round((dateNewYear.getTime() - dateNow.getTime()) / 1000);
  let minutes = Math.round((dateNewYear.getTime() - dateNow.getTime()) / 1000 / 60);
  let hours = Math.round((dateNewYear.getTime() - dateNow.getTime()) / 1000 / 60 / 60);
  let days = Math.round((dateNewYear.getTime() - dateNow.getTime()) / 1000 / 60 / 60 / 24);
  alert(`Секунд: ${seconds}\nМинут: ${minutes}\nЧасов: ${hours}\nДней: ${days}`);
}

function objToJson() {
  let user = {
    name: prompt('Введите имя', ''),
    age: prompt('Сколько лет', 0),
  }
  alert(user.name);
  alert(user.age);

  let jsonFromObject = JSON.stringify(user)
  alert(jsonFromObject);

  let objFromJson = JSON.parse(jsonFromObject);
  alert(objFromJson.name);
  alert(objFromJson.age);
}

function sumTo() {
  let n = +prompt('Введите число', 0);
  return alert(recSum(n));
}


function recSum(n) {
  let sum = n > 1 ? n + recSum(n - 1) : n;
  return sum;
}
