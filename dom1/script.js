let body = document.querySelector("#body");
let button = document.createElement("button");

button.innerHTML = "addbutton";
body.appendChild(button);

let input = document.createElement("input");
input.innerHTML = "input";
body.appendChild(input);

button.addEventListener("click", function () {
  let list = document.querySelector("#lilist");
  let newli = document.createElement("li");
  newli.innerHTML = input.value;
  list.appendChild(newli);
  input.value = " ";
  opratorbutton(newli);
});

let liList = document.querySelectorAll("li");
for (let i = 0; i < liList.length; i++) {
  opratorbutton(liList[i]);
}

function opratorbutton(li) {
  let remove = document.createElement("button");
  remove.innerHTML = "remove";
  remove.className = "remove";
  li.appendChild(remove);

  let up = document.createElement("button");
  up.innerHTML = "up";
  up.className = "up";
  li.appendChild(up);

  let down = document.createElement("button");
  down.innerHTML = "down";
  down.className = "down";
  li.appendChild(down);
}

let ul = document.querySelector("#lilist");
ul.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    if (event.target.className == "remove") {
      let li = event.target.parentElement;
      ul = li.parentElement;
      ul.removeChild(li);
    } else if (event.target.className == "up") {
      let li = event.target.parentElement;
      ul = li.parentElement;
      let prevli = li.previousElementSibling;
      if (prevli) {
        ul.insertBefore(li, prevli);
      }
    } else if (event.target.className == "down") {
      let li = event.target.parentElement;
      ul = li.parentElement;
      let nextli = li.nextElementSibling;
      if (nextli) {
        ul.insertBefore(nextli, li);
      }
    }
  }
});
