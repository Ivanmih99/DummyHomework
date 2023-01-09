const inputNumber = document.querySelector (".inputNumber");
const button = document.querySelector (".button");
const body = document.querySelector ("body");
const div = document.querySelector (".div");
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.width = "50%";
body.style.margin = "auto";
body.style.gap = "0.5em";
body.style.marginTop = "5em";
inputNumber.style.textAlign = "center";
div.style.textAlign = "center";

function difference (number) {
	if (number<=13) {
		return 13-number;
	}
	else
	return (number-13)*2;
}

button.addEventListener ("click", function (){
	let number = difference (inputNumber.value);
	console.log (`${number}`);
	div.innerHTML += `<p>${number}</p>`;
});

  