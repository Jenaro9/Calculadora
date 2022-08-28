

const display = document.querySelector(".display");
let expresion = "";

const Clear = document.querySelector(".btn-clear");
const Delete = document.querySelector(".btn-delete");
const Equal = document.querySelector(".btn-equal");



const btsOps = [...document.querySelectorAll(".btn-operational")];


btsOps.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    expresion += btn.textContent;
    display.textContent = expresion;

  });
});


Delete.addEventListener("click", (e) => {
  const str = display.textContent.slice(0, -1);
  display.textContent = str;
  expresion = str;
});

Clear.addEventListener("click", (e) => {
  display.textContent = "";
  expresion = "";
});

Equal.addEventListener("click", (e) => {
  try {
    display.textContent = eval(expresion);
  } catch {
    display.textContent = "Syntax error";
  } finally {
    expresion = "";
  }
});