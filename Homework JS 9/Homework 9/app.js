let firstName = document.querySelector(".firstName");
let lastName = document.querySelector(".lastName");
let phoneNumber = document.querySelector(".phoneNumber");
let save = document.querySelector(".button");
let container = document.querySelector(".container");

const listOfNumbers = [];

function addPhoneBook() {
  const phoneBook = {
    firstname: firstName.value,
    lastname: lastName.value,
    phonenumber: phoneNumber.value,
  };
  listOfNumbers.push(phoneBook);
}

function resetInput() {
  firstName.value = "";
  lastName.value = "";
  phoneNumber.value = "";
}

function renderPhoneList() {
  let listRender = "";
  for (let item of listOfNumbers) {
    listRender = `<ul>
		<li>First name: ${item.firstname}</li>
		<li>Last name: ${item.lastname}</li>
		<li>Phone number: ${item.phonenumber}</li>
		</ul>`;
  }
  container.innerHTML += listRender;
}

function checkInput() {
  if (
    firstName.value === "" ||
    firstName.value === null ||
    !isNaN(firstName.value)
  ) {
    container.innerHTML += `<p style="color: red">First name not valid input</p>`;
  } else if (
    lastName.value === "" ||
    lastName.value === null ||
    !isNaN(lastName.value)
  ) {
    container.innerHTML += `<p style="color: red">Last name not valid input</p>`;
  } else if (phoneNumber.value === "" || phoneNumber.value === null) {
    container.innerHTML += `<p style="color: red">Phone number not valid input</p>`;
  } else {
    addPhoneBook();
    renderPhoneList();
    resetInput();
  }
}

save.addEventListener("click", function () {
  checkInput();
});
