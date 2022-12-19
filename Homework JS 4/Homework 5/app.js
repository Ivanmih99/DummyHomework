let arrayExampleOne = [10, 20, 30, "d", 1003, 21];

function sumOf(array) {
  minValue = Infinity;
  maxValue = -Infinity;

  for (item of array) {
    if (item < minValue) minValue = item;

    if (item > maxValue) maxValue = item;
  }
  let sumValue;

  return console.log(
    `Max: ${maxValue}, Min ${minValue}, Sum: ${minValue + maxValue}`
  );
}

let sumOfMinAndMax = sumOf(arrayExampleOne);
