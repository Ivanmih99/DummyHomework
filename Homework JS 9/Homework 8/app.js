let who = document.querySelector (".who");
let what = document.querySelector (".what");
let when = document.querySelector (".when");
let button = document.querySelector (".button");
let div = document.querySelector (".div");

function storyTeller (){
	return div.innerHTML += (`<p>${who.value} was a ${what.value} in the ${when.value}</p>`);

}

button.addEventListener ("click", function (){
	storyTeller();
	who.value = "";
	what.value = "";
	when.value = "";
})
