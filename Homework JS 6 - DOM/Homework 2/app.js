let arrayExampleOne = [5, 2, 3, 4, 5, 6];
let body = document.querySelector("body");

function prntarr(array) {
  let sum = 0;
  for (let num of array) {
    body.innerHTML += `<p>${num}</p>`;
    sum = sum + num;
  }
  body.innerHTML += `<p>${sum}</p>`;
}

let printArray = prntarr(arrayExampleOne);
