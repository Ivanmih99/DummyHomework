arrayExampleOne = [1, 2, 3, 4, 5];

function validateNumber(arrayValidate) {
  for (let num of arrayValidate) {
    
    if (arrayValidate.every((element) => {return typeof element === "number";})
    ) {
      return arraySum(arrayExampleOne);
    }
    else
    return console.log("Not a number");
  }
}

function arraySum(array) {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }
  return console.log(sum);
}

let sumOfArrayOne = validateNumber(arrayExampleOne);
