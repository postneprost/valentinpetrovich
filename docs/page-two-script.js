window.onload = function() {

    let buttonWordLength = document.querySelector(".button-word-length");
    buttonWordLength.onclick = sortWordLength;

    let buttonPopWords = document.querySelector(".button-popular-symbol");
    buttonPopWords.onclick = popWords;

  }

  let getUserText = () => document.querySelector(".array-textarea").value;

  let sortArrayByLengthWord = (arr) => arr.sort((a, b) => b.length - a.length);

  let textToArray = (str) => str.split(' ');

  let deleteEmptyElements = (arr) => arr.filter((item) => item.trim().length != 0);

  let arrayToText = (arr) => arr.join('\t');

  function sortWordLength() {
    overlay.style.display = "block";
    document.querySelector(".lightbox-content").textContent = arrayToText(sortArrayByLengthWord(deleteEmptyElements(textToArray(getUserText()))));
  }

  function getPopularSymbols(str) {
    let popSymbolsObj = {};
    let resStr = '';

    deleteEmptyElements(str.split('')).forEach((item) => {
        !popSymbolsObj[item] ? popSymbolsObj[item] = 1 : popSymbolsObj[item]++;
      }
    );

    Object.entries(popSymbolsObj).sort((a, b) => b[1] - a[1]).forEach((item) => {
      resStr += `${item[0]}: ${item[1]}\n\r`;
    });

    return resStr;
  }

  function popWords() {
    overlay.style.display = "block";
    document.querySelector(".lightbox-content").textContent = getPopularSymbols(getUserText());
  }

  function off() {
    overlay.style.display = "none";
  }
