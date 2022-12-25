let inputRow = document.querySelector(".rows");
let inputColumn = document.querySelector(".columns");
let submitButton = document.querySelector(".submit");
let resetButton = document.querySelector(".reset");
let table = document.querySelector(".table");

function printCell() {
  for (let i = 0; i < inputRow.value; i++) {
    let table = document.querySelector(".table").insertRow(i);
    for (let j = 0; j < inputColumn.value; j++) {
      var column = table.insertCell(j);
      column.innerHTML = `Row-${i} Column-${j}`;
    }
  }
}

function resetCell() {
	table.innerHTML = "";
  }

submitButton.addEventListener("click", printCell);

resetButton.addEventListener("click", resetCell);


