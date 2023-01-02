const animalName = document.querySelector(".name");
const animalKind = document.querySelector(".kind");
const sentence = document.querySelector(".sentence");
const submit = document.querySelector(".submit");


function Animal(name, kind) {
  this.name = name;
  this.kind = kind;
  this.speak = function (sentence) {
    console.log(`${this.name} the ${kind} says: ${sentence}`);
  };
  console.log(`Animal name: ${this.name}, animal kind: ${this.kind}`);
}

//   const joki = new Animal("Joki", "dog"); - THIS IS MANUAL EXAMPLE OF CREATING NEW OBJECT

//   console.log(joki);

//   joki.speak("Hello.")

submit.addEventListener("click", function () {
  let animal = new Animal(animalName.value, animalKind.value);
  animal.speak(sentence.value);
});
