// let prize = 10000;
// if (prize > 1000 && prize <= 2000) {
//   console.log("10% discount");
// } else if (prize > 1000 && prize <= 2000) {
//   console.log("20% discount");
// } else if (prize > 2000 && prize <= 5000) {
//   console.log("30% discount");
// } else if (prize > 5000) {
//   console.log("40% discount");
// } else {
//   console.log("no discount");
// }

// let tal = "nilanga";
// switch (tal) {
//   case "gevrai":
//     console.log("beed");
//     break;

//   case "bhor":
//     console.log("pune");
//     break;

//   case "nilanga":
//     console.log("latur");
//     break;

//   default:
//     console.log("unknown district");
// }

// function add(a, b) {
//   console.log(a + b);
//   a + b > 10 ? console.log("higher num") : console.log("lower num");
// }
// add(2, 4);

// let city1 = {
//   name: "pune",
//   district: "pune",
//   state: "maharashtra",
//   population: "90l",
// };

// let city2 = {
//   name: "punji",
//   district: "north goa",
//   state: "goa",
//   population: "20l",
// };

// let city_info = function (government, language) {
//   console.log(
//     `${this.name} is in ${this.district} from ${this.state} with population of over ${this.population} here ${government} is in rulling party and people here speaks ${language}`
//   );
// };

// city_info.apply(city2, ["bjp", "marathi"]);

// let person1 = {
//   name: "sagar",
//   lastname: "waghmare",
//   city: "pune",
//   occupation: "pvt employee",
// };
// let person2 = {
//   name: "pratik",
//   lastname: "hiware",
//   city: "pune",
//   occupation: "pvt employee",
// };
// let person3 = {
//   name: "sachin",
//   lastname: "waghmare",
//   city: "pune",
//   occupation: "pvt employee",
// };
// let person4 = {
//   name: "shubham",
//   lastname: "waghmare",
//   city: "gevrai",
//   occupation: "businessman",
// };

// let person_info = function (age, company) {
//   console.log(
//     `${this.name} ${this.lastname} is from ${this.city} and he is a ${this.occupation}  his age is ${age} and he works in ${company}`
//   );
// };

// person_info.apply(person1, [30, "acpl"]);
// person_info.apply(person4, [26, "balaji collection"]);

// let person3 = {
//   name: "sachin",
//   lastname: "waghmare",
//   city: "pune",
//   occupation: "pvt employee",
// };
// let info = function (age) {
//   console.log(
//     `${this.name} ${this.lastname} is from ${this.city} and he is a ${this.occupation} his age is ${age}`
//   );
// };

// let person4 = {
//   name: "shubham",
//   lastname: "waghmare",
//   city: "gevrai",
//   occupation: "businessman",
// };
// // let a = person3.info;
// // let b = a.bind(person2);
// // b();
// info.call(person3, 28);
// info.call(person4, 26);

// class shop {
//   constructor(name, city, type, customers) {
//     this.name = name;
//     this.city = city;
//     this.type = type;
//     this.customers = customers;
//   }
// }

// let balaji_collection = new shop("balaji collection", "gevrai", "cloth", 20);
// console.log(balaji_collection);

// let ganeshbhel = new shop("ganeshbhel", "pune", "snacks", 1000);
// console.log(ganeshbhel);

// class city {
//   constructor(state, capital, population, government) {
//     this.state = state;
//     this.capital = capital;
//     this.population = population;
//     this.government = government;
//   }
// }
// let pune = new city("maharashtra", "mumbai", "90lacks", "bjp");
// console.log(pune);

// let gevrai = new city("maharashtra", "mumbai", "1lacks", "bjp");
// console.log(gevrai);

// class watch {
//   setname(name) {
//     this.name = name;
//   }
//   settype(type) {
//     this.type = type;
//   }
//   setprize(prize) {
//     this.prize = prize;
//   }
// }
// let noise = new watch();
// noise.setname("noise");
// noise.settype("waterresistant");
// noise.setprize(4000);
// console.log(noise);

// class expenses {
//   constructor(diet, rent, emi, shopping) {
//     this.diet = diet;
//     this.rent = rent;
//     this.emi = emi;
//     this.shopping = shopping;
//   }
// }

// let aug = new expenses(5000, 5000, 15000, 2000);
// console.log(aug);

// function bank(name, city, roi, no_ofcustomers) {
//   this.name = name;
//   this.city = city;
//   this.roi = roi;
//   this.no_ofcustomers = no_ofcustomers;
// }
// let sbi = new bank("sbi", "gevrai", 9, 20000);
// console.log(sbi);

// let info = function () {
//   console.log(`${sbi.name} is bank  located in ${sbi.city}`);
// };
// info();

// let bal = 0;
// function account(amount, type) {
//   if (type == "credit") {
//     function deposit(amount) {
//       bal = bal + amount;
//     }
//     deposit(amount);
//   } else {
//     function withdraw(amount) {
//       if (bal > amount) {
//         bal = bal - amount;
//       }
//     }
//     withdraw(amount);
//   }
//   return bal;
// }
// // account(200, "credit");
// console.log(account(200, "credit"));
// console.log(account(100, "withdraw"));
// console.log(account(500, "credit"));

// let totalshares = 0;
// function demat(shares, type) {
//   if (type == "buy") {
//     function buy() {
//       totalshares = totalshares + shares;
//     }
//     buy();
//   } else {
//     function sell() {
//       if (totalshares > shares) {
//         totalshares = totalshares - shares;
//       }
//     }
//     sell();
//   }
//   return totalshares;
// }
// console.log(demat(100, "buy"));
// console.log(demat(50, "sell"));

let n = 11;
let flag = true;

for (let i = 2; i < n; i++) {
  if (n % i == 0) {
    flag = false;
    break;
  }
}
if (flag == true) {
  console.log("prime number");
} else {
  console.log("not prime number");
}

// let nm = [1, 2, 3, 4, 5];
// let v = nm.length;
// for (let i = 0; i < v; i++) {
//   temp = nm[i];
//   nm[i] = nm[v - i - 1];
//   nm[v - i - 1] = temp;
//   console.log(nm);
// }

let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
let leng = arr.length;
for (let i = 0; i <= leng / 2; i++) {
  temp = arr[i];
  arr[i] = arr[leng - i - 1];
  arr[leng - i - 1] = temp;
  console.log(arr);
}

function reversearr(arr) {
  // let x = arr.length;
  let newarr1 = [];
  for (let i = arr.length; i >= 0; i--) {
    newarr1.push(arr[i - 1]);
  }
  return newarr1;
}
let arr2 = [5, 4, 3, 2, 1, 0];
console.log(reversearr(arr2));

//fibo

function fib(mm) {
  let a = 0;
  let b = 1;
  console.log(a);
  console.log(b);
  for (let i = 3; i <= mm; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}
fib(10);

function twosum(num, target) {
  let map = new Map();
  for (let i = 0; i < num.length; i++) {
    let num1 = num[i];
    let num2 = target - num1;
    if (map.has(num2)) {
      return [i, map.get(num2)];
    }

    map.set(num1, i);
  }
}
let jj = twosum([2, 7, 1, 15], 17);
console.log(jj);
