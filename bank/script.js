let accounts = [
  {
    fullname: "sagar waghmare",
    transaction: [3500, -200, 33500, -7500, -18000, 5300, 9300, -8000],
    city: "pune",
    age: 29,
  },
  {
    fullname: "pratik hiware",
    transaction: [4030, 45500, -7500, -28800, 5900, 10200, -9000],
    city: "pune",
    age: 32,
  },
  {
    fullname: "devendra gotmare",
    transaction: [5500, 88500, -9000, -19000, 8300, 10300, -10000],
    city: "pune",
    age: 33,
  },
];
accounts.map(function (ele) {
  ele.pin = ele.fullname.length;
  return ele;
});
console.log(accounts);

function createuserid(accounts) {
  accounts.forEach(function (ele) {
    ele.username = ele.fullname
      .split(" ")
      .map(function (ele) {
        return ele[0];
      })
      .join("");
  });
  console.log(accounts);
}
createuserid(accounts);

let div1 = document.querySelector(".div1");
userid = document.createElement("input");
div1.appendChild(userid);
userid.textContent = "userid";

let div2 = document.querySelector(".div2");
userpin = document.createElement("input");
userpin.textContent = "pin";
div2.appendChild(userpin);

let div3 = document.querySelector(".div3");
btnLogin = document.createElement("button");
btnLogin.innerHTML = "Login";
div3.appendChild(btnLogin);

const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerTransaction = document.querySelector(".transactions");

let currentAccount;
console.log(currentAccount);

btnLogin.addEventListener("click", function (ele) {
  ele.preventDefault();
  let userName = userid.value;
  let pinC = userpin.value;

  currentAccount = accounts.find(function (ele) {
    return ele.username == userName && ele.pin == pinC;
  });
  console.log(currentAccount);

  let containerApp = document.querySelector(".app");
  containerApp.style.opacity = "100";
  userid.value = "";
  userpin.value = "";
  let labelWelcome = document.querySelector(".welcome");
  console.log(labelWelcome.textContent);
  labelWelcome.textContent = `welcome ${
    currentAccount.fullname.split(" ")[0]
  } !`;

  updateTransaction(currentAccount.transaction);
  calculateSummary(currentAccount.transaction);
});

// let containerTransaction = document.querySelector(".transactions");
// let labelSumIn = document.querySelector(".summary_value--in");
// let labelSumOut = document.querySelector(".summary_value--out");
// let labelBalance = document.querySelector(".balance_value");

updateTransaction = (transaction) => {
  transaction.forEach((ele, index) => {
    let type = ele > 0 ? "deposit" : "withdrawl";
    let html = `<div class="transaction__row">
    <div class="transaction__type transaction__type--${type}">${
      index + 1
    } ${type}</div>
    <div class="transaction__value">${ele}rs</div>
</div>`;
    containerTransaction.insertAdjacentHTML("beforeend", html);
  });
};

let calculateSummary = (transaction) => {
  let deposit = transaction
    .filter((ele) => {
      return ele > 0;
    })
    .reduce((acc, ele) => {
      return acc + ele;
    }, 0);
  labelSumIn.textContent = `${deposit}`;

  let withdrawl = transaction
    .filter((ele) => {
      return ele < 0;
    })
    .reduce((acc, ele) => {
      return acc + ele;
    }, 0);

  labelSumOut.textContent = `${withdrawl}`;

  let bal = transaction.reduce((acc, ele) => {
    return acc + ele;
  }, 0);
  labelBalance.textContent = `${bal}`;
};

btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();
  let toUser = inputTransferTo.value;
  let amountToTransfer = inputTransferAmount.value;

  let truser = accounts.find((ele) => {
    return ele.username === toUser;
  });
  if (truser) {
    truser.transaction.push(amountToTransfer);
    currentAccount.transaction.push(-amountToTransfer);
  }
  inputTransferTo.value = "";
  inputTransferAmount.value = "";
  updateTransaction([-amountToTransfer]);
  calculateSummary(currentAccount.transaction);
});

btnLoan.addEventListener("click", (e) => {
  e.preventDefault();
  let loanAmount = Number(inputLoanAmount.value);

  if (loanAmount > 0) {
    currentAccount.transaction.push(loanAmount);
  }
  updateTransaction(currentAccount.transaction);
  calculateSummary(currentAccount.transaction);
});

btnClose.addEventListener("clikc", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    inputClosePin === Number(inputClosePin.value === currentAccount.value)
  ) {
    const indexToDelete = accounts.findIndex(
      (acc = accounts.username === currentAccount.username)
    );
    accounts.splice(indexToDelete, 1);

    containerApp.style.opacity = 0;
  }
});
