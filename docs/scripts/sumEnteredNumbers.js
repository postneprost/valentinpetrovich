function sumAll(...args) {
    let sum = 0;
    for (let arg of args) sum += +arg;
    return sum;
  }

  function getAndSumNumbers() {
    let str = prompt('Введите числа через пробел', 0);
    let arr = str.split(' ');
    alert(sumAll(...arr));
  }

  export {getAndSumNumbers};
