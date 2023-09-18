const primerDiv = document.getElementById("primerDiv");
const segundoDiv = document.getElementById("segundoDiv");
const tercerDiv = document.getElementById("tercerDiv");
const cuartoDiv = document.getElementById("cuartoDiv");
const key = document.getElementById("key");
const keyQ = document.getElementById("keyQ");
const keyW = document.getElementById("keyW");
const keyE = document.getElementById("keyE");

primerDiv.addEventListener("click", function () {
  primerDiv.style.backgroundColor = "black";
});

segundoDiv.addEventListener("click", function () {
  segundoDiv.style.backgroundColor = "black";
});

tercerDiv.addEventListener("click", function () {
  tercerDiv.style.backgroundColor = "black";
});

cuartoDiv.addEventListener("click", function () {
  cuartoDiv.style.backgroundColor = "black";
});

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    key.style.backgroundColor = "pink";
  } else if (event.key === "s") {
    key.style.backgroundColor = "orange";
  } else if (event.key === "d") {
    key.style.backgroundColor = "LightBlue";
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "q") {
    keyQ.style.display = "block";
    keyQ.style.backgroundColor = "purple";
  } else if (event.key === "w") {
    keyW.style.display = "block";
    keyW.style.backgroundColor = "grey";
  } else if (event.key === "e") {
    keyE.style.display = "block";
    keyE.style.backgroundColor = "brown";
  }
});
