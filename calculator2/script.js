let body = document.querySelector("body");

function numbers() {
  let input = document.createElement("input");
  input.innerHTML = "input";
  body.append(input);

  for (let i = 0; i <= 10; i++) {
    let numbtn = document.createElement("button");
    numbtn.innerHTML = i;
    body.appendChild(numbtn);

    numbtn.addEventListener("click", function () {
      input.value += i;
    });
  }
}
numbers();

function opreratorbutton() {
  let oprbtn = "+-*/=C";
  for (let i = 0; i < oprbtn.length; i++) {
    let buttn = document.createElement("button");
    buttn.innerHTML = oprbtn[i];
    body.appendChild(buttn);
    let input = document.querySelector("input");
    buttn.addEventListener("click", function () {
      if (oprbtn[i] == "C") {
        input.value = "";
      } else if (oprbtn[i] == "=") {
        input.value = eval(input.value);
      } else input.value += oprbtn[i];
    });
  }
}
opreratorbutton();
