let mainHeading = document.querySelector ("#mainHeading");
let paragraphFirst = document.querySelector (".paragraph");
let paragraphSecond = document.querySelector (".second");
let textEl = document.querySelector ("text");
let lastDivH1 = document.getElementsByTagName ("h1")[1];
let lastDivH3 = document.getElementsByTagName ("h3")[0];


mainHeading.textContent = "This is the first DOM homework";
paragraphFirst.textContent = "This is the first paragraph";
paragraphSecond.textContent = "This is the second paragraph";
textEl.textContent = "This is the third paragraph";
lastDivH1.textContent = "This is the second heading";
lastDivH3.textContent = "This is the third heading";