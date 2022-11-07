// document.querySelector(".one").addEventListener("click", function () {
//   alert("MH-01 to MH-03");
//   document.querySelector(".one").style.color = "red";
// });
// document.querySelector(".two").addEventListener("click", function () {
//   document.querySelector(".two").style.color = "yellow";
//   alert("MH-04");
// });
// document.querySelector(".three").addEventListener("click", function () {
//   document.querySelector(".three").style.color = "Pink";
//   alert("MH-05");
// });

// document.querySelector(".four").addEventListener("click", function () {
//   document.querySelector(".four").style.color = "purple";
//   alert("MH-06");
// });
// document.querySelector(".five").addEventListener("click", function () {
//   document.querySelector(".five").style.color = "green";
//   alert("MH-07");
// });
// document.querySelector(".six").addEventListener("click", function () {
//   document.querySelector(".six").style.color = "purple";
//   alert("MH-08");
// });
// document.querySelector(".seven").addEventListener("click", function () {
//   document.querySelector(".seven").style.color = "gray";
//   alert("MH-09");
// });
// document.querySelector(".eight").addEventListener("click", function () {
//   document.querySelector(".eight").style.color = "fushsia";
//   alert("MH-10");
// });
// document.querySelector(".nine").addEventListener("click", function () {
//   document.querySelector(".nine").style.color = "silver";
//   alert("MH-11");
// });
// document.querySelector(".ten").addEventListener("click", function () {
//   document.querySelector(".ten").style.color = "olive";
//   alert("MH-12");
// });
// document.querySelector(".eleven").addEventListener("click", function () {
//   document.querySelector(".eleven").style.color = "lime";
//   alert("MH-23");
// });
document.querySelector("#state").addEventListener("click", function () {
  document.querySelector("#state").style.color = "navy";
  document.querySelector("#state").style.background = "gray";
  alert("welcome to saGars website");
});
let arr = [
  "Mumbai",
  "Thane",
  "Kalyan",
  "Raigad",
  "Singhudurg",
  "Ratnagiri",
  "Kolhapur",
  "Sangali",
  "Satara",
  "Pune",
  "Beed",
];

function clearList() {
  const list = document.getElementById("names");
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

renderList(arr);

function renderList(list) {
  const orderedList = document.getElementById("names");
  list.forEach((element) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = element;
    listItem.addEventListener("click", function () {
      alert(element);
    });
    orderedList.appendChild(listItem);
  });
}

function rto(event) {
  clearList();
  const searchKey = event.target.value;
  let filteredArray = arr.filter(function (ele, index) {
    return ele.toLowerCase().includes(searchKey.toLowerCase());
  });
  renderList(filteredArray);
}

document.getElementById("districtname").addEventListener("keyup", rto);
