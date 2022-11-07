let tag = document.querySelector("h1");
let idName = document.querySelector("#one");
let classname = document.querySelector(".two");
let nameattr = document.querySelector('h1[name="three"]');
console.log(tag);
console.log(idName);
console.log(classname);
console.log(nameattr);

let aa = document.getElementById("one");
console.log(aa);
let bb = document.getElementsByClassName("two"); //HTML collection
console.log(bb);
let cc = document.querySelectorAll("li"); //nodelist
console.log(cc);
let dd = cc.length;
console.log(dd);
console.log(bb.length);

let para = document.createElement("p");
// tag.appendChild(para);
para.textContent = "para1";

console.log(para);

// tag.prepend(para);
// tag.before(para);
tag.after(para);
let btn = document.createElement("button");
tag.appendChild(btn);
btn.style.width = 200;

btn.addEventListener("click", function () {
  let parentElement = para.parentElement;
  parentElement.removeChild(para);
});

// /////////////////////////////////////////////////////////////////(27/09/2022)///////////////////////////////////
function oprbtn() {
  let opr = ["alert", "prompt", "confirm", "reload"];
  for (let i = 0; i < opr.length; i++) {
    let btn1 = document.createElement("button");
    let body = document.querySelector("body");
    btn1.innerHTML = opr[i];
    body.appendChild(btn1);

    if (opr[i] === "alert") {
      btn1.addEventListener("click", function () {
        alert("hello welcome to DOM");
      });
    } else if (opr[i] == "prompt") {
      btn1.addEventListener("click", function () {
        prompt("write any number");
      });
    } else if (opr[i] == "confirm") {
      btn1.addEventListener("click", function () {
        confirm("comnfrim to check");
      });
    } else {
      btn1.addEventListener("click", function () {
        window.location.reload();
      });
    }
  }
}
oprbtn();

// // Sview.addEventListener('click',function(){
//     headOne.scrollIntoView()
// })

tag.addEventListener("mouseover", function () {
  tag.style.color = "green";
});
tag.addEventListener("mouseout", function () {
  tag.style.color = "";
});
tag.addEventListener("dblclick", function () {
  tag.style.backgroundColor = "yellow";
});
tag.addEventListener("click", function () {
  tag.style.backgroundColor = "red";
});
