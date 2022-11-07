document.querySelector("#one").addEventListener("click", function () {
  document.querySelector("#one").style.color = "red";
});
document.querySelector("#one").addEventListener("click", function (event) {
  alert("these are the useful things");
  event.stopPropagation();
});

// document.querySelector("#page").addEventListener("click", function () {
//   alert("your are using dom here");
// });

document.querySelector("#unique").addEventListener("click", function () {
  document.querySelector("#unique").textContent = "namaste";
});

document.querySelector("#unique").addEventListener("click", function () {
  document.querySelector("#unique").style.background = "green";
});

function showAlert() {
  const inp = document.getElementById("inputNumber");
  alert(Math.pow(parseInt(inp.value), 2));
}

function showcube() {
  const num = document.getElementById("inputnum");
  alert(Math.pow(parseInt(num.value), 3));
}
document.querySelector("#click3").addEventListener("click", function () {
  const player = document.getElementById("playername").value;
  switch (player) {
    case "sachin":
      alert("cricketer");
      break;

    case "ronaldo":
      alert("footballer");
      break;

    case "federer":
      alert("tenis player");
      break;

    default:
      alert("sport unknown");
  }
});

// const ullist = document.querySelector("#d_names");
// ullist.addEventListener("mouseover", function () {
//   ullist.innerText = ullist.innerText.toUpperCase();
// });
// ullist.addEventListener("mouseout", () => {
//   ullist.innerText = ullist.innerText.toLowerCase();
// });

const allDists = document.querySelectorAll("#d_names li");
allDists.forEach(function (item) {
  item.addEventListener("mouseover", () => {
    item.textContent = item.textContent.toUpperCase();
  });
  item.addEventListener("mouseout", () => {
    item.textContent = item.textContent.toLowerCase();
  });
});

// const allDists = document.querySelectorAll("#d_names li");
allDists.forEach(function (item) {
  item.addEventListener("mouseover", () => {
    item.style.color = "red";
  });
  item.addEventListener("mouseout", () => {
    item.style.color = "black";
  });
});

let dist = document.querySelector("#dist");
let main = document.querySelector(".main");
let list = document.querySelector("#d_names");
let btn = document.createElement("button");
btn.innerHTML = "clickhere";
btn = dist.appendChild(btn);

let place = document.createElement("input");
place.innerHTML = "write a name";
place = dist.appendChild(place);

btn.addEventListener("click", function () {
  let li = document.createElement("li");
  li.innerHTML = place.value;
  list.appendChild(li);
});

let div = document.querySelector("#div");
let btn1 = document.createElement("button");
btn1.innerHTML = "clicktoadd";
div.appendChild(btn1);

let input1 = document.createElement("input");
input1.innerHTML = "writehere";

div.appendChild(input1);

btn1.addEventListener("click", function () {
  let lilist = document.querySelector("#one");
  let li = document.createElement("li");
  li.innerHTML = input1.value;
  lilist.appendChild(li);
  input1.value = " ";
  addbtn(li);
});

function addbtn(li) {
  let opr = ["up", "down", "remove"];
  opr.forEach((operator) => {
    let oprbt = document.createElement("button");

    oprbt.innerHTML = operator;
    li.appendChild(oprbt);
  });
}

function oprbtn() {
  let opr = ["up", "down", "remove"];
  let liArray = document.querySelectorAll("#one li");
  for (let i = 0; i < liArray.length; i++) {
    const li = liArray[i];
    addbtn(li);
  }
}
oprbtn();
