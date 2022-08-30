const Clear = document.querySelector(".btn-clear");
const Delete = document.querySelector(".btn-delete");
const Equal = document.querySelector(".btn-equal");
const display = document.querySelector(".display");
const btsOps = [...document.querySelectorAll(".btn-operational")];
let expresion = "";


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
  let potencia = [...expresion.split("^")];
  let raiz = [...expresion.split("√")];

  if (potencia.length == 2) {
    display.textContent = pow(potencia[0], potencia[1]);
  } else if (raiz.length == 2) {
    display.textContent = sqrt(raiz[1], raiz[0]);
  } else
    try {
      display.textContent = eval(expresion);
      expresion = eval(expresion);
    } catch {
      expresion = " ";
      display.textContent = "Syntax Error";
    }
});


const pow = (n, p) => {
  let res = 1;
  for (let i = 0; i < p; i++) {
    res = res * n;
  }
  return res;
};

const sqrt = (n, s) => {
  return Math.pow(n, 1 / s);
};