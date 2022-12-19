let arrayFirstName = ["Danilo", "Borce"];
let arrayLastName = ["Borozan", "Borisovski"];

function fullName(firstName, lastName) {
  let arrayFirstName = [];
  let arrayLastName = [];
  let fullNameList = [];
  let dot = ".";
  let space = " ";
  let add = 1;
  let i = 0;

  for (i = 0; i < firstName.length; i++) {
    // console.log (`${add++}. ${firstName[i]} ${lastName[i]}`);
    arrayFirstName = firstName[i];
    arrayLastName = lastName[i];
    fullNameList.push(
      add++ + dot + space + arrayFirstName + space + arrayLastName
    );
  }

  return console.log(fullNameList);
}

let listFullName = fullName(arrayFirstName, arrayLastName);
